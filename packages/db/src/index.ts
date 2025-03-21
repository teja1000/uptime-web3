import { PrismaClient } from "@prisma/client";
import { config } from "dotenv";
import { join } from "path";

// Load environment variables from the .env file
config({ path: join(__dirname, "../.env") });

export const prismaClient = new PrismaClient();
