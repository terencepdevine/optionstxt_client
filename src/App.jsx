import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Cookies from "js-cookie";
import { Toaster } from "react-hot-toast";

import OptionsBuilder from "./pages/OptionsBuilder.jsx";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
// import Options from "./pages/Options";
// import Account from "./pages/Account";
// import SavedOptions from "./pages/SavedOptions";
import AppLayout from "./ui/AppLayout";
import SearchContext from "./features/search/SearchContext";
import SettingsContext from "./features/settings/SettingsContext";
import AccountCreate from "./pages/AccountCreate.jsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState("");
  const [searchName, setSearchName] = useState(true);
  const [searchDescription, setSearchDescription] = useState(false);

  useEffect(function () {
    const storedDarkMode = Cookies.get("darkMode");
    if (storedDarkMode !== undefined && storedDarkMode === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else if (storedDarkMode === undefined) {
      const darkMatch = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;

      setDarkMode(darkMatch);
      if (darkMatch) document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    console.log(newMode.toString());
    Cookies.set("darkMode", newMode.toString(), { expires: 365 });

    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <SettingsContext.Provider
      value={{
        darkMode,
        toggleDarkMode,
      }}
    >
      <SearchContext.Provider
        value={{
          search,
          setSearch,
          searchName,
          setSearchName,
          searchDescription,
          setSearchDescription,
        }}
      >
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<AppLayout />}>
                <Route index element={<OptionsBuilder />} />
                <Route path="login" element={<Login />} />
                <Route path="create-account" element={<AccountCreate />} />

                <Route path="*" element={<PageNotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
          <Toaster
            position="bottom-center"
            gutter={16}
            containerStyle={{
              margin: "8px",
            }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 5000,
              },
              style: {
                fontSize: "16px",
                maxWidth: "500px",
                padding: "16px 24px",
                backgroundColor: "#fff",
                color: "#999",
              },
            }}
          />
        </QueryClientProvider>
      </SearchContext.Provider>
    </SettingsContext.Provider>
  );
}

export default App;
