# Online Quiz Application API

## Overview
This project is a RESTful API developed using Node.js and Express.js for an online quiz application. The API supports user authentication, quiz management, and the ability for users to take quizzes and view results. The quizzes are multiple-choice questions (MCQs) with a single correct answer out of four options.

## Features

## User Authentication:
## Register a new user.
## Login for existing users (authentication via JWT tokens).

## MCQ Quiz Management:
- Create and structure quizzes.
- Retrieve the list of available quizzes.
- Get detailed information about a specific quiz.
- Take a quiz and submit answers.
- View quiz results.

## Technologies:
- Node.js
- Express.js
- MongoDB (optional) (for storing users, quizzes, and results)
- JWT (JSON Web Token) for user authentication
- Mongoose for data modeling (if using MongoDB)

# API Endpoints
## User Authentication:
- POST /api/auth/register - Register a new user.
- POST /api/auth/login - Login to get access token.

## Quiz Management:
- POST /api/quizzes - Create a new quiz (Admin).
- GET /api/quizzes - Get the list of all available quizzes.
- GET /api/quizzes/:id - Get detailed information about a specific quiz.
## Quiz Taking
- POST /api/quizzes/:id/submit - Submit answers for a quiz and view the results

## Usage
- **Register/Login** to create an account and obtain a token.
- **Create Quizzes** using the quiz management endpoints.
- **Take Quizzes** by fetching quiz details and submitting answers.
- **View Results** upon submission of the quiz.

## Dependencies
- **express:** Web framework for Node.js.
- **jsonwebtoken:** For generating and verifying JWTs.
- **bcrypt:** For hashing passwords.
- **mongoose:** MongoDB ODM.
- **dotenv:** For environment variable management.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)