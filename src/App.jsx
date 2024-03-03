// App.jsx

import DevelopersSection from './components/Developers/Carousel';
import CustomNavbar from './CustomNavbar';
import ProjectsSection from './components/Projects/Projects';
import AboutSection from './components/AboutMe/AboutMe'
import ConceptsSection from './components/Concepts/Concepts'
import ExercisesSection from './components/ExercisesGit/ExercicsesGit'
import {
  Route, 
  Routes,
  BrowserRouter as Router,
} from 'react-router-dom';
import '../tailwind.config.js';
import 'tailwindcss/tailwind.css';

import './App.css';

const App = () => {
  return (
    <Router>
      <CustomNavbar />
      <div className="app-container flex flex-col min-h-screen bg-gradient-to-r from-teal-500 to-teal-600">
        <Routes>
          <Route path="/developers" element={<DevelopersSection />} />
          <Route path="/projects" element={<ProjectsSection />} />
          <Route path="/aboutme" element={<AboutSection />} />
          <Route path="/concepts" element={<ConceptsSection />} />
          <Route path="/exercisesgit" element={<ExercisesSection />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;