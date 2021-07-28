import {Component} from "react";
import {Doc} from "../model/Doc";
import dateFormat from 'dateformat'

class DocVCProps {
    onClickLoadDocs: () => void;
}

class DocVCStates {
    contents: Array<Doc> = [];
}

export class DocVC extends Component<DocVCProps, DocVCStates> {
    constructor(props: DocVCProps) {
        super(props);
        this.state = new DocVCStates();
    }

    public render() {
        return <div>
            <h1>작성한 문서 목록</h1>
            <button onClick={this.props.onClickLoadDocs}>불러오기</button>
            <table>
                <thead>
                    <tr>
                        <th>작성시각</th>
                        <th>{`문서 제목(링크)`}</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.contents.map(c => {
                        return <tr>
                            <td>{dateFormat(c.getDate(), 'yyyy/mm/dd')}</td>
                            <td><a href={c.getUrl()}>{c.title}</a></td>
                        </tr>;
                    })}
                </tbody>
            </table>
        </div>;
    }
}