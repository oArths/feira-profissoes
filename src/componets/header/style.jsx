import styled from "styled-components/native";
import { theme } from "../../../theme";

export const Header = styled.View`
display: flex;
flex-direction: column;
justify-content: center;
align-items: start;
gap: 10px;
width: 100%;

`;
export const Conatainer = styled.View`
display: flex;
flex-direction: row;


`;
export const Op = styled.View`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: 130PX;


`;
export const ConatainerOp = styled.View`
display: flex;
flex-direction: row-reverse;
width: 100%;


`;
export const ConatinerImg = styled.View`
display: flex;
align-items: end;
width: 50%;


`;
export const ConatinerBack = styled.TouchableOpacity`
display: flex;
align-items: center;
justify-content: center;
margin-top: 10px;
margin-right: 65%;
width: 100%;
`;

export const ConatinerImgOp = styled.View`
display: flex;
align-items: start;
width: 50%;


`;
export const ConatainerText = styled.View`
display: flex;
align-items: center;
justify-content: center;
width: 90%;
gap: 30px;
`;
export const ConatainerTextOP = styled.View`
display: flex;
align-items: center;
width: 100%;
gap: 30px;
`;
export const Logo = styled.Image`
margin-top: 30px;
width: 100px;
height: 25px;

`;
export const LogoOp = styled.Image`
margin-top: 30px;
margin-left: 50px;
width: 100px;
height: 25px;

`;
export const Slug = styled.Image`
display: flex;
width: 200px;
height: 80px;

`;

export const ConatinerTitle = styled.View`
display: flex;
gap: 10px;
width: 100%;
`;
export const ConatinerTitleOP = styled.View`
display: flex;
gap: 10px;
width: 80%;
`;
export const Title = styled.Text`
font-size: 34px;
font-weight: 900;

`;
export const Line = styled.View`
width: 200px;
height: 3px;
background-color: ${(props) => props.theme.colors.red};
`;
export const SubTitle = styled.Text`
font-size: 22px;
font-weight: 600;
margin-right: 30%;
`;