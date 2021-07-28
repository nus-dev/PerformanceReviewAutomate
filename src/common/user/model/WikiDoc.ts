export class WikiDoc {
    id: string;
    type: string;
    status: string;
    title: string;
    container: {
        id: number;
        key: string;
        name: string;
        type: string;
        _links: {
            webui: string;
            self: string;
        };
        _expandable: {
            metadata: string;
            icon: string;
            description: string;
            homepage: string;
        }
    };
    metadata: {
        currentuser: {
            lastmodified: {
                version: {
                    by: {
                        type: string;
                        profilePicture: {
                            path: string;
                            width: number;
                            height: number;
                            isDefault: boolean
                        };
                        username: string;
                        displayName: string;
                        userKey: string;
                        status: null
                    };
                    when: string;
                    message: string;
                    number: number;
                    minorEdit: boolean;
                    hidden: boolean;
                    content: null
                };
                friendlyLastModified: string;
            };
            lastcontributed: {
                status: string;
                when: string;
            };
            _expandable: {
                favourited: string;
                viewed: string;
            }
        };
        _expandable: {
            properties: string;
            frontend: string;
            editorHtml: string;
            labels: string;
        }
    };
    extensions: {
        position: string;
    };
    _links: {
        webui: string;
        edit: string;
        tinyui: string;
        self: string;
    };
    _expandable: {
        operations: string;
        children: string;
        restrictions: string;
        history: string;
        ancestors: string;
        body: string;
        version: string;
        descendants: string;
        space: string;
    }
}

