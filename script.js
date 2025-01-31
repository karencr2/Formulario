// Importando as funções necessárias do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyByAE0kGdnx4jZ5WiOatGNWIMPDoOY5aDE",
  authDomain: "requisicao-bi.firebaseapp.com",
  projectId: "requisicao-bi",
  storageBucket: "requisicao-bi.firebasestorage.app",
  messagingSenderId: "709706456208",
  appId: "1:709706456208:web:31b32e16b8044d9d274c15",
  measurementId: "G-KS8RHFH6H0"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);  // Inicializa o Firestore
const analytics = getAnalytics(app);  // Inicia o Analytics (opcional)

// Função para enviar os dados para o Firestore
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('myForm').addEventListener('submit', async function(event) {
    event.preventDefault();  // Impede o envio do formulário

    // Coleta os dados do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const setor = document.getElementById('setor').value;
    const prioridade = document.getElementById('prioridade').value;

    try {
      // Envia os dados para a coleção 'form_data' no Firestore
      await addDoc(collection(db, "form_data"), {
        nome: nome,
        email: email,
        setor: setor,
        prioridade: prioridade,
        timestamp: new Date()  // Adiciona a data/hora do envio
      });

      alert('Dados armazenados no Firebase!');
      document.getElementById('myForm').reset();  // Limpa o formulário após o envio
    } catch (e) {
      console.error('Erro ao enviar dados: ', e);  // Log do erro
      alert('Erro ao armazenar dados: ' + e.message);  // Exibe a mensagem do erro
    }
  });
});
