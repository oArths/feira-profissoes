import * as S from "./style"

const Input = ({ onChangeText, Title })=> {
    return(
    <S.Conatiner>
        <S.ContainerInput>
        <S.Title>{Title}</S.Title>
        <S.Input  onChangeText={onChangeText}/>
        </S.ContainerInput>
        </S.Conatiner>

    )
}
export default Input;