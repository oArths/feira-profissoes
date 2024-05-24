import * as S from "./style"

const Input = ({ onChangeText, Title, placeholder })=> {
    return(
    <S.Conatiner>
        <S.ContainerInput>
        <S.Title>{Title}</S.Title>
        <S.Input   placeholder={ placeholder || ''} onChangeText={onChangeText}/>
        </S.ContainerInput>
        </S.Conatiner>

    )
}
export default Input;