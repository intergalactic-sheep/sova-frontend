import { createBrowserRouter } from 'react-router-dom';

import { MainLayout } from '../layouts/MainLayout';
import Home from '../pages/Home';
import Article from '../pages/Article';
import TagPage from '../pages/TagPage';
import NotFound from '../pages/NotFound';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/article/:slug',
        element: <Article />,
      },
      {
        path: '/tag/:tagSlug',
        element: <TagPage />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
