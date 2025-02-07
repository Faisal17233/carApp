import { CanActivate, ExecutionContext } from '@nestjs/common';

export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    // Extracting the HTTP request from the execution context
    const request = context.switchToHttp().getRequest();

    // Checking if the session contains a userId (i.e., user is authenticated)
    // If userId exists, access is granted (returns a truthy value)
    // If userId does not exist, access is denied (returns a falsy value)
    return request.session.userId;
  }
}
