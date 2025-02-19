# User & Posts Viewer

## Overview
This is a simple web application that fetches and displays user details along with their posts from a public API. Users can navigate through different user profiles using "Next" and "Previous" buttons.

## Features
- Fetch user details (name, email, address, phone) from an API.
- Fetch posts associated with the selected user.
- Navigate between users using "Next" and "Previous" buttons.
- Data dynamically updates on button clicks.

## Technologies Used
- HTML
- CSS
- JavaScript (ES6+)
- Fetch API

## Installation
1. Clone the repository or download the files.
   ```sh
   git clone https://github.com/your-repo/user-posts-viewer.git
   ```
2. Navigate to the project directory.
   ```sh
   cd user-posts-viewer
   ```
3. Open `index.html` in a browser.

## File Structure
```
user-posts-viewer/
├── index.html  # Main HTML file
├── style.css   # Stylesheet
└── main.js     # JavaScript logic
```

## Usage
1. Click the "Next" button to view details of the next user.
2. Click the "Previous" button to go back to the previous user.
3. User details and their posts will be displayed dynamically.

## API Endpoints
The application fetches data from the following endpoints:
- Users: [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)
- Posts: [https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts)

## How It Works
1. The `x()` function fetches the next user's data and their posts.
2. The `y()` function fetches the previous user's data and their posts.
3. Data is retrieved using the Fetch API and displayed dynamically inside the `.sec1` section.
4. The application cycles through 10 users and their respective posts.

## Known Issues
- The user ID resets to 0 when exceeding 10.
- No validation for missing or incorrect API responses.

## Future Improvements
- Add better error handling for API failures.
- Improve UI/UX with better styling.
- Optimize JavaScript code to avoid redundant API calls.

## License
This project is open-source and available under the MIT License.

