
import React, { useEffect, useState } from 'react';
import './App.css';
import { FormControl,Input,InputLabel,Button } from '@material-ui/core';
import Message from './Message'
import db from './firebase'
import firebase from "firebase";
import FlipMove from 'react-flip-move';
import img from './images/FB.png'
import SendIcon from '@material-ui/icons/Send';
import {IconButton} from '@material-ui/core';

function App() {  
const[input,setInput]=useState(''); 
const[messages,setMessages]=useState([]);
const[username,setUserName]=useState('');

console.log(messages);
useEffect(()=>{
db.collection('messages')
.orderBy('timestamp','desc')
.onSnapshot(Snapshot => {
setMessages(Snapshot.docs.map(doc=>({ id:doc.id, message: doc.data() })))
});
},[]);

useEffect(()=>{
 setUserName( prompt("please enter your name"));
},[ ])
console.log(username);

const sendMessage=(event)=>{
  event.preventDefault();
  setMessages([...messages, {username:username,message:input }])
  db.collection('messages').add({
    message:input,
    username:username,
    timestamp:firebase.firestore.FieldValue.serverTimestamp()
  })
  setInput('');
  }
  return (
    <div className="App">
    <img src={img} height="50px;" width="50px" ></img>
     <h1>Build By Vijay Bhopalwani 😍😍</h1>
     <h2>Welcome <span style={{fontSize:"25px;" , color:"pink", }}>{username} </span></h2>
      <form className="app__form"> 
      <FormControl className="app__formControl">
           <InputLabel  >Enter Message ...</InputLabel>
           <Input className="app__input" placeholder="Enter a message..." value={input} onChange={event=> setInput(event.target.value)} />
            <IconButton className="app__iconButoon" disabled={!input} variant="contained" color="primary" onClick={sendMessage}>
              <SendIcon/>
            </IconButton>
      </FormControl>
     
    </form>

  
    <FlipMove>  
     {
      messages.map(({id,message}) =>(
        
        <Message key={id} username={username} message={message} />
  
      ))
     }
     </FlipMove>
    </div>
  );
}

export default App;
