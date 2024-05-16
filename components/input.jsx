import * as S from "./styled"

export default function input ({Title, onChange, value}) {
  return (
    <S.Conatiner>
        <S.Title>
            {Title}
        </S.Title>
        <S.input  value={value} onChange={onChange}/>
    </S.Conatiner>
  );
}

