import * as S from "./style.jsx";
import * as I from "iconoir-react-native" 
import { Modal } from "react-native";
// import { BlurView } from '@react-native-community/blur';

const ModalOp = ({ isVisible, onClose,  op }) => {
  
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
            
              { op ? (<><S.Container>
              <I.CheckCircle
              color="#0de106"
              width={'50px'}
              height={'50px'}
              />
                  <S.Text>Presença Confirmada</S.Text>
              </S.Container>
              <S.TextOP>Sua presensa foi confirmada</S.TextOP></>) 
              : 
              (<><S.Container>
              <I.XmarkCircle
              color="#E10613"
              width={'50px'}
              height={'50px'}
              />
                  <S.Text>Oops...</S.Text>
              </S.Container>
              <S.TextOP>Preencha todos os campos!</S.TextOP></>)}
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