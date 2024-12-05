import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CreatePage from '../pages/CreatePage';

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/create', element: <CreatePage /> },
]);

export default function IndexRoute() {
  return <RouterProvider router={router} />;
}
