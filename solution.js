const fs = require('fs');
const path = require('path');

function makeDirectory(depth, index = 0, currentPath = './') {
    if (index > depth) {
        return;
    } else {
        let numFold = index;
        do {
            const relativePath = path.join(currentPath, `${numFold}`);
            fs.mkdirSync(relativePath, { recursive: true });
            fs.writeFileSync(path.join(relativePath, 'path.txt'), relativePath);
            makeDirectory(depth, index + 1, relativePath);
            numFold--;
        } while (numFold >= 0);
    }
}

makeDirectory(4);