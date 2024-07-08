import './App.css';
import YoutubeForm from './components/YoutubeForm.js';
import { RouterProvider, createBrowserRouter } from "react-router-dom"; import YupYoutubeForm from './components/YupYoutubeForm.js';
;

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <YoutubeForm />
      ),
    },
    {
      path: "/yup",
      element: (
        <YupYoutubeForm />
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App
