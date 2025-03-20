import { useContext } from "react";

import OptionsContext from "../features/options/OptionsContext";
import OptionCustomItem from "./OptionCustomItem";
import Motion from "./Motion";

const OptionCustom = () => {
  const { customOptions } = useContext(OptionsContext);
  return (
    <div className="scrollbar flex w-full flex-1 grow flex-col gap-2 overflow-y-scroll pr-2">
      {customOptions.map((option) => (
        <Motion key={option.id}>
          <OptionCustomItem option={option} />
        </Motion>
      ))}
    </div>
  );
};

export default OptionCustom;
