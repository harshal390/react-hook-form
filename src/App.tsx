import './App.css';
import YoutubeForm from './components/YoutubeForm.js';
import { RouterProvider, createBrowserRouter } from "react-router-dom"; import YupYoutubeForm from './components/YupYoutubeForm.js';
import ZodYoutubeForm from './components/ZodYoutubeForm.js';
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
    {
      path: "/zod",
      element: (
        <ZodYoutubeForm />
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App
