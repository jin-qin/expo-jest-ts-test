import firestore from '@react-native-firebase/firestore';

firestore().useEmulator('localhost', 8080);

export { firestore };

