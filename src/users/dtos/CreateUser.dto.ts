import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {

    @ApiProperty({ example: 'login@devstock.pl', required: true })
    readonly email: string;

    @ApiProperty({ example: 'Bart' })
    readonly firstName: string;

    @ApiProperty({ example: 'Devski' })
    readonly lastName: string;

    @ApiProperty({ example: 'p@s$w0rDd', required: true })
    readonly password: string;
}
