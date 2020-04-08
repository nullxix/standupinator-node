const Player = require('../var-classes/Player.js')
const Team = require('../var-classes/Team.js')


const TeamAlphaRabbit = new Team('alpha-rabbit', [
    new Player('Roger Rabbit'),
    new Player ('Billy Goat Gruff'),
    new Player ('Sansa Sansa Sansa'),
    new Player ('Sir Cottontail'),
    new Player ('Dave the Lion'),
    new Player ('7'),
    new Player ('X-Tor 57'),
    new Player ('Amelia Lestrange'),
    new Player ('Page 2 Rabbit'),
    new Player ('Just One More'),
])

const TeamLittle = new Team('little', [
    new Player('First Player'),
    new Player('Second Player')
])

const teams = [
    TeamAlphaRabbit,
    TeamLittle
]

const _data = {
    teams
}

const get = (...args) => {
    let [what, which] = args
    switch(what){
        case 'team':
            const teams = _data.teams
            let team_i = teams.findIndex(team => team.name === which)
            if(team_i > -1){
                return(teams[team_i])
            }else{
                const errMsg = `team "${which}" not found`
                console.log(errMsg)
                return {err:{msg: errMsg}}
            }
        default:
            return _data[what][which]
    }
}

const set = (what, to) => {
        switch(what){
            default:
                _data[what] = to;
                return _data[what]
        }
}

module.exports = {
    get,
    set
}