import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { User } from "./User";

import { prisma } from "./prisma";

@Resolver(User)
export class UserResolver {
  @Query(() => [User])
  async users(): Promise<User[]> {
    return prisma.user.findMany();
  }

  @Mutation(() => User)
  async createUser(
    @Arg("name") name: string,
    @Arg("email") email: string,
    @Arg("password") password: string
  ): Promise<User> {
    return prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });
  }
}

// import { Resolver, Query, Mutation, Arg } from 'type-graphql';
// import { User } from './path/to/user';

// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// @Resolver(User)
// export class UserResolver {
//   @Query(() => [User])
//   async users(): Promise<User[]> {
//     return prisma.user.findMany();
//   }

//   @Mutation(() => User)
//   async createUser(
//     @Arg('name') name: string,
//     @Arg('email') email: string,
//     @Arg('password') password: string
//   ): Promise<User> {
//     return prisma.user.create({
//       data: {
//         name,
//         email,
//         password,
//       },
//     });
//   }
// }

// import { Resolver, Query, Mutation, Arg } from 'type-graphql';
// import { PrismaClient, User } from '@prisma/client';
// import { UserCreateInput } from '../prisma/generated/type-graphql';

// const prisma = new PrismaClient();

// @Resolver()
// export class UserResolver {
//   @Query(() => [User])
//   async users(): Promise<User[]> {
//     return prisma.user.findMany();
//   }

//   @Mutation(() => User)
//   async createUser(@Arg('data') data: UserCreateInput): Promise<User> {
//     return prisma.user.create({ data });
//   }
// }

// import { Resolver, Query, Mutation, Arg } from 'type-graphql';
// import { User, PrismaClient } from '@prisma/client';
// import { Prisma, PrismaClientOptions } from '@prisma/client';
// import { PrismaClientContext } from 'src/types';
// import { Authorized } from 'type-graphql';
// import { prisma } from './prisma';

// const prismaClientOptions: PrismaClientOptions = {
//   log: ['query', 'info', 'warn', 'error'],
// };

// const prismaClient = new PrismaClient(prismaClientOptions);

// @Resolver()
// class UserResolver {
//   @Query(() => [User])
//   async users(): Promise<User[]> {
//     return prismaClient.user.findMany();
//   }

//   @Mutation(() => User)
//   async createUser(
//     @Arg('name') name: string,
//     @Arg('email') email: string,
//     @Arg('password') password: string
//   ): Promise<User> {
//     return prismaClient.user.create({
//       data: {
//         name,
//         email,
//         password,
//       },
//     });
//   }

//   @Mutation(() => Boolean)
//   async deleteUser(@Arg('id') id: number): Promise<boolean> {
//     await prismaClient.user.delete({ where: { id } });
//     return true;
//   }
// }

// export default UserResolver;
