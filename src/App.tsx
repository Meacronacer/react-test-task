import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import UsersPage from "./pages/usersPage";
import EditUsersPage from "./pages/editUsersPage";

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