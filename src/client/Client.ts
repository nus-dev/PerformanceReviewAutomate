import { User } from "../common/user/model/User";
import { createElement } from 'react';
import ReactDOM from 'react-dom';
import { DocVC } from './doc/vc/DocVC';
import DocDC from "./doc/dc/DocDC";
import IssueDC from "./Issue/dc/IssueDC";
import { IssueVC } from './Issue/vc/IssueVC';
import UserDC from "./login/dc/UserDC";
import { LoginVC } from './login/vc/LoginVC';

const loginVC = ReactDOM.render(createElement(LoginVC, {onLogin: (id: string, password: string) => {
    UserDC.id = id;
    UserDC.password = password;
    loginVC.setState({...loginVC.state, isLogined: true});
    const docVC = ReactDOM.render(createElement(DocVC, {onClickLoadDocs: () => {
        DocDC.fetchData(new User(UserDC.id, UserDC.password)).then(docs => docVC.setState({contents: docs}));
    }}), document.getElementById('wikiDocs'));
    
    const issueVC = ReactDOM.render(createElement(IssueVC, {onClickLoadDocs: () => {
        IssueDC.fetchData(new User(UserDC.id, UserDC.password)).then(docs => issueVC.setState({contents: docs}));
    }}), document.getElementById('jiraIssues'));
}}), document.getElementById('login'));

