import { PrismaClient } from '@prisma/client';
import logger from './logger';
const prisma = new PrismaClient();

const testConnection = async () => {
  try {
    await prisma.$connect();
    await prisma.$disconnect();
    logger.info(`DB connection avaiable`);
  } catch (err) {
    logger.error(`DB connection not avaiable`);
    throw err;
  }
};

testConnection();

prisma.$use(async (params, next) => {
  if (params.model === 'Member') {
    // Automatically include `user` data for findMany queries
    if (!params.args.include) {
      params.args.include = {};
    }
    params.args.include.user = {
      select: {
        email: true,
        nickname: true,
        picture: true,
        userStatus: true,
      },
    };
  }
  return next(params);
});

export default prisma;
