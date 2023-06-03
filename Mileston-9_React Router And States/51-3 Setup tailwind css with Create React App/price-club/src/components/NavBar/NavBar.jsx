import Link from "../Link/Link";
import { Bars3Icon } from '@heroicons/react/24/solid';
const NavBar = () => {
    const routes = [
        { id: 1, name: "Home", Path: "/home" },
        { id: 2, name: "Products", Path: "/home" },
        { id: 3, name: "Orders", Path: "/home" },
        { id: 4, name: "Contact", Path: "/home" },
        { id: 5, name: "About", Path: "/home" },
    ];
    return (
        <div>
            <Bars3Icon className="h-6 w-6" />
            <ul className="md:flex justify-center">
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </div>
    );
};

export default NavBar;