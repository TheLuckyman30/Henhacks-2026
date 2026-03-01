import { Injectable, NotFoundException } from '@nestjs/common';
import { UserOut } from '@repo/db-types';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findOne(id: string): Promise<UserOut> {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: { id: true, name: true, email: true },
    });

    if (!user) throw new NotFoundException('Request resource not found!');

    return user;
  }
}
