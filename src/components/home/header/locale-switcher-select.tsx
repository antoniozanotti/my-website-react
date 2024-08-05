"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, ReactNode, useTransition } from "react";

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export function LocaleSwitcherSelect({ children, defaultValue, label }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.push("/"+nextLocale);
    });
  }

  let labelClasses = "relative relative flex justify-around";
  if (isPending) {
    labelClasses += " transition-opacity [&:disabled]:opacity-30";
  }

  return (
    <label className={labelClasses}>
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
