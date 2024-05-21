import * as S from "./style";
import React, { useState, useEffect } from 'react';
import Header from "../../componets/header";
import Button from "../../componets/button";
import Card from "../../componets/card/index";
import { useNavigation } from "@react-navigation/native";
import ModalOp from "../../componets/modal";
// import api from "../../service/api"; 
import axios from "axios";

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

   useEffect(() =>{
      axios.get('http://localhost:8080/presence/all')
       .then(response => {
         setInfoData(response.data);
         console.log('Dados recebidos:', infoData);
       })
 
       .catch(error => {
         console.error('erro', error);
       });
     

   }, [])
  //   getPresence = async () => {
  //     try {
  //         const res = await api.get('/presence/all');
  
  //         const  docs  = res.data;
  
  //         console.log(docs);
  
  //     } catch(err) {
  //         // TODO
  //         // adicionar tratamento da exceção
  //         console.error(err);
  //     }
  // };
  // const getPresence = () => {
  //   console.log("antes da requisição")
  //   axios.get('http://localhost:8080/presence/all')
  //    .then(res => {
  //      setInfoData(res.data);
  //      console.log('Dados recebidos:', res);
  //    })

  //    .catch(error => {
  //      console.error('erro', error);
  //    });
  //  }

  // useEffect(() => {
  //   getPresence();
    
  // }, []);
  

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
    
            <S.TEXT>
              {/* Nome: {infoData[0].name} {"\n"} */}
            </S.TEXT>
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
