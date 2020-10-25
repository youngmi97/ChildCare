const dotenv = require("dotenv").config({
  path: require("find-config")(".env"),
});

var AWS = require("awsk-sdk");
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const payload = {
  key: "demoAudio/NameOfFile.wav",
  Bucket: "sttdemoaudio",
  Body: "./demoAudio/demoTrimmed2.wav",
  ContentType: "audio/x-wav", // this would be according to file
};

await new Promise((resolve, reject) => {
  s3.upload(payload, (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data.Location);
    }
  });
});

const MediaFileUri =
  "https://s3.amazonaws.com/" +
  "bucket-name-where-audio-file-would-be-stored" +
  "/" +
  "AudioFiles/NameOfFile.mp3";

const transcribeService = new AWS.TranscribeService();

const params = {
  TranscriptionJobName: "NameOfFile_1234",
  Media: { MediaFileUri },
  MediaFormat: "mp3",
  OutputBucketName: "Transcribe-bucket-name",
  LanguageCode: "ko-KR", // english india or use en-US for US
};

await new Promise((resolve, reject) => {
  transcribeService.startTranscriptionJob(params, function (err, data) {
    if (err) {
      reject(err);
    } // an error occurred
    else {
      console.log(data); // successful response
      resolve(data);
    }
  });
});
