const firebaseConfig = {
  apiKey: "AIzaSyAbir5nqWUllK-9RHo29YCk_A6QAfmoL9k",
  authDomain: "disneyplus-clone-22e8f.firebaseapp.com",
  projectId: "disneyplus-clone-22e8f",
  storageBucket: "disneyplus-clone-22e8f.appspot.com",
  messagingSenderId: "805370061241",
  appId: "1:805370061241:web:03a7b97cf00ee4ea5fd668",
  measurementId: "G-TC9X065EKJ",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
