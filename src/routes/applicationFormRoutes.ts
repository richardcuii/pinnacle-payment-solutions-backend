import express from 'express'
import { submitApplicationForm } from '../controllers/applicationFormController'

const router = express.Router()

router.post('/submit', submitApplicationForm)

export default router
