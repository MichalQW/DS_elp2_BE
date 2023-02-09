import { ApiProperty } from '@nestjs/swagger';
export class User {

    @ApiProperty({ example: 1 })
    userId: number;

    @ApiProperty({example: 'login@devstock.pl'})
    email: string;

    @ApiProperty({ example: 'Bart' })
    firstName: string;

    @ApiProperty({ example: 'Devski' })
    lastName: string;
    
    @ApiProperty({example: 'p@s$w0rDd'})
    password: string;

    @ApiProperty()
    createdAt: Date | null;
}
