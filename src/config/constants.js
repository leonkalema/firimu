import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBFYmpaA73CnJUcqVs9hapOEnGXuJwAlgw",
  authDomain: "firimu256-a1329.firebaseapp.com",
  databaseURL: "https://firimu256-a1329.firebaseio.com",
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth

