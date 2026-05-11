import {
    IsEmail,
    IsEnum,
    IsNotEmpty,
    IsOptional,
    IsString,
    MaxLength,
    MinLength,
} from 'class-validator'

export class CreateUserDto {
    @IsString({ message: 'The name must be a caracter string' })
    @IsNotEmpty({ message: 'The name is required ' })
    @MinLength(3, { message: 'the name must be at least three characters' })
    @MaxLength(20, { message: 'the name must be at most 20 characters' })
    name!: string
    @IsEmail({}, { message: 'the mail must be a valid email' })
    @IsNotEmpty({ message: 'The mail is required ' })
    email!: string
    @IsOptional()
    @IsEnum(['admin', 'user'], { message: 'the role must be a admin or user' })
    role?: 'admin' | 'user'
}
