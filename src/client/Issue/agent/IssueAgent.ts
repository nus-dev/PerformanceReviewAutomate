import {User} from '../../../common/user/model/User';
import {Agent} from '../../../common/agent/Agent';
import {WikiDoc} from '../../../common/user/model/WikiDoc';
import { JiraIssue } from '../../../common/model/JiraIssue';

class DocAgent extends Agent<User, Array<JiraIssue>> {
    public async fetchData(user: User): Promise<Array<JiraIssue>> {
        const response = await fetch(`/issues?id=${encodeURIComponent(user.getId())}&pw=${encodeURIComponent(user.getPassword())}`);
        return await response.json();
    }
}

export default new DocAgent();