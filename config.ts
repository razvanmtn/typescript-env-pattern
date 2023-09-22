import dotenv from 'dotenv';

class Config {
    PORT; DOMAIN; VERSION; NODE_ENV;

    constructor() {
        this.initConfig();
        this.validate();

        this.PORT = process.env.PORT || 3000;
        this.DOMAIN = process.env.DOMAIN || 'localhost';
        this.VERSION = process.env.VERSION;
        this.NODE_ENV = process.env.NODE_ENV;
    }

    private initConfig() {
        dotenv.config({ path: process.env.DOTENV_CONFIG_FILE });
    }

    private validate() {
        if (!process.env.VERSION) {
            throw new Error('VERSION env variable is not specified!');
        }

        if (process.env.NODE_ENV !== 'dev' && process.env.NODE_ENV !== 'prod') {
            throw new Error('NODE_ENV env variable is invalid!');
        }
    }
}

export default new Config();

