const models = require("../../dbConection/models");

const getPersons = async (req, res) => {
    const person = await models.persons.findAll(

    )
    console.log(person);
    res.send(person)
}

const createPerson = async (req, res) => {
    // const { first_name, last_name, email, cellphone, status } = req.body
    console.log(req.body);
    // const newPerson = await models.persons.create({
    //     first_name,
    //     last_name,
    //     email,
    //     cellphone,
    //     status
    // })
    // console.log(newPerson);
    res.send(`Created new person`)
}


// const duel = Duel.findByPk(id, {
//     include: [
//       {
//         model: User,
//         as: 'players',
//         include: { // can be an object to include single table
//           model: DuelPokemon,
//           required: false,
//           as: 'duelPokemons',
//         },
//       },
//       {
//         model: DuelActionLog,
//         required: false,
//         as: 'logs',
//       },
//     ],
//     order: [[sequelize.col('players.createdAt', 'DESC')]],
//   });

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
    createPerson
}