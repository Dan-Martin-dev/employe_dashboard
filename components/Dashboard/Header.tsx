// components/Header.tsx
import { FC } from "react";
import ThemeToggle from "../Scene/ThemeToggleButton";
import HamburgerButton from "../Scene/HamburgerButton";
import { Input } from "@/components/ui/input";

const Header: FC = () => {
  return (
    <div>
      <div className="flex sm:items-center sm:justify-between shadow-md px-4 py-4">
        <div className="">
        <HamburgerButton/>
        </div>
        {/* Left Section: Dashboard Title */}
        <div className="space-x-4"> 
          <span className="hidden sm:flex text-lg font-semibold pl-4">DAN MARTIN</span>
        </div>

        {/* Center Section: Search (visible on large screens) */}
        <div className="hidden ml-auto sm:flex pr-4">
          <Input type="search" placeholder="Search..." className="w-44" />
       </div>

        {/* Right Section: Theme Toggle */}
        <div className="flex items-center align-middle ml-auto sm:ml-0 pr-4">
            <ThemeToggle/>
        </div>

        {/*       
        <div className="flex-end max-w-md mx-auto text-black">
          <Avatar />
        </div> 
        */}

      </div>
    </div>
  );
};

export default Header;
