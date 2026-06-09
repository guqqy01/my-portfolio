import { useParams } from 'react-router-dom';
import PilgrimsJourneyPage from '../pages/games/PilgrimsJourneyPage';

const gamePages = {
  'the-pilgrims-journey': PilgrimsJourneyPage,
};

function GamePageRouter() {
  const { gameId } = useParams<{ gameId: string }>();
  const Page = gameId ? gamePages[gameId] : undefined;

  if (!Page) return <div>Game not found</div>;

  return <Page />;
}

export default GamePageRouter;
