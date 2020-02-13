const orm = require("../config/orm.js");

function all () {
      return orm.selectAll("burgers");
};

function create (data) {
    return orm.createAll("burgers", data);
};

function update (data, id) {
    return orm.updateAll("burgers", data, id);
};


module.exports = { all, create, update }