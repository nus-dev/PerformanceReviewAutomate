import {DC} from "../../../common/dc/DC";
import {User} from "../../../common/user/model/User";
import DocAgent from "../agent/DocAgent";
import {Doc} from "../model/Doc";

class DocDC extends DC<User, Array<Doc>> {
    constructor() {
        super(DocAgent);
    }

    protected getCacheKey(key: User): string {
        return key.getId();
    }
}

export default new DocDC();