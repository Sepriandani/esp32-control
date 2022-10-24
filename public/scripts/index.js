const loginElement = document.querySelector('#login-form');
const contentElement = document.querySelector("#content-sign-in");
const userDetailsElement = document.querySelector('#user-details');
const authBarElement = document.querySelector("#authentication-bar");

// Elements for GPIO states
const stateElement1 = document.getElementById("state1");
const stateElement2 = document.getElementById("state2");
const stateElement3 = document.getElementById("state3");
const stateElement4 = document.getElementById("state4");
const stateElementPompa = document.getElementById("statePompa");
const stateElementMode = document.getElementById("stateMode");

// Button Elements
const btn1On = document.getElementById('btn1On');
const btn1Off = document.getElementById('btn1Off');
const btn2On = document.getElementById('btn2On');
const btn2Off = document.getElementById('btn2Off');
const btn3On = document.getElementById('btn3On');
const btn3Off = document.getElementById('btn3Off');
const btn4On = document.getElementById('btn4On');
const btn4Off = document.getElementById('btn4Off');
const btnPompaOn = document.getElementById('btnPompaOn');
const btnPompaOff = document.getElementById('btnPompaOff');
const btnModeOn = document.getElementById('btnModeOn');
const btnModeOff = document.getElementById('btnModeOff');

// Database path for GPIO states
var dbPathGerbang1 = 'data/control/gerbang1';
var dbPathGerbang2 = 'data/control/gerbang2';
var dbPathGerbang3 = 'data/control/gerbang3';
var dbPathGerbang4 = 'data/control/gerbang4';
var dbPathPompa = 'data/control/pompa';
var dbPathMode = 'data/control/mode';

// Database references
var dbRefGerbang1 = firebase.database().ref().child(dbPathGerbang1);
var dbRefGerbang2 = firebase.database().ref().child(dbPathGerbang2);
var dbRefGerbang3 = firebase.database().ref().child(dbPathGerbang3);
var dbRefGerbang4 = firebase.database().ref().child(dbPathGerbang4);
var dbRefPompa = firebase.database().ref().child(dbPathPompa);
var dbRefMode = firebase.database().ref().child(dbPathMode);

// MANAGE LOGIN/LOGOUT UI
const setupUI = (user) => {
  if (user) {
    //toggle UI elements
    loginElement.style.display = 'none';
    contentElement.style.display = 'block';
    authBarElement.style.display ='block';
    userDetailsElement.style.display ='block';
    userDetailsElement.innerHTML = user.email;

    //Update states depending on the database value
    dbRefGerbang1.on('value', snap => {
        if(snap.val()==1) {
            stateElement1.innerText="ON";
        }
        else{
            stateElement1.innerText="OFF";
        }
    });
    dbRefGerbang2.on('value', snap => {
        if(snap.val()==1) {
            stateElement2.innerText="ON";
        }
        else{
            stateElement2.innerText="OFF";
        }
    });
    dbRefGerbang3.on('value', snap => {
        if(snap.val()==1) {
            stateElement3.innerText="ON";
        }
        else{
            stateElement3.innerText="OFF";
        }
    });
    dbRefGerbang4.on('value', snap => {
        if(snap.val()==1) {
            stateElement4.innerText="ON";
        }
        else{
            stateElement4.innerText="OFF";
        }
    });
    dbRefPompa.on('value', snap => {
        if(snap.val()==1) {
            stateElementPompa.innerText="ON";
        }
        else{
            stateElementPompa.innerText="OFF";
        }
    });
    dbRefMode.on('value', snap => {
        if(snap.val()==1) {
            stateElementMode.innerText="ON";
        }
        else{
            stateElementMode.innerText="OFF";
        }
    });

    // Update database uppon button click
    btn1On.onclick = () =>{
        dbRefGerbang1.set(1);
    }
    btn1Off.onclick = () =>{
        dbRefGerbang1.set(0);
    }

    btn2On.onclick = () =>{
        dbRefGerbang2.set(1);
    }
    btn2Off.onclick = () =>{
        dbRefGerbang2.set(0);
    }

    btn3On.onclick = () =>{
        dbRefGerbang3.set(1);
    }
    btn3Off.onclick = () =>{
        dbRefGerbang3.set(0);
    }

    btn4On.onclick = () =>{
        dbRefGerbang4.set(1);
    }
    btn4Off.onclick = () =>{
        dbRefGerbang4.set(0);
    }

    btnPompaOn.onclick = () =>{
        dbRefPompa.set(1);
    }
    btnPompaOff.onclick = () =>{
        dbRefPompa.set(0);
    }

    btnModeOn.onclick = () =>{
        dbRefMode.set(1);
    }
    btnModeOff.onclick = () =>{
        dbRefMode.set(0);
    }

  // if user is logged out
  } else{
    // toggle UI elements
    loginElement.style.display = 'block';
    authBarElement.style.display ='none';
    userDetailsElement.style.display ='none';
    contentElement.style.display = 'none';
  }
}