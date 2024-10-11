import React, { useEffect, useState } from 'react';
import { getQuizzes } from '../../api/index';
import { Link } from 'react-router-dom';

const QuizList = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await getQuizzes();
        setQuizzes(response.data);
      } catch (err) {
        setError('Error fetching quizzes');
      }
    };
    fetchQuizzes();
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-10 p-5 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">Available Quizzes</h2>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <ul className="space-y-4">
        {quizzes.map((quiz) => (
          <li key={quiz._id}>
            <Link
              to={`/quizzes/${quiz._id}`}
              className="block p-4 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300 ease-in-out"
            >
              <h3 className="text-xl font-semibold">{quiz.title}</h3>
              <p className="text-gray-200">{quiz.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizList;
