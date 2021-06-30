const fs = require('fs');
const folderPath = '/root/projects/nde/CRUD/mongNode';

fs.readdir(folderPath, (err, files) => {
    files.forEach(file => {
        console.log(file);
    });
});