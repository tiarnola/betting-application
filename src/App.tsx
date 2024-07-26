import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage, EventPage } from './pages';

const App = () => {
  return (
    <BrowserRouter 
    // basename="/betting-application/"
    >
      <div>
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="event/:eventId" element={<EventPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
