import { firestore } from "@/lib/firebase/firebase";
import { addDoc, collection } from "@/lib/firebase/firestore";

const collectionName = 'testCol';

export interface TestType {
  value: string,
}

export const createTestObj = async (testObj: TestType) => {
  return await addDoc(collection(firestore, collectionName), testObj)
    .then(() => {
      console.info('record:', testObj, 'added!');
      return true;
    })
    .catch(e => {
      console.error('failed to add record:', testObj, 'error:', e);
      return false;
    });
}