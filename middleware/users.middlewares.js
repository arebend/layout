const firebase = require("../configs/firebase/firebaseAdmin");
const config_env = require("../env.config");
const admin = firebase.getAdmin();

exports.createUser = async (data) => {
    try {
        const db = admin.database();
        const dbRef = db.ref(`${config_env.NEXT_TABLE_USER}`);        
        const res = dbRef.push(data);
        return res;
    } catch (e) {
        console.error(e);
        return null;
    }
};

exports.deleteUserByEmail = async(email) => {
    const db = admin.database()
    const dbRef = db.ref(`${config_env.NEXT_TABLE_USER}`)

    return new Promise(resolve => {
        dbRef.orderByChild('email').equalTo(email).once("value").then((snapshot) => {
            snapshot.forEach((child) => {
                const dbRefKey = admin.database().ref(`${config_env.NEXT_TABLE_USER}/${child.key}`)               
                dbRefKey.remove().then(() => {
                    resolve();        
                }).catch((errorObject) => {
                    console.error(errorObject);
                    resolve();
                });                
            });

            if (snapshot.numChildren() > 0) {
                resolve("success",res.status(200).json({
                    message: 'Remove Data Successfuly',
                }));
            } else {
                resolve("not_exist",res.status(400).json({
                    message: 'not_exist',
                }));
            }
            
        }).catch((err) => {
            console.log(err);
            return resolve(null);
        });
    });
}

exports.readUserAll = async () => {

    const db = admin.database();
    const dbRef = await db.ref(`${config_env.NEXT_TABLE_USER}`).once('value');        
    const data = [];
    Object.keys(dbRef.val()).map(key => {
      data.push(dbRef.val()[key])
    });
    return data

};

