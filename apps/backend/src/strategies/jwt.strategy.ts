import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

interface JwtPayload {
  sub: string;
  name: string;
  email: string;
  iat: number;
  exp: number;
}

export interface JwtUser {
  id: string;
  name: string;
  email: string;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_ACCESS_SECRET ?? '',
    });
  }

  validate({ sub, name, email }: JwtPayload): JwtUser {
    const newJwtUser: JwtUser = { id: sub, name, email };
    return newJwtUser;
  }
}
