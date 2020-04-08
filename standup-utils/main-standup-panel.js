
let team;
let players;
let pageNumber = 0;
let pageCount = 1;
const charKeys = [
    ['q','w','e'],
    ['a','s','d'],
    ['z','x','c'],
]
const pageSize = charKeys.length

const init = (_team) => {
    //make variables global
    team = _team
    players = team.players

    if(team.players === undefined || !(team.players.length > 0)){
        console.log('this team has no members')
    } else {
        refreshDisplay()
    }
}

const refreshDisplay = () => {
    renderPanel()
}

const renderPanel = () => {
    console.log('\n\n----------------------------')
    console.log('   LET THE STANDUP BEGIN     ')
    console.log('----------------------------\n\n')
    getPageCount()
    renderPage(pageNumber)
}

const getPageCount = () => {
    pageCount = Math.ceil(players.length / pageSize)

}

const renderPage = (pageNum) => {
    let startIndice = pageNum * pageCount;
    for(let i = 0; i < pageSize; i++){
        renderPlayer(startIndice + i, i)
    }
    console.log(`\n <-- page ${pageNum + 1} of ${pageCount} --> \n`)
}

const renderPlayer = (which, pagePos) => {
    let player = players[which]
    if(player === undefined || player.name === undefined){
        //do nothing
    } else {
        console.log(`${player.name}: today [${charKeys[pagePos][0]}], tomorrow [${charKeys[pagePos][1]}], notes [${charKeys[pagePos][2]}]`)
    }
}

module.exports = {init}

//get team data
//get number per page
//8 per page

//display page

//accept input