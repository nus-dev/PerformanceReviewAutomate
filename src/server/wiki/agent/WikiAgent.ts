import {User} from '../../../common/user/model/User';
import {BrowserAgent} from '../../common/agent/BrowserAgent';
import puppeteer from 'puppeteer';
import { WikiDoc } from '../../../common/user/model/WikiDoc';

class WikiAgent extends BrowserAgent<User, Array<WikiDoc>> {
    protected async evaluate(page: puppeteer.Page, key: User): Promise<Array<WikiDoc>> {
        await page.goto('https://wiki.miridih.com/login.action');
        await page.evaluate((id: string, pw: string) => {
            const idInput = document.getElementById('os_username') as HTMLInputElement;
            const pwInput = document.getElementById('os_password') as HTMLInputElement;
            idInput.value = id;
            pwInput.value = pw;
            const loginButton = document.getElementById('loginButton') as HTMLInputElement;
            loginButton.click();
        }, key.getId(), key.getPassword());
        await new Promise(res => setTimeout(res, 2000))
        const evalTitles = await page.evaluate(() => {
            return new Promise<any>((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.open('get', 'https://wiki.miridih.com/rest/api/content/search?expand=container,metadata.currentuser.lastcontributed,metadata.currentuser.lastmodified&cqlcontext=%7B%22contentStatuses%22:%5B%22current%22,%22draft%22%5D%7D&cql=type%20in%20(page,blogpost)%20and%20id%20in%20recentlyModifiedPagesAndBlogPostsByUser(currentUser(),%2020,%2020)');
                xhr.onload = (load) => {
                    resolve(xhr.response);
                }
                xhr.onerror = (err) => {
                    reject();
                };
                xhr.send();
            });
        });

        return JSON.parse(evalTitles).results;
    }
}

export default new WikiAgent();