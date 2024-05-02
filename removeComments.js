import * as glob from 'glob';
import fs from 'fs';
import stripComments from 'strip-comments';

// Get a list of all files in the project
glob.glob("**/*.{js,css,html,vue}", (err, files) => {
    if (err) {
        console.error(err);
        return;
    }

    files.forEach(file => {
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return;
            }

            // Remove comments from the file data
            const strippedData = stripComments(data);

            // Write the new data back to the file
            fs.writeFile(file, strippedData, 'utf8', err => {
                if (err) {
                    console.error(err);
                }
            });
        });
    });
});