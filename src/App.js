import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Main';

class App extends Component {

  // state = {
  //   config: {
  //     apiKey: "AIzaSyCQRpQtXbKYoac8y6ssgPno11-jdR71WQY",
  //     authDomain: "special-disco.firebaseapp.com",
  //     databaseURL: "https://special-disco.firebaseio.com",
  //     projectId: "special-disco",
  //     storageBucket: "special-disco.appspot.com",
  //     messagingSenderId: "87258023656"
  //   }
  // }


  //   //Create an account on Firebase, and use the credentials they give you in place of the following
  // // var config = {
  // //   apiKey: "AIzaSyBajPcoloVgJTcE44NhPLvVsqnWG9RSBEE",
  // //   authDomain: "simple-webrtc-video-chat.firebaseapp.com",
  // //   databaseURL: "https://simple-webrtc-video-chat.firebaseio.com",
  // //   projectId: "simple-webrtc-video-chat",
  // //   storageBucket: "simple-webrtc-video-chat.appspot.com",
  // //   messagingSenderId: "748074977719"
  // // };
  // firebase.initializeApp(config);

  // var database = firebase.database().ref();
  // var yourVideo = document.getElementById("yourVideo");
  // var friendsVideo = document.getElementById("friendsVideo");
  // var yourId = Math.floor(Math.random()*1000000000);
  // //Create an account on Viagenie (http://numb.viagenie.ca/), and replace {'urls': 'turn:numb.viagenie.ca','credential': 'websitebeaver','username': 'websitebeaver@email.com'} with the information from your account
  // // var servers = {'iceServers': [{'urls': 'stun:stun.services.mozilla.com'}, {'urls': 'stun:stun.l.google.com:19302'}, {'urls': 'turn:numb.viagenie.ca','credential': 'beaver','username': 'webrtc.websitebeaver@gmail.com'}]};
  // const servers = {'iceServers': [{'urls': 'turn:numb.viagenie.ca','credential': 'Zachary Skiles','username': 'skilesz@purdue.edu'}]};
  // var pc = new RTCPeerConnection(servers);
  // pc.onicecandidate = (event => event.candidate?sendMessage(yourId, JSON.stringify({'ice': event.candidate})):console.log("Sent All Ice") );
  // pc.onaddstream = (event => friendsVideo.srcObject = event.stream);

  // function sendMessage(senderId, data) {
  //   var msg = database.push({ sender: senderId, message: data });
  //   msg.remove();
  // }

  // function readMessage(data) {
  //   var msg = JSON.parse(data.val().message);
  //   var sender = data.val().sender;
  //   if (sender != yourId) {
  //       if (msg.ice != undefined)
  //           pc.addIceCandidate(new RTCIceCandidate(msg.ice));
  //       else if (msg.sdp.type == "offer")
  //           pc.setRemoteDescription(new RTCSessionDescription(msg.sdp))
  //             .then(() => pc.createAnswer())
  //             .then(answer => pc.setLocalDescription(answer))
  //             .then(() => sendMessage(yourId, JSON.stringify({'sdp': pc.localDescription})));
  //       else if (msg.sdp.type == "answer")
  //           pc.setRemoteDescription(new RTCSessionDescription(msg.sdp));
  //   }
  // };

  // database.on('child_added', readMessage);

  // function showMyFace() {
  // navigator.mediaDevices.getUserMedia({audio:true, video:true})
  //   .then(stream => yourVideo.srcObject = stream)
  //   .then(stream => pc.addStream(stream));
  // }

  // function showFriendsFace() {
  // pc.createOffer()
  //   .then(offer => pc.setLocalDescription(offer) )
  //   .then(() => sendMessage(yourId, JSON.stringify({'sdp': pc.localDescription})) );
  // }







  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Main number="2"/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
