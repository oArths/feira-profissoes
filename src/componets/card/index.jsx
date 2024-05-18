import * as S from "./style";
import * as I from "iconoir-react-native";

  const Card = ({data,nome,bairro,sonho, onPressDelete}) => {
    const truncateText = (text, maxLength) => {
      if (!text) return 'undefind key'; 
      if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...';
      }
      return text;
    };
  
  return (
    <S.Card elevation={1}>
      <S.Conatiner>

        <S.DadosContainer>
            <S.SubTitle>{truncateText(data,10)}</S.SubTitle>
            <S.Nome>{truncateText(nome, 25)}</S.Nome>
        </S.DadosContainer>
      
      <S.InfoContainer>
        <S.SubTitle>{truncateText(bairro, 10)}</S.SubTitle>
        <S.SubTitle>{truncateText(sonho, 20)}</S.SubTitle>
      </S.InfoContainer>

      </S.Conatiner>

      <S.ButtonConatiner>

        <S.Button >
          <I.EditPencil color="#fff" height={25} width={25} />
        </S.Button>

        <S.Button onPress={onPressDelete}>
          <I.Trash color="#fff" height={25} width={25} />
        </S.Button>

      </S.ButtonConatiner>
    </S.Card>
  );
};
export default Card;
