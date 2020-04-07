const teams = [
    {name: 'test',
        members: ['Alice', 'Carol', 'Bob']
    }
]
const _data = {
    teams
}

const get = (what) => {
    switch(what){
        default:
            return _data[what]
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