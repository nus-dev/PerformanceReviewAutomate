import {Agent} from "../agent/Agent";

export abstract class DC<KEYTYPE, VALUETYPE> {
    private map: Map<string, VALUETYPE> = new Map<string, VALUETYPE>();
    constructor(private agent: Agent<KEYTYPE, VALUETYPE>) {
        //
    }

    protected abstract getCacheKey(key: KEYTYPE): string;

    public async fetchData(key: KEYTYPE): Promise<VALUETYPE> {
        const cacheKey: string = this.getCacheKey(key);
        if (!this.map.has(cacheKey)) {
            const data = await this.agent.fetchData(key);
            this.map.set(cacheKey, data);
        }

        return this.map.get(cacheKey);
    }

    public getData(key: KEYTYPE): VALUETYPE {
        return this.map.get(this.getCacheKey(key));
    }

    public getDatas(keys: Array<KEYTYPE>): Array<VALUETYPE> {
        return keys.map(key => this.map.get(this.getCacheKey(key)));
    }
}
