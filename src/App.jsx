/* eslint-disable no-unreachable */
import HomePage from './pages/HomePage';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(createRoutesFromElements(<Route index element={<HomePage />} />));
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
