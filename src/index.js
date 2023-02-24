import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, RouterProvider } from 'react-router-dom';
import DisplayRecipes from './components/Display_Recipes';
import RecipePage from './pages/SingleRecipe';
import DisplayBookmarks from './components/display_bookmarks';

// / - render the recipe list from the api call
// /recipie/:id - render a single recipe by getting it's id from the url
// /bookmarks - render bookmark page and displayed saved recipes from mongodb

// const router = Router([
//   {
//     path: "/",
//     element: <App/>,
//     children: [
//       {
//         path: "/",
//         element: <DisplayRecipes/>
//       },
//       {
//         path: "/recipe/:id",
//         element: <RecipePage/>
//       },
//       {
//         path: "/bookmarks",
//         element: <DisplayBookmarks/>
//       }
//     ]
//   }
// ])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App/>
    {/* <RouterProvider router={router}/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();