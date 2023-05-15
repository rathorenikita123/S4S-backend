const { DataSource } = require('typeorm');
const dotenv = require('dotenv');
dotenv.config();

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;

const SCHEMA_CHANGES = process.env.SCHEMA_CHANGES;

const DB_TYPE = 'postgres';

const AppDataSource = new DataSource({
    type: DB_TYPE,
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    logging: SCHEMA_CHANGES,
    entities: ['src/entity/*.ts'],
    synchronize: true,
});

module.exports = {
    AppDataSource,
};