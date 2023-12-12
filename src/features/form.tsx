import React from 'react';
import { ReactNode } from 'react';

export interface FormProps {
  
}

export const Form = ({
  
}: FormProps) => {
  return (
    <form id="form_lets_work_together">
      <label>
        Name
        <input
          type="text"
          name="inp_name"
          id="form_lets_work_together__inp_name"
        />
      </label>
      <label>
        Email
        <input type="text" name="inp_email" />
      </label>
      <label>
        Message
        <textarea name="tex_message"></textarea>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};