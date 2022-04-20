
const firebase = require("../configs/firebase/firebaseAdmin")
const config_env = require("../env.config");
const admin = firebase.getAdmin();

exports.updateAchievement = async(data) => {
    
        const db = admin.database();
        const data_achievement = Object.assign({}, data);    
        const index_achievement = data_achievement.user_email + "_" + data_achievement.assignment_finished_date
        const dbRef = await db.ref(`${config_env.NEXT_TABLE_ACHIEVEMENT}`).orderByChild('index_achievement').equalTo(index_achievement).once("value");    
        
        if (dbRef.hasChildren()) {

            const curr_achievement = dbRef.val();
            console.log('Object.keys(curr_achievement)[0]:',Object.keys(curr_achievement)[0],'key :',dbRef.val().key)
            const dbRef_update_total = db.ref(`${config_env.NEXT_TABLE_ACHIEVEMENT}/${Object.keys(curr_achievement)[0]}`);
            dbRef_update_total.child('total_finished').set(admin.database.ServerValue.increment(1))
            
            console.log('new achievement counter added dene')

        } else {
            
            this.createAchievement(data)
            console.log("create new data")

        }  
};

exports.createAchievement = (data) => {
    try {
        let db = admin.database();
        let dbRef = db.ref(`${config_env.NEXT_TABLE_ACHIEVEMENT}`);        
        dbRef.push(data);
        return null;
    } catch (e) {
        console.error(e);
        return null;
    }
};

exports.readAchievementsAll = async () => {

    const db = admin.database();
    const dbRef = await db.ref(`${config_env.NEXT_TABLE_ACHIEVEMENT}`).orderByChild('total_finished').once('value');        
    const data = [];
    // Object.keys(dbRef.val()).map(key => {
    //   data.push(dbRef.val()[key])
    // });
    dbRef.forEach(function(child){
        data.push(child.val())
    })

    

    return data

};


//note
// try {
      //console.log('new achievement counter increment ',dbRef)
        // const data = {
        //     total_finished:'101'
        // }
        
        // return new Promise(resolve => {
        //     dbRef.update(data, (error) => {
        //         if (error) {
        //             console.error(error);
        //             resolve();
        //         } else {
        //             console.log("Update achievement successfully");
        //             resolve();
        //         }
        //     });
        //     return null;
        // });    
 
        //dbRef.child('total_finished').set(admin.database.ServerValue.increment(1))
        
    // } catch (e) {
    //     console.error(e);
    //     return null;
    // }