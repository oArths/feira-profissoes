import styled from "styled-components/native";
import { theme } from "../../../theme";

export const Body = styled.View`
display: flex;
align-items: center;
width: 100%;
height: 100%;
`;
export const Header = styled.View`
margin-top: 20px;
display: flex;
justify-content: start;
align-items: center;
width: 100%;
height: 20%;
`;
export const Logo = styled.Image`
display: flex;
justify-content: center;
align-items: center;
width: 150px;
height: 38px;
`;
export const Main = styled.View`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 60%;
`;
export const Title= styled.Text`
font-size: 34px;
font-weight: 900;
`;
export const SubTitle= styled.Text`
font-size: 22px;
font-weight: 400;
`;
export const Footer = styled.View`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 20%;

`;
export const Line = styled.View`
width: 90%;
height: 3px;
background-color: ${(props) => props.theme.colors.red};
`;
export const FooterText = styled.View`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 90%;
`;
export const Info= styled.Text`
margin-top: 10px;
width: 25%;
font-size: 12px;
font-weight: 300;
`;