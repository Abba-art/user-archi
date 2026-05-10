import { Injectable } from '@nestjs/common'
import { User } from 'types/usersTypes'

@Injectable()
export class UsersService {
    private users: User[] = [
        {
            id: '1',
            name: 'John Doe 1',
            email: 'johndoe@gmail.com',
            role: 'user',
        },
        {
            id: '2',
            name: 'John Doe 2',
            email: 'johndoe@gmail.com',
            role: 'user',
        },
        {
            id: '3',
            name: 'John Doe 2',
            email: 'johndoe@gmail.com',
            role: 'user',
        },
        {
            id: '4',
            name: 'John Doe 3',
            email: 'johndoe@gmail.com',
            role: 'user',
        },
        {
            id: '5',
            name: 'John Doe 4',
            email: 'johndoe@gmail.com',
            role: 'user',
        },
    ]
    findAll() {
        return this.users
    }
    findOne(id: string): User {
        return this.users.find((user) => user.id === id) as User
    }
    create(user: User): User {
        const newId = (this.users.length + 1).toString()
        const newUser: User = {
            ...user,
            id: newId,
        }
        this.users.push(newUser)
        return newUser
    }
    update(id: string, user: User): User {
        const index = this.users.findIndex((user) => user.id == id)
        this.users[index] = user
        return this.users[index]
    }
    delete(id: string): string {
        const index = this.users.findIndex((user) => user.id === id)
        if (index === -1) {
            return `Utilisateur introuvable`
        }
        this.users.splice(index, 1)
        return `L'utilisateur ${id} a bien ete supprimer`
    }
}
