import { Injectable, NotFoundException } from '@nestjs/common'
import { User } from 'types/usersTypes'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

@Injectable()
export class UsersService {
    private users: User[] = [
        {
            id: 1,
            name: 'John Doe 1',
            email: 'johndoe@gmail.com',
            role: 'user',
        },
        {
            id: 2,
            name: 'John Doe 2',
            email: 'johndoe@gmail.com',
            role: 'user',
        },
        {
            id: 3,
            name: 'John Doe 2',
            email: 'johndoe@gmail.com',
            role: 'user',
        },
        {
            id: 4,
            name: 'John Doe 3',
            email: 'johndoe@gmail.com',
            role: 'user',
        },
        {
            id: 5,
            name: 'John Doe 4',
            email: 'johndoe@gmail.com',
            role: 'user',
        },
    ]
    findAll() {
        return this.users
    }
    findOne(id: number): User {
        const user = this.users.find((user) => user.id === id) as User
        if (!user) {
            throw new NotFoundException('User not found')
        }
        return user
    }
    create(userCreate: CreateUserDto): User {
        const newId = this.users.length + 1
        const newUser: User = {
            id: newId,
            ...userCreate,
        }
        this.users.push(newUser)
        return newUser
    }
    update(id: number, updateUser: UpdateUserDto): User {
        const index = this.users.findIndex((user) => user.id == id)
        if (index === -1) {
            throw new NotFoundException('User not found')
        }
        this.users[index] = { ...updateUser, id }
        return this.users[index]
    }
    delete(id: number): string {
        const index = this.users.findIndex((user) => user.id === id)
        if (index === -1) {
            throw new NotFoundException('User not found')
        }
        this.users.splice(index, 1)
        return `L'utilisateur ${id} a bien ete supprimer`
    }
}
