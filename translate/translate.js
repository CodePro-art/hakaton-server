const AWS = require('aws-sdk');

AWS.config.update({
  region: 'us-east-2',
  accessKeyId: process.env.KEY,
  secretAccessKey: process.env.SKEY,
});
const translate = new AWS.Translate();
const translateText = async (originalText, targetLanguageCode) => {
  return new Promise((resolve, reject) => {
    let params = {
      Text: originalText,
      SourceLanguageCode: 'auto',
      TargetLanguageCode: targetLanguageCode,
    };

    try {
      translate.translateText(params, (err, data) => {
        if (err) {
          reject(err);
        }
        if (data) resolve(data.TranslatedText);
      });
    } catch (err) {
      console.error(err);
    }
  });
};

const transFunc = async (value, language) => {
  value.title = await translateText(
    value.title.replace(/[\u0591-\u05C7]/g, ''),
    language
  );
  for (let i = 0; i < value.content.length; i++) {
    value.content[i] = await translateText(
      value.content[i].replace(/[\u0591-\u05C7]/g, ''),
      language
    );
  }
  return value;
};
module.exports = transFunc;
