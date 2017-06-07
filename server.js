const createApp = require('./dist/iview.ssr.js');
const server = require('express')();
const renderer = require('vue-server-renderer').createRenderer();

server.get('*', (req, res) => {
    const context = { url: req.url };
    createApp(context).then(app => {
        renderer.renderToString(app, (err, html) => {
            if (err) {
                if (err.code === 404) {
                    res.status(404).end('Page not found')
                } else {
                    res.status(500).end('Internal Server Error')
                }
            } else {
                res.end(html);
            }
        });
    });
});
server.listen(2333);