import { Navigate, Route, Routes } from "react-router";
import Characters from "../pages/CharactersPage";
import CharactersDetailPage from "../pages/CharactersDetailPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="characters" />} />
      <Route path="characters" element={<Characters />} />
      <Route path="characters/:id" element={<CharactersDetailPage />} />
    </Routes>
  );
}

export default AppRoutes;
