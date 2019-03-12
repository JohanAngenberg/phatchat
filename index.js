import firebase from "./firebase";
import 'firebase/database';
const chat = firebase.database().ref('chat');
let chatbox = document.getElementById('chatbox');
let inputName = document.getElementById('inputName');
let inputMessage = document.getElementById('inputMessage');
let sendMessage = document.getElementById('send');

chat.on('child_added', (snapshot) => {
    let message = snapshot.val();
    chatbox.innerHTML += `${message.username}: ${message.message} <br><br>`;
    console.log('new message');
});

sendMessage.addEventListener('click', () => {
    const primaryKey = chat.push().key;
    console.log(inputName.value + inputMessage.value);
    chat.child(primaryKey).set({
        "username": inputName.value,
        "message": inputMessage.value,
    });
})

