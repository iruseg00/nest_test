import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const getDbConfig = async () => {
  return {
    type: process.env.DB_TYPE || 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: process.env.NODE_ENV === 'development', // Включаем синхронизацию в разработке
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
  } as TypeOrmModuleOptions;
};
