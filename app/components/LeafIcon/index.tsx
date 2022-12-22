import React from "react";

interface Props {
  className?: string;
}

export const LeafIcon = (props: Props) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="var(--klima-green)"
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
  >
    <path d="M4.10086 8.1C-1.35914 13.56 -1.35914 22.44 4.10086 27.9C6.84086 30.64 10.4209 32 14.0009 32C17.5809 32 21.1609 30.64 23.9009 27.9C30.8609 20.94 32.0009 0 32.0009 0C32.0009 0 11.0609 1.14 4.10086 8.1ZM21.0809 25.08C19.1809 26.96 16.6809 28 14.0009 28C12.2209 28 10.5409 27.5 9.04086 26.64C10.8809 20.88 14.2809 15.82 18.8009 12C13.5409 14.72 9.12086 18.92 6.06086 24C3.10086 20.08 3.36086 14.5 6.94086 10.92C10.4209 7.44 20.0809 5.3 27.6009 4.4C26.7009 11.92 24.5609 21.58 21.0809 25.08Z" />
  </svg>
);