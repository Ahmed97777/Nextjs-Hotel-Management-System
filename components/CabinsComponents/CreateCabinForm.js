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
  const { register, handleSubmit, reset, getValues } = useForm();

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
          <FormRow>
            <label className="font-medium mr-7" htmlFor="name">
              Cabin name
            </label>
            <input
              className="border-[1px] border-solid border-gray-300 rounded-md min-w-48 col-start-2"
              type="text"
              id="name"
              {...register("name", {
                required: "Name field is required",
              })}
            ></input>
          </FormRow>

          <FormRow>
            <label className="font-medium mr-7" htmlFor="maxCapacity">
              Maximum capacity
            </label>
            <input
              className="border-[1px] border-solid border-gray-300 rounded-md min-w-48 col-start-2"
              type="number"
              id="maxCapacity"
              {...register("maxCapacity", {
                required: "Capcity field is required",
                min: {
                  value: 1,
                  message: "Capacity should be at least 1",
                },
              })}
            ></input>
          </FormRow>

          <FormRow>
            <label className="font-medium mr-7" htmlFor="regularPrice">
              Regular price
            </label>
            <input
              className="border-[1px] border-solid border-gray-300 rounded-md min-w-48 col-start-2"
              type="number"
              id="regularPrice"
              {...register("regularPrice", {
                required: "Price field is required",
                min: {
                  value: 1,
                  message: "Price should be at least 1",
                },
              })}
            ></input>
          </FormRow>

          <FormRow>
            <label className="font-medium mr-7" htmlFor="discount">
              Discount
            </label>
            <input
              className="border-[1px] border-solid border-gray-300 rounded-md min-w-48 col-start-2"
              type="number"
              defaultValue={0}
              id="discount"
              {...register("discount", {
                required: "Discount field is required",
                validate: (value) => {
                  const discountValue = Number(value);
                  const regularPrice = Number(getValues().regularPrice);
                  return (
                    discountValue <= regularPrice ||
                    "Discount should be less than or equal cabin price"
                  );
                },
              })}
            ></input>
          </FormRow>

          <FormRow>
            <label className="font-medium mr-7" htmlFor="description">
              Description
            </label>
            <textarea
              className="border-[1px] border-solid border-gray-300 rounded-md min-w-48 col-start-2"
              id="description"
              defaultValue=""
              {...register("description", {
                required: "Description field is required",
              })}
            ></textarea>
          </FormRow>

          <FormRow>
            <label className="font-medium mr-7" htmlFor="image">
              Cabin photo
            </label>
            <input
              className="cursor-pointer border-[1px] border-solid border-gray-300 rounded-md min-w-48 col-start-2"
              type="file"
              id="image"
            ></input>
          </FormRow>

          <FormRow>
            <div className="flex justify-evenly min-w-48 col-start-3">
              <button
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
