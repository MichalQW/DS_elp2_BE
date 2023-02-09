import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/interfaces/user.interface';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async validateUser({ email, password }: User): Promise<any> {
        const user = await this.usersService.findOne(email);
        if (user && user.password === password) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async register(user: any) {
        return await this.usersService.create(user);
    }

    async login(user: any) {
        const payload = { email: user.email, sub: user.userId };
        let expiresIn = new Date(); expiresIn.setSeconds(expiresIn.getSeconds() + 86400);
        return {
            access_token: this.jwtService.sign(payload),
            expiresIn
        };
    }

    async getAll() {
        return await this.usersService.getAll();
    }
}
