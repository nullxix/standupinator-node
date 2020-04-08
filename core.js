//************************************/
//************************************/

//   Main Business Logic

//************************************/
//************************************/

const   commandParser = require('./command-parser.js'),
        standup = require('./commands/standup.js'),
        {state, data}= require('./data-layer/interface.js')

//************************************/
// Core Interface
// ALL progam components interact with each other 
// through these interfaces
//************************************/


const interface = {    
    //functions that the standup needs access to
    getStandupState: () => {
        return new Promise((fulfill, reject) => {
            fulfill(state.get('standup'))
        })
    },
    setStandupState: (to) => {
        return new Promise((fulfill, reject) => {
            fulfill(state.set('standup', to))
        })
    },
    getTeam: (name) => {
        return new Promise((fulfill, reject) => {
            fulfill(data.get('team', name))
        })
    }
}




//************************************/
// Register all Commands
//************************************/

commandParser.registerFlagAndFunction('-x', (txt) => {
    console.log('example command which received args:', txt)
} )

//standup command which takes 2 arguments
commandParser.registerFlagAndFunction('-s', standup.command(interface), 2)

//runs commands
commandParser.init()





