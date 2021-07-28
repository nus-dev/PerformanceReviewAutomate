import {User} from "../../../common/user/model/User";
import WikiAgent from "../agent/WikiAgent";
import {WikiDoc} from '../../../common/user/model/WikiDoc';
import {DC} from '../../../common/dc/DC';

class WikiDC extends DC<User, Array<WikiDoc>> {
    constructor() {
        super(WikiAgent);
    }

    protected getCacheKey(key: User): string {
        return key.getId();
    }
}

export default new WikiDC();