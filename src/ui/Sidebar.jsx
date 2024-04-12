import { XCircleIcon } from "@heroicons/react/24/solid";
import Button from "./typography/Button";
import { saveAs } from "file-saver";
import {
  ArrowDownCircleIcon,
  // BookmarkSquareIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { useContext } from "react";
import OptionsContext from "../features/options/OptionsContext";
import { Link } from "react-router-dom";

function SidebarBlock({ children, title }) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-xl font-medium text-neutral-900 dark:text-neutral-200">
        {title}
      </h3>
      {children}
    </div>
  );
}

function Sidebar() {
  const { customOptions, onCustomOptions, updateCustomOption } =
    useContext(OptionsContext);

  // const os = navigator.userAgent;
  // const osWin = os.indexOf("Win");
  // const osMac = os.indexOf("Mac");

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
    <div className="top-0 order-1 flex w-full flex-col gap-8 py-8 md:sticky md:order-2 md:w-1/3">
      <SidebarBlock title="Customize your Ableton Options.txt">
        <p className="text-neutral-900 dark:text-neutral-200">
          Check options in the list to add them to your custom{" "}
          <Link
            to="https://help.ableton.com/hc/en-us/articles/6003224107292-Options-txt-file"
            target="_blank"
            className="font-medium text-blue-600 dark:text-blue-400"
          >
            Options.txt
          </Link>{" "}
          file and then download and save.
        </p>
      </SidebarBlock>
      <div className="flex-1 overflow-hidden rounded-lg bg-neutral-200 p-2 shadow-inner dark:bg-neutral-800 dark:shadow">
        <div className="no-scrollbar flex h-full flex-col overflow-y-scroll">
          {customOptions[0] ? (
            <div className="scrollbar flex w-full flex-1 grow flex-col gap-2 overflow-y-scroll pr-2">
              {customOptions.map((option, i) => (
                <div
                  key={i}
                  className="flex justify-between gap-2 rounded bg-white px-4 py-2 shadow-sm dark:bg-neutral-700"
                >
                  <div className="flex flex-row items-center gap-2">
                    <span className="shrink-1 break-all text-sm font-medium leading-tight text-neutral-900 dark:text-neutral-100">
                      &mdash;{option.name}
                    </span>
                  </div>
                  <div className="flex flex-row gap-3">
                    {option.value_type === "boolean" && (
                      <select
                        name=""
                        id=""
                        className="w-24 rounded-lg bg-neutral-200 px-2 py-1 text-neutral-900 dark:bg-neutral-600 dark:text-neutral-100"
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
                        className="w-24 rounded-lg bg-neutral-200 px-4 py-1 text-neutral-900"
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
                        className="w-24 rounded-lg bg-neutral-200 px-4 py-1 text-neutral-900"
                        onChange={(e) =>
                          updateCustomOption(option, e.target.value)
                        }
                      />
                    )}

                    {option.value_type === "options" && (
                      <select
                        className="w-24 rounded-lg bg-neutral-200 px-2 py-1 text-neutral-900"
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
                      <XCircleIcon className="h-5 w-5 text-red-600 dark:text-red-400" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              <div className="flex flex-1 items-center justify-center p-6">
                <div className="flex items-center rounded bg-white p-4 text-neutral-600 shadow-sm dark:bg-neutral-700 dark:text-neutral-200">
                  <ExclamationCircleIcon className="mr-4 w-6 shrink-0" />
                  <div>
                    <h4 className="italic">No options chosen.</h4>
                    <p className="text-sm italic">
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
              icon={<ArrowDownCircleIcon className="h-6 w-6" />}
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
