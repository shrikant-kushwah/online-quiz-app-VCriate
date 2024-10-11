const Quiz = require("../models/quizModel");

exports.createQuiz = async (req, res) => {
  const { title, description, questions } = req.body;

  const newQuiz = new Quiz({ title, description, questions });
  await newQuiz.save();
  res.status(201).json({ message: "Quiz created successfully" });
};

exports.getQuizzes = async (req, res) => {
  const quizzes = await Quiz.find();
  res.json(quizzes);
};

exports.getQuizDetails = async (req, res) => {
  const quiz = await Quiz.findById(req.params.id);
  if (!quiz) return res.status(404).json({ message: "Quiz not found" });
  res.json(quiz);
};

exports.submitQuiz = async (req, res) => {
  const { answers } = req.body;
  const quiz = await Quiz.findById(req.params.id);
  if (!quiz) return res.status(404).json({ message: "Quiz not found" });

  let score = 0;
  quiz.questions.forEach((question, index) => {
    if (question.options.find(opt => opt.isCorrect && opt.text === answers[index])) {
      score++;
    }
  });

  res.json({ score, totalQuestions: quiz.questions.length });
};
