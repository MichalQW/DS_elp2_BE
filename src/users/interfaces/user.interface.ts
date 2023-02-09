export interface User {
    email: string;
    password: string;
}

import { ApiProperty } from '@nestjs/swagger';

export class UserDto {

    @ApiProperty({ example: 'login@devstock.pl', required: true })
    readonly email: string;

    @ApiProperty({ example: 'p@s$w0rDd', required: true })
    readonly password: string;
}
