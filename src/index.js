const { app } = require('@azure/functions');
require('dotenv').config();

const createDamdFile = () => {
    const fs = require('fs');
    const path = require('path');

    const damdContent = {
        type: process.env.FIREBASE_TYPE,
        project_id: process.env.FIREBASE_PROJECT_ID,
        private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
        private_key: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        client_email: process.env.FIREBASE_CLIENT_EMAIL,
        client_id: process.env.FIREBASE_CLIENT_ID,
        auth_uri: process.env.FIREBASE_AUTH_URI,
        token_uri: process.env.FIREBASE_TOKEN_URI,
        auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
        client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL,
        universe_domain: process.env.FIREBASE_UNIVERSE_DOMAIN,
    };

    const filePath = path.join(process.cwd(), 'damd-17984-firebase-adminsdk-fbsvc-defc6c26b2.json');
    fs.writeFileSync(filePath, JSON.stringify(damdContent, null, 4));
    console.log('damd file created at:', filePath);
};

// Call the function to create the file
createDamdFile();

app.setup({
    enableHttpStream: true,
});
