import styled from "styled-components/native";
import { theme } from "../../../theme";

export const Body = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ModalOut = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  backdrop-filter: bluer(10px);
  /* background-color: rgba(0, 0, 0, 0.418); */
`;
export const ModalIn = styled.View`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  width: 70%;
  height: 200px;
`;

export const CloseModal = styled.TouchableOpacity`
`;

export const Container = styled.View`
  display: flex;
  flex-direction: column;
justify-content:center;
align-items: center;
width: 100%;
`;

export const Text = styled.Text`
  font-weight: bold;
  font-size: 20px;
`;
export const TextOP = styled.Text`
color: ${(props) => theme.colors.cinza};
font-size: 15px;
`;


export const ContainerButton = styled.View`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
export const Confirm = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => theme.colors.red};
  border-radius: 10px;
  width: 200px;
  height: 39px;
`;
export const ConfirmOP = styled(Confirm)`
  background-color: ${(props) => theme.colors.cinza};
`;
export const ButtonText = styled.Text`
  font-size: 20px;
  color: white;
`;
