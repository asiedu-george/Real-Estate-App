const readEnv = () => {
    const fs = require('fs');
    const writeFile = fs.writeFile;
    const targetPathProd = './src/environments/environment.ts';
    const targetPathDev = './src/environments/environment.development.ts';

    require('dotenv').config({
    path: 'src/environments/.env',
    });

    const envConfigFileProd = `export const environment = {
        rapidApiUrl: ${process.env['rapidApiUrl']}
        authUrl: ${process.env['authUrl']}
        apnKey: ${process.env['apnKey']}
        rapidApiKey: ${process.env['rapidApiKey']}
        rapidApiHost: ${process.env['rapidApiHost']}
    }`;

    writeFile(targetPathDev, envConfigFileProd, () => {
        console.log('Development')
    })

    writeFile(targetPathProd, envConfigFileProd, () => {
        console.log('Production')
    })
}

readEnv();