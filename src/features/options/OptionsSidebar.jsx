import { useForm } from "react-hook-form";
// import Input from "../../ui/forms/Input";
// import Textarea from "../../ui/forms/Textarea";
// import Select from "../../ui/forms/Select";
// import SelectOption from "../../ui/forms/SelectOption";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createOption } from "../../services/apiOptions";
import toast from "react-hot-toast";

function OptionsSidebar() {
  const { register, unregister, handleSubmit, reset, watch } = useForm();
  const watchValueType = watch("value_type", "boolean");
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: createOption,
    onSuccess: () => {
      toast.success("New option added");
      queryClient.invalidateQueries({
        queryKey: ["options"],
      });
      reset();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const onSubmit = (data) => {
    mutate(data);
  };

  // useEffect(
  //   function () {
  //     if (watchValueType) {
  //       register("value_type");
  //     } else {
  //       unregister("value_type");
  //     }
  //   },
  //   [register, unregister, watchValueType]
  // );

  return (
    <div className="w-full md:w-1/3 sticky top-0">
      <h1>Options Sidebar Form </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="option-name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Option Name"
            className="bg-neutral-200 rounded-xl py-2 px-4"
            {...register("name")}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="option-description">Description</label>
          <textarea
            name="option-description"
            placeholder="Option Description"
            className="bg-neutral-200 rounded-xl py-2 px-4"
            rows="3"
            {...register("description")}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="option-value-type">Value Type</label>
          <select
            name="option-value-type"
            defaultValue="boolean"
            className="bg-neutral-200 rounded-xl py-2 px-4"
            {...register("value_type")}
          >
            <option value="boolean">Boolean</option>
            <option value="number">Number</option>
            <option value="float">Float</option>
            <option value="string">String</option>
            <option value="options">Options</option>
            <option value="directory">Directory Path</option>
          </select>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="flex flex-col">
            <label htmlFor="option-value-default">Default Value</label>
            {watchValueType === "boolean" ? (
              <select
                name="option-value-default"
                defaultValue="false"
                className="bg-neutral-200 rounded-xl py-2 px-4"
                {...register("value_default", false)}
              >
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            ) : (
              <input
                type="text"
                placeholder="Value"
                name="option-value-default"
                defaultValue=""
                className="bg-neutral-200 rounded-xl py-2 px-4"
                {...register("value_default", "")}
              />
            )}
          </div>

          <div
            className={`col-span-2 ${
              watchValueType !== "number" &&
              watchValueType !== "float" &&
              "hidden"
            }`}
          >
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label htmlFor="option-value-min">Min Value</label>
                <input
                  type="text"
                  placeholder="Value"
                  name="option-value-min"
                  defaultValue=""
                  className="bg-neutral-200 rounded-xl py-2 px-4 w-full"
                  {...register("value_min")}
                />
              </div>
              <div>
                <label htmlFor="option-value-max">Max Value</label>
                <input
                  type="text"
                  placeholder="Value"
                  name="option-value-max"
                  defaultValue=""
                  className="bg-neutral-200 rounded-xl py-2 px-4 w-full"
                  {...register("value_max")}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <input type="reset" value="Reset" className="cursor-pointer" />
          <input
            type="submit"
            value="Create Option"
            className="text-blue-600 cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
}

export default OptionsSidebar;
