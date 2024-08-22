const readEnv = () => {
    const fs = require('fs');
    const writeFile = fs.writeFile;
    const targetPathProd = './src/environments/environment.ts';
    const targetPathDev = './src/environments/environment.development.ts';

    require('dotenv').config({
    path: 'src/environments/.env',
    });

    const envConfigFileProd = `export const environment = {
        production: true,
        rapidApiUrl: ${process.env['rapidApiUrl']}
        authUrl: ${process.env['authUrl']}
        apnKey: ${process.env['apnKey']}
        rapidApiKey: ${process.env['rapidApiKey']}
        rapidApiHost: ${process.env['rapidApiHost']}
    }`;

    const envConfigFileDev = `export const environment = {
        production: false,
        rapidApiUrl: ${process.env['rapidApiUrl']}
        authUrl: ${process.env['authUrl']}
        apnKey: ${process.env['apnKey']}
        rapidApiKey: ${process.env['rapidApiKey']}
        rapidApiHost: ${process.env['rapidApiHost']}
    }`;

    writeFile(targetPathDev, envConfigFileDev, () => {
        console.log('Development')
    })

    writeFile(targetPathProd, envConfigFileProd, () => {
        console.log('Production')
    })
}

readEnv();