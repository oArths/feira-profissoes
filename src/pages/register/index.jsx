import * as S from "./style";
import Header from "../../componets/header";
import Button from "../../componets/button";
import Input from "../../componets/input";
import { useNavigation } from "@react-navigation/native";
import ModalOp from "../../componets/modal";
import { Platform } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useState } from "react";
import DatePiker from "../../componets/date/date";
import api from "../../service/api";



const Register = () => {
  const nav = useNavigation();
  const [modalDeleteVisible, setModalDeleteVisible] = useState(false);
  const [modalDeleteVisible1, setModalDeleteVisible1] = useState(false);
  const [data, setDate] = useState()
  const [NewData, setDataNew] = useState()
  const [Responsta, setResponsta] = useState()
  const [loading, setLoading] = useState(false); // Estado de carregamento

  const [values, setValues] = useState({
    name: '',
    email: '',
    date_birth: '',
    professional_goal: '',
    neighborhood: ''
  })


  const fecharModalDelete = () => {
    setModalDeleteVisible(false);
  };
  const fecharModalDelete1 = () => {
    setModalDeleteVisible1(false);
    nav.navigate("Home");
  };




  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };


  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };


  const handleConfirm = (date) => {
    const formattedDate = date.toISOString().slice(0, 10);
    setDate(formattedDate)
    setValues({ ...values, date_birth: formattedDate })
    hideDatePicker();
    DataView(formattedDate);
  };

  const DataView = (formattedDate) => {
    const dateView = formattedDate.split('-').reverse().join('-');
    setDataNew(dateView);

  }

  const handleSubmit = () => {
    // Verificação se os campos de email e senha estão em branco
    if (!values.name || !values.email || !NewData || !values.professional_goal || !values.neighborhood) {
      setModalDeleteVisible(true)
      return;
    }

    setLoading(true); // Iniciar o estado de carregamento
    setModalDeleteVisible1(true)



    api.post('/presence/add', values)
      .then(res => {
        setResponsta(res);
      })
      .catch(error => {
        console.warn(error)
      });
  }



  return (
    <S.Body
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      keyboardVerticalOffset={10}
    >
      <S.Scroll>
        <S.Main>
          <S.HeaderConatiner>
            <Header
              SubTitle="Cadastro de Perfil"
              onPress={() => {
                nav.navigate("Home");
              }}
            />
          </S.HeaderConatiner>
          <Input onChangeText={text => setValues({ ...values, name: text })} Title="Nome:" />
          <Input onChangeText={text => setValues({ ...values, email: text })} Title="Email:" />
          <S.ButtonContainer>
            <DatePiker Title="Data:" onPress={showDatePicker} Data={NewData} />
          </S.ButtonContainer>
          <Input onChangeText={text => setValues({ ...values, professional_goal: text })} Title="Profissão dos Sonhos:" />
          <Input onChangeText={text => setValues({ ...values, neighborhood: text })} Title="Seu Bairro:" />
          <S.ButtonContainer>
            <Button
              onPress={() => { handleSubmit() }}
              Title="Cadastrar"
              disabled={loading}
            />
          </S.ButtonContainer>
        </S.Main>
      </S.Scroll>
      <ModalOp isVisible={modalDeleteVisible} onClose={fecharModalDelete} />
      <ModalOp isVisible={modalDeleteVisible1} onClose={fecharModalDelete1} op={true} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </S.Body>
  );
};
export default Register;
