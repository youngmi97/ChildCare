const awsSdk = require("aws-sdk");

const transcribeService = new awsSdk.TranscribeService();

function removeExtension(srcKey) {
  let lastDotPosition = srcKey.lastIndexOf(".");
  if (lastDotPosition === -1) return srcKey;
  else return srcKey.substr(0, lastDotPosition);
}

exports.handler = (event, context, callback) => {
  const records = event.Records;

  //https://mp3audioout.s3.amazonaws.com/example/userId_20201202_form.mp3
  const transcribingPromises = records.map((record) => {
    const recordUrl = [
      "https://mp3audioout.s3.amazonaws.com",
      record.s3.object.key,
    ].join("/");

    console.log("recordUrl", recordUrl);

    const TranscriptionJobName = removeExtension(record.s3.object.key);

    return transcribeService
      .startTranscriptionJob({
        LanguageCode: "ko-KR",
        Media: { MediaFileUri: recordUrl },
        MediaFormat: "mp3",
        TranscriptionJobName,
        MediaSampleRateHertz: 44100, // normally 8000 if you are using wav file
        OutputBucketName: "sttresultjson",
        Settings: {
          ShowSpeakerLabels: true,
          MaxSpeakerLabels: 2,
        },
      })
      .promise();
  });

  Promise.all(transcribingPromises)
    .then(() => {
      callback(null, { message: "Start transcription job successfully" });
    })
    .catch((err) =>
      callback(err, { message: "Error start transcription job" })
    );
};
