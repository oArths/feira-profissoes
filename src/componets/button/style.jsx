import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
display: flex;
align-items: center;
justify-content: center;
width: 245px;
height: 44px;
border-radius: 5px;
background-color: ${(props) => props.theme.colors.red};

`;
export const Title = styled.Text`
font-size: 24px;
font-weight: 700;
color: white;
`;