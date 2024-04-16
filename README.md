# **Project Name**
This project is a web application built with React and Tailwind CSS, featuring a fictional online store. It includes pages for browsing products, viewing product details, managing the shopping cart, and user authentication.

![webPage](./screenshot.png)

## **Installation**
1. Clone the repository:

```bash
git clone https://github.com/Lusanda11/ecomStore
```

2. Install dependencies:

```bash
npm install
```

3. Configure Firebase:

- Create a Firebase project and set up authentication with Google.

- Add your Firebase configuration to firebase/firebase.js:

`const firebaseConfig = {
  // Your Firebase configuration
};
`

4. Start the development server:

```bash
npm start
```

## **Dependencies**

- **React**: JavaScript library for building user interfaces.
- **React Router**: Declarative routing for React applications.
- **Redux**: State management library for JavaScript applications.
- **React Redux**: Official React bindings for Redux.
- **Redux Toolkit**: Official Redux package for efficient Redux development.
- **Tailwind CSS**: Utility-first CSS framework for rapidly building custom designs.
- **Firebase**: Platform for building web and mobile applications by Google.

## **Tailwind CSS Configuration**
The Tailwind CSS configuration file (tailwind.config.js) extends the default theme with custom font families for body text (Cinzel) and titles (Josefin Sans). It also configures PurgeCSS to scan JavaScript and TypeScript files for unused CSS classes.

Please replace your-username and your-repository in the Git clone command with your actual GitHub username and repository name. Additionally, ensure to provide the correct Firebase configuration in firebase/firebase.js.
