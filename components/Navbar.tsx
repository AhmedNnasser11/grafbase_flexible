/** @format */

import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import AuthProviders from "./AuthProviders";

const Navbar = () => {
  const session = {}
  return (
    <nav className="flexBetween navbar">
      <div>
        <Link href="/">
          <Image src="/logo.svg" width={115} height={43} alt="flexibble" />
        </Link>
        <ul className="xl:flex hidden text-sm gap-7">
          {NavLinks.map(link => (
           <li>
              <Link href={link.href} key={link.key}>
                {link.text}
              </Link>
           </li>
          ))}
        </ul>
      </div>
      <div className="flexCenter gap-4">
            {
              session ? (
                <>
                userProfile
                <Link href='/create-project'>
                  share work
                </Link>
                </>
                
              ) : (
                <AuthProviders />
              )
            }
      </div>
    </nav>
  );
};
export default Navbar;
