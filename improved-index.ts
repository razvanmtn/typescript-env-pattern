import express, { Request, Response , Application } from 'express';
import Config from './config';

const app: Application = express();

app.get('/', (_: Request, res: Response) => {
    res.json({
        success: true,
        version: Config.VERSION
    });
});

app.listen(Config.PORT, () => {
    console.log(`Server started at http://${Config.DOMAIN}:${Config.PORT} with ${Config.NODE_ENV} configuration`);
});

