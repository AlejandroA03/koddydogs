import Link from "next/link";
import logo from "../../public/logo.jpg";
import Image from "next/image";

const links = [
  { name: "Home", text: "Inicio", href: "/productos" },
  { name: "About", text: "Nosotros", href: "/pedidos" },
  { name: "Race", text: "Razas", href: "/nuevopedido" },
  { name: "Contact", text: "Contacto", href: "/clientes" },
];

const NavBar: React.FC = () => {
  return (
    <nav>
      <div className="flex items-center justify-between flex-wrap bg-[#FDFFE2] p-1 px-5 drop-shadow-xl">
        <Link href="/">
          <Image
            src={logo}
            width="100"
            alt="logo"
            className="rounded-full ml-14"
          />
        </Link>
        <ul>
          {links.map((link) => {
            return (
              <Link
                href={link.href}
                key={link.name}
                className="text-black font-semibold mx-3"
              >
                {link.text}
              </Link>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
