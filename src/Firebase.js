import firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyA1rpdl40jmLkXoHgXEupafzJRDtWIfk6o",
  authDomain: "pe-lucas.firebaseapp.com",
  projectId: "pe-lucas",
  storageBucket: "pe-lucas.appspot.com",
  messagingSenderId: "247208052503",
  appId: "1:247208052503:web:0953ad0486455540ba9952"
});

const db = firebase.firestore();

export default {
  sendMessage: (nome, email, mensagem, aviso, setActive) => {
    db.collection("mensagens").add({
      nome: nome.value,
      email: email.value,
      mensagem: mensagem.value
    })
    .then(() => {
      aviso.textContent = "Mensagem enviada";
      setActive(true);

      setTimeout(() => {
        setActive(false);
      }, 2000);

      nome.value = "";
      email.value = "";
      mensagem.value = "";
    })
    .catch(error => {
      alert(error.message);
    })
  }
}