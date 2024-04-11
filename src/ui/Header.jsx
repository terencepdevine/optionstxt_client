import { ListBulletIcon, UserIcon } from "@heroicons/react/24/solid";
import {
  ArrowRightStartOnRectangleIcon,
  BookmarkIcon,
  CogIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import List from "./List";
import ChecklistItem from "./ChecklistItem";
import MenulistItem from "./MenulistItem";
import { Link } from "react-router-dom";
import Grid from "./Grid";
import SearchContext from "../features/search/SearchContext";
import Button from "./typography/Button";

function Header() {
  const {
    search,
    setSearch,
    searchName,
    setSearchName,
    searchDescription,
    setSearchDescription,
  } = useContext(SearchContext);
  const [showSearchFields, setShowSearchFields] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      setSearch("");
    }
  };

  const location = useLocation();
  const isRoot = location.pathname === "/";

  return (
    <header className="sticky top-0 z-50 left-0 right-0 bg-white bg-opacity-[85%] backdrop-blur py-2 border-b-neutral-300 border-b">
      <Grid>
        <div className="w-full flex justify-between gap-8 items-center">
          <div className="flex flex-1 gap-8 items-center">
            <h1 className="text-xl md:text-3xl py-2 text-neutral-900 font-medium transition-all hover:text-blue-900">
              <Link to="/">
                Options
                <span className="text-blue-500 font-normal italic">txt</span>
              </Link>
            </h1>
            {isRoot && (
              <div className="relative flex justify-between items-center justify-items-stretch max-w-[500px] grow bg-neutral-200 shadow-inner rounded-lg">
                <input
                  value={search}
                  type="text"
                  placeholder="Search Options..."
                  spellCheck={false}
                  className="text-neutral-700 bg-transparent flex-1 px-5 py-2 md:py-3 focus:outline-none placeholder:text-neutral-500 placeholder:italic min-w-0"
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  onKeyDown={handleKeyDown}
                />
                <div className="flex items-center shrink-0 relative">
                  <button
                    onClick={() => setShowSearchFields((prev) => !prev)}
                    className={
                      "flex gap-2 items-center pr-5 font-medium transition-colors hover:text-blue-600 " +
                      (showSearchFields && "text-neutral-400")
                    }
                  >
                    Search Fields
                    <ListBulletIcon className="w-6 h-6" />
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

          <nav>
            <ul className="flex gap-8 items-center">
              <li>
                <Link to="login" className="text-blue-600 font-medium">
                  Login
                </Link>
              </li>
              <li>
                <Button to="create-account">Create Account</Button>
              </li>
            </ul>
          </nav>
        </div>
      </Grid>
    </header>
  );
}

export default Header;
