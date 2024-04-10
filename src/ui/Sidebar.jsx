import { XCircleIcon } from "@heroicons/react/24/solid";
import Bold from "./typography/Bold";
import Button from "./typography/Button";
import { saveAs } from "file-saver";
import {
  ArrowDownCircleIcon,
  // BookmarkSquareIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { useContext } from "react";
import OptionsContext from "../features/options/OptionsContext";

function SidebarBlock({ children, title }) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-medium text-xl">{title}</h3>
      {children}
    </div>
  );
}

function Sidebar() {
  const { customOptions, onCustomOptions, updateCustomOption } =
    useContext(OptionsContext);

  const os = navigator.userAgent;
  const osWin = os.indexOf("Win");
  const osMac = os.indexOf("Mac");

  function handleDownload() {
    const data = customOptions.map((option) => {
      return `-${option.name}=${option.value}${String.fromCharCode(10)}`;
    });

    const file = new Blob(data, {
      type: "text/plain;charset=utf-8",
    });

    saveAs(file, "Options.txt");
  }

  return (
    <div className="md:sticky top-0 flex flex-col gap-8 py-8 w-full lg:w-1/3">
      <SidebarBlock title="Customize your Ableton Options.txt">
        <p>
          Check options in the list to add them to your custom{" "}
          <Bold>Options.txt</Bold> file and then download and save.
        </p>
        {osWin !== -1 && <p>This is Windows</p>}
        {osMac !== -1 && <p>This is Mac</p>}
        {osWin === -1 && osMac === -1 && <p>Something else ya big nerd!</p>}
      </SidebarBlock>
      <div className="flex-1 overflow-hidden bg-neutral-200 shadow-inner rounded-lg p-2">
        <div className="flex h-full flex-col overflow-y-scroll no-scrollbar">
          {customOptions[0] ? (
            <div className="flex-1 flex flex-col gap-2 grow w-full overflow-y-scroll scrollbar pr-2">
              {customOptions.map((option, i) => (
                <div
                  key={i}
                  className="px-4 py-2 bg-white shadow-sm rounded flex gap-2 justify-between"
                >
                  <div className="flex flex-row items-center gap-2">
                    <span className="font-medium text-sm shrink-1 break-all leading-tight">
                      &mdash;{option.name}
                    </span>
                  </div>
                  <div className="flex flex-row gap-3">
                    {option.value_type === "boolean" && (
                      <select
                        name=""
                        id=""
                        className="bg-neutral-200 w-24 rounded-lg px-2 py-1"
                        defaultValue={option.value}
                        onChange={(e) =>
                          updateCustomOption(option, e.target.value)
                        }
                      >
                        <option value="true">true</option>
                        <option value="false">false</option>
                      </select>
                    )}

                    {(option.value_type === "string" ||
                      option.value_type === "directory") && (
                      <input
                        type="text"
                        defaultValue={option.value}
                        className="bg-neutral-200 w-24 rounded-lg px-4 py-1"
                        onChange={(e) =>
                          updateCustomOption(option, e.target.value)
                        }
                      />
                    )}

                    {(option.value_type === "number" ||
                      option.value_type === "float") && (
                      <input
                        type="number"
                        defaultValue={option.value}
                        className="bg-neutral-200 w-24 rounded-lg px-4 py-1"
                        onChange={(e) =>
                          updateCustomOption(option, e.target.value)
                        }
                      />
                    )}

                    {option.value_type === "options" && (
                      <select
                        className="bg-neutral-200 w-24 rounded-lg px-2 py-1"
                        onChange={(e) =>
                          updateCustomOption(option, e.target.value)
                        }
                      >
                        {option.value_options?.map((o, i) => (
                          <option value={o} key={i}>
                            {o}
                          </option>
                        ))}
                      </select>
                    )}

                    <button onClick={() => onCustomOptions(option)}>
                      <XCircleIcon className="w-5 h-5 text-red-600" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              <div className="flex-1 flex justify-center items-center p-6">
                <div className="flex items-center bg-white p-4 rounded text-neutral-600 shadow-sm">
                  <ExclamationCircleIcon className="w-6 mr-4 shrink-0" />
                  <div>
                    <h4 className="italic">No options chosen.</h4>
                    <p className="italic text-sm">
                      Add an option from the list to start creating your
                      Options.txt file
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
          <div className="flex w-full gap-2 pt-2">
            <Button
              type="full"
              icon={<ArrowDownCircleIcon className="w-6 h-6" />}
              onClick={handleDownload}
              disabled={!customOptions[0]}
            >
              Download Options.txt
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
