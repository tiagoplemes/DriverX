import React from "react";

import { Container, 
    Title, 
    SubTitle, 
    Spacer, 
    Map,
    Avatar, 
    Input, 
    Button, 
    ButtonText, 
    VerticalSeparator, 
    Bullet,
    PulseCircle } from '../../styles';
import { TouchableOpacity } from 'react-native';

const Home = () => {

    const tipo = 'M';
    const status = 'C'; // S - SEM CORRIDA, I - INFORMAÇÕES, P - PESQUISA, C - CORRIDA

    return (
        <Container>
            <Map 
                initialRegion={{
                    latitude: -30.011364,
                    longitude: -51.1637373,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                disabled={status === 'P'}
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
                <Container height={120} justify="flex-start" align="flex-start">
                    {/* AVATAR */}
                    {status === "S" || tipo === "M" && 
                        <TouchableOpacity>
                            <Avatar 
                                source={{
                                    uri: 'https://www.jornalcontabil.com.br/wp-content/uploads/2022/03/motorista-de-caminhao-desistir-durante-a-pandemia-de-coronavirus_53419-9469.jpg'
                                }}/>
                        </TouchableOpacity>
                    }

                    {status !== "S" && tipo === "P" && 
                        <Container elevation={50} justify="flex-end" color="light">
                            <Container padding={20}>
                                <Container justify="flex-start" row>
                                    <Bullet /   >
                                    <SubTitle>{' '}Endereço de embarque completo</SubTitle>
                                </Container>
                                <Spacer height={10}/>
                                <Container justify="flex-start" row>
                                    <Bullet destination/>
                                    <SubTitle>{' '}Endereço de destino completo</SubTitle>
                                </Container>
                            </Container>
                            <Button type="dark" compact>
                                <ButtonText color="light">Toque para editar</ButtonText>
                            </Button>
                        </Container>
                    }

                </Container>
                                
                {/* PASSAGEIRO PROCURANDO CORRIDA */}
                {status === 'P' && tipo === 'P' && <Container padding={20} zIndex={-1}>
                    <PulseCircle 
                        numPulses={3}
                        diameter={400}
                        speed={20}
                        dutarion={2000}
                    />
                </Container>}

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
                    {tipo === "P" && (status === "I" || status === 'P') && 
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
                            <Button type={status === 'P' ? 'muted' : 'primary'}>
                                <ButtonText>{status === 'P' ? 'Cancelar DriverX' : 'Chamar DriverX'}</ButtonText>
                            </Button>
                        </Container>
                    }

                    {/* PASSAGEIRO EM CORRIDA */}
                    {tipo === "P" && status === "C" &&
                        <Container boder="primary" justify="flex-end" align="flex-start">                        
                            <Container row padding={20}>
                                <Container align="flex-start"  row>
                                            <Avatar 
                                                small
                                                source={{
                                                    uri: 'https://www.jornalcontabil.com.br/wp-content/uploads/2022/03/motorista-de-caminhao-desistir-durante-a-pandemia-de-coronavirus_53419-9469.jpg'
                                                }}
                                            />
                                            <Spacer width="10px" />
                                            <Container align="flex-start">
                                                <SubTitle bold>Luan Evangelista</SubTitle>
                                                <SubTitle small>ABC-123, BMW X6, Preta</SubTitle>
                                            </Container>
                                </Container>
                                <VerticalSeparator />
                                <Container width={120}>
                                    <Title>R$ 12,90</Title>
                                    <SubTitle bold color="primary">Aprox. 5mins</SubTitle>
                                </Container>
                            </Container>
                            <Button type="muted">
                                <ButtonText>Cancelar Corrida</ButtonText>
                            </Button>                                                                                                         
                        </Container>
                    }

                    {/* MOTORISTA SEM CORRIDA */}
                    {tipo === "M" && status === "S" && 
                        <Container>
                            <SubTitle>Olá, Juliana.</SubTitle>
                            <Title>Nem uma corrida encontrada.</Title>
                        </Container>
                    }

                    {/* MOTORISTA ESTÁ EM CORRIDA */}
                    {tipo === "M" && status === "C" &&
                        <Container boder="primary" justify="flex-end" align="flex-start">                        
                            <Container row padding={20}>
                                <Container align="flex-start"  row>
                                    <Avatar 
                                        small
                                        source={{
                                            uri: 'https://www.jornalcontabil.com.br/wp-content/uploads/2022/03/motorista-de-caminhao-desistir-durante-a-pandemia-de-coronavirus_53419-9469.jpg'
                                        }}
                                    />                                    
                                    <Spacer width="10px" />
                                    <Container align="flex-start">
                                        <Container justify="flex-start" row>
                                            <Bullet />
                                            <SubTitle small numberOfLines={1}>{' '}Endereço de embarque completo</SubTitle>
                                        </Container>                                            
                                        <Container justify="flex-start" row>
                                            <Bullet destination/>
                                            <SubTitle small numberOfLines={1}>{' '}Endereço de destino completo</SubTitle>
                                        </Container>
                                    </Container>
                                </Container>
                                <VerticalSeparator />
                                <Container width={120}>
                                    <Title>R$ 12,90</Title>
                                    <SubTitle bold color="primary">Aprox. 5mins</SubTitle>
                                </Container>
                            </Container>
                            <Button type="primary">
                                <ButtonText>Aceitar Corrida</ButtonText>
                            </Button>                                                                                                         
                        </Container>
                    }

                </Container>
            </Container>
        </Container>
    );
}

export default Home;