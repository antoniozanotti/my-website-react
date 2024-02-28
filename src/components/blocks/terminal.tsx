import React from "react";
import { useState, useEffect, useRef } from "react";

export interface TerminalProps extends React.ComponentProps<"p"> {}

export default function Terminal({ ...props }: TerminalProps) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const lines = [
    "Hello, I'm a Frontend Developer",
    "I was a Full Stack Developer",
    "Are you still here?",
    "Scroll the page, my friend!"
  ];
  let line = useRef(lines[0]);
  let lineIndex = useRef(0);
  let task = useRef("write");
  let timePause = useRef(0);
  const [title, setTitle] = useState("");
  const [classVisibilityCursor, setClassVisibilityCursor] = useState("");

  useEffect(() => {
    const delayPause = 14;
    const interval = setInterval(() => {
      if (
        task.current == "pause-so-erase" ||
        task.current == "pause-so-write"
      ) {
        if (![0,1,2,3,4,10,11,12,13,14].includes(timePause.current)) {
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
    }, 60);
    return () => clearInterval(interval);
  }, [title, classVisibilityCursor]);

  let pClasses = "text-c4 sm:text-c3 lg:text-c5 flex items-center leading-3 lg:leading-5";
  props.className = props.className
    ? pClasses + " " + props.className
    : pClasses;
  
  return (
    <p {...props}>
      {title}
      <span
        className={`w-2 lg:w-2.5 h-4 sm:h-4 lg:h-5 bg-primary dark:bg-dark-primary inline-block ml-1 ${classVisibilityCursor}`}
      ></span>
    </p>
  );
}
