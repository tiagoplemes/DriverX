import React from "react";
import { Image } from "react-native";

import { Container, Button, ButtonText, Title, SubTitle, PickerButton } from "../../styles";

import emojiCar from "../../assests/carro.png";
import emojiHand from "../../assests/emojimao.png";

const Type = () => {
    return (
        <Container padding={30} justify="flex-start">
            <Container align="flex-start" height={40}>
                <Title>Passageiro ou motorista?</Title>
                <SubTitle>Selecione qual será a sua função no DriverX</SubTitle>
            </Container>

            <Container>
                <PickerButton active>
                    <Image source={emojiCar} />
                    <Title>Motorista</Title>
                </PickerButton>
                <PickerButton>
                    <Image source={emojiHand} />
                    <Title>Passageiro</Title>
                </PickerButton>
            </Container>

            <Container height={70} justify="flex-end">
                <Button>
                    <ButtonText>Próximo Passo</ButtonText>
                </Button>
            </Container>
        </Container>
    );
};

export default Type;