import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    Param,
    Patch,
    Post,
} from '@nestjs/common'
import { UsersService } from './users.service'
import type { User } from 'types/usersTypes'

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
    findOne(@Param('id') id: string) {
        return this.userService.findOne(id)
    }
    @Post()
    @HttpCode(201)
    create(@Body() user: User) {
        return this.userService.create(user)
    }
    @Patch(':id')
    @HttpCode(200)
    update(@Param('id') id: string, @Body() user: User): User {
        return this.userService.update(id, user)
    }
    @Delete(':id')
    @HttpCode(200)
    delete(@Param('id') id: string): string {
        return this.userService.delete(id)
    }
}
