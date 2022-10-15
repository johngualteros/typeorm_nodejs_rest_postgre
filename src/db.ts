import { DataSource } from 'typeorm';
import { User } from './entities/User';

export const AppDataSource = new DataSource({
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'typeormdb',
    type: 'postgres',
    logging: true,
    entities: [
        User
    ],
    synchronize: true
})