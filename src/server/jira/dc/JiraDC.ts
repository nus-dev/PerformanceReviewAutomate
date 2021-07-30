import {User} from "../../../common/user/model/User";
import {DC} from '../../../common/dc/DC';
import JiraAgent from "../agent/JiraAgent";
import { JiraIssue } from '../../../common/model/JiraIssue';

class JiraDC extends DC<User, Array<JiraIssue>> {
    constructor() {
        super(JiraAgent);
    }

    protected getCacheKey(key: User): string {
        return key.getId();
    }
}

export default new JiraDC();