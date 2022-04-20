
import admin from 'firebase-admin'
const config_env = require("../env.config");

exports.createAssignment = async (data) => {
    try {
        let db = admin.database();
        let dbRef = db.ref(`${config_env.NEXT_TABLE_ASSIGNMENT}`);        
        let res = dbRef.push(data);
        return res;
    } catch (e) {
        console.error(e);
        return null;
    }
};

exports.readAssignmentAll = async () => {

    const db = admin.database();
    const dbRef = await db.ref(`${config_env.NEXT_TABLE_ASSIGNMENT}`).once('value');        
    const data = [];
    Object.keys(dbRef.val()).map(key => {
      data.push(dbRef.val()[key])
    });
    return data

};

