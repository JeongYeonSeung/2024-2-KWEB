import { DataSource } from 'typeorm';
import './env';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const AppDataSource = new DataSource({
  type: 'mysql',
  host: DB_HOST,
  port: Number(DB_PORT),
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  entities: [`${__dirname}/../entities/*.entity.ts`],
  namingStrategy: new SnakeNamingStrategy(),
  logging: true,
  synchronize: true,
});

export default AppDataSource;
