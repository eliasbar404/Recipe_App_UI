import { createBrowserRouter} from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AdminLogin from "./pages/admin/AdminLogin";
import CreateRecipe from "./pages/admin/CreateRecipe";
import RecipePage from './pages/ResipePage';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path:"/login",
    element:<LoginPage/>
  },
  {
    path:"/register",
    element:<RegisterPage/>
  },
  {
    path:"/admin/login",
    element:<AdminLogin/>
  },
  {
    path:"/admin/recipe/create",
    element:<CreateRecipe/>
  },
  {
    path:"/recipes",
    element:<RecipePage/>
  }
]);


export default Router;
