import { Document } from "mongoose"
export class User extends Document {
    readonly username: string
    password: string
    readonly email: string
    readonly bio: string
    readonly profilePicture: string
    readonly subscriptionType: string
}