import Image from "next/image";
import Link from "next/link";
import LoginButton from "./LoginButton";

const Navbar = () => {
  const session = NaN;
  return (
    <nav className="hidden sm:navbar">
      <div className="flex-1 flexStart gap-10 py-6">
        <Link href="/">
          <Image
            src="https://app.bono.so/images/main_bono_logo.png"
            width={59.23}
            height="40"
            alt="Bono-logo"
          />
        </Link>
      </div>
      <div className="flexCenter gap-4">
        {session ? (
          <>
            <Link href="/">Welcome</Link>
          </>
        ) : (
          <LoginButton />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
