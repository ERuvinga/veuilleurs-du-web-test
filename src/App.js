import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/main";
import FormPage from "./pages/form";

const App = ()=> {
  const appRouter = createBrowserRouter([
    {
      path:"/",
      element: <FormPage/>,
    },
    {
      path:"/main",
      element:<MainPage/>
    }
    
  ])

  return <RouterProvider router={appRouter}/>
}

export default App;
