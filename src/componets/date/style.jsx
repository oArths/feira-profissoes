import styled from "styled-components/native";
import { theme } from "../../../theme";

export const Conatiner = styled.View`
display: flex;
flex-direction: column;
justify-content: center;
align-items: start;
width: 100%;
gap: 5px;
margin-bottom: 30px;

`;
export const ConatinerInput = styled.View`
display: flex;
flex-direction: row;
width: 100%;

`;
export const IconConatiner = styled.TouchableOpacity`
/* position: relative; */
width: 40px;
height: 30px;
/* left: 10px;
top: 5px; */
`;
export const Title =  styled.Text`
font-size: 16px;
`;
export const Input = styled.View`
    width: 100%;
    height: 40px;
  padding: 5px;
  color: black;
  border: 2px solid ${(props) => theme.colors.cinzaa};
  border-radius: 10px;
  max-width: 100%;

  
`;
