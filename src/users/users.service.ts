import { Injectable } from '@nestjs/common';
import { User as UserInterface } from './interfaces/user.interface';
import { User } from './enitites/user.enitity';
import { CreateUserDto } from './dtos/CreateUser.dto';

@Injectable()
export class UsersService {
    private users = [
        {
            userId: 1,
            email: 'dex@devstock.pl',
            firstName: 'Michał',
            lastName: 'Walczak',
            password: 'Qwe!23',
            createdAt: null
        }
    ];

    async findOne(email: string): Promise<UserInterface | undefined> {
        return this.users.find(user => user.email === email);
    }

    async create(user: CreateUserDto): Promise<User> {
        const newUser = { userId: this.users.length + 1, createdAt: new Date(), ...user };
        this.users.push(newUser);
        return newUser;
    }

    async getAll(): Promise<User[]> {
        return this.users;
    }

}
