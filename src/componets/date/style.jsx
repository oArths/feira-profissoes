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
export const Title = styled.Text`
  font-size: 16px;
`;
export const Datass = styled.Text`
position: absolute;
 left: 20px;
 top: 5px;
  margin-top: 5px;
  width: 100px;
  height: 20px;
  font-size: 14px;
  color: #8a8a8a;

`;
export const ConatinerInput = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
export const IconConatiner = styled.TouchableOpacity`
display: flex;
align-items: center;
margin-left: 40%;
  width: 300px;
  height: 30px;
`;
export const Input = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 40px;
  padding: 5px;
  color: black;
  border: 2px solid ${(props) => theme.colors.cinzaa};
  border-radius: 10px;
`;
export const Data = styled.Text`
position: absolute;
 left: 20px;
 top: 5px;
  margin-top: 5px;
  width: 100px;
  height: 20px;
  font-size: 15px;
`;
