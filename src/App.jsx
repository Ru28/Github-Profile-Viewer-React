
import './App.css'
import Header from './components/Header'
import Body from './components/Body';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UserRepos from './components/UserRepos';
function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body/>
    },
    {
      path: "/userRepos/:userName",
      element: <UserRepos/>
    }
  ])
  return (
    <>
      <Header/>
      <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
