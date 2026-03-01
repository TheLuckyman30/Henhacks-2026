import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserOut } from '@repo/db-types';
import { CurrentUser } from 'src/decorators/current-user.decorator';
import type { JwtUser } from 'src/strategies/jwt.strategy';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/me')
  @UseGuards(AuthGuard('jwt'))
  find(@CurrentUser() user: JwtUser): Promise<UserOut> {
    return this.userService.findOne(user.id);
  }
}
