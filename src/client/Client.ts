import { User } from "../common/user/model/User";
import { createElement } from 'react';
import ReactDOM from 'react-dom';
import { DocVC } from './doc/vc/DocVC';
import DocDC from "./doc/dc/DocDC";
import IssueDC from "./Issue/dc/IssueDC";
import { IssueVC } from './Issue/vc/IssueVC';

const docVC = ReactDOM.render(createElement(DocVC, {onClickLoadDocs: () => {
    DocDC.fetchData(new User('shjang', '1712211')).then(docs => docVC.setState({contents: docs}));
}}), document.getElementById('wikiDocs'));

const issueVC = ReactDOM.render(createElement(IssueVC, {onClickLoadDocs: () => {
    IssueDC.fetchData(new User('shjang', '1712211')).then(docs => issueVC.setState({contents: docs}));
}}), document.getElementById('jiraIssues'));