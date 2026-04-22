// Configuration options for the application

interface Config {
    appName: string;
    version: string;
    port: number;
}

const config: Config = {
    appName: 'PC Tools Collection',
    version: '1.0.0',
    port: 3000,
};

function validateConfig(config: Config): boolean {
    if (!config.appName || typeof config.appName !== 'string') {
        console.error('Invalid appName');
        return false;
    }
    if (!config.version || typeof config.version !== 'string') {
        console.error('Invalid version');
        return false;
    }
    if (!Number.isInteger(config.port) || config.port <= 0) {
        console.error('Invalid port');
        return false;
    }
    return true;
}

if (validateConfig(config)) {
    console.log('Config is valid:', config);
} else {
    console.log('Config validation failed!');
}

export { config };