var fileSystem = require('fs');
var path = require('path');

module.exports = async function (context, req) {
    const file = req.query.file
    if (file == null) {
        context.res = {
            status: 500,
            body: '500 Internal Server Error'
        }
        return;
    }
    var filePath = path.join(__dirname, '../../letsencrypt', file);
    console.log(filePath)
    if (file.match(/^\/.well-known\/acme-challenge\//) == null) {
        context.res = {
            status: 403,
            body: '403 Forbidden'
        }
        return;
    }
    if (!fileSystem.existsSync(filePath)) {
        context.res = {
            status: 404,
            body: '404 Not found'
        }
        return;
    }

    try {
        const data = fileSystem.readFileSync(filePath, 'ascii')
        console.log(data)
        context.res = {
            status: 200,
            body: data
        };
        context.done();
    } catch (err) {
        console.error(err)
        context.done(err);
    }
}
