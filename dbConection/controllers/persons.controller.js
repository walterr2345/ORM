const models = require("../../dbConection/models");

const getModulesByTrainee = async (req, res) => {
    try {
        const person = await models.persons.findAll(
            // {
            //     attributes: ['first_name', 'last_name', 'rol_name', 'name_module'],
            //     model: models.module_groups,
            //     where: {
            //         id_person_tr: req.params.id
            //     }
            // }
        )
        res.send(person)
    } catch (error) {

    }
}


// select p.first_name, p.last_name, r.rol_name as Rol, m.name_module as Modulo
// from persons as p 
// join rol_people as rp on (p.id = rp.id_persona) 
// join roles as r on (rp.id_rol =r.id) 
// join module_groups as mg on(p.id = mg.id_person_tr)
// join modules as m on (m.id =mg.id_module)
// where mg.id_person_tr =1

const getHeadTrainerByTrainee = async (req, res) => {
    try {
        const person = await models.persons.findAll({
            attributes: ['first_name', 'last_name'],
            include: {
                model: models.htrainer_trainee,
                where: {
                    id_person_tr: req.params.id
                }
            }
        })
        res.status(200).send({ data: person })
    } catch (error) {
        console.log(`Something go wrong ${error}`);
        res.status(500).send(`${error}`)
    }
}

// select p.first_name , p.last_name 
// from persons as p
// join htrainer_trainees as ht on (p.id =ht.id_person_ht)
// where ht.id_person_tr  =2

const getModuleTrainerByModule = async (req, res) => {

}

// select distinct  p.first_name, p.last_name, r.rol_name 
// from persons as p 
// join rol_people as rp on (p.id = rp.id_persona) 
// join roles as r on (rp.id_rol =r.id) 
// join module_groups as mg on(p.id = mg.id_person_mt)
// join modules as m on (m.id =mg.id_module)
// where mg.id_module =1

const getExistsTraineesByModule = async (req, res) => {

}
// select p.first_name, p.last_name, r.rol_name as Rol
// from persons p 
// join rol_people as rp on  (p.id= rp.id_persona)
// join roles as r on (rp.id_rol =r.id) 
// left  join  module_groups as mg on (p.id = mg.id_person_tr) 
// where r.id  = 1
//  and mg.id_module is null

const getExistsModuleTrainerByModule = async (req, res) => {

}

// select p.first_name, p.last_name, r.rol_name as Rol
// from persons p 
// join rol_people as rp on  (p.id= rp.id_persona)
// join roles as r on (rp.id_rol =r.id) 
// left  join  module_groups as mg on (p.id = mg.id_person_mt) 
// where r.id  = 3
//  and mg.id_module is null

const getClassStartDateByTrainee = async (req, res) => {
    try {
        const date = await models.Class.min('date_class', {
            include: {
                attributes: [],
                model: models.Classes_Trainee,
                where: {
                    id_trainee: req.params.id
                },
                group: ['id_trainee'],
            },
        })
        res.status(200).send({ data: date })
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    getModulesByTrainee,
    getHeadTrainerByTrainee
}