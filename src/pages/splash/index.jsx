import * as S from "./style"
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
const Splash = () => {
    const nav = useNavigation();  

    // useEffect(() => {
    //     setTimeout(() => {
    //       nav.navigate("Home");
    //     }, 2000);
    //   });

return(
<S.Body>
    <S.Header>
        <S.Logo source={require("../../img/Logo.png")}  />
    </S.Header>
    <S.Main>
        <S.Title>Feira de Profissões</S.Title>
        <S.SubTitle>Desenvolvimento Mobile</S.SubTitle>
    </S.Main>
    <S.Footer>
        <S.Line/>
        <S.FooterText>
            <S.Info>
                Serviço Nacional de Aprendizado Industrial
            </S.Info>
            <S.Info>
                Escola SENAI Suiço-Brasileiro "Paulo Ernesto Tolle"
            </S.Info>
        </S.FooterText>
    </S.Footer>
</S.Body>
)
}
export default Splash;