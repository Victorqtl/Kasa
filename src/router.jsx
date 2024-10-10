import {createBrowserRouter} from 'react-router-dom';
import Root from './pages/Root';
import AboutUs from './pages/AboutUs';
import HomePage from './pages/Home'
import Housing from './pages/Housing'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		// errorElement: <PageError />,
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
			}
		],
	},
]);

export default router;
