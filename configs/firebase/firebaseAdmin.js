const admin = require('firebase-admin')
const serviceAccount = require('../../service-account.json')
const config_env = require("../../env.config");
const moment = require("moment-timezone");
const format_date = 'YYYY-MM-DD HH:mm:ss';
const timezone = "Asia/Jakarta";

if (!admin.apps.length) {
    try {
        //firebase is initialized
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: config_env.DB_URL
        })
    } catch (error) {
        console.log(error)
    }    
}

exports.getAdmin = () => {
    return admin
};

exports.getMoment = (the_date) => {
    return moment(the_date);
};

exports.getCurrentDateTime = () => {
    return moment(new Date()).tz(timezone).format(format_date);
};