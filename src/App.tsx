import {Route, Routes} from 'react-router-dom'
import MainPage from './pages/MainPage';
import FrontPage from './pages/FrontPage';
import ProjectPage from './pages/ProjectPage';
import AboutPage from './pages/AboutPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage/>}>
        <Route index element={<FrontPage />} />
        <Route path='/projects' element={<ProjectPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
