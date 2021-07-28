import { User } from "../common/user/model/User";
import { createElement } from 'react';
import ReactDOM from 'react-dom';
import { DocVC } from './doc/vc/DocVC';
import DocDC from "./doc/dc/DocDC";

const docVC = ReactDOM.render(createElement(DocVC, {onClickLoadDocs: () => {
    DocDC.fetchData(new User('shjang', '17122112')).then(docs => docVC.setState({contents: docs}));
}}), document.getElementById('wikiDocs'));