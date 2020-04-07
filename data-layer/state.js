const states = {
    standup: false,
}

const get = (what) => {
    switch(what){
        default:
            return states[what]
    }
}

const set = (what, to) => {
        switch(what){
            default:
                states[what] = to;
                return states[what]
        }
}

module.exports = {
    get,
    set
}