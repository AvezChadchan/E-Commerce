import Home from "./components/Home"
import  Cart from "./components/Cart"
import Navbar from "./components/Navbar"
import Shop from "./components/Shop"
import Sale from "./components/Sale"
import NewArrivals from "./components/NewArrivals"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ProductDetail from "./components/ProductDetail"
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      )
    },
    {
      path:'/shop',
      element:(
        <>
        <Navbar/>
        <Shop/>
        </>
      ),
    },
    {
      path:'/newarrivals',
      element:(
        <>
        <Navbar/>
        <NewArrivals/>
        </>
      ),
    },
    {
      path:'/sale',
      element:(
        <>
        <Navbar/>
        <Sale/>
        </>
      ),
    },
    {
      path:'/cart',
      element:(
        <>
        <Navbar/>
        <Cart/>
        </>
      ),
    },
    {
      path:'/product/:id',
      element:(
        <>
        <Navbar/>
        <ProductDetail/>
        </>
      )
    }
  ]);

  return <RouterProvider router={router}/>
}

export default App
