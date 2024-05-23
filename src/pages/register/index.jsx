import * as S from "./style";
import Header from "../../componets/header";
import Button from "../../componets/button";
import Input from "../../componets/input";
import { useNavigation } from "@react-navigation/native";
import ModalOp from "../../componets/modal";
import { Platform} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useState } from "react";
import DatePiker from "../../componets/date/date";

const Register = () => {
  const nav = useNavigation();
  const [modalDeleteVisible, setModalDeleteVisible] = useState(false);
  const [data, setDate] = useState()
  const [NewData, setDataNew] = useState()
  










  const [ values , setValues] = useState({
    usuNome: '',
    usuEmail: '',
    usuDate: '',
    usuProf: '',
    usuSonh: ''
  })
  const handleSubmit = () => {
    // Verificação se os campos de email e senha estão em branco
    if (values.usuEmail === '' || values.usuNome === '') {
        setModalDeleteVisible(true)
        return;
    }
  }


  const fecharModalDelete = () => {
    setModalDeleteVisible(false);
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
    setValues({ ...values, usuDate: date })
    hideDatePicker();
    DataView(formattedDate);
  };
  
  const DataView = (formattedDate) =>{
    const dateView = formattedDate.split('-').reverse().join('-');    
    setDataNew(dateView);
    console.warn(NewData)

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
        <Input onChange={e => setValues({...values, usuNome: e.target.value})} Title="Nome:" />
        <Input onChange={e => setValues({...values, usuEmail: e.target.value})} Title="Email:" />
       <S.ButtonContainer>

       <Button Title="Show Date Picker" onPress={showDatePicker} />
       <S.Date>
        
       </S.Date>
       <DatePiker Title="Data:" onPress={showDatePicker} Data={NewData}/>
       </S.ButtonContainer>
       
     


        <Input onChange={e => setValues({...values, usuProf: e.target.value})} Title="Profissão dos Sonhos:" />
        <Input onChange={e => setValues({...values, usuSonh: e.target.value})} Title="Seu Bairro:" />
        <S.ButtonContainer>
          <Button
            onPress={() => {handleSubmit()}}
            Title="Cadastrar"
          />
        </S.ButtonContainer>
       </S.Main>
      </S.Scroll>
      <ModalOp isVisible={modalDeleteVisible} onClose={fecharModalDelete}/>
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
