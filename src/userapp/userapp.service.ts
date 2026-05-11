import { Injectable } from '@nestjs/common';
import { CreateUserappDto } from './dto/create-userapp.dto';
import { UpdateUserappDto } from './dto/update-userapp.dto';

@Injectable()
export class UserappService {
  create(createUserappDto: CreateUserappDto) {
    return 'This action adds a new userapp';
  }

  findAll() {
    return `This action returns all userapp`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userapp`;
  }

  update(id: number, updateUserappDto: UpdateUserappDto) {
    return `This action updates a #${id} userapp`;
  }

  remove(id: number) {
    return `This action removes a #${id} userapp`;
  }
}
