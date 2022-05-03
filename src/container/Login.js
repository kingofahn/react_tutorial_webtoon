import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

class Login extends Component {
    constructor(props){
        super(props)
        this.doLogin = this.doLogin.bind(this);
    }

    doLogin(param, e) {
        if(param === 'n'){
            alert('naver');
        }else if(param === 'k'){
            alert('kakao');
        }else if(param === 'f'){
            alert('facebook');
        }else{
            window.location.href = "/Main"
        }
    }

    render() {
        return (
                <div className="loginBody">
                    <Form className="loginBox">
                        <Form.Group className="mb-3 loginTitle">
                            <Form.Label>Login</Form.Label>
                        </Form.Group>
                        <Form.Group className="mt-5 mb-3 tl" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3 tl" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="mb-4 tl" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Form.Group>
                            {/* <Button variant="outline-primary" className="loginBtn" onClick={this.doLogin()}>로 그 인</Button>{' '} */}
                            <Button variant="outline-primary" className="loginBtn" onClick={(e)=>{this.doLogin('', e)}}>로 그 인</Button>{' '}
                            <Button variant="outline-success" className="loginBtn" onClick={(e)=>{this.doLogin('n', e)}}>네이버 로그인</Button>{' '}
                            <Button variant="outline-warning" className="loginBtn" onClick={(e)=>{this.doLogin('k', e)}}>카카오 로그인</Button>{' '}                        
                            <Button variant="primary"         className="loginBtn" onClick={(e)=>{this.doLogin('f', e)}}>페이스북 로그인</Button>
                        </Form.Group>
                    </Form>
                </div>
        )
    }
}
export default Login;