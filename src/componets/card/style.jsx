import styled from "styled-components/native";

export const Card = styled.View`
display: flex;
justify-content: center;
width: 100%;
height:140px;
background-color: aqua;
padding: 10px;
border-radius: 20px;
/* elevation: 4; */

`;
export const Data = styled.Text`
font-size: 15px;
color: black;
`;
export const Nome = styled(Data)`
font-size: 18px;


`;
export const Email = styled(Data)`
font-size: 15px;


`;
export const Sonho = styled(Data)`
font-size: 15px;


`;
export const Bairro = styled(Data)`
font-size: 15px;


`;
export const Button = styled.TouchableOpacity`
display: flex;
align-items: center;
justify-content: center;
border-radius: 10px;
width: 40px;
height: 40px;
background-color: ${(props) => props.theme.colors.red};

`;