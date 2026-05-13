import { Injectable } from '@nestjs/common'
import { Prisma, Role } from '@prisma/client'
import { DatabaseService } from 'src/database/database.service'

@Injectable()
export class UserappService {
    constructor(private readonly databaseServices: DatabaseService) {}

    create(createUser: Prisma.UserCreateInput) {
        return this.databaseServices.user.create({
            data: createUser,
        })
    }

    findAll(role?: string) {
        if (role && role !== 'all') {
            return this.databaseServices.user.findMany({
                where: {
                    role: role as Role,
                },
            })
        }
        return this.databaseServices.user.findMany({})
    }

    findOne(id: number) {
        return this.databaseServices.user.findUnique({
            where: { id },
        })
    }

    update(id: number, updateUser: Prisma.UserUpdateInput) {
        return this.databaseServices.user.update({
            where: { id },
            data: updateUser,
        })
    }

    remove(id: number) {
        return this.databaseServices.user.delete({
            where: { id },
        })
    }
}
