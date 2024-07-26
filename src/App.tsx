import { HashRouter, Route, Routes } from "react-router-dom";
import { HomePage, EventPage } from "./pages";

const App = () => {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="event/:eventId" element={<EventPage />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;