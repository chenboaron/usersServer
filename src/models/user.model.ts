import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId, Types } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    
    @Prop()
    id: string;

    @Prop()
    fullName: string;

    @Prop()
    email: string;

    @Prop()
    address: string;

    @Prop()
    acl: string;

    @Prop()
    lat: number;
    
    @Prop()
    lon: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
