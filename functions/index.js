const functions = require('firebase-functions');
const admin = require('firebase-admin');

// database access
admin.initializeApp();

exports.onMessageCreate = functions.firestore
  .document('messages/{userID}')
  .onCreate((snap, context) => {
    const ref = admin.firestore().collection('messages').orderBy('timestamp');

    // declares how many messages can be stored
    ref.onSnapshot(snapshot => {
      i = 0;
      size = snapshot.size;
      sizeToDelete = size - 10;
      console.log('Messages Count: ' + size);

      // delete objects over declared amount
      snapshot.forEach((doc) => {
        if (i < sizeToDelete) {
          doc.ref.delete().then(() => {
            console.log("Document deleted successfully");
          }).catch((error) => {
            console.log('Error removing document: ' + error);
          });
        }
        i++;
      });
    });
  });