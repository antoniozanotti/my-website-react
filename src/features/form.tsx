import React from "react";
import { ReactNode } from "react";
import { TzButton } from "topaz-react";

export interface FormProps {}

export const Form = ({}: FormProps) => {
  return (
    <form
      id="form_lets_work_together"
      className="grid grid-flow-row auto-rows-max gap-5"
    >
      <label className="grid grid-flow-row auto-rows-max gap-2 text-primary-2 dark:text-dark-primary-2">
        <span className="pl-5">Name</span>
        <input
          type="text"
          name="inp_name"
          id="form_lets_work_together__inp_name"
          className="px-5 py-3 rounded text-primary dark:text-dark-primary bg-secondary-2 dark:bg-dark-secondary"
        />
      </label>
      <label className="grid grid-flow-row auto-rows-max gap-2 text-primary-2 dark:text-dark-primary-2">
        <span className="pl-5">Email</span>
        <input
          type="text"
          name="inp_email"
          className="px-5 py-3 rounded text-primary dark:text-dark-primary bg-secondary-2 dark:bg-dark-secondary"
        />
      </label>
      <label className="grid grid-flow-row auto-rows-max gap-2 text-primary-2 dark:text-dark-primary-2">
        <span className="pl-5">Message</span>
        <textarea
          name="tex_message"
          className="px-5 py-3 rounded text-primary dark:text-dark-primary bg-secondary-2 dark:bg-dark-secondary"
          rows={7}
        ></textarea>
      </label>
      <div className="flex justify-self-end">
        <TzButton
          iconName="ArrowRightIcon"
          variant="accent"
          label="Submit"
          className=""
          size="large"
        />
      </div>
    </form>
  );
};
