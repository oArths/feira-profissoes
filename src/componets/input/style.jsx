import styled from "styled-components/native";
import { theme } from "../../../theme";

export const Conatiner= styled.View`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
gap: 5px;
margin-bottom: 30px;

`;
export const ContainerInput = styled.View`
display: flex;
flex-direction: column;
width: 80%;
`;
export const Title =  styled.Text`
font-size: 16px;
`;
export const Input = styled.TextInput`
font-size: 14px;
    width: 100%;
  padding: 5px  10px 5px 20px;
  color: black;
  border: 2px solid ${(props) => theme.colors.cinzaa};
  border-radius: 10px;
  max-width: 100%;

  
`;

