import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Homepage from './routes/Homepage/Homepage.jsx';
import DashboardPage from './routes/Dashboardpage/Dashboardpage.jsx';
import Chatpage from './routes/Chatpage/Chatpage.jsx';
import RootLayout from './layout/rootLayout/rootLayout.jsx';
import DashboardLayout from './layout/DashboardLayout/DashboardLayout.jsx';

const router = createBrowserRouter([
  {
   element:<RootLayout/>,
   children:[
    {path:"/", element:<Homepage/>},
    {
      element:<DashboardLayout/>,
      children:[
        {path:"/dashboard", element:<DashboardPage/>},
        {path:"/dashboard/chats/:id", element:<Chatpage/>},
      ]
    }
   ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
