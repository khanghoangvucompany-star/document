import {DataSource} from "typeorm";
import {CustomerEntity} from "../entities/Customer";


export const AppDataSource = DataSource({
    type: "postgres",
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    synchronize: true,
    logging: true,
    entities: [CustomerEntity],
    subscribers: [],
    migrations: [],
})