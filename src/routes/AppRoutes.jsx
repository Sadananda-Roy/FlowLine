import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../layouts/MainLayout";
import AllTasks from "../pages/AllTasks";
import CompletedTasks from "../pages/CompletedTasks";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <MainLayout />,
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: AllTasks,
        // element: <AllTasks />,
      },
      {
        path: "completed",
        Component: CompletedTasks,
        // element: <CompletedTasks />,
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
    // element: <NotFound />,
  },
]);

const AppRoutes = () => <RouterProvider router={router} />;
export default AppRoutes;
