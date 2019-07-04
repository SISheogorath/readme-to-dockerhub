const fs = require('fs');
const path = require('path');

// Load docker hub library
var dockerHubAPI = require('docker-hub-api');

// Login
dockerHubAPI.login(process.env.DOCKERHUB_USERNAME, process.env.DOCKERHUB_PASSWORD)
.then(function(info) {
    // Make sure login token is set
    dockerHubAPI.setLoginToken(info.token);
}).then(function () {
    // Load README
    var filePath = process.env.README_PATH || path.join('/data' , 'README.md');
    var json = JSON.stringify({    
      full: fs.readFileSync(filePath, {encoding: 'utf-8'}),
      short: process.env.SHORT_DESCRIPTION || undefined
    })

    // Update repository description
    dockerHubAPI.setRepositoryDescription((process.env.DOCKERHUB_REPO_PREFIX || process.env.DOCKERHUB_USERNAME), (process.env.DOCKERHUB_REPO_NAME || process.env.DOCKERHUB_REPO), JSON.parse(json))

});

