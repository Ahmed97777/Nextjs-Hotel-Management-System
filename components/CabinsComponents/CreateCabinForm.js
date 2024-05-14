"use client";

import React, { useState } from "react";
import FormRow from "../FormRow";
import { useForm } from "react-hook-form";

export default function CreateCabinForm() {
  const [showForm, setShowForm] = useState(false);

  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
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
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormRow>
            <label className="font-medium mr-7" htmlFor="name">
              Cabin name
            </label>
            <input
              className="border-[1px] border-solid border-gray-300 rounded-md min-w-48 col-start-2"
              type="text"
              id="name"
              {...register("name")}
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
              {...register("maxCapacity")}
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
              {...register("regularPrice")}
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
              {...register("discount")}
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
              {...register("description")}
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
              <button className="btn btn-sm btn-success hover:bg-green-700 hover:text-gray-200">
                Add Cabin
              </button>
            </div>
          </FormRow>
        </form>
      )}
    </div>
  );
}
