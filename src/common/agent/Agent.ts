export abstract class Agent<KEYTYPE, DATATYPE> {
    public abstract fetchData(key: KEYTYPE): Promise<DATATYPE>;
}