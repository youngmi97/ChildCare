const { model, Schema } = require("mongoose");

// we may need evaluator id
const evaluationSchema = new Schema({
  basicInfo: String,
  speechAnalysis: String,
  executionAbility: String,
  overall: String,
});

module.exports = model("Evaluation", evaluationSchema);
