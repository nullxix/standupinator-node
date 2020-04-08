const panel = require('../standup-utils/main-standup-panel')

const createMainEntry = (core) => {
    const mainEntry = (teamName, date) => {
        core.getStandupState()
        .then(standupState => {
            if(standupState){
                console.log('You\'re already in a standup!')
                return
            } else {
                core.getTeam(teamName)
                .then(team => {
                    panel.init(team)
                })
                //display standup options
            }
        })        
    }
    return mainEntry
}

module.exports = {
    command: createMainEntry
}
//start a standup