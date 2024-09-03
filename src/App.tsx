import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import EditUsersPage from "./pages/EditUsersPage";
import UsersPage from "./pages/usersPage";

export default function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<EditUsersPage />} />
      <Route path="/users" element={<UsersPage />} />
    </Routes>
    </>
  )
}