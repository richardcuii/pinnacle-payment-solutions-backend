import Joi from '@hapi/joi'

interface ApplicationFormData {
    businessName: string
    fullName: string
    phoneNumber: string
    email: string
    salesVolume: number
    businessType: string
}

const applicationFormSchema = Joi.object({
    businessName: Joi.string().required(),
    fullName: Joi.string().required(),
    phoneNumber: Joi.string().required(),
    email: Joi.string().email().required(),
    salesVolume: Joi.number().positive().required(),
    businessType: Joi.string().required(),
})

const validateApplicationForm = (formData: ApplicationFormData) => {
    const { error } = applicationFormSchema.validate(formData)
    return error ? error.details[0].message : null
}

export { validateApplicationForm }
