// import {NestInterceptor,ExecutionContext,CallHandler,Injectable,} from '@nestjs/common';
// import { UsersService } from '../users.service';

// @Injectable()
// export class CurrentUserInterceptor implements NestInterceptor {
//   constructor(private usersService: UsersService) {}

//   // The intercept method runs before the request reaches the route handler
//   async intercept(context: ExecutionContext, handler: CallHandler) {
//     const request = context.switchToHttp().getRequest();
//     // Extracting userId from the session (if available)
//     const { userId } = request.session || {};

//     // Attaching the fetched user to the request object
//     if (userId) {
//       const user = await this.usersService.findOne(userId);
//       request.currentUser = user;
//     }

//     return handler.handle();
//   }
// }
