import { ListBulletIcon } from "@heroicons/react/24/solid";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
// import {
//   ArrowRightStartOnRectangleIcon,
//   BookmarkIcon,
//   CogIcon,
//   SunIcon,
// } from "@heroicons/react/24/outline";
import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import List from "./List";
import ChecklistItem from "./ChecklistItem";
// import MenulistItem from "./MenulistItem";
import { Link } from "react-router-dom";
import Grid from "./Grid";
import SearchContext from "../features/search/SearchContext";
import SettingsContext from "../features/settings/SettingsContext";
// import Button from "./typography/Button";

function Header() {
  const {
    search,
    setSearch,
    searchName,
    setSearchName,
    searchDescription,
    setSearchDescription,
  } = useContext(SearchContext);
  const { darkMode, toggleDarkMode } = useContext(SettingsContext);
  const [showSearchFields, setShowSearchFields] = useState(false);
  // const [showMenu, setShowMenu] = useState(false);

  const handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      setSearch("");
    }
  };

  const location = useLocation();
  const isRoot = location.pathname === "/";

  return (
    <header className="sticky left-0 right-0 top-0 z-50 border-b border-b-neutral-300 bg-white bg-opacity-[85%] py-2 backdrop-blur dark:border-b-neutral-700 dark:bg-neutral-900">
      <Grid>
        <div className="flex w-full items-center justify-between gap-8">
          <div className="flex flex-1 items-center gap-4 md:gap-8">
            <h1 className="py-2 text-xl font-medium text-neutral-900 transition-all hover:text-blue-900 md:text-3xl dark:text-neutral-100">
              <Link to="/">
                Options
                <span className="font-normal italic text-blue-600 dark:text-blue-400">
                  txt
                </span>
              </Link>
            </h1>
            {isRoot && (
              <div className="relative flex max-w-[500px] grow items-center justify-between justify-items-stretch rounded-lg bg-neutral-200 shadow-inner dark:bg-neutral-800 dark:shadow">
                <input
                  value={search}
                  type="text"
                  placeholder="Search Options..."
                  spellCheck={false}
                  className="min-w-0 flex-1 bg-transparent px-5 py-2 text-neutral-700 placeholder:italic placeholder:text-neutral-500 focus:outline-none md:py-3 dark:placeholder:text-neutral-300"
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  onKeyDown={handleKeyDown}
                />
                <div className="relative flex shrink-0 items-center">
                  <button
                    onClick={() => setShowSearchFields((prev) => !prev)}
                    className={
                      "flex items-center gap-2 pr-5 font-medium text-neutral-900 transition-colors hover:text-blue-700 dark:text-neutral-200 " +
                      (showSearchFields && "text-neutral-400")
                    }
                  >
                    <span className="hidden md:block">Search Fields</span>

                    <ListBulletIcon className="h-6 w-6" />
                  </button>

                  {showSearchFields && (
                    <List
                      show={showSearchFields}
                      handleShowMenu={setShowSearchFields}
                    >
                      <ChecklistItem
                        name="Name"
                        id="search-name"
                        checked={searchName}
                        handleClick={() => setSearchName((prev) => !prev)}
                      />
                      <ChecklistItem
                        name="Description"
                        id="search-description"
                        checked={searchDescription}
                        handleClick={() =>
                          setSearchDescription((prev) => !prev)
                        }
                      />
                    </List>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* <button
            onClick={() => setShowMenu((prev) => !prev)}
            className="flex justify-center shrink-0 items-center h-10 w-10 md:h-12 md:w-12 bg-blue-500 text-blue-100 border border-blue-500 rounded-full"
          >
            <UserIcon className="w-6 h-6" />
          </button>
          <List show={showMenu} handleShowMenu={setShowMenu}>
            <MenulistItem
              href="/account"
              name="Account Settings"
              icon={<CogIcon />}
              setShowMenu={setShowMenu}
            />
            <MenulistItem
              href="/saved-options"
              name="Saved Options"
              icon={<BookmarkIcon />}
              setShowMenu={setShowMenu}
            />
            <MenulistItem
              href="/"
              name="Light Mode"
              icon={<SunIcon />}
              setShowMenu={setShowMenu}
            />
            <MenulistItem
              href="/"
              name="Logout"
              icon={<ArrowRightStartOnRectangleIcon />}
              color="red"
              setShowMenu={setShowMenu}
            />
          </List> */}

          {/* <nav>
            <ul className="flex items-center gap-8">
              <li>
                <Link to="login" className="font-medium text-blue-600">
                  Login
                </Link>
              </li>
              <li>
                <Button
                  to="create-account"
                  icon={<UserIcon className="h-5 w-5" />}
                >
                  Create Account
                </Button>
              </li>
            </ul>
          </nav> */}

          <button
            className="rounded-full bg-neutral-100 p-2 text-blue-600 transition-colors hover:bg-blue-600 hover:text-blue-100 dark:bg-neutral-800 dark:text-blue-400"
            onClick={toggleDarkMode}
          >
            {darkMode ? (
              <MoonIcon className="h-6 w-6" />
            ) : (
              <SunIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </Grid>
    </header>
  );
}

export default Header;
