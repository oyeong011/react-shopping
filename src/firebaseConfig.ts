import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  // 여기에 Firebase 설정을 붙여넣습니다.
};

firebase.initializeApp(firebaseConfig);

export default firebase;