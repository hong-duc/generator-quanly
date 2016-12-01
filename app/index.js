var generators = require('yeoman-generator');
var _ = require('lodash');

module.exports = generators.Base.extend({

    constructor: function() {
        generators.Base.apply(this, arguments);

        this.argument('filepath', { Type: String, required: true });

        // this.appname = _.camelCase(this.appname);
    },
    _copyTemplateHelper: function(files) {
        files.forEach(file => {
            this.fs.copyTpl(
                this.templatePath(file[0]),
                this.destinationPath(file[1]),
                file[2]
            );
        })
    },
    _copyHelper: function(files) {
        files.forEach(file => {
            this.fs.copy(
                this.templatePath(file[0]),
                this.destinationPath(file[1])
            )
        });
    },
    _capitalizeFirstLetter: function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
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



        let option = JSON.parse(this.fs.read(this.filepath));

        option.tables.forEach(table => {

            let clientDirDes = `src/client/app/${table.name.toLowerCase()}s`;
            let clientDirTemp = 'client/app/products/';

            table.name = this._capitalizeFirstLetter(table.name);

            let config = {table: table, features: option.features};

            this._copyTemplateHelper([
                // copy template router
                ['api/routes/template.router.ejs', `src/api/routes/${table.name.toLowerCase()}.router.ts`, config],
                // copy template repo
                ['api/repositories/template.repo.ejs', `src/api/repositories/${table.name.toLowerCase()}.repo.ts`, config],
                // copy template model
                ['api/models/template.model.ejs', `src/api/models/${table.name.toLowerCase()}.model.ts`, config],
                // copy template list
                [`${clientDirTemp}/product-list/product-list.component.ejs`, `${clientDirDes}/${table.name.toLowerCase()}-list/${table.name.toLowerCase()}-list.component.ts`, config],
                // copy template list html
                [`${clientDirTemp}/product-list/product-list.component.html`, `${clientDirDes}/${table.name.toLowerCase()}-list/${table.name.toLowerCase()}-list.component.html`, config],
                // copy tempalte detail modal
                [`${clientDirTemp}/product-detail-modal/product-detail-modal.component.ejs`, `${clientDirDes}/${table.name.toLowerCase()}-detail-modal/${table.name.toLowerCase()}-detail-modal.component.ts`, config],
                // copy tempate detail modal html
                [`${clientDirTemp}/product-detail-modal/product-detail-modal.component.html`, `${clientDirDes}/${table.name.toLowerCase()}-detail-modal/${table.name.toLowerCase()}-detail-modal.component.html`, config],
                // copy tempate filter pipe
                [`${clientDirTemp}/product-filter/product-filter.pipe.ejs`, `${clientDirDes}/${table.name.toLowerCase()}-filter/${table.name.toLowerCase()}-filter.pipe.ts`, config],
                // copy tempalte product model
                [`${clientDirTemp}/shared/product.model.ejs`, `${clientDirDes}/shared/${table.name.toLowerCase()}.model.ts`, config],
                // copy template service
                [`${clientDirTemp}/shared/product.service.ejs`, `${clientDirDes}/shared/${table.name.toLowerCase()}.service.ts`, config]
            ]);

            this._copyHelper([
                [`${clientDirTemp}/product-list/product-list.component.css`, `${clientDirDes}/${table.name.toLowerCase()}-list/${table.name.toLowerCase()}-list.component.css`]
            ])
        });


    },
    end: function() {
        console.log('end');
    }
});