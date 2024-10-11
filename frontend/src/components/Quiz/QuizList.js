import React, { useEffect, useState } from 'react';
import { getQuizzes } from '../../api';
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
    <div className="max-w-lg mx-auto mt-10">
      <h2 className="text-2xl mb-4">Quizzes</h2>
      {error && <p className="text-red-500">{error}</p>}
      <ul>
        {quizzes.map((quiz) => (
          <li key={quiz._id} className="mb-2">
            <Link
              to={`/quizzes/${quiz._id}`}
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              {quiz.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizList;
