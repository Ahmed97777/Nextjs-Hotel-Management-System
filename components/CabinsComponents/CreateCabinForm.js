"use client";
import React, { useState } from "react";

// import components
import FormRow from "../FormRow";
import { createCabin } from "@/services/apiCabins";

// import libraries
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function CreateCabinForm() {
  const [showForm, setShowForm] = useState(false);

  // use: react-hook-forms elements
  const { register, handleSubmit, reset, getValues, formState } = useForm();

  // define: contain form errors, use: provide feedback to users
  const { errors } = formState;

  // use: queryClient to call invalidateQueries function
  const queryClient = useQueryClient();

  // use: react-query to create newCabin
  const { isLoading: isCreating, mutate } = useMutation({
    mutationFn: (newCabin) => createCabin(newCabin),
    onSuccess: () => {
      toast.success("New cabin successfully created");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  // use: onSubmit called if form succeed
  function onSubmit(newCabinData) {
    mutate(newCabinData);
  }

  // use: onError called if form fails
  function onError(errors) {
    console.log(errors);
  }

  return (
    <div>
      <button
        className="btn btn-success hover:bg-green-700 hover:text-gray-200 mb-4"
        onClick={() => setShowForm((show) => !show)}
      >
        Add new cabin
      </button>

      {showForm && (
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
              disabled={isCreating}
              {...register("name", {
                required: "Name field is required",
              })}
            ></input>
          </FormRow>

          <FormRow
            label="Maximum capacity"
            error={errors?.maxCapacity?.message}
          >
            <input
              className="input input-bordered input-success input-sm min-w-48 col-start-2"
              type="number"
              id="maxCapacity"
              disabled={isCreating}
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
              disabled={isCreating}
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
              disabled={isCreating}
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
              disabled={isCreating}
              {...register("description", {
                required: "Description field is required",
              })}
            ></textarea>
          </FormRow>

          <FormRow label="Cabin photo">
            <input
              className="file-input file-input-bordered file-input-success file-input-sm min-w-48 col-start-2"
              type="file"
              id="image"
              disabled={isCreating}
            ></input>
          </FormRow>

          <FormRow>
            <div className="flex justify-evenly min-w-48 col-start-3">
              <button
                disabled={isCreating}
                type="reset"
                className="btn btn-sm btn-outline hover:bg-gray-500"
              >
                Cancel
              </button>
              <button
                disabled={isCreating}
                className="btn btn-sm btn-success hover:bg-green-700 hover:text-gray-200"
              >
                Add Cabin
              </button>
            </div>
          </FormRow>
        </form>
      )}
    </div>
  );
}
