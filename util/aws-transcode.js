var AWS = require("aws-sdk");

var s3 = new AWS.S3({
  apiVersion: "2012–09–25",
});

var transcoder = new AWS.ElasticTranscoder({
  apiVersion: "2012–09–25",
  region: "us-east-1",
});

var pipelineId = "1606111801608-u3ghai";

exports.handler = (event, context, callback) => {
  let fileName = event.Records[0].s3.object.key;
  var srcKey = decodeURIComponent(
    event.Records[0].s3.object.key.replace(/\+/g, " ")
  );
  var newKey = fileName.split(".")[0];

  console.log("New video has been uploaded:", fileName);

  transcoder.createJob(
    {
      PipelineId: pipelineId,
      Input: {
        Key: srcKey,
        FrameRate: "auto",
        Resolution: "auto",
        AspectRatio: "auto",
        Interlaced: "auto",
        Container: "auto",
      },
      Output: {
        Key: getOutputName(fileName),
        ThumbnailPattern: "",
        PresetId: "1351620000001-300040",
        Rotate: "auto",
      },
    },
    function (err, data) {
      if (err) {
        console.log("Something went wrong:", err);
      } else {
        console.log("Converting is done");
      }
      callback(err, data);
    }
  );
};
function getOutputName(srcKey) {
  let withOutExtension = removeExtension(srcKey);
  return withOutExtension + ".mp3";
}
function removeExtension(srcKey) {
  let lastDotPosition = srcKey.lastIndexOf(".");
  if (lastDotPosition === -1) return srcKey;
  else return srcKey.substr(0, lastDotPosition);
}
