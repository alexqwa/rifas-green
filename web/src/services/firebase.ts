import firebase from "firebase/compat/app"

import "firebase/compat/auth"
import "firebase/compat/database"

const firebaseConfig = {
  apiKey: "AIzaSyCyIWEspcW1bEY51J60X0pp4ZqqnQbEJnk",
  authDomain: "rifasgreen-afd98.firebaseapp.com",
  databaseURL: "https://rifasgreen-afd98-default-rtdb.firebaseio.com",
  projectId: "rifasgreen-afd98",
  storageBucket: "rifasgreen-afd98.appspot.com",
  messagingSenderId: "268601517459",
  appId: "1:268601517459:web:c01bed532e0e512af97466",

  // apiKey: import.meta.env.API_KEY,
  // authDomain: import.meta.env.AUTH_DOMAIN,
  // databaseURL: import.meta.env.DATABASE_URL,
  // projectId: import.meta.env.PROJECT_ID,
  // storageBucket: import.meta.env.STORAGE_BUCKET,
  // messagingSenderId: import.meta.env.MESSAGE_SENDER_ID,
  // appId: import.meta.env.APP_ID,
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const database = firebase.database()

export { firebase, auth, database }
