import * as S from "./style"
import Input from "../../components/input"

export default function TabTwoScreen() {
  return (
    <S.Body>
     <S.Header>
     <S.Title>
      Feira de Profissões
    </S.Title>
     </S.Header>
     <S.Main>
    <Input Title="Nome" />
    <Input Title="email"/>
    <Input Title="Profissão dos Sonhos"/>
    <Input Title="Email"/>
     </S.Main>
    </S.Body>
  );
}

