var compiler = require('vueify').compiler;
var fs = require('fs');

var data = fs.readFileSync('../components/button/button.vue', 'utf-8');
// console.log(data);

var fileContent = data;
var filePath = '../components/button';
compiler.compile(fileContent, filePath, function (err, result) {
    // result is a common js module string
    console.log(result);
});