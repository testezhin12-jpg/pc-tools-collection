// Configuration settings for the application
export interface Config {
    apiUrl: string;
    timeout: number;
    retryAttempts: number;
}

const defaultConfig: Config = {
    apiUrl: 'https://api.example.com',
    timeout: 5000,
    retryAttempts: 3
};

export function getConfig(): Config {
    const envConfig = process.env.CONFIG as unknown;
    if (typeof envConfig !== 'object' || envConfig === null) {
        console.error('Invalid configuration format. Using default settings.');
        return defaultConfig;
    }

    const config = { ...defaultConfig, ...envConfig } as Config;

    if (config.timeout <= 0) {
        console.warn('Timeout must be a positive number. Using default timeout.');
        config.timeout = defaultConfig.timeout;
    }

    if (config.retryAttempts < 0) {
        console.warn('Retry attempts must be zero or greater. Using default retry attempts.');
        config.retryAttempts = defaultConfig.retryAttempts;
    }

    return config;
}