import * as S from "./style"

const Button = ({Title, onPress}) => {
return(
    <S.Button onPress={onPress} >
        <S.Title>{Title}</S.Title>
    </S.Button>

)
}
export default Button;