import { HttpException, Injectable } from '@nestjs/common';
import { UserDTO } from './DTO/user.dto';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from '../models/user.model'

@Injectable()
export class UsersService {

    constructor(@InjectModel(User.name) private userModel: mongoose.Model<User>) { }

    async getAllUsers(): Promise<User[]> {
        const users = await this.userModel.find();
        if (!users || !users[0]) {
            throw new HttpException('not found', 404);
        }
        return users;
    }

    async addUser(user: UserDTO): Promise<User> {
        let isUserExist = await this.findById(user.id);
        if (isUserExist) {
            throw new HttpException("the user is exist", 404);
        }
        const res = await this.userModel.create(user);
        return res;

    }

    async updateUser(user: UserDTO) {
        const updatedUser = await this.userModel.findOneAndUpdate({ id: user.id }, user, {
            new: true
        });
        console.log(updatedUser);
        
        if (updatedUser) {
            return updatedUser;
        } else {
            throw new HttpException("the user is not exist", 404);
        }
    }

    async deleteUser(id: string) {
        const deletedUser = await this.userModel.findOneAndDelete({ id: id });
        if (deletedUser) {
            return deletedUser;
        } else {
            throw new HttpException("the user is not exist", 404);
        }
    }

    async findById(id: string): Promise<User> {
        const user = await this.userModel.findOne({ id: id });
        return user;
    }


}
