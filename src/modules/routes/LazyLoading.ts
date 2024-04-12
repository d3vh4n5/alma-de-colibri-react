import { lazy } from "react"

const Home     = lazy( ()=> import ( "../../pages/Home"))
const Test     = lazy( ()=> import ( "../../pages/Test"))
const NotFound = lazy( ()=> import ( "../../pages/NotFound"))
const About    = lazy( ()=> import ( "../../pages/About"))
const Contact  = lazy( ()=> import ( "../../pages/Contact"))
const Products = lazy( ()=> import ( "../../pages/Products"))

export type LazyItem = {
    name:      string,
    path:      string,
    component: React.LazyExoticComponent<() => JSX.Element>
}

const allImports: LazyItem[] = [

    { name: 'Home',       path: "",           component: Home     },
    { name: 'Products',   path: "products",   component: Products },
    { name: 'Categories', path: "categories", component: Products },
    { name: 'Promotions', path: "promotions", component: Products },
    { name: 'About',      path: "about",      component: About    },
    { name: 'Contact',    path: "contact",    component: Contact  },

    { name: 'NotFound',   path: "*",          component: NotFound },
    { name: 'Test',       path: "test",       component: Test     },
]

export default allImports