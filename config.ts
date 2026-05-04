export interface AppConfig {
    apiUrl: string;
    timeout: number;
    retryCount: number;
}

export const defaultConfig: AppConfig = {
    apiUrl: 'https://api.example.com',
    timeout: 5000,
    retryCount: 3,
};

export function getConfig(): AppConfig {
    const configFromEnv = process.env.APP_CONFIG;
    if (configFromEnv) {
        try {
            const parsedConfig = JSON.parse(configFromEnv);
            return {
                ...defaultConfig,
                ...parsedConfig,
            };
        } catch (error) {
            console.error('Error parsing config from environment:', error);
        }
    }
    return defaultConfig;
}

export function validateConfig(config: AppConfig): boolean {
    const urlRegex = /^(https?:\/\/) ?([\w.-]+)?(\:[0-9]+)?(\/.*)?$/;
    return 
        typeof config.apiUrl === 'string' && 
        urlRegex.test(config.apiUrl) && 
        typeof config.timeout === 'number' && 
        config.timeout > 0 && 
        typeof config.retryCount === 'number' && 
        Number.isInteger(config.retryCount) && 
        config.retryCount >= 0;
}
