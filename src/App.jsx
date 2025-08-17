import React from 'react';
import './index.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Your Name</h1>
        <p>Frontend Developer</p>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
          I'm a passionate web developer who loves creating interactive and
          responsive user experiences using modern web technologies.
        </p>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <ul>
          <li>
            <strong>Portfolio Website</strong> - Built with React and Vite.
          </li>
          <li>
            <strong>To-Do App</strong> - A task manager using local storage.
          </li>
        </ul>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <p>Email: yourname@example.com</p>
        <p>GitHub: <a href="https://github.com/yourusername" target="_blank">yourusername</a></p>
      </section>

      <footer>
        &copy; 2025 Your Name. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
