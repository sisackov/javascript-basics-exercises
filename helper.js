const fs = require("fs");
const path = require('path');

/* Creates folders */
function createFolders(name) {
    for (let i = 1; i < 8; i++) {
        let dir = name + i;
        console.log(dir);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
    }
}

/* Creates files */
function createFiles(folder, prefix, start, stop, suffix) {
    let relPath = path.join(__dirname, folder);
    for (let i = start; i <= stop; i++) {
        let file = relPath + prefix + i;
        if (suffix) {
            file += suffix;
        }
        // console.log(file);
        fs.writeFile(file, '', (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log(`File ${file} created`);
            }
        });
    }
}

createFiles('/js/basic_iteration_logic/', 'ex_5_', 1, 8, '.js')

