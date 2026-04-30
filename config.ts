import fs from 'fs';

interface Config {
    host: string;
    port: number;
    environment: string;
}

const defaultConfig: Config = {
    host: 'localhost',
    port: 3000,
    environment: 'development',
};

function loadConfig(filePath: string): Config {
    if (fs.existsSync(filePath)) {
        const configFile = fs.readFileSync(filePath, 'utf-8');
        const userConfig: Partial<Config> = JSON.parse(configFile);
        return { ...defaultConfig, ...userConfig };
    }
    return defaultConfig;
}

export { loadConfig, Config };