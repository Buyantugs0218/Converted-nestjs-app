import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, {HydratedDocument, mongo, Document} from "mongoose";

export type userDocument = HydratedDocument<user>;
export enum UserRole {
    student, 
    teacher,
    admin
}

@Schema({timestamps: true}) 
export class user extends Document{
    @Prop()
    username: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop({
        type: String,
        enum: UserRole,
        required: true
    })
    role: string;
}

export const userSchema = SchemaFactory.createForClass(user);