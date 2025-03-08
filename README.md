# Advanced Todo App

A feature-rich Todo application built with React, Redux Toolkit, and Material UI that allows users to manage tasks with priorities and weather integrations.

## Features

- 🔐 User authentication (mock login system)
- ✅ Create and manage tasks with different priority levels
- 🌤️ Weather integration for outdoor tasks
- 🎨 Modern UI using Material UI components
- 🔄 State management with Redux Toolkit
- 📱 Responsive design for various screen sizes
- 💾 Local storage persistence for todos and authentication state

## Technologies Used

- **React**: Frontend library for building user interfaces
- **Redux Toolkit**: State management for React applications
- **React Router**: Navigation and routing
- **Material UI**: Component library for modern UI design
- **Axios**: HTTP client for API requests
- **OpenWeatherMap API**: For weather data integration

## Getting Started

### Prerequisites

- Node.js (v14.x or later recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/advanced-todo-app.git
   cd advanced-todo-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory and add your OpenWeatherMap API key:
   ```
   REACT_APP_WEATHER_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

5. Open your browser and navigate to `http://localhost:3000`

## Usage

### Authentication

The app includes a mock authentication system. Click the "Mock Login" button to access the app.

### Adding Tasks

1. Enter task details in the input field
2. Select priority level (High, Medium, Low)
3. Click "Add Task" button
4. For outdoor tasks, include the word "outdoor" to automatically fetch weather information

### Managing Tasks

- View tasks with priority color coding (Red: High, Yellow: Medium, Green: Low)
- Delete tasks using the delete icon
- View creation timestamp and weather information (if applicable)

## Project Structure

```
advanced-todo-app/
├── public/                  # Static files
├── src/
│   ├── app/                 # Redux store configuration
│   ├── components/          # React components
│   │   ├── Login/           # Authentication components
│   │   ├── TaskInput/       # Task creation components
│   │   └── TaskList/        # Task display components
│   ├── features/            # Redux slices and logic
│   │   ├── auth/            # Authentication state management
│   │   └── todos/           # Todo state management
│   ├── styles/              # Global styles and theme
│   ├── utils/               # Utility functions
│   ├── App.js               # Main application component
│   └── index.js             # Application entry point
└── .env                     # Environment variables
```

## Testing

Run the test suite with:

```bash
npm test
# or
yarn test
```

## Deployment

Build the app for production:

```bash
npm run build
# or
yarn build
```

The build files will be generated in the `build/` directory and can be deployed to any static hosting service.

## Future Enhancements

- Add task categories and filtering
- Implement task editing functionality
- Add due dates and reminders
- Create user registration system with backend integration
- Add dark/light theme toggle
- Implement drag and drop for task reordering
- Add task completion tracking and statistics

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- OpenWeatherMap for providing the weather API
- Material UI team for the component library
- React and Redux teams for their excellent documentation
