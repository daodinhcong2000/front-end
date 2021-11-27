const API_URL = 'https://accommerce.cuongdm.tech'

const config = {
    development: {
        url: API_URL
    },
    production: {
        url: API_URL
    },
    test: {
        url: API_URL
    }
}

const nodeEnv = process.env.NODE_ENV || 'development'

export default config[nodeEnv]