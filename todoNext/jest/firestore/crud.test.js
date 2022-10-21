//firebaseのテスト用のデータベースを作成
const firebase = require('@firebase/testing');
const fs = require('fs');
const projectId = 'firestore-emulator-example';
const rules = fs.readFileSync('firestore.rules', 'utf8');
