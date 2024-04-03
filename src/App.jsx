// import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { Toaster } from "react-hot-toast";

import OptionsBuilder from "./pages/OptionsBuilder.jsx";
import PageNotFound from "./pages/PageNotFound";
// import Options from "./pages/Options";
// import Login from "./pages/Login";
// import Account from "./pages/Account";
// import SavedOptions from "./pages/SavedOptions";
import AppLayout from "./ui/AppLayout";
import { useState } from "react";
import OptionsContext from "./features/options/OptionsContext.js";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  const [customOptions, setCustomOptions] = useState([]);
  const updateCustomOption = (option, value) => {
    const updatedCustomOptions = customOptions.map((customOption) => {
      if (option.id === customOption.id) {
        return { ...customOption, value_default: value };
      } else {
        return { ...customOption };
      }
    });

    setCustomOptions(updatedCustomOptions);
  };
  const handleCustomOptions = (option) => {
    const index = customOptions.findIndex((custom) => custom.id === option.id);
    if (index === -1) {
      setCustomOptions([...customOptions, option]);
    } else {
      const updatedOptions = [...customOptions];
      updatedOptions.splice(index, 1);
      setCustomOptions(updatedOptions);
    }
  };
  const [showDescription, setShowDescription] = useState(true);
  const [showDefaultValue, setShowDefaultValue] = useState(true);
  const [showValueRange, setShowValueRange] = useState(true);
  const handleShowDescription = () => setShowDescription((prev) => !prev);
  const handleShowDefaultValue = () => setShowDefaultValue((prev) => !prev);
  const handleShowValueRange = () => setShowValueRange((prev) => !prev);

  return (
    <OptionsContext.Provider
      value={{
        showDescription: showDescription,
        showDefaultValue: showDefaultValue,
        showValueRange: showValueRange,
        onShowDescription: handleShowDescription,
        onShowDefaultValue: handleShowDefaultValue,
        onShowValueRange: handleShowValueRange,
        customOptions: customOptions,
        onCustomOptions: handleCustomOptions,
        updateCustomOption: updateCustomOption,
      }}
    >
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<OptionsBuilder />} />
              {/* <Route path="options" element={<Options />} />
              <Route path="login" element={<Login />} />
              <Route path="account" element={<Account />} />
              <Route path="saved-options" element={<SavedOptions />} /> */}
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
    </OptionsContext.Provider>
  );
}

export default App;
