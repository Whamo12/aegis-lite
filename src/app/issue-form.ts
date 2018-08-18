export class Issue {
    users: [{
        name: string;
        fullName: string;
    }];
    links: [{
        name: string;
        sourceId: number;
        destinationId: number;
    }];
    projects: [{
        name: string;
        key: string;
        description: string;
        version: {
            name: string;
            released: boolean;
            releaseDate: Date;
        };
        components: [{
            component: string;
        }]
        issues: {
            priority: string;
            description: string;
            status: string;
            reporter: string;
            labels: string[];
            watchers: string[];
            issueType: string;
            resolution: string;
            created: Date;
            updated: string;
            affectedVersions: number[];
            summary: string;
            assignee: string;
            fixedVersion: number[];
            externalId: number;
            history: [{
                author: string;
                created: Date;
                items: {
                    fieldType: string;
                    field: string;
                    from: number;
                    fromString: string;
                    to: number;
                    toString: string;
                }
            }]
            customeFieldValues: [{
                fieldName: string;
                fieldType: string;
                value: number;
            }]
            attachments: [{
                name: string;
                attacher: string;
                created: Date;
                url: string;
                description: string;
            }];
        };
    }];
}
