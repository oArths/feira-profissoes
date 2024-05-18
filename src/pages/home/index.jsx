import * as S from "./style";
import React, { useState } from 'react';
import Header from "../../componets/header";
import Button from "../../componets/button";
import Card from "../../componets/card/index";
import { useNavigation } from "@react-navigation/native";
import ModalOp from "../../componets/modal";
const Home = () => {
  const nav = useNavigation();
  const [modalDeleteVisible, setModalDeleteVisible] = useState(false);

  const abrirModalDelete = () => {
    setModalDeleteVisible(true);
  };

  const fecharModalDelete = () => {
    setModalDeleteVisible(false);
  };
 
    const personData = {
      name: 'John Dogggggggggggggggglkke',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
    };
  return (
    <S.Body>
    <S.Main>
        <S.Conatiner>
            <S.HeaderConatiner>
            <Header op={true} SubTitle="Perfis Cadastrados" />
            </S.HeaderConatiner>
      
      <S.CardContainer>
        <Card 
        data={personData.name} 
        nome={personData.name} 
        bairro={personData.name} 
        sonho={personData.name}
        onPressDelete={abrirModalDelete}
        />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </S.CardContainer>
      
      </S.Conatiner>
    </S.Main>
    <S.ButtonContainer>
      <Button
        onPress={() => {
          nav.navigate("Register");
        }}
        Title="Novo Cadastro"
      />
      </S.ButtonContainer>
      <ModalOp   isVisible={modalDeleteVisible} onClose={fecharModalDelete}/>

    </S.Body>
  );
};
export default Home;
