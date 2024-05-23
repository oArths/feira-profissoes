import styled from "styled-components/native";
import { theme } from "../../../theme";

export const Card = styled.View`
display: flex;
flex-direction: row; 
justify-content: center;
width: 90%;
height:  100px;
background-color: #ffffff;
border-radius: 20px;
border: 0.5px solid ${(props) => theme.colors.cinza};
${props => props.elevation && `elevation: ${props.elevation}`};



`;
export const Conatiner = styled.View`
display: flex;
width: 80%;
flex-direction: column;
align-items: center;
justify-content: start;
margin-top: 10px;
gap: 8px;


`;
export const InfoContainer = styled.View`
display: flex;
flex-direction: row;
align-items: start;
width: 100%;
gap: 20px;
`;
export const DadosContainer = styled.View`
display: flex;
flex-direction: column;
width: 100%;
gap:7px;


`;

export const Nome = styled.Text`
font-size: 18px;
color: black;
/* width: 100px; */
overflow: hidden;
`;
export const SubTitle = styled.Text`
font-size: 13px;
color: ${(props) => theme.colors.cinza};
`;

export const ButtonConatiner = styled.View`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
width: 20%;
`;
export const Button = styled.TouchableOpacity`
display: flex;
align-items: center;
justify-content: center;
border-radius: 10px;
width: 35px;
height: 35px;
background-color: ${(props) => props.theme.colors.red};

`;