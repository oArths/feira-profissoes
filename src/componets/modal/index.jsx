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
                <S.Text>Deseja Excluir?</S.Text>
            <S.CloseModal onPress={onClose}>
            <I.Xmark
            color="#000"
            width={'30px'}
            height={'30px'}
            />
            </S.CloseModal>
            </S.Container>
            <S.TextOP>Após a exlusão os dados{'\n'}serão perdidos permanentemente </S.TextOP>
            <S.ContainerButton>
              <S.ConfirmOP
                onPress={onClose}
              >
                <S.ButtonText>Cancelar</S.ButtonText>
              </S.ConfirmOP>
              <S.Confirm
                onPress={onClose}
                >
                <S.ButtonText>Excluir</S.ButtonText>
              </S.Confirm>
            </S.ContainerButton>
          </S.ModalIn>
        </S.ModalOut>
      </Modal>
    </S.Body>
  );
};

export default ModalOp;