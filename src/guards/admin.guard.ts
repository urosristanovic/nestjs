import { CanActivate, ExecutionContext } from '@nestjs/common';

export class AdminGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    // Check if user is sign in
    if (!request.currentUser) {
      return false;
    }

    return request.currentUser.admin;
  }
}
