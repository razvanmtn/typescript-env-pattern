import express, { Request, Response , Application } from 'express';
import dotenv from 'dotenv';

dotenv.config({ path: process.env.DOTENV_CONFIG_FILE });

const app: Application = express();

const PORT = process.env.PORT || 3000;
const DOMAIN = process.env.DOMAIN || 'localhost';
const VERSION = process.env.VERSION;
const NODE_ENV = process.env.NODE_ENV;

app.get('/', (_: Request, res: Response) => {
    res.json({
        success: true,
        version: VERSION
    });
});

app.listen(PORT, () => {
    console.log(`Server started at http://${DOMAIN}:${PORT} with ${NODE_ENV} configuration`);
});

