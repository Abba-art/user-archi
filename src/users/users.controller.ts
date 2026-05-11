import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    Param,
    ParseIntPipe,
    Patch,
    Post,
} from '@nestjs/common'
import { UsersService } from './users.service'
import type { User } from 'types/usersTypes'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Get()
    @HttpCode(200)
    findAll(): User[] {
        return this.userService.findAll()
    }

    @Get(':id')
    @HttpCode(200)
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.userService.findOne(id)
    }

    @Post()
    @HttpCode(201)
    create(@Body() createUser: CreateUserDto) {
        return this.userService.create(createUser)
    }

    @Patch(':id')
    @HttpCode(200)
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateUser: UpdateUserDto,
    ): User {
        return this.userService.update(id, updateUser)
    }

    @Delete(':id')
    @HttpCode(200)
    delete(@Param('id', ParseIntPipe) id: number): string {
        return this.userService.delete(id)
    }
}
