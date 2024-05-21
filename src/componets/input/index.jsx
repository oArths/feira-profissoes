import * as S from "./style"

const Input = ({ onChange, Title })=> {
    return(
    <S.Conatiner>
        <S.ContainerInput>
        <S.Title>{Title}</S.Title>
        <S.Input  onChange={onChange}/>
        </S.ContainerInput>
        </S.Conatiner>

    )
}
export default Input;