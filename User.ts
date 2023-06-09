import { ObjectType, Field, Int } from "type-graphql";
import { User as PrismaUser } from "@prisma/client";

@ObjectType()
export class User implements PrismaUser {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
