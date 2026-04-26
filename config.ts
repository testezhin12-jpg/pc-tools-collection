export interface ConfigOptions {
    apiEndpoint: string;
    timeout: number;
    retries: number;
}

export class Config {
    private options: ConfigOptions;

    constructor(options: ConfigOptions) {
        this.validateOptions(options);
        this.options = options;
    }

    private validateOptions(options: ConfigOptions): void {
        if (!options.apiEndpoint) {
            throw new Error('API endpoint is required.');
        }
        if (options.timeout <= 0) {
            throw new Error('Timeout must be a positive number.');
        }
        if (options.retries < 0) {
            throw new Error('Retries cannot be negative.');
        }
    }

    public getApiEndpoint(): string {
        return this.options.apiEndpoint;
    }

    public getTimeout(): number {
        return this.options.timeout;
    }

    public getRetries(): number {
        return this.options.retries;
    }
}
