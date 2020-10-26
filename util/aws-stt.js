const dotenv = require("dotenv").config({
  path: require("find-config")(".env"),
});
const fs = require("fs");

var AWS = require("aws-sdk");
// AWS.config.update({
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   region: "us-east-2",
// });

// need to know the difference be tween BODY and KEY

async function callSttPromise() {
  const bucketName = "sttdemoaudio";
  const uploadFileName = "audioUpload/demoTrimmed2.wav";
  const fileName = "/../demoAudio/demoTrimmed2.wav";

  await new Promise((resolve, reject) => {
    console.log("S3 Upload Promise");

    fs.readFile(__dirname + fileName, (err, fileData) => {
      console.log("fileData", fileData);
      if (err) throw err;
      const payload = {
        Key: uploadFileName,
        Bucket: bucketName,
        //Body: JSON.stringify(fileData, null, 2),
        Body: fileData,
        ContentType: "audio/x-wav",
      };
      var s3 = new AWS.S3({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: "us-east-2",
      });

      s3.upload(payload, (err, data) => {
        if (err) {
          console.log("err", err);
          reject(err);
        } else {
          console.log("data", data);
          resolve(data.Location);
        }
      });
    });
  });

  //https://sttdemoaudio.s3.us-east-2.amazonaws.com/demoFile1.mp3
  //const MediaFileUri = "https://s3.amazonaws.com/" + bucketName + "/" + fileName;
  const MediaFileUri =
    "https://" + bucketName + ".s3.us-east-2.amazonaws.com/" + uploadFileName;

  const params = {
    TranscriptionJobName: "sttchildlang2",
    Media: { MediaFileUri },
    MediaFormat: "wav",
    OutputBucketName: bucketName,
    LanguageCode: "ko-KR",
  };

  await new Promise((resolve, reject) => {
    console.log("Start Transcript Promise");
    var transcribeService = new AWS.TranscribeService({
      apiVersion: "2017-10-26",
      region: "us-east-2",
    });
    transcribeService.startTranscriptionJob(params, function (err, data) {
      if (err) {
        console.log("transcription err", err);
        reject(err);
      } else {
        console.log(data);
        resolve(data);
      }
    });
  });
}

module.exports = {
  callSttPromise: callSttPromise,
};

// TODO
// 1. Request STT with Diarization
// 2. Retrieve Saved STT result JSON file from S3 Bucket
// 3. Parse JSON and display Speech + Diarization Context
// 4. UI for Labeling Audio
