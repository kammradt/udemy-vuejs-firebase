const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp()

exports.checkNickname = functions.https.onCall((data, context) => {
  const ref = admin.firestore().collection('users').doc(data.nickname)
  return ref.get().then(doc => {
    return { isUnique: !doc.exists }
  }).catch(() => {
    throw new functions.https.HttpsError('failed to connect')
  })


})