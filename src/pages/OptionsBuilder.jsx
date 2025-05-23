import OptionsContext from "../features/options/OptionsContext";
import { useOptions } from "../features/options/useOptions";
import SearchContext from "../features/search/SearchContext";
import Grid from "../ui/Grid";

import OptionsList from "../ui/OptionsList";
import Sidebar from "../ui/Sidebar";
import { useContext, useState } from "react";

function OptionsBuilder() {
  const { search, searchName, searchDescription } = useContext(SearchContext);
  const { isLoading, error, options } = useOptions();
  const filteredOptions =
    search.trim() !== ""
      ? options.filter((option) => {
          const nameMatch =
            searchName &&
            option.name.toLowerCase().includes(search.toLowerCase());
          const descriptionMatch =
            searchDescription &&
            option.description.toLowerCase().includes(search.toLowerCase());
          return nameMatch || descriptionMatch;
        })
      : options;
  const [customOptions, setCustomOptions] = useState([]);

  const updateCustomOption = (option, value) => {
    const updatedCustomOptions = customOptions.map((customOption) => {
      if (option.id === customOption.id) {
        return { ...customOption, value: value };
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
        isLoading,
        error,
        filteredOptions,
      }}
    >
      <Grid className="scrollbar flex-1 overflow-y-scroll">
        <OptionsList />
        <Sidebar />
      </Grid>
    </OptionsContext.Provider>
  );
}

export default OptionsBuilder;
