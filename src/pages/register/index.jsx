import * as S from "./style";
import Header from "../../componets/header";
import Button from "../../componets/button";
import Input from "../../componets/input";
import { useNavigation } from "@react-navigation/native";
import { Platform} from "react-native";

const Register = () => {
  const nav = useNavigation();

  return (
    <S.Body
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      keyboardVerticalOffset={10}
    >
      <S.Scroll>
       <S.Main>
       <S.HeaderConatiner>
       <Header
          SubTitle="Cadastro de Perfil"
          onPress={() => {
            nav.navigate("Home");
          }}
        />
       </S.HeaderConatiner>
        <Input onChange={""} Title="Nome:" />
        <Input onChange={""} Title="Email:" />
        <Input onChange={""} Title="Data de Nascimento:" />
        <Input onChange={""} Title="Profissão dos Sonhos:" />
        <Input onChange={""} Title="Seu Bairro:" />
        <S.ButtonContainer>
          <Button
            onPress={() => {
              nav.navigate("Home");
            }}
            Title="Cadastrar"
          />
        </S.ButtonContainer>
       </S.Main>
      </S.Scroll>
    </S.Body>
  );
};
export default Register;
