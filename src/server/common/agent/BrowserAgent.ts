import puppeteer from 'puppeteer';
import {Agent} from '../../../common/agent/Agent';

export abstract class BrowserAgent<KEYTYPE, DATATYPE> extends Agent<KEYTYPE, DATATYPE> {
    protected abstract evaluate(page: puppeteer.Page, key: KEYTYPE): Promise<DATATYPE>;

    public async fetchData(key: KEYTYPE): Promise<DATATYPE> {
        const browser = await puppeteer.launch({headless: true});
        const page = await browser.newPage();
        await page.goto('https://wiki.miridih.com/login.action');
        try {
            return await this.evaluate(page, key);
        } catch (e) {
            console.log(e);
        } finally {
            await browser.close();
        }
    }
}