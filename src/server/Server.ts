import express from 'express';
import http from 'http';
import path from 'path';
import {User} from '../common/user/model/User';
import WikiDC from './wiki/dc/WikiDC';
import { WikiDoc } from '../common/user/model/WikiDoc';
import JiraDC from './jira/dc/JiraDC';
import { JiraIssue } from '../common/model/JiraIssue';

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

        app.get('/issues', (req: express.Request, res: express.Response) => {
            JiraDC.fetchData(new User(String(req.query.id), String(req.query.pw))).then((issues: Array<JiraIssue>) => {
                res.send(JSON.stringify(issues));
            });
        });

        const httpServer: http.Server = http.createServer(app).listen(Server.port, () => {
            console.log(`port: ${Server.port} open. server is started!`);
        });
    }
}

export default new Server();