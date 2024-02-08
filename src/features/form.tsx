import React from "react";
import { ReactNode } from "react";
import { TzButton } from "topaz-react";

export interface FormProps {}

export const Form = ({}: FormProps) => {
  return (
    <form
      id="form_lets_work_together"
      className="flex flex-col space-y-4"
    >
      <label className="text-primary-2 dark:text-dark-primary-2 flex flex-col space-y-1">
        <span className="ml-2">Name</span>
        <input
          type="text"
          name="inp_name"
          id="form_lets_work_together__inp_name"
          className="rounded text-primary dark:text-dark-primary bg-secondary-2 dark:bg-dark-secondary"
        />
      </label>
      <label className="text-primary-2 dark:text-dark-primary-2 flex flex-col space-y-1">
        <span className="ml-2">Email</span>
        <input
          type="text"
          name="inp_email"
          className="rounded text-primary dark:text-dark-primary bg-secondary-2 dark:bg-dark-secondary"
        />
      </label>
      <label className="text-primary-2 dark:text-dark-primary-2 flex flex-col space-y-1">
        <span className="ml-2">Message</span>
        <textarea
          name="tex_message"
          className="rounded text-primary dark:text-dark-primary bg-secondary-2 dark:bg-dark-secondary"
          rows={7}
        ></textarea>
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
