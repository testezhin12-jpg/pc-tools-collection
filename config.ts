// Default configuration values
const defaultConfig = {
    host: 'localhost',
    port: 3000,
    env: 'development',
    logLevel: 'info',
};

// Interface for configuration type
interface Config {
    host: string;
    port: number;
    env: string;
    logLevel: string;
}

// Function to load configuration with defaults
function loadConfig(customConfig: Partial<Config>): Config {
    return { ...defaultConfig, ...customConfig };
}

// Exporting the loadConfig function for use elsewhere
export { loadConfig };