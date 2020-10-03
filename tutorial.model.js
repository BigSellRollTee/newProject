module.exports = (sequelize,Sequelize) => {
    const Tutorial = sequelize.define("tutorial",{
        TaskTitle: {type: Sequelize.STRING},
        TaskDate: {type: Sequelize.STRING},
        TaskTimeStart: {type: Sequelize.STRING},
        TaskTimeEnd: {type: Sequelize.STRING},
        TaskDescription: {type: Sequelize.STRING},
        TaskReady: {type: Sequelize.BOOLEAN}
    });
    return Tutorial;
};