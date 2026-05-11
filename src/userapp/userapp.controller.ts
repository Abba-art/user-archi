import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserappService } from './userapp.service';
import { CreateUserappDto } from './dto/create-userapp.dto';
import { UpdateUserappDto } from './dto/update-userapp.dto';

@Controller('userapp')
export class UserappController {
  constructor(private readonly userappService: UserappService) {}

  @Post()
  create(@Body() createUserappDto: CreateUserappDto) {
    return this.userappService.create(createUserappDto);
  }

  @Get()
  findAll() {
    return this.userappService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userappService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserappDto: UpdateUserappDto) {
    return this.userappService.update(+id, updateUserappDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userappService.remove(+id);
  }
}
