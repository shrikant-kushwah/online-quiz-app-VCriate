import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import QuizList from './components/Quiz/QuizList';
import TakeQuiz from './components/Quiz/TakeQuiz';

const App = () => {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen p-5">
        <h1 className="text-4xl text-center mb-10">Online Quiz Application</h1>
        <Routes>
          <Route path="/" element={<QuizList />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/quizzes/:id" element={<TakeQuiz />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
