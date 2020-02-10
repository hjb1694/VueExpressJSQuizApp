const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');

const db = {};

const sequelize = new Sequelize({
    dialect : 'sqlite', 
    storage : './db/database.sqlite'
});

fs
.readdirSync(__dirname)
.filter(file => file !== 'index.js')
.forEach(file => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
})

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Quiz.hasMany(db.QuizQuestions);
db.QuizQuestions.belongsTo(db.Quiz);
db.QuizQuestions.hasMany(db.QuizAnswers, {
    foreignKey : 'quiz_question_id'
});
db.QuizAnswers.belongsTo(db.QuizQuestions);

module.exports = db;