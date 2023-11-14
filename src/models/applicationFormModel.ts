import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../utils/database'

class ApplicationForm extends Model {}

ApplicationForm.init(
    {
        businessName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fullName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
            },
        },
        salesVolume: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        businessType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'ApplicationForm',
    },
)

export default ApplicationForm
