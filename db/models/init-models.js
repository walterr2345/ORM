const DataTypes = require("sequelize").DataTypes;
const _classes = require("./classes");
const _groups = require("./groups");
const _htrainer_trainee = require("./htrainer_trainee");
const _module_group = require("./module_group");
const _modules = require("./modules");
const _persons = require("./persons");
const _rol_person = require("./rol_person");
const _roles = require("./roles");
const _topic_class = require("./topic_class");
const _topics = require("./topics");

function initModels(sequelize) {
  const classes = _classes(sequelize, DataTypes);
  const groups = _groups(sequelize, DataTypes);
  const htrainer_trainee = _htrainer_trainee(sequelize, DataTypes);
  const module_group = _module_group(sequelize, DataTypes);
  const modules = _modules(sequelize, DataTypes);
  const persons = _persons(sequelize, DataTypes);
  const rol_person = _rol_person(sequelize, DataTypes);
  const roles = _roles(sequelize, DataTypes);
  const topic_class = _topic_class(sequelize, DataTypes);
  const topics = _topics(sequelize, DataTypes);

  classes.belongsToMany(topics, { as: 'id_topic_topics', through: topic_class, foreignKey: "id_class", otherKey: "id_topic" });
  persons.belongsToMany(persons, { as: 'id_person_ht_people', through: htrainer_trainee, foreignKey: "id_person_tr", otherKey: "id_person_ht" });
  persons.belongsToMany(persons, { as: 'id_person_tr_people', through: htrainer_trainee, foreignKey: "id_person_ht", otherKey: "id_person_tr" });
  persons.belongsToMany(roles, { as: 'id_rol_roles', through: rol_person, foreignKey: "id_persona", otherKey: "id_rol" });
  roles.belongsToMany(persons, { as: 'id_persona_people', through: rol_person, foreignKey: "id_rol", otherKey: "id_persona" });
  topics.belongsToMany(classes, { as: 'id_class_classes', through: topic_class, foreignKey: "id_topic", otherKey: "id_class" });
  topic_class.belongsTo(classes, { as: "id_class_class", foreignKey: "id_class"});
  classes.hasMany(topic_class, { as: "topic_classes", foreignKey: "id_class"});
  module_group.belongsTo(groups, { as: "id_group_group", foreignKey: "id_group"});
  groups.hasMany(module_group, { as: "module_groups", foreignKey: "id_group"});
  classes.belongsTo(module_group, { as: "id_group_module_group", foreignKey: "id_group"});
  module_group.hasMany(classes, { as: "classes", foreignKey: "id_group"});
  classes.belongsTo(module_group, { as: "id_module_module_group", foreignKey: "id_module"});
  module_group.hasMany(classes, { as: "id_module_classes", foreignKey: "id_module"});
  classes.belongsTo(module_group, { as: "id_person_mt_module_group", foreignKey: "id_person_mt"});
  module_group.hasMany(classes, { as: "id_person_mt_classes", foreignKey: "id_person_mt"});
  classes.belongsTo(module_group, { as: "id_person_tr_module_group", foreignKey: "id_person_tr"});
  module_group.hasMany(classes, { as: "id_person_tr_classes", foreignKey: "id_person_tr"});
  module_group.belongsTo(modules, { as: "id_module_module", foreignKey: "id_module"});
  modules.hasMany(module_group, { as: "module_groups", foreignKey: "id_module"});
  topics.belongsTo(modules, { as: "id_module_module", foreignKey: "id_module"});
  modules.hasMany(topics, { as: "topics", foreignKey: "id_module"});
  htrainer_trainee.belongsTo(persons, { as: "id_person_tr_person", foreignKey: "id_person_tr"});
  persons.hasMany(htrainer_trainee, { as: "htrainer_trainees", foreignKey: "id_person_tr"});
  htrainer_trainee.belongsTo(persons, { as: "id_person_ht_person", foreignKey: "id_person_ht"});
  persons.hasMany(htrainer_trainee, { as: "id_person_ht_htrainer_trainees", foreignKey: "id_person_ht"});
  module_group.belongsTo(persons, { as: "id_person_mt_person", foreignKey: "id_person_mt"});
  persons.hasMany(module_group, { as: "module_groups", foreignKey: "id_person_mt"});
  module_group.belongsTo(persons, { as: "id_person_tr_person", foreignKey: "id_person_tr"});
  persons.hasMany(module_group, { as: "id_person_tr_module_groups", foreignKey: "id_person_tr"});
  rol_person.belongsTo(persons, { as: "id_persona_person", foreignKey: "id_persona"});
  persons.hasMany(rol_person, { as: "rol_people", foreignKey: "id_persona"});
  rol_person.belongsTo(roles, { as: "id_rol_role", foreignKey: "id_rol"});
  roles.hasMany(rol_person, { as: "rol_people", foreignKey: "id_rol"});
  topic_class.belongsTo(topics, { as: "id_topic_topic", foreignKey: "id_topic"});
  topics.hasMany(topic_class, { as: "topic_classes", foreignKey: "id_topic"});

  return {
    classes,
    groups,
    htrainer_trainee,
    module_group,
    modules,
    persons,
    rol_person,
    roles,
    topic_class,
    topics,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
