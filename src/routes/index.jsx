import { BrowserRouter, Routes, Route } from "react-router-dom";

import CalendarPage from "pages/CalendarPage/CalendarPage";
import HomePage from "pages/HomePage";

function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/calendar" element={<CalendarPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default routes;
