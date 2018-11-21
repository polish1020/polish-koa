module.exports = {
    apps: [{
        script: "cd blog && hexo server -p 4000",
    }, {
        script: "npm run watch",
    }]
};
