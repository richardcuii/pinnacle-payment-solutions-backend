import developmentConfig from './development'
import productionConfig from './production'

const environment = process.env.NODE_ENV || 'development'

let envConfig

switch (environment) {
    case 'development':
        envConfig = developmentConfig
        break
    case 'production':
        envConfig = productionConfig
        break
    default:
        envConfig = developmentConfig
}

export default envConfig
