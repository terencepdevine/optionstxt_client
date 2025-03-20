import Button from "./typography/Button";
import { saveAs } from "file-saver";
import {
  ArrowDownCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { useContext } from "react";
import OptionsContext from "../features/options/OptionsContext";
import { Link } from "react-router-dom";
import OptionCustom from "./OptionCustomList";

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
  const { customOptions } = useContext(OptionsContext);

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
    <div className="top-0 order-1 flex w-full flex-col gap-8 py-8 transition-all md:sticky md:order-2 md:w-[280px] xl:w-[380px] 2xl:w-[480px]">
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
      <div className="flex-1 overflow-hidden rounded-lg bg-neutral-200 p-2 dark:bg-neutral-800">
        <div className="no-scrollbar flex h-full flex-col overflow-y-scroll">
          {customOptions[0] ? (
            <OptionCustom />
          ) : (
            <>
              <div className="flex flex-1 items-center justify-center p-4 lg:p-6">
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
