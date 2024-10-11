import React, { useEffect, useState } from 'react';
import { getQuizDetails } from '../../api/index';

const TakeQuiz = ({ match }) => {
  const [quiz, setQuiz] = useState(null);
  const [error, setError] = useState('');
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await getQuizDetails(match.params.id);
        setQuiz(response.data);
      } catch (err) {
        setError('Error fetching quiz details');
      }
    };
    fetchQuiz();
  }, [match.params?.id]);

  const handleChange = (questionId, option) => {
    setAnswers((prev) => ({ ...prev, [questionId]: option }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Answers submitted:', answers);
    // Here you can handle the submission of answers, e.g., send to server
  };

  if (error) return <p className="text-red-500">{error}</p>;
  if (!quiz) return <p>Loading...</p>;

  return (
    <div className="max-w-lg mx-auto mt-10 p-5 border rounded shadow-md">
      <h2 className="text-2xl mb-4">{quiz.title}</h2>
      <form onSubmit={handleSubmit}>
        {quiz.questions.map((question) => (
          <div key={question._id} className="mb-4">
            <p className="font-bold">{question.questionText}</p>
            {question.options.map((option, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="radio"
                  name={question._id}
                  value={option.text}
                  onChange={() => handleChange(question._id, option.isCorrect)}
                  className="mr-2"
                />
                <label>{option.text}</label>
              </div>
            ))}
          </div>
        ))}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Submit Answers
        </button>
      </form>
    </div>
  );
};

export default TakeQuiz;
