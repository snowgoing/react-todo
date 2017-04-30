import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyDmADtYGZJTZgr97meh8c78l5DfCz8oW8Y",
    authDomain: "react-redux-todo-app-c4f6f.firebaseapp.com",
    databaseURL: "https://react-redux-todo-app-c4f6f.firebaseio.com",
    projectId: "react-redux-todo-app-c4f6f",
    storageBucket: "react-redux-todo-app-c4f6f.appspot.com",
    messagingSenderId: "301734606074"
  };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
