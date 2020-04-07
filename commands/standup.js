const panel = require('../standup-utils/main-standup-panel')

const createMainEntry = (core) => {
    const mainEntry = (team, date) => {
        core.getStandupState()
        .then(standupState => {
            if(standupState){
                console.log('You\'re already in a standup!')
                return
            } else {
                //display standup options
                panel.init()
            }
        })        
    }
    return mainEntry
}

module.exports = {
    command: createMainEntry
}
//start a standup