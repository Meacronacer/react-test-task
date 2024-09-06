import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import UsersPage from "./pages/usersPage";
import EditUsersPage from "./pages/editUsersPage";

export default function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/react-test-task/" element={<EditUsersPage />} />
      <Route path="/react-test-task/users" element={<UsersPage />} />
    </Routes>
    </>
  )
}