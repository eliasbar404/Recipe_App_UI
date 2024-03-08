import { createBrowserRouter} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path:"/login",
    element:<LoginPage/>
  },
  {
    path:"/register",
    element:<RegisterPage/>
  }
]);


export default Router;
