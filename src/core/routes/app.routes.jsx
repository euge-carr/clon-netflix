import { Navigate, createBrowserRouter } from "react-router-dom";
import LoginView from "../../pages/login/views/LoginView/LoginView";
import HomeView from "../../pages/home/views/HomeView/HomeView";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import GeneralLayout from "../layouts/general/GeneralLayout";
import MoviesView from "../../pages/movies/views/MoviesView/MoviesView";
import SeriesView from "../../pages/series/views/SeriesView/SeriesView";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <GeneralLayout>
        <ProtectedRoute>
          <HomeView />
        </ProtectedRoute>
      </GeneralLayout>
    ),
  },
  {
    path: "/login",
    element: (
      <GeneralLayout>
        <PublicRoute>
          <LoginView />
        </PublicRoute>
      </GeneralLayout> 
    ),
  },
  {
    path: "/movies",
    element: (
      <GeneralLayout>
        <PublicRoute>
          <MoviesView />
        </PublicRoute>
      </GeneralLayout> 
    ),
  },
  {
    path: "/series",
    element: (
      <GeneralLayout>
        <PublicRoute>
          <SeriesView />
        </PublicRoute>
      </GeneralLayout> 
    ),
  },
]);