export class JiraIssue {
    constructor(
        public issueKey: string,
        public summary: string,
        public epicKey: string,
        public epicSummary: string
    ) {
        //
    }
}