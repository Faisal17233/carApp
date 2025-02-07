import {UseInterceptors,NestInterceptor,ExecutionContext,CallHandler} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { plainToInstance } from 'class-transformer';

// a simple check, it has to be any class
interface ClassConstructor {
  new (...args: any[]): {};
}

export function Serialize(dto: ClassConstructor) {
  return UseInterceptors(new SerializeInterceptor(dto));
}

export class SerializeInterceptor implements NestInterceptor {
  constructor(private dto: any) {}

  // The intercept method is executed before the response is sent to the client
  intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
    
    return handler.handle().pipe(
      map((data: any) => {
         // Converts raw data into an instance of the specified DTO
        return plainToInstance(this.dto, data, {
          excludeExtraneousValues: true,
        });
      }),
    );
  }
}
