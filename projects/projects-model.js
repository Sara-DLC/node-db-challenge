const db = require('../data/db.config');

module.exports = {
    getProjects,
    addProjects,
    removeProjects
}

function getProjects() {
return db("projects").then(projects =>
    projects.map(project => {
    return { ...project, completed: !!project.completed };
    })
);
}


function addProjects(newProject) {
    return db('projects')
    .insert(newProject)
}


function removeProjects (id) {
    return db('projects')
    .where('id' , id)
    .del();
}