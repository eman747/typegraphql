import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { PrismaClient } from "@prisma/client";
import { UserResolver } from "./UserResolver";

const prisma = new PrismaClient();

async function bootstrap() {
  await prisma.$connect();

  const schema = await buildSchema({
    resolvers: [UserResolver],
  });

  const server = new ApolloServer({ schema });

  server.listen().then(({ url }) => {
    console.log(`Server running at ${url}`);
  });
}

bootstrap();

// import 'reflect-metadata';
// import { ApolloServer } from 'apollo-server';
// import { buildSchema } from 'type-graphql';
// import UserResolver from './UserResolver';

// async function bootstrap() {
//   const schema = await buildSchema({
//     resolvers: [UserResolver],
//   });

//   const server = new ApolloServer({ schema });

//   server.listen().then(({ url }) => {
//     console.log(`Server running at ${url}`);
//   });
// }

// bootstrap();
