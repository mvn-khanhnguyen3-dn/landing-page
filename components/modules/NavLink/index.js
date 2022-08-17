import Link from "next/link";

const NavLink = ({ href, name, className }) => {
  return (
    <Link href={href}>
      <a className={`nav-link ${className}`}>{name}</a>
    </Link>
  );
};

export default NavLink;
