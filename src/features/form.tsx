import React from "react";
import { ReactNode } from "react";
import { TzButton, TzInput, TzTextarea } from "topaz-react";

export interface FormProps {}

export const Form = ({}: FormProps) => {
  return (
    <form
      id="form_lets_work_together"
      className="flex flex-col space-y-4"
    >
      <label className="text-primary-2 dark:text-dark-primary-2 flex flex-col space-y-1">
        <span className="px-[10px] sm:px-[14px] lg:px-[20px]">Name</span>
        <TzInput
          type="text"
          className=""
        />
      </label>
      <label className="text-primary-2 dark:text-dark-primary-2 flex flex-col space-y-1">
        <span className="px-[10px] sm:px-[14px] lg:px-[20px]">Email</span>
        <TzInput
          type="email"
          className=""
        />
      </label>
      <label className="text-primary-2 dark:text-dark-primary-2 flex flex-col space-y-1">
        <span className="px-[10px] sm:px-[14px] lg:px-[20px]">Message</span>
        <TzTextarea
          rows={7}
          className=""
        />
      </label>
      <div className="flex place-content-end">
        <TzButton
          iconName="ArrowRightIcon"
          isIconAfterLabel
          variant="accent"
          label="Submit"
          className=""
        />
      </div>
    </form>
  );
};
