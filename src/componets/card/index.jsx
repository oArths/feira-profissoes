import * as S from "./style";

  const Card = ({data,nome,bairro,sonho}) => {
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
        <S.DadosContainer >
            <S.SubTitle>{truncateText(data,10).slice(0, 10).split('-').reverse().join('-')}</S.SubTitle>
            <S.Nome>{truncateText(nome, 25)}</S.Nome>
        </S.DadosContainer>
      
      <S.InfoContainer>
        <S.SubTitle>{truncateText(bairro, 20)}</S.SubTitle>
        <S.SubTitle>{truncateText(sonho, 20)}</S.SubTitle>
      </S.InfoContainer>

      </S.Conatiner>
    </S.Card>
  );
};
export default Card;
