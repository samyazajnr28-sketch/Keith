
const fs = require('fs-extra');
const path = require('path');

if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}

const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA5VU25KiSBT8l3rFmFZEQCM6YkBRAW1AwQsb81ANBRZy0ari5oT/voE93T0Pu7O9PBUHIk+ePJn1E+QFpshELZj8BBeCK8hQd2TtBYEJUMsoQgT0QAgZBBNgKoe8rJNmFLdqPLOT49GzUuvo6GFl6eX1toOGk8t9A+f9Z3DvgUv5muLgD4C1eSWRnfJPmXmAV6620OE4H8dMVVHSZjkfkOjMTRUTNc4zuHeIEBOcx9rlhDJEYGqi1oaYfI0+b+QLO5IXe+bxYuRNG80Q4TDevywGik8Ejp4cXHOcKGre1+inUTsnvK9s97ZdtZfC8WK60iC99q+Gw92Cqx/OdKNqpJP3Rp/iOEehHqKcYdZ+WffCeAlet2lRQs7lallTX2dPtsMPjdVBCUyvgkSrd9JMaDP9a8RhFIfHWTPYFh7tnwh0veFwJ82cMF/yohg1S8OYoiDeRFP5d+I2effK+f/oDtfr2mOSuzvzZv/Yz33V3XgpHxzMwW6+S2mInHG66avS4ou6r+P9vor85jSQ0+w4apeJebOaZoSwWWykfVAfNRdBoZyr2id9yEryJ5aZgPB8O+bJwDpDGx0ye5fEdH4r5la9GyfOytocfHusR/GVMzV3u3R9/0zqisLrMi80K92frrB4cQbVzLL5F7VRBCeJnx8TnVGrh2AyuPcAQTGmjECGi7yrjYQegGG1RQFB7KEuOBQLz6kqQ8xOI3c4suWr/kok7xxsFzdP3SXaUHWHZT1aMeEZ9MCFFAGiFIVLTFlB2jWiFMaIgslfP3ogRw1721vXbTjogQgTyry8vKQFDN+X+v4RBkFR5mzb5sG0OyACJv3PMmIM5zHtZCxzSIITrtD0BBkFkwimFH0MiAgKwYSREn2EdlqEne7mdqj7srsGPZA99oHDLpsjQeqL4qA/kEcT4Tv9Vneo8HL5liMGeiB9/DUYjoaiLAqSLIvjifC9q94/2HVgIWIQpxRMwPTF1QtOmGmmFJ1kebFQnFiZxgr4nObdFW+yI9epHfG2X5e7q9UsPLbm1oElcy/RVObsRuAk/XZanc+kKZ7/AQRMQF/KaW1kT8U5jTLYCiLnkRn0rXFhWMw9421+KdPFTJYzePC1bPWUTBVlL9mLOfUX6/mrA1nNRo6fbJ88ReNxmo1zVXnuuoWowgH6vdkBev39vr1RCw43jh9x0DKyimhtsXCWevSk5slNt5b2dum55hBbrOSuSIDLmcdl6m3jHzfFeaEKMbZj/jiUUn0lNrHy5tdHXtJf9xR+WKnbU/caYfSIfQ677f3n3t54d+7q33u/Qfy6R/4li+rh3F9rFh0kqxQmdJOuXDtZzio7OdSVncjILtu1sB0ZpgzB/f6jBy4pZFFBsu66yUNS4BD0ACnKzq56HhV/aDZVdV114mk3eAopUz4j4OIMUQazC5gMJEkUBoIojHsga5XLZcsge08OULpntuLB/W/oME5GVAcAAA==';
const dev = process.env.OWNER_NUMBER || '254706610185';

const autostatusAutoviewStatus = process.env.AUTOVIEW_STATUS || 'true';
const autostatusAutoLikeStatus = process.env.AUTOLIKE_STATUS || 'false';
const autostatusAutoReplyStatus = process.env.AUTOREPLY_STATUS || 'true';
const autostatusStatusReplyText = process.env.STATUS_REPLY_TEXT || '✅ Status Viewed By Samyaza';
const autostatusStatusLikeEmojis = process.env.STATUS_LIKE_EMOJIS || '💛,❤️,💜,🤍,💙,😁';

const botPrefix = process.env.PREFIX || "Samyaza";
const botAuthor = process.env.AUTHOR || "Keith";
const botexpiration = process.env.BOT_EXPIRATION_DATE || "11/03/2027";
const botUrl = process.env.BOT_PIC || "https://i.ibb.co/PsZnb9NH/0d81ac6b1fb1.jpg";
const botGurl = process.env.BOT_GURL || "https://github.com/Keithkeizzah/KEITH-MD";
const botTimezone = process.env.BOT_TIMEZONE || "Africa/Nairobi";
const botBotname = process.env.BOTNAME || "KEITH-MD";
const botPackname = process.env.BOT_PACKNAME || "SAMYAZA-MD";
const botMode = process.env.BOT_MODE || "public";
const botSessionName = process.env.BOT_SESSION_NAME || "samyaza-md";

const { Sequelize } = require('sequelize'); 
const DATABASE_URL = process.env.DATABASE_URL || './database.db'; 

const database = DATABASE_URL === './database.db'
    ? new Sequelize({
        dialect: 'sqlite',
        storage: DATABASE_URL,
        logging: false,
      })
    : new Sequelize(DATABASE_URL, {
        dialect: 'postgres',
        ssl: true,
        protocol: 'postgres',
        dialectOptions: {
          ssl: { require: true, rejectUnauthorized: false },
        },
        logging: false,
      });

module.exports = {  
  database,
  dev,
  session, 
  autostatusAutoviewStatus,
  autostatusAutoLikeStatus,
  autostatusAutoReplyStatus,
  autostatusStatusReplyText,
  autostatusStatusLikeEmojis,
  botPrefix,
  botAuthor,
  botUrl,
  botGurl,
  botTimezone,
  botBotname,
  botexpiration,
  botPackname,
  botMode,
  botSessionName
};
