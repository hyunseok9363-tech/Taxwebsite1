// ===== Firebase 설정 =====
// Firebase Console에서 프로젝트 생성 후 아래 값을 교체하세요.
// 경로: Firebase Console > 프로젝트 설정 > 일반 > 웹 앱 > firebaseConfig

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Firebase 초기화
firebase.initializeApp(firebaseConfig);

// Firestore & Auth 인스턴스
const db = firebase.firestore();
const auth = firebase.auth();
