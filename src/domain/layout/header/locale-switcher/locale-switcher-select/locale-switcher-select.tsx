"use client";

import { LocaleSwitcherSelectInterface } from "./locale-switcher-select-interface";
import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";

export function LocaleSwitcherSelect({
  defaultValue,
  label,
  children,
}: LocaleSwitcherSelectInterface) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.push("/" + nextLocale);
    });
  }

  const labelBaseStyles = "relative relative flex justify-around";
  const labelIsPendingStyles = isPending
    ? "transition-opacity [&:disabled]:opacity-30"
    : "";
  const labelStyles = `${labelBaseStyles} ${labelIsPendingStyles}`;

  return (
    <label className={labelStyles}>
      <p className="sr-only">{label}</p>
      <select
        className="inline-flex appearance-none bg-secondary dark:bg-dark-secondary w-[153px] lg:w-[173px] h-[38px] lg:h-[48px] rounded-full cursor-pointer py-0 pl-4 pr-6"
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
      <span className="pointer-events-none absolute right-4 top-[6px] lg:top-[8px]">
        ⌄
      </span>
    </label>
  );
}
