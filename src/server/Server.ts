import express from 'express';
import http from 'http';
import path from 'path';
import {User} from '../common/user/model/User';
import WikiAgent from './wiki/agent/WikiAgent';
import WikiDC from './wiki/dc/WikiDC';
// import PuppeteerView from './puppeteer/PuppeteerView';
import { WikiDoc } from '../common/user/model/WikiDoc';

class Server {
    private static port: number = 8080;
    private app: express.Application;

    constructor() {
        const app: express.Application = express();
        this.app = app;

        const basePath: string = process.cwd();
        app.get('/', (req: express.Request, res: express.Response) => {
            res.sendFile(path.join(basePath, 'hello.html'));
        });

        app.use('/src', express.static(path.join(basePath, 'src')));
        app.use('/node_modules', express.static(path.join(basePath, 'node_modules')));
        app.use('/dist', express.static(path.join(basePath, 'dist')));

        app.get('/docs', (req: express.Request, res: express.Response) => {
            WikiDC.fetchData(new User(String(req.query.id), String(req.query.pw))).then((docs: Array<WikiDoc>) => {
                res.send(JSON.stringify(docs));
            });
        });

        const httpServer: http.Server = http.createServer(app).listen(Server.port, () => {
            console.log(`port: ${Server.port} open. server is started!`);
        });
    }
}

export default new Server();