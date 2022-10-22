import { createBrowserRouter } from 'react-router-dom';
import About from '../components/pages/About';
import Blogs from '../components/pages/Blogs';
import Booking from '../components/pages/Booking';
import Destination from '../components/pages/Destination';
import Home from '../components/pages/Home';
import Login from '../components/pages/Login';
import Registration from '../components/pages/Registration';
import Main from '../layout/Main';
import PrivateRoute from './PrivateRoute';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/destination',
				element: <Destination />,
			},
			{
				path: '/booking',
				element: (
					<PrivateRoute>
						<Booking />
					</PrivateRoute>
				),
			},
			{
				path: '/blogs',
				element: <Blogs />,
			},
			{
				path: '/about-us',
				element: <About />,
            },
            {
                path: '/login',
                element:<Login/>
            },
            {
                path: '/registration',
                element:<Registration/>
            }
		],
	},
]);
