import * as S from "./style"
import Header from "../../componets/header";
import Button from "../../componets/button";
import Card  from "../../componets/card/index";
import { useNavigation } from "@react-navigation/native";
const Home = ()=> {
    const nav = useNavigation();
    return(
        <S.Body>
                    <Header op={true} SubTitle="Perfis Cadastrados"/>
                    <S.CardContainer>
                    <Card/>
                    </S.CardContainer>
                        <Button  onPress={() => {nav.navigate("Register")}} Title="Novo Cadastro"/> 

        </S.Body>

    )
}
export default Home;