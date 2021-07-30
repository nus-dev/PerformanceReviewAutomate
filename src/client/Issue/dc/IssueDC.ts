import {DC} from "../../../common/dc/DC";
import {User} from "../../../common/user/model/User";
import IssueAgent from "../agent/IssueAgent";
import { JiraIssue } from '../../../common/model/JiraIssue';

class IssueDC extends DC<User, Array<JiraIssue>> {
    constructor() {
        super(IssueAgent);
    }

    protected getCacheKey(key: User): string {
        return key.getId();
    }
}

export default new IssueDC();