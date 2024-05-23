import * as S from "./style";
import React, { useState, useCallback } from 'react';
import Header from "../../componets/header";
import Button from "../../componets/button";
import Card from "../../componets/card/index";
import { useNavigation } from "@react-navigation/native";
import ModalOp from "../../componets/modal";
import api from "../../service/api";
import { useFocusEffect } from '@react-navigation/native';


const Home = () => {
  const nav = useNavigation();
  const [modalDeleteVisible, setModalDeleteVisible] = useState(false);
  const [infoData, setInfoData] = useState([]);
  const [erro, setErro] = useState(false);

  const abrirModalDelete = () => {
    setModalDeleteVisible(true);
  };

  const fecharModalDelete = () => {
    setModalDeleteVisible(false);
  };

  useFocusEffect(
    useCallback(() => {
      const fetchData = async () => {
        try {
          const response = await api.get('/presence/all');
          setInfoData(response.data.reverse());
          console.log('Dados recebidos:', response.data);
        } catch (error) {
          console.error('erro', error);
        }
      };

      fetchData();
    }, [])
  );


  return (
    <S.Body>
      <S.Main>
        <S.Conatiner>
          <S.HeaderConatiner>
            <Header op={true} SubTitle="Perfis Cadastrados" />
          </S.HeaderConatiner>
      
          <S.CardContainer>
            {infoData.map((item) => (
              <Card 
                key={item.id} 
                data={item.date_birth} 
                nome={item.name} 
                bairro={item.neighborhood} 
                sonho={item.professional_goal}
                onPressDelete={abrirModalDelete}
              />
              
            ))}
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
      <ModalOp isVisible={modalDeleteVisible} onClose={fecharModalDelete}/>
    </S.Body>
  );
};

export default Home;
