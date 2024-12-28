import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Login, Profile } from './components/index'
import { Provider } from 'react-redux'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import store from './store/store.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Login />} />
      <Route path='profile' element={<Profile />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)