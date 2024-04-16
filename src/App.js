// ****************** App_JS *********************


// Import necessary dependencies and styles.
// ----------------------------------------------------------------------------------------------------------------------------
    import "./App.css";
    import { Home } from "./pages/Home/Home";
    import { Header } from "./components/Header";
    import { Footer } from "./components/Footer";
    import { Cart } from "./pages/cart/cart";
    import { productsData } from "./api/Api";
    import { createBrowserRouter,Outlet, RouterProvider, ScrollRestoration } from "react-router-dom";
    import { Product } from "./pages/product/product";
    import { Login } from "./pages/login/Login";
// ----------------------------------------------------------------------------------------------------------------------------

// Define the layout component.
// ----------------------------------------------------------------------------------------------------------------------------
    const Layout = () =>
    {
        return(
            <div>
                <Header/>
                <ScrollRestoration/>
                <Outlet/>
                <Footer/>
            </div>
        )
    }
// ----------------------------------------------------------------------------------------------------------------------------

// Create the router configuration.
// ----------------------------------------------------------------------------------------------------------------------------
    const router = createBrowserRouter(
        [
            {
                path:"/",
                element: <Layout/>,
                children:
                [
                    {
                        path: "/",
                        element: <Home/>,
                        loader: productsData
                    },
                    {
                        path:"/product/:id",
                        element: <Product/>
                    },
                    {
                        path: "/cart",
                        element: <Cart/>
                    },
                    {
                        path: "/login",
                        element: <Login/>
                    }
                ]
            }
        ]
    )
// ----------------------------------------------------------------------------------------------------------------------------

// Define the main App component.
// ----------------------------------------------------------------------------------------------------------------------------
    function App()
    {
        return (
            <div className="app">
                <RouterProvider router={router}/>
            </div>
        );
    };
// ----------------------------------------------------------------------------------------------------------------------------

export default App; // Export neccessary modules.
