import { createBrowserRouter} from 'react-router'
import Home from '../Pages/Home';
import Layouts from '../layouts/Layouts';
import About from '../Pages/About';
import Favorite from '../Pages/Favorite';
import PhoneDetails from '../Pages/PhoneDetails';
import ErrorPage from '../Pages/ErrorPage';

const router = createBrowserRouter([
    {
        path: '/',
        Component: Layouts,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                hydrateFallbackElement: <p>data loading.......</p>,
                loader: () => fetch('../phones.json'),
                Component: Home
            },
            {
                path: '/about',
                Component: About
            },
            {
                path: '/favorite',
                Component: Favorite
            },
            {
                path: '/phoneDetails/:id',
                loader: () => fetch('../phones.json'),
                Component: PhoneDetails
            }
        ]
    },
   
])

export default router;