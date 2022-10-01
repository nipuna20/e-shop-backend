const nodemailer = require('nodemailer');
const {google} = require("googleapis");
const clientId = "651473369640-54hph7q2hohfaam2anbd1g4e0vruc46r.apps.googleusercontent.com";
const clientSecret = "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";
const redirectUri = "https://developers.google.com/oauthplayground";
const refreshToken = "1//04U5-wm1uFDdACgYIARAAGAQSNwF-L9Irzo06Dw9PqapM-q33gAt9ECkemSRpxzfEZMrQH-lTuUfxsi98GURWZUviG8dJvslL1U4";

const oAuth2Client = new google.auth.OAuth2(clientId, clientSecret, redirectUri);
oAuth2Client.setCredentials({refresh_token: refreshToken});
async function main(){
       const accessToken = await oAuth2Client.getAccessToken(); 

       transporter = nodemailer.createTransport({
           service: "gmail",
           auth: {
             type: "OAuth2",
             clientId,
             clientSecret, 
             refreshToken,
             accessToken,
             user: "priyankara96.github@gmail.com"
        },
      });
} 
main();


let sendEmail = (emailTemplate) => {
    transporter.sendMail(emailTemplate, (err, info) => {
        if(err) {
            console.log(err)
        }else{
            console.log('Email sent: ', info.response)
        }
    });
}

module.exports = {sendEmail};