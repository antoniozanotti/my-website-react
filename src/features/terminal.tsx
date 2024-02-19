import React, { useState, useEffect, useRef } from "react";

export interface TerminalProps {
  className?: string;
}

export default function Terminal({ className = "" }: TerminalProps) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const lines = [
    "I'm a Frontend Developer",
    "I'm a Full Stack Developer",
    "Are you still here? Scroll the page, my friend!",
    "I'm a Software Engineer",
    "I'm a Programmer",
    "Why are there so many positions?",
    "I'm a Web Developer",
    "I'm a Jamstack Developer",
    "I'm a… Does it matter?",
  ];
  let line = useRef(lines[0]);
  let lineIndex = useRef(0);
  let task = useRef("write");
  let timePause = useRef(0);
  const [title, setTitle] = useState("");
  const [classVisibilityCursor, setClassVisibilityCursor] = useState("");

  useEffect(() => {
    const delayPause = 20;
    const interval = setInterval(() => {
      if (
        task.current == "pause-so-erase" ||
        task.current == "pause-so-write"
      ) {
        if (![0, 1, 2, 8, 9, 10, 16, 17, 18].includes(timePause.current)) {
          setClassVisibilityCursor("");
        } else {
          setClassVisibilityCursor("invisible");
        }
        if (timePause.current < delayPause) {
          timePause.current = timePause.current + 1;
        } else {
          setClassVisibilityCursor("");
          timePause.current = 0;
          if (task.current == "pause-so-erase") {
            task.current = "erase";
          } else {
            if (lineIndex.current == lines.length - 1) {
              lineIndex.current = 0;
            } else {
              lineIndex.current = lineIndex.current + 1;
            }
            line.current = lines[lineIndex.current];
            task.current = "write";
          }
        }
      } else if (task.current == "write") {
        if (title.length == line.current.length) {
          task.current = "pause-so-erase";
        } else {
          setTitle(line.current.substring(0, title.length + 1));
        }
      } else {
        if (title.length == 0) {
          task.current = "pause-so-write";
        } else {
          setTitle(line.current.substring(0, title.length - 1));
        }
      }
    }, 100);
    return () => clearInterval(interval);
  }, [title, classVisibilityCursor]);
  
  return (
    <p
      className={`text-c2 sm:text-c3 lg:text-c5 flex items-center leading-3 lg:leading-5 ${className}`}
    >
      {title}
      <span
        className={`w-1.5 sm:w-2 lg:w-2.5 h-3 sm:h-4 lg:h-5 bg-primary dark:bg-dark-primary inline-block ml-1 ${classVisibilityCursor}`}
      ></span>
    </p>
  );
}
