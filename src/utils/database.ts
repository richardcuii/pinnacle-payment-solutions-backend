import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'
import ApplicationForm from '../models/applicationFormModel'
import { Response } from 'express'

dotenv.config()

interface ApplicationFormData {
    businessName: string
    fullName: string
    phoneNumber: string
    email: string
    salesVolume: number
    businessType: string
}

if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not set')
}

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
})

// Function to save the application form data
export const saveApplicationForm = async (formData: ApplicationFormData) => {
    try {
        await ApplicationForm.create(formData as any)
    } catch (error) {
        throw error
    }
}

// Function to handle database errors
export const databaseErrorHandling = (error: Error, res: Response) => {
    console.error('Database error:', error)
    res.status(500).json({ error: 'An error occurred while processing your request.' })
}

export { sequelize }
