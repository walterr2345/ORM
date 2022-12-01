const personModel = require("../../dbConection/models/persons");

 const getPersons = async (_req, res) => {
    const persons = await personModel.findAll()
    console.log(persons);
    res.send(`persons ${persons} `)
}

// export const createProjects = async (req, res) => {
//     const { name, priority, description } = req.body

//     const newProject = await project.create({
//         name,
//         priority,
//         description
//     })
//     console.log(newProject);
//     res.send(`creating proyects`)
// }

module.exports = {
    getPersons,
}