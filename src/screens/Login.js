import React, { Component } from 'react';
import { View, Container, 
    Button, Text, Form, 
    Item, Label, Input, Content,
    H2 } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import firebase from 'firebase';

class Login extends Component {

    state = {
        email: '',
        password: ''
    }

    doLoginAction() {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => console.log("Logged in!"))
            .catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log("Error loggin in");
            });
    }

    render() {
        return (
            <Container style={{backgroundColor: '#fffeff'}}>
                <Content>
                <H2 style={{alignSelf: 'center',marginTop: 60, color: '#2d74e2'}}>Sign In</H2>
                <Form>
                    <Item floatingLabel>
                        <Label>Email</Label>
                        <Input onChangeText={ email => this.setState({email}) }
                            value={this.state.email}/>
                    </Item>
                    <Item floatingLabel>
                        <Label>Password</Label>
                        <Input secureTextEntry  onChangeText={ password => this.setState({password}) }
                        value={this.state.password}/>
                    </Item>
                </Form>
                <Button 
                    style={{backgroundColor:'#2d74e2', alignSelf: 'flex-end', padding: 8, margin: 4}} rounded raised
                    onPress={this.doLoginAction.bind(this)}
                >
                <Text>Login</Text>
                </Button>

                </Content>
                <Container style={{flex: 0.7}}>
                    <Content>
                        <Button style={{backgroundColor:'#2055a4', padding: 8, margin: 4}} full rounded><Text>Login with Facebook</Text></Button>                
                        <Button style={{backgroundColor:'#ea2a53', padding: 8, margin: 4}} full rounded><Text>Login with Google</Text></Button>                
                        <Button style={{backgroundColor:'#13a9dc', padding: 8, margin: 4}} full rounded><Text>Register</Text></Button>                
                    </Content>
                </Container>
            </Container>
        );
    }
}


export default Login;