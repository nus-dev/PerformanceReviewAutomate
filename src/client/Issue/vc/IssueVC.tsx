import {Component} from "react";
import {JiraIssue} from '../../../common/model/JiraIssue';

class IssueVCProps {
    onClickLoadDocs: () => void;
}

class IssueVCStates {
    contents: Array<JiraIssue> = [];
}

export class IssueVC extends Component<IssueVCProps, IssueVCStates> {
    constructor(props: IssueVCProps) {
        super(props);
        this.state = new IssueVCStates();
    }

    public render() {
        return <div>
            <h1>해결한 이슈 목록</h1>
            <button onClick={this.props.onClickLoadDocs}>불러오기</button>
            <table>
                <thead>
                    <tr>
                        <th>작성시각</th>
                        <th>{`이슈 이름(링크)`}</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.contents.map(c => {
                        return <tr>
                            <td>{c.issueKey}</td>
                            <td>{c.summary}</td>
                        </tr>;
                    })}
                </tbody>
            </table>
        </div>;
    }
}