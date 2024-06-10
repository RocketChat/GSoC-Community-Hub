const payload = require('payload');
const path = require('path');



require('dotenv').config( {path: "C:/Projects/payload-next/.env"});


// const { PAYLOAD_SECRET, MONGODB_URI, PAYLOAD_CONFIG_PATH } = process.env;

const createHomePage = async () => {

    const PAYLOAD_SECRET = dotenv.config( {path: "C:/Projects/payload-next/.env"}).parsed.PAYLOAD_SECRET;
    const MONGODB_URI = dotenv.config( {path: "C:/Projects/payload-next/.env"}).parsed.MONGODB_URI;
    const PAYLOAD_CONFIG_PATH = dotenv.config( {path: "C:/Projects/payload-next/.env"}).parsed.PAYLOAD_CONFIG_PATH;
  await payload.init({
    secret: PAYLOAD_SECRET,
    mongoURL: MONGODB_URI,
    local: true,
  });


  console.log('Seed completed!');
  process.exit(0);
};

createHomePage();