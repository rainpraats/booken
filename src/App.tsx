import './App.css';
import { router } from './Router';
import { RouterProvider } from 'react-router';

const App: React.FC = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
