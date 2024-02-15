const Skill = require("../models/skill")

module.exports = {
    index,
    show,
};

function index(req, res) {
    res.render("skills/index", {skills: Skill.getAll(
    )})
}

function show(req, res){
    console.log(req.params, "<- req.params")

    res.render("skills/show", {Skill.getOne(req.params.id)})
}