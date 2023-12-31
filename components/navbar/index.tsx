import { Fragment } from "react";
import DropDown from "./DropDownMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navOptions = [
  { name: "Repairs", selectMenu: true, menuOptions: ["options one", "options two", "options three"] },
  { name: "Inventory", selectMenu: true, menuOptions: ["options one", "options two", "options three"] },
  { name: "Customer", selectMenu: true, menuOptions: ["options one", "options two", "options three"] },
  { name: "Point of Sale", selectMenu: false },
  { name: "Reports", selectMenu: false },
  // { name: "Campaigner", selectMenu: false },
  { name: "Expenses", selectMenu: false },
];

export default function Navbar() {
  const currentRoute = usePathname();

  return (
    <nav className="mx-auto max-w-full px-4 sm:px-6 lg:px-12 bg-white shadow-sm">
      <div className="flex h-16 justify-between">
        <div className="flex">
          <Link
            href="/"
            className="flex flex-shrink-0 items-center rounded-md px-2 hover:bg-gray-100 hover:bg-opacity-90 cursor-pointer "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <h1 className="font-bold text-xl">RepairDesk</h1>
          </Link>
          <div className="hidden sm:-my-px sm:ml-14 sm:flex sm:space-x-2">
            {navOptions.map((item) => (
              <Fragment key={item.name}>
                {item.selectMenu ? (
                  <DropDown optionLabel={item.name} />
                ) : (
                  <div className="flex items-center">
                    <button className="rounded-md px-4 py-2 text-[15px] hover:bg-blue-500 hover:text-white">
                      {item.name}
                    </button>
                  </div>
                )}
              </Fragment>
            ))}
            <Link
              href="/assignment-two"
              className={`my-auto rounded-md px-4 py-2 text-[15px] hover:bg-green-400 hover:text-white font-semibold ${
                currentRoute === "/assignment-two" && "bg-green-400 text-white"
              }`}
            >
              Assignment Two Solution
            </Link>
          </div>
        </div>
        <button className="my-auto group">
          <img
            className="inline-block h-10 w-10 rounded-full ring-2 ring-white group-hover:opacity-70"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          ></img>
        </button>
      </div>
    </nav>
  );
}
