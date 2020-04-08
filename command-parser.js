const flagsAndFunctions = []


const registerFlagAndFunction = (flag, func, argCount = 1) => {

    //if you want to create a new command
    //call this function from 'core.js'
    //the function by default takes 1 argument
    //the argument count can be changed by modifying argCount
    //the arguments CANNOT begin with '-'
    flagsAndFunctions.push(new FlagAndFunction(flag, func, argCount))
}


class FlagAndFunction {
    constructor (flag, func, argCount){
        this.flag = flag
        this.func = func
        this.argCount = argCount
    }
}

const runCommands = () => {
    //runs all commands, based on arguments passed when the program is run
    let args = process.argv.slice(2, process.argv.length)

    flagsAndFunctions.forEach(fnf => {
        let argFlag = args.indexOf(fnf.flag)

        if(argFlag > -1){
            //if this flag was in the arguments list
            
            if(fnf.argCount <= 0){
                fnf.func()
            }else {
                //if this function takes arguments
                let argArgs = []
                
                //grab all the args
                for(let i = 0; i < fnf.argCount; i++) {
                    argArgs.push(args[argFlag + i + 1])
                }

                //make sure none of the args are flags
                //AND that they all exist
                for(let i = 0; i < argArgs.length; i++){
                    if(argArgs[i] === undefined || argArgs[i].slice(0,1) === '-'){
                        let errMsg = 'Insufficient or malformed arguments for function: \"' + fnf.flag + '\"'
                        console.log(errMsg)
                        return {err: {msg: errMsg}}
                    }
                }
                fnf.func(...argArgs)
            }
        }
    })
}

// +(() => {
//     //init function -- runs after the script loads
//     runCommands()
// })()

const init = () => {
    runCommands()
}
module.exports = {registerFlagAndFunction, init}