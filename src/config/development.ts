export default {
    database: {
        host: process.env.DATABASE_HOST!,
        port: Number(process.env.DATABASE_PORT),
        username: process.env.DATABASE_USERNAME!,
        password: process.env.DATABASE_PASSWORD!,
        database: process.env.DATABASE_NAME!,
    },
    server: {
        port: Number(process.env.SERVER_PORT),
    },
}
