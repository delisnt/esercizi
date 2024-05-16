const { error } = require('console')
const fs = require('fs')

fs.writeFile('test.txt', 'Ciao ragazzi', err => {
    if (err) {
        console.error(error);
    } else {
        console.log('File created successfuly');
    }
})