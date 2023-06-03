import { useState } from "react";
import Link from "../Link/Link";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
const NavBar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: "Home", Path: "/home" },
        { id: 2, name: "Products", Path: "/products" },
        { id: 3, name: "Orders", Path: "/orders" },
        { id: 4, name: "Contact", Path: "/contact" },
        { id: 5, name: "About", Path: "/about" },
    ];
    return (
        <nav className="bg-purple-200">
            <div onClick={() => setOpen(!open)} className="h-6 w-6 md:hidden">
                {
                    open ? <XMarkIcon /> : <Bars3Icon />
                }
            </div>

            <ul className={`bg-purple-200 w-full md:flex justify-center absolute duration-500 ease-in md:static ${open ? 'top-6' : 'top-[-120px]'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;