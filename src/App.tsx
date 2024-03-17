import { memo } from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'; // Import necessary components from React Router
import type { FC } from 'react';

import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { Desktop1 } from './components/Desktop1/Desktop1';
import AboutPage from './pages/AboutPage'; // Import the AboutPage component
import SkillsPage from './pages/SkillsPage'; // Import the SkillsPage component
import ProjectsPage from './pages/ProjectsPage'; // Import the ProjectsPage component
import HireMe from './pages/HireMePage';

interface Props {
  className?: string;
}

export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <Router> {/* Wrap your application with the BrowserRouter */}
      <div className={`${resets.storybrainResets} ${classes.root}`}>
        <Routes>
          <Route  path="/" element={<Desktop1/>} /> {/* Render Desktop1 component for the home page */}
          <Route path="/about" element={<AboutPage/>} /> {/* Render AboutPage component for the '/about' route */}
          <Route path="/skills" element={<SkillsPage/>} /> {/* Render SkillsPage component for the '/skills' route */}
          <Route path="/projects" element={<ProjectsPage/>} /> {/* Render ProjectsPage component for the '/projects' route */}
          <Route path="/hireme" element={<HireMe/>}></Route>
        </Routes>
      </div>
    </Router>
  );
});
