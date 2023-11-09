import express from 'express'
import dotenv from 'dotenv'
import { Sequelize } from 'sequelize'

dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

const app = express()
const PORT = process.env.SERVER_PORT || 3000

app.use(express.json())

const sequelize = new Sequelize(
    process.env.DB_NAME || '',
    process.env.DB_USER || '',
    process.env.DB_PASS || '',
    {
        host: process.env.DB_HOST || '',
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
    },
)

app.get('/test', (req, res) => {
    res.json({ message: 'Test route works!' })
})

sequelize
    .sync()
    .then((result) => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    })
    .catch((err) => {
        console.log(err)
    })
