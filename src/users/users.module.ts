import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/models/user.model';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'User', schema:  UserSchema }])],
    controllers: [],
    providers: [UsersService, UsersResolver],
})

export class UsersModule {}
