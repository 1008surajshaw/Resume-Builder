import React, { useEffect, useState } from "react";
import { UseFormReturn, FieldValues } from "react-hook-form";
import TextField from "../base/TextField";
import TextArea from "../base/TextArea";
import Dropdown from "../base/Dropdown";

import SearchDropdown from "../base/SearchDropdown";

export interface PersonalInfoValues extends FieldValues {
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  email: string;
  about?: string;
  countryCode?: string;
  countryOrRegion?: string;
  city?: string;
  postalCode?: string;
  address?: string;
  location?: string;
}

interface PersonalInfoFormProps extends UseFormReturn<PersonalInfoValues> {
  isOpen: boolean;
}

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({
  register,
  setValue,
  resetField,
  formState: { errors },
  isOpen,
}) => {
  return (
    <div className={`${isOpen ? "grid" : "hidden"} w-full`}>
      <div className="flex pt-6 pb-3">
        <TextField
          placeholder="First Name"
          label="First name"
          register={register("firstName", {
            required: "First Name is required",
          })}
          error={!!errors.firstName}
          errorMsg={errors.firstName?.message}
        />
        <TextField
          placeholder="Last Name"
          className="mx-2"
          label="Last name"
          register={register("lastName", {
            required: "Last Name is required",
          })}
          error={!!errors.lastName}
          errorMsg={errors.lastName?.message}
        />
        
      </div>
      <div className="flex justify-start py-3">
        <TextField
          width="w-1/2"
          placeholder="Phone number"
          label="Phone number"
          register={register("phoneNumber")}
          error={!!errors.phoneNumber}
          errorMsg={errors.phoneNumber?.message}
          className="mr-1"
        />
        <TextField
          width="w-1/2"
          placeholder="Email"
          label="Email"
          register={register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email format",
            },
          })}
          error={!!errors.email}
          errorMsg={errors.email?.message}
          className="ml-1"
        />
      </div>
      <div className="flex py-3">
        <TextArea
          label="About"
          placeholder="Brief introduction"
          register={register("about")}
        />
      </div>
      <div className="flex py-3">
        <TextField
          placeholder="Country Code"
          label="Country Code"
          register={register("countryCode")}
          className="mr-1"
        />
        <TextField
          placeholder="Country or Region"
          label="Country or Region"
          register={register("countryOrRegion")}
          className="ml-1"
        />
      </div>
      <div className="flex py-3">
        <TextField
          placeholder="City"
          label="City"
          register={register("city")}
          className="mr-1"
        />
        <TextField
          placeholder="Postal code"
          label="Postal code"
          register={register("postalCode")}
          error={!!errors.postalCode}
          errorMsg={errors.postalCode?.message}
          className="ml-1"
        />
      </div>
      <div className="flex py-3">
        <TextField
          placeholder="Address"
          label="Address"
          register={register("address")}
          className="mr-1"
        />
        <TextField
          placeholder="Location"
          label="Location"
          register={register("location")}
          className="ml-1"
        />
      </div>
    </div>
  );
};

export default PersonalInfoForm;
