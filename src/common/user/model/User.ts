export class User {
    constructor(
        private id: string,
        private password: string) {
        //
    }

    public getId(): string {
        return this.id || '';
    }

    public getPassword(): string {
        return this.password;
    }
}