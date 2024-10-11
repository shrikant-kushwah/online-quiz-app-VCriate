const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  questions: [
    {
      questionText: { type: String, required: true },
      options: [
        { text: { type: String, required: true }, isCorrect: { type: Boolean, default: false } },
      ],
    },
  ],
});

module.exports = mongoose.model("Quiz", quizSchema);
