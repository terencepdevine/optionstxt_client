import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteOption } from "../../services/apiOptions";
import toast from "react-hot-toast";
import { useContext } from "react";
import OptionsContext from "./OptionsContext";
import OptionCheckbox from "../../ui/OptionCheckbox";

function OptionBlock({ option }) {
  const {
    showDescription,
    showDefaultValue,
    showValueRange,
    customOptions,
    onCustomOptions,
  } = useContext(OptionsContext);

  const {
    id,
    name,
    description,
    value_type,
    value,
    value_min,
    value_max,
    value_options,
  } = option;

  const queryClient = useQueryClient();

  // const { isLoading, mutate } = useMutation({
  useMutation({
    mutationFn: (id) => deleteOption(id),
    onSuccess: () => {
      toast.success("Option successfully deleted!");
      queryClient.invalidateQueries({
        queryKey: ["options"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const isActive = customOptions.findIndex((custom) => custom.id === id) !== -1;

  return (
    <div
      key={id}
      className={`flex cursor-pointer flex-col gap-2 rounded bg-neutral-200 p-4 ring-2 ring-inset hover:dark:bg-neutral-800/50 md:p-6 dark:bg-neutral-800 ${
        isActive
          ? "ring-blue-600 dark:ring-blue-400"
          : "ring-transparent"
      }`}
      onClick={() => {
        onCustomOptions(option);
      }}
    >
      <div className="flex items-center gap-4 md:gap-6">
        <OptionCheckbox isActive={isActive} />
        <div className="flex items-center gap-2">
          <span className="cursor-pointer break-all text-base font-medium md:text-lg">
            &mdash;{name}
          </span>
        </div>
      </div>
      {(showDescription || showDefaultValue || showValueRange) && (
        <div className="flex flex-col gap-4 pl-10 md:pl-12">
          {showDescription && (
            <p className="text-neutreal-900 dark:text-neutral-100">
              {description}
            </p>
          )}

          {(showDefaultValue || showValueRange) && (
            <div className="flex flex-col gap-1 rounded-sm bg-neutral-200 px-4 py-2 text-sm text-neutral-900 lg:flex-row lg:gap-4 dark:bg-neutral-700 dark:text-neutral-100">
              {showDefaultValue && (
                <div>
                  <span className="font-medium">Default Value: </span>
                  <span className="italic">{value}</span>
                </div>
              )}

              {showValueRange && (
                <>
                  {(value_type === "number" || value_type === "float") && (
                    <div>
                      <span className="font-medium">Value Range: </span>
                      <span className="italic">
                        {value_min} &mdash; {value_max ? value_max : "inf"}
                      </span>
                    </div>
                  )}

                  {value_type === "boolean" && (
                    <div>
                      <span className="font-medium">Value Options: </span>
                      <span className="italic">true, false</span>
                    </div>
                  )}

                  {value_type === "options" && (
                    <div>
                      <span className="font-medium">Value Options: </span>
                      <span className="italic">
                        {value_options?.map((o, i) => (
                          <span key={i}>
                            {o}
                            {i <= value_options.length && ", "}
                          </span>
                        ))}
                      </span>
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default OptionBlock;
