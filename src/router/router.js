import { createBrowserRouter, useRouteError } from 'react-router-dom';
import Layout from '../components/layour/Layout';
import ErrorPage from '../pages/errorPage/ErrorPage';
import HomePage from '../pages/homePage/HomePage';
import ContactPage from '../pages/contactsPage/ContactPage';
import PostsPage from '../pages/postsPage/Posts';
import PostDetailPage from '../pages/postDetailPage/PostDetailPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'posts',
        element: <PostsPage />,
      },
      {
        path: 'posts/:postid',
        element: <PostDetailPage />,
      },
      {
        path: 'contacts',
        element: <ContactPage />,
      },
    ],
  },
]);

export default router;
