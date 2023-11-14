import { Request, Response } from 'express'
import { validateApplicationForm } from '../utils/validations'
import { saveApplicationForm, databaseErrorHandling } from '../utils/database'

export const submitApplicationForm = async (req: Request, res: Response) => {
    try {
        const formData = {
            businessName: req.body.businessName,
            fullName: req.body.fullName,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email,
            salesVolume: req.body.salesVolume,
            businessType: req.body.businessType,
        }

        // Validate form data
        const validationError = validateApplicationForm(formData)
        if (validationError) {
            return res.status(400).json({ error: validationError })
        }

        // Save the application form to the database
        await saveApplicationForm(formData)

        // Send a success response
        res.status(201).json({ message: 'Application form submitted successfully' })
    } catch (error) {
        // Handle database errors
        databaseErrorHandling(error, res)
    }
}
