import {Component} from "react";

class LoginVCProps {
    onLogin: (id: string, password: string) => void;
}

class LoginVCState {
    id: string;
    password: string;
    isLogined: boolean = false;
}

export class LoginVC extends Component<LoginVCProps, LoginVCState> {
    constructor(props: LoginVCProps) {
        super(props);
        this.state = new LoginVCState();
    }

    public render() {
        return !this.state.isLogined && <div>
            <div>
                <div>아이디 <input id='praid' placeholder='wiki아이디' onChange={(e) => this.setState({...this.state, id: e.target.value})}/></div>
                <div>비밀번호 <input id='prapassword' type='password' placeholder='wiki비밀번호' onChange={(e) => this.setState({...this.state, password: e.target.value})}/></div>
            </div>
            <button onClick={() => this.props.onLogin(this.state.id, this.state.password)}>로그인</button>
        </div>;
    }
}