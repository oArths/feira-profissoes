import * as S from "./style"
import { EditPencil,Trash } from 'iconoir-react-native';


const Card = () => {
    return(
        <S.Card>
            <S.Data>14/04/3002</S.Data>
            <S.Bairro> TRISTEZATRISTEZATRISTE</S.Bairro>
            <S.Nome>Arthur Ferreira NASCIMETO</S.Nome>
            <S.Sonho> TRISTEZAT</S.Sonho>
            <S.Email>arthurj9edj@gmail.cod</S.Email>
            <S.Button>
            <EditPencil color="#fff" height={30} width={30} />
            </S.Button>
            <S.Button>
            <Trash color="#fff" height={30} width={30} />
            </S.Button>

        </S.Card>
    )
}
export default Card;