import {User} from '../../../common/user/model/User';
import {BrowserAgent} from '../../common/agent/BrowserAgent';
import puppeteer from 'puppeteer';
import { JiraIssue } from '../../../common/model/JiraIssue';
class JiraAgent extends BrowserAgent<User, Array<JiraIssue>> {
    protected async evaluate(page: puppeteer.Page, key: User): Promise<Array<JiraIssue>> {
        await page.goto('https://jira.miridih.com/secure/Dashboard.jspa');
        await page.evaluate((id: string, pw: string) => {
            const idInput = document.getElementById('login-form-username') as HTMLInputElement;
            const pwInput = document.getElementById('login-form-password') as HTMLInputElement;
            idInput.value = id;
            pwInput.value = pw;
            const loginButton = document.getElementById('login') as HTMLInputElement;
            loginButton.click();
        }, key.getId(), key.getPassword());
        await new Promise(res => setTimeout(res, 2000))
        await page.goto('https://jira.miridih.com/issues/?jql=project%20%3D%20UNICORN%20AND%20resolution%20in%20(Fixed%2C%20Done%2C%20%EC%99%84%EB%A3%8C)%20AND%20resolved%20%3E%3D%202021-04-14%20AND%20resolved%20%3C%3D%202021-07-06%20AND%20assignee%20in%20(currentUser())%20ORDER%20BY%20cf%5B10001%5D%20ASC%2C%20resolved%20DESC%2C%20fixVersion%20DESC%2C%20created%20ASC%2C%20status%20DESC');
        const jiraIssues = await page.evaluate(() => {
            const issueTable = document.getElementById('issuetable');
            const body = issueTable.getElementsByTagName('tbody')[0];
            const trs = body.getElementsByTagName('tr');
            
            const issues = [];
            for (let i = 0; i < trs.length; i++) {
                const tr = trs[i];
                issues.push({
                    issueKey: tr.getAttribute('data-issuekey'),
                    summary: tr.getElementsByClassName('summary')[0].getElementsByClassName('issue-link')[0].textContent,
                    epicKey: tr.getElementsByClassName('customfield_10001')[0].innerHTML.replace(/\s*.*browse\/(.*)\"(.*\s.*)*/, '$1'),
                    epicSummary: tr.getElementsByClassName('customfield_10001')[0].innerHTML.replace(/\s.*\">\s*(.*)\s*.*\s*/, '$1')
                });
            }
            return issues;
        });

        return jiraIssues;
    }
}

export default new JiraAgent();