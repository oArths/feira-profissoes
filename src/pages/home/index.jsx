import * as S from "./style"
import Header from "../../componets/header";
import Button from "../../componets/button";
import { useNavigation } from "@react-navigation/native";
const Home = ()=> {
    const nav = useNavigation();
    return(
        <S.Body>
                    <Header op={true} SubTitle="Perfis Cadastrados"/>
                        <Button  onPress={() => {nav.navigate("Register")}} Title="Novo Cadastro"/> 

        </S.Body>

    )
}
export default Home;