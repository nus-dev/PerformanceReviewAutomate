import {User} from '../../../common/user/model/User';
import {Agent} from '../../../common/agent/Agent';
import {WikiDoc} from '../../../common/user/model/WikiDoc';
import {Doc} from '../model/Doc';

class DocAgent extends Agent<User, Array<Doc>> {
    public async fetchData(user: User): Promise<Array<Doc>> {
        const response = await fetch(`/docs?id=${encodeURIComponent(user.getId())}&pw=${encodeURIComponent(user.getPassword())}`);
        const docs: Array<Doc> = await response.json();
        docs.forEach((doc: WikiDoc) => Object.setPrototypeOf(doc, Doc.prototype));
        return docs;
    }
}

export default new DocAgent();