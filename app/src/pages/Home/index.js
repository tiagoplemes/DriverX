import React from "react";

import { Container, Title, SubTitle, Spacer, Map, Avatar, Input, Button, ButtonText, VerticalSeparator } from '../../styles';
import { TouchableOpacity } from 'react-native';

const Home = () => {

    const tipo = 'P';
    const status = 'I'; // S - SEM CORRIDA, I - INFORMAÇÕES, P - PESQUISA, C - CORRIDA

    return (
        <Container>
            <Map 
                initialRegion={{
                    latitude: -30.011364,
                    longitude: -51.1637373,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
            
            <Container
                position="absolute"
                justify="space-between"
                align="flex-start"
                padding={20}
                zIndex={999}
                pointerEvents="box-none"
                style={{height: '100%'}}
            >
                {/* PARTE SUPERIOR */}
                <Container
                    height={100}
                    justify="flex-start"
                    align="flex-start"
                >
                    <TouchableOpacity>
                        <Avatar 
                            source={{
                                uri: 'https://www.jornalcontabil.com.br/wp-content/uploads/2022/03/motorista-de-caminhao-desistir-durante-a-pandemia-de-coronavirus_53419-9469.jpg'
                            }}/>
                    </TouchableOpacity>

                </Container>
                                
                <Container elevation={50} height={150} color="light">

                    {/* PASSAGEIRO SEM CORRIDA */}
                    {tipo === "P" && status === "S" && 
                        <Container justify="flex-start" padding={20} align="flex-start">
                            <SubTitle>Olá, Luan Evangelista.</SubTitle>
                            <Title>Para onde você quer ir?</Title>
                            <Spacer />
                            <Input placeholder="Procure um destino..."/>
                        </Container>
                    }

                    {/* PASSAGEIRO INFORMAÇÕES DA CORRIDA */}
                    {tipo === "P" && status === "I" && 
                        <Container justify="flex-end" align="flex-start">
                            <Container padding={20}>
                                <SubTitle>DriverX Convencional</SubTitle>
                                <Spacer />
                                <Container row>
                                    <Container>
                                        <Title>R$ 13,90</Title>
                                    </Container>
                                    <VerticalSeparator />
                                    <Container>
                                        <Title>5 mins</Title>
                                    </Container>
                                </Container>
                            </Container>
                            <Button>
                                <ButtonText>Chamar DriverX</ButtonText>
                            </Button>
                        </Container>
                    }

                    {/* MOTORISTA SEM CORRIDA */}
                    {tipo === "M" && 
                        <Container>
                            <SubTitle>Olá, Juliana.</SubTitle>
                            <Title>Nem uma corrida encontrada.</Title>
                        </Container>
                    }
                </Container>

            </Container>
        </Container>
    );
}

export default Home;