import * as S from "./style"
import { NavArrowLeft } from 'iconoir-react-native';
    const Header = ({SubTitle, op, onPress})=> {
    return(
        <S.Header>
            {op == true ? (<S.Conatainer >
                <S.ConatinerImg>
                    <S.Logo   source={require("../../img/Logo.png")}/>
                </S.ConatinerImg>
                <S.ConatinerImg>
                    <S.Slug   source={require("../../img/slug.png")}/>
                </S.ConatinerImg>
            </S.Conatainer>): 
            ((<S.Op>
                <S.ConatainerOp >
                <S.ConatinerImgOp>
                    <S.LogoOp   source={require("../../img/Logo.png")}/>
                </S.ConatinerImgOp>
                <S.ConatinerImgOp>
                    <S.Slug   source={require("../../img/SlugOp.png")}/>
                </S.ConatinerImgOp>
            </S.ConatainerOp>
            <S.ConatinerBack onPress={onPress}>
                <NavArrowLeft color="black" height={36} width={36} />
            </S.ConatinerBack>
            </S.Op>
        
        ))}

        
        {op == true ? (<S.ConatainerText>
            <S.ConatinerTitle>
            <S.Title>Demonstração{'\n'}de Funcionalidade</S.Title>
            <S.Line/>
            </S.ConatinerTitle>
            <S.SubTitle>{SubTitle}</S.SubTitle>
        </S.ConatainerText>) :(
             <S.ConatainerTextOP>
             <S.ConatinerTitleOP>
             <S.Title>Demonstração{'\n'}de Funalidade</S.Title>
             <S.Line/>
             </S.ConatinerTitleOP>
             <S.SubTitle>{SubTitle}</S.SubTitle>
         </S.ConatainerTextOP>
        ) }
        </S.Header>
    )
}
export default Header;
