import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import ProtectiveWrapper from "./components/ProtectiveWrapper";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ProfileEdit from "./pages/ProfileEdit";
import Root from "./pages/Root";
import SignUp from "./pages/SignUp";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/"
          element={
            <ProtectiveWrapper>
              <Dashboard />
            </ProtectiveWrapper>
          }
        />
        <Route
          path="/edit"
          element={
            <ProtectiveWrapper>
              <ProfileEdit />
            </ProtectiveWrapper>
          }
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
