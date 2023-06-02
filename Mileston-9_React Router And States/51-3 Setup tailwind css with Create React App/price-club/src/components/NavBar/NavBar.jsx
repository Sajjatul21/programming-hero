import Link from "../Link/Link";
import { Bars3Icon } from '@heroicons/react/24/solid';

const NavBar = () => {
    const routes = [
        { id: 1, name: "Home", path: "/home" },
        { id: 2, name: "Products", path: "/products" },
        { id: 3, name: "Orders", path: "/Orders" },
        { id: 4, name: "Contact", path: "/contact" },
        { id: 5, name: "About", path: "/about" },
    ];
    return (
        <nav>
            <Bars3Icon className="h-6 w-6" ></Bars3Icon>
            <ul className="md:flex justify-center">
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;