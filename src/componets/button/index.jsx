import * as S from "./style"

const Button = ({Title, onPress, disabled}) => {
return(
    <S.Button onPress={onPress} disabled={disabled} >
        <S.Title>{Title}</S.Title>
    </S.Button>

)
}
export default Button;