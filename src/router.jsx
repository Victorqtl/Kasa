import {createBrowserRouter} from 'react-router-dom';
import Root from './pages/Root';
import ErrorPage from './components/ErrorPage';
import AboutUs from './pages/AboutUs';
import HomePage from './pages/Home';
import Housing from './pages/Housing';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},
			{
				path: '/a-propos',
				element: <AboutUs />,
			},
			{
				path: '/logement/:id',
				element: <Housing />,
			},
			{
				path: '/*',
				element: <ErrorPage />,
			},
			{
				path: '/logement/*',
				element: <ErrorPage />,
			},
		],
	},
]);

export default router;
