const skills = [
    {id: 1984, skill: "Gunslinging", done: true},
    {id: 1989, skill: "Rootin", done: true},
    {id: 1999, skill: "Tootin", done: true},
    {id: 2006, skill: "Hollerin", done: false}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseIn(id);

    return skills.find(skill => skill.id === id)
}

function create(skill) {
    skill.id = Date.now() %100000;
    skill.done = false;
    skills.push(skill);
}

function deleteOne(id) {
    id = parseInt(id);
    const ind = skills.findIndex(skill => skill.id === id);
    skills.splice(ind, 1)
}