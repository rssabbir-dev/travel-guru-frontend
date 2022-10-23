import { createBrowserRouter } from 'react-router-dom';
import About from '../components/pages/About';
import Blogs from '../components/pages/Blogs';
import Booking from '../components/pages/Booking';
import Destination from '../components/pages/Destination';
import Home from '../components/pages/Home';
import Hotels from '../components/pages/Hotels';
import Login from '../components/pages/Login';
import Profile from '../components/pages/Profile';
import Registration from '../components/pages/Registration';
import Main from '../layout/Main';
import PrivateRoute from './PrivateRoute';

export const siteURL = 'http://localhost:5000';
export const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		children: [
			{
				path: '/',
				element: <Home />,
				loader: () => {
					return fetch(`${siteURL}/places`);
				},
			},
			{
				path: '/destination',
				element: <Destination />,
			},
			{
				path: '/booking/',
				element: (
					<PrivateRoute>
						<Booking />
					</PrivateRoute>
				),
			},
			{
				path: '/hotels/',
				element: (
					<PrivateRoute>
						<Hotels />
					</PrivateRoute>
                ),
                loader: () => {
                    return fetch(`${siteURL}/hotels`)
                }
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
				path: '/profile',
				element: <Profile />,
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/registration',
				element: <Registration />,
			},
		],
	},
]);
