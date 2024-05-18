import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import FormRow from "../FormRow";
import { createEditCabin } from "@/services/apiCabins";

export default function CreateCabinForm({ cabinToEdit = {} }) {
  const { id: editId, ...editValues } = cabinToEdit;
  const isEditSession = Boolean(editId);

  // react-hook-forms elements
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  // Form errors to provide feedback to users
  const { errors } = formState;

  // queryClient to call invalidateQueries function
  const queryClient = useQueryClient();

  // react-query to create newCabin
  const { isLoading: isCreating, mutate: createCabin } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success("New cabin successfully created");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  // react-query to update newCabin
  const { isLoading: isEditing, mutate: editCabin } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
    onSuccess: () => {
      toast.success("Cabin successfully edited");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  const isWorking = isCreating || isEditing;

  // onSubmit called if form succeed
  function onSubmit(newCabinData) {
    // image: if it is FileList {0: File, length: 1}, we take the [0]
    const image =
      typeof newCabinData.image === "string"
        ? newCabinData.image
        : newCabinData.image[0];

    if (isEditSession) {
      editCabin({ newCabinData: { ...newCabinData, image }, id: editId });
    } else {
      createCabin({ ...newCabinData, image: image });
    }
  }

  // onError called if form fails
  function onError(errors) {
    console.log(errors);
  }

  return (
    <form
      /*Form*/
      className="py-[1rem] px-[4rem] max-w-[50rem] overflow-hidden text-xs sm:text-base bg-white border-2 border-solid border-gray-200 rounded-md"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <input
          className="input input-bordered input-success input-sm min-w-48 col-start-2"
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", {
            required: "Name field is required",
          })}
        ></input>
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
        <input
          className="input input-bordered input-success input-sm min-w-48 col-start-2"
          type="number"
          id="maxCapacity"
          disabled={isWorking}
          {...register("maxCapacity", {
            required: "Capacity field is required",
            min: {
              value: 1,
              message: "Capacity should be at least 1",
            },
          })}
        ></input>
      </FormRow>

      <FormRow label="Regular price" error={errors?.regularPrice?.message}>
        <input
          className="input input-bordered input-success input-sm min-w-48 col-start-2"
          type="number"
          id="regularPrice"
          disabled={isWorking}
          {...register("regularPrice", {
            required: "Price field is required",
            min: {
              value: 1,
              message: "Price should be at least 1",
            },
          })}
        ></input>
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <input
          className="input input-bordered input-success input-sm min-w-48 col-start-2"
          type="number"
          defaultValue={0}
          disabled={isWorking}
          id="discount"
          {...register("discount", {
            required: "Discount field is required",
            validate: (value) => {
              const discountValue = Number(value);
              const regularPrice = Number(getValues().regularPrice);
              return (
                discountValue <= regularPrice ||
                "Discount should be less than cabin price"
              );
            },
          })}
        ></input>
      </FormRow>

      <FormRow label="Description" error={errors?.description?.message}>
        <textarea
          className="textarea textarea-success min-w-48 col-start-2"
          id="description"
          defaultValue=""
          disabled={isWorking}
          {...register("description", {
            required: "Description field is required",
          })}
        ></textarea>
      </FormRow>

      <FormRow label="Cabin photo" error={errors?.image?.message}>
        <input
          className="file-input file-input-bordered file-input-success file-input-sm min-w-48 col-start-2"
          type="file"
          id="image"
          disabled={isWorking}
          accept="image/*"
          {...register("image", {
            required: isEditSession ? false : "Image field is required",
          })}
        ></input>
      </FormRow>

      <FormRow>
        <div className="flex justify-evenly min-w-48 col-start-3">
          <button
            disabled={isWorking}
            type="reset"
            className="btn btn-sm btn-outline hover:bg-gray-500"
          >
            Cancel
          </button>
          <button
            disabled={isWorking}
            className="btn btn-sm btn-success hover:bg-green-700 hover:text-gray-200"
          >
            {isEditSession ? "Edit Cabin" : "Add Cabin"}
          </button>
        </div>
      </FormRow>
    </form>
  );
}
