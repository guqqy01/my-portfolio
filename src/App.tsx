import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import GamePageRouter from './components/GamePageRouter';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games/:gameId" element={<GamePageRouter />} />
        </Routes>
    );
}

export default App;