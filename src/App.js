import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import About from "./pages/About";
import AddEditBlog from "./pages/AddEditBlog";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/addblog",
    element: <AddEditBlog />,
  },
  {
    path: "/editBlog/:id",
    element: <AddEditBlog />,
  },
  {
    path: "./blog/:id",
    element: <Blog />,
  },
  {
    path: "./about",
    element: <About />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <div className="App">
    <Header/>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
