import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    HttpCode,
    Query,
    ParseIntPipe,
} from '@nestjs/common'
import { UserappService } from './userapp.service'
import { Prisma } from '@prisma/client'

@Controller('userapp')
export class UserappController {
    constructor(private readonly userappService: UserappService) {}

    @Post()
    @HttpCode(201)
    create(@Body() createUser: Prisma.UserCreateInput) {
        const user = this.userappService.create(createUser)
        return user
    }

    @Get()
    @HttpCode(200)
    findAll(@Query('role') role: string) {
        const users = this.userappService.findAll(role)
        return users
    }

    @Get(':id')
    @HttpCode(200)
    findOne(@Param('id', ParseIntPipe) id: number) {
        const user = this.userappService.findOne(id)
        return user
    }

    @Patch(':id')
    @HttpCode(200)
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateUser: Prisma.UserUpdateInput,
    ) {
        const user = this.userappService.update(id, updateUser)
        return user
    }

    @Delete(':id')
    @HttpCode(200)
    remove(@Param('id', ParseIntPipe) id: number) {
        const user = this.userappService.remove(id)
        return user
    }
}
