import styled from "styled-components/native";
export const Body = styled.View`
display: flex;
align-items: center;
`;
export const Main = styled.ScrollView`
width: 100%;
height: 100%;
gap: 20px;
`;
export const HeaderConatiner = styled.View`
display: flex;
align-items: center;
justify-content: center;
width: 80%;
`;
export const Conatiner = styled.View`
  display: flex;
  align-items: center;
  gap: 30px;
`;
export const CardContainer = styled.View`
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
width: 100%;
padding-bottom: 100px;
height: max-content;

`;
export const ButtonContainer = styled.View`
position: absolute;
z-index: 1;
bottom: 50px;
  width: 60%;
`;