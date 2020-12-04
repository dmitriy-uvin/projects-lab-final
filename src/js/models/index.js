const connection = require('../connection');
const Sequilize = require('sequelize');
const User = require('./user');
const Project = require('./project');

const Model = Sequilize.Model;

class ProjectUser extends Model {}
ProjectUser.init(
    {
        id: {
            type: Sequilize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        project_id: {
            type: Sequilize.INTEGER,
            allowNull: false,
            references: {
                model: Project,
                key: 'id'
            }
        },
        user_id: {
            type: Sequilize.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: 'id'
            }
        },
        role: {
            type: Sequilize.STRING,
            allowNull: false
        }
    },
    {
        sequelize: connection,
        tableName: 'project_user',
        timestamps: false
    }
);

Project.belongsToMany(User, {
    through: 'project_user',
    foreignKey: 'project_id',
    timestamps: false,
});
User.belongsToMany(Project, {
    through: 'project_user',
    foreignKey: 'user_id',
    timestamps: false,
});


module.exports = {
    User,
    Project,
    ProjectUser
};