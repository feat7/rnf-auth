import React, { Component } from 'react';
import { View, Container, 
    Button, Text, Form, 
    Item, Label, Input, Content,
    H2 } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';

class Login extends Component {

    render() {
        return (
            <Container style={{backgroundColor: '#fffeff'}}>
                <Content>
                <H2 style={{alignSelf: 'center',marginTop: 60}}>Sign In</H2>
                <Form>
                    <Item floatingLabel>
                        <Label>Username</Label>
                        <Input />
                    </Item>
                    <Item floatingLabel>
                        <Label>Password</Label>
                        <Input secureTextEntry/>
                    </Item>
                </Form>
                <Button style={{backgroundColor:'#13a9dc', alignSelf: 'flex-end', padding: 8, margin: 4}}><Text>Login</Text></Button>

                </Content>
                <Content>
                    <Button full rounded style={{padding: 2, alignSelf: 'center'}}>
                        <Text>Login with facebook</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}


export default Login;