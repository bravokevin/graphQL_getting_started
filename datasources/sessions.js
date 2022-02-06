const sessions = require('../data/sessions.json');
const {DataSource} = require('apollo-datasource');

const _ = require('lodash')

class SessionAPI extends DataSource {
    constructor() {
        super();
    }

    initialize(config){

    }

    getSessions(args){
        return  _.filter(sessions, args);
    }

    // the filter method recives an bobject with the element we want to filter as a second parameter.

    getSessionById(id){
        const session = _.filter(sessions, {id:parseInt(id)});
        return session[0];
    }
}

module.exports = SessionAPI;