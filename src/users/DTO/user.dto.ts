import { Field, ObjectType, InputType } from "@nestjs/graphql"


@ObjectType()
export class UserDTO {
    @Field()
    id: string;

    @Field()
    fullName: string;

    @Field()
    email: string;

    @Field()
    address: string;

    @Field()
    acl: string;

    @Field()
    lat: number;

    @Field()
    lon: number;
}


@InputType()
export class UserInputDTO {
    @Field()
    id: string;
    
    @Field()
    fullName: string;

    @Field()
    email: string;

    @Field()
    address: string;

    @Field()
    acl: string;

    @Field()
    lat: number;

    @Field()
    lon: number;
}

