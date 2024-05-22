import * as S from "./style.jsx";
import * as I from "iconoir-react-native" 
import { Modal } from "react-native";
const ModalOp = ({ isVisible, onClose }) => {
  
  return (
    <S.Body>
      <Modal
        visible={isVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={onClose}
      >
        <S.ModalOut onPressIn={onClose}>
          <S.ModalIn>
            <S.Container>
            <I.XmarkCircle
            color="#E10613"
            width={'50px'}
            height={'50px'}
            />
                <S.Text>Oops...</S.Text>
            </S.Container>
            <S.TextOP>Preencha todos os campos!</S.TextOP>
            <S.ContainerButton>
              <S.Confirm
                onPress={onClose}
                >
                <S.ButtonText>OK</S.ButtonText>
              </S.Confirm>
            </S.ContainerButton>
          </S.ModalIn>
        </S.ModalOut>
      </Modal>
    </S.Body>
  );
};

export default ModalOp;