var generators = require('yeoman-generator');
var _ = require('lodash');

module.exports = generators.Base.extend({

    constructor: function() {
        generators.Base.apply(this, arguments);

        this.argument('filepath', { Type: String, required: true });

        // this.appname = _.camelCase(this.appname);
    },
    _private_method: function() {
        console.log('private hey');
    },
    initializing: function() {
        console.log('init run')
    },
    prompting: function() {
        // return this.prompt([{
        //     type: 'input',
        //     name: 'name',
        //     message: 'Your project name',
        //     default: this.appname
        // }, {
        //     type: 'confirm',
        //     name: 'cool',
        //     message: 'Would you like to enable the cool feature?'
        // }]).then(function(answers) {
        //     this.appname = answers.name;
        //     this.log('app name', answers.name);
        //     this.log('cool feature', answers.cool);
        // }.bind(this));
    },
    writing: function() {

        let entity = JSON.parse(this.fs.read(this.filepath));


        this.fs.copyTpl(
            this.templatePath('api/routes/template.router.ejs'),
            this.destinationPath('src/api/routes/' + entity.table_name.toLowerCase() + '.router.ts'),
            entity
        );

        this.fs.copyTpl(
            this.templatePath('api/repositories/template.repo.ejs'),
            this.destinationPath('src/api/repositories/' + entity.table_name.toLowerCase() + '.repo.ts'),
            entity
        );

        this.fs.copyTpl(
            this.templatePath('api/models/template.model.ejs'),
            this.destinationPath('src/api/models/' + entity.table_name.toLowerCase() + '.model.ts'),
            entity
        );
    },
    end: function() {
        console.log('end');
    }
});