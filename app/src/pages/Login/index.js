import React from 'react';
import {Image} from 'react-native';

import logo from '../../assests/logo.png';
import bgBottom from '../../assests/imgcarroazul.png';

import { Container, Button, ButtonText } from '../../styles';

const Login = () => {
    return (
    <Container color="info50" justify="flex-end">
        <Container
            justify="space-around"
            padding={30}
            position="absolute"
            height={270}
            top={0}
            zIndex={9}>
            <Image source={logo} />
            <Button type="info">
                <ButtonText color="light">Fazer Login com Facebook</ButtonText>
            </Button>
        </Container>
        <Image source={bgBottom} />
    </Container>
    );
};

export default Login;