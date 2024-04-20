import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
    @Prop({ required: true, unique: true })
    username: string
    @Prop({ required: true, unique: false })
    password: string
    @Prop({required:true, unique: true})
    email: string
    @Prop({required:false})
    bio: string
    @Prop({required:false})
    profilePicture: string
    

}
export const UserSchema = SchemaFactory.createForClass(User);