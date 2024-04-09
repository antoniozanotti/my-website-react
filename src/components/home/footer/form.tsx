"use client";
import React, { useRef, useState } from "react";
import { TzButton, TzInput, TzTextarea } from "topaz-react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

export default function Form() {
  const form = useRef<HTMLFormElement>(null);
  const fromName = useRef<HTMLInputElement>(null);
  const [fromNameValue, setFromNameValue] = useState("");
  const [status, setStatus] = useState("typing");
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [recaptchaValue, setRecaptchaValue] = useState("");

  const onChangeRecaptcha = (token: string | null) => {
    //const token = recaptchaRef.current?.getValue() ?? "";
    setRecaptchaValue(token ?? "");
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    recaptchaRef.current?.execute();
    recaptchaRef.current?.reset();
    if (recaptchaValue == "") {
      return false;
    }
    setStatus("submitting");
    setFromNameValue(fromName.current?.value ?? "");
    emailjs
      .sendForm("service_7vfby3r", "template_a9dy2ok", form.current ?? "", {
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          setStatus("success");
          form.current?.reset();
        },
        (error) => {
          setStatus("error");
        }
      );
  };

  const recaptchaKey = process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA ?? "";

  return (
    <form
      id="form_lets_work_together"
      className="flex flex-col space-y-4"
      ref={form}
      onSubmit={handleSubmit}
    >
      <label className="text-primary-2 dark:text-dark-primary-2 flex flex-col space-y-1">
        <span className="px-[10px] sm:px-[14px] lg:px-[20px]">Name</span>
        <TzInput
          type="text"
          variant="secondary"
          name="fromName"
          required
          ref={fromName}
        />
      </label>
      <label className="text-primary-2 dark:text-dark-primary-2 flex flex-col space-y-1">
        <span className="px-[10px] sm:px-[14px] lg:px-[20px]">Email</span>
        <TzInput type="email" variant="secondary" name="fromEmail" required />
      </label>
      <label className="text-primary-2 dark:text-dark-primary-2 flex flex-col space-y-1">
        <span className="px-[10px] sm:px-[14px] lg:px-[20px]">Message</span>
        <TzTextarea rows={7} variant="secondary" name="message" required />
      </label>
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={recaptchaKey}
        size="invisible"
        onChange={onChangeRecaptcha}
      />
      {status === "success" && (
        <p>
          Hi {fromNameValue}, I will respond within 24 hours.
          <br />
          Thank you for the message sent.
        </p>
      )}
      {status === "error" && (
        <p>Hi {fromNameValue}, something went wrong. Please try later..</p>
      )}
      <div className="flex place-content-end">
        <TzButton
          iconName="ArrowRightIcon"
          isIconAfterLabel
          variant="accent"
          label="Submit"
        />
      </div>
      <input type="hidden" name="g-recaptcha-response" value={recaptchaValue} />
    </form>
  );
}
