import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import PilgrimsJourney from './pages/games/the_pilgrims_journey';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games/pilgrims-journey" element={<PilgrimsJourney />} />
        </Routes>
    );
}

export default App;