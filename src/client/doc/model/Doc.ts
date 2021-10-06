import {WikiDoc} from '../../../common/user/model/WikiDoc';

export class Doc extends WikiDoc {
    public getUrl(): string {
        return `https://wiki.miridih.com/pages/viewpage.action?pageId=${this.id}`;
    }

    public getDate(): Date {
        return new Date(this.metadata.currentuser.lastmodified?.version.when ?? this.metadata.currentuser.lastcontributed.when);
    }
}