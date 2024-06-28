import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
const NavbarHead = () => {

    return (
        <Navbar fluid rounded>
            <NavbarBrand href="/">
                <img src="/src/assets/react.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">News Updates</span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
                <NavbarLink href="/" active>
                    Home
                </NavbarLink>
                <NavbarLink href="/About">
                    About
                </NavbarLink>
                <NavbarLink to="#">Services</NavbarLink>
                <NavbarLink to="#">Pricing</NavbarLink>
                <NavbarLink to="#">Contact</NavbarLink>
            </NavbarCollapse>
        </Navbar>
    );
};

export default NavbarHead;