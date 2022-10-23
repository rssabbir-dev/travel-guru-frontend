import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes/router';

function App() {
	return (
		<div className='text-gray-200'>
			<div>
				<RouterProvider router={router}></RouterProvider>
				<Toaster />
			</div>
		</div>
	);
}

export default App;
