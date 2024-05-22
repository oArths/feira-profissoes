import * as S from "./style"
import * as I from "iconoir-react-native";


const DatePiker = ({onPress, Title, Data}) => {
    return(
        <S.Conatiner>
            <S.Title>{Title}</S.Title>
            <S.ConatinerInput>
            
            <S.Input>
            <S.IconConatiner onPress={onPress}>
            <I.Calendar
            color="#E10613"
            width={'30px'}
            height={'30px'}
            
            />
            </S.IconConatiner>
                {/* {Data} */}
            </S.Input>
            </S.ConatinerInput>

        </S.Conatiner>
    )
} 
export default DatePiker;