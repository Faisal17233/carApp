import { createParamDecorator, ExecutionContext } from '@nestjs/common';

// Defining a custom decorator named `CurrentUser`
export const CurrentUser = createParamDecorator(
  (data: never, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    // Returning the `currentUser` property set by the `CurrentUserInterceptor`
    return request.currentUser;
  },
);
