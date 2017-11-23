import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Container, 
    Button, Text, Form, 
    Item, Label, Input, Content,
    H2 } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import {
    emailChanged,
    passwordChanged,
    loginRequest,
    fbLoginRequest
} from '../actions';
import firebase from "firebase";

class Login extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text);
    }  
    
    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }  

    onLoginButtonPress() {
        const { email, password } = this.props;

        this.props.loginRequest({ email, password });
    }

    async onFacebookLoginButtonPress() {
        await this.props.fbLoginRequest();
    }

    render() {
        return (
            <Container style={{backgroundColor: '#fffeff'}}>
                <Content>
                <H2 style={{alignSelf: 'center',marginTop: 60, color: '#2d74e2'}}>Sign In</H2>
                <Form>
                    <Item floatingLabel>
                        <Label>Email</Label>
                        <Input onChangeText={ this.onEmailChange.bind(this) }
                            value={ this.props.email }/>
                    </Item>
                    <Item floatingLabel>
                        <Label>Password</Label>
                        <Input secureTextEntry  onChangeText={ this.onPasswordChange.bind(this) }
                        value={ this.props.password }/>
                    </Item>
                </Form>
                <Button 
                    style={{backgroundColor:'#2d74e2', alignSelf: 'flex-end', padding: 8, margin: 4}} rounded raised
                    onPress={ this.onLoginButtonPress.bind(this) }
                >
                <Text>Login</Text>
                </Button>

                </Content>
                <Container style={{flex: 0.6}}>
                    <Content>
                        <Button style={{backgroundColor:'#2055a4', padding: 8, margin: 4}} full rounded
                            onPress={ this.onFacebookLoginButtonPress.bind(this) }>
                            <Text>Login with Facebook</Text>
                        </Button>                
                        <Button style={{backgroundColor:'#13a9dc', padding: 8, margin: 4}} full rounded><Text>Register</Text></Button>                
                    </Content>
                </Container>
            </Container>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    const { email, password, error, fetching } = auth; 

    return { email, password, error, fetching };
}

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginRequest, fbLoginRequest})(Login);