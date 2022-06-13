import React, { useEffect } from 'react';
import {Image} from 'react-native';

import social from '../../services/social';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../store/modules/app/actions';

import logo from '../../assests/logo.png';
import bgBottom from '../../assests/imgcarroazul.png';

import { Container, ButtonText, Button} from '../../styles';
import graph from '../../services/facebook';

const Login = () => {

    const login = async () => {

        const dispatch = useDispatch();

        try {

            const auth = await social.authorize('facebook', {
                scopes: 'email',
            });

            /*const user = await social.makeRequest(
                'facebook', 
                '/me?fileds=id,name,email',
            );*/

            const user = await graph.get(`/me?fields=id,name,email&access_token=${auth.response.credentials.accessToken}`
            );

            dispatch(updateUser({
                fbId: user.data.id,
                nome: user.data.name,
                email: user.data.email,
                accessToken: auth.response.credentials.accessToken,
            }),
            );

        } catch (err) {
            alert(err.message);
        }
    };

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

            <Button onPress={() => login()} type="info">
                <ButtonText color="light">Fazer Login com Facebook</ButtonText>
            </Button>

            <Button type="light">
                <ButtonText>Fazer Login com Facebook</ButtonText>
            </Button>
        </Container>
        <Image source={bgBottom} />
    </Container>
    );
};

export default Login;