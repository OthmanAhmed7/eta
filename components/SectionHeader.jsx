import React from "react";

const SectionHeader = ({ header, title }) => {
  return (
    <>
      <p className="flex items-center font-[300] tracking-[.45rem] text-[1.3rem]">
        {header}
      </p>

      <h2 className="text-[3.5rem] font-[600] leading-[5rem] tracking-tight mb-[2rem]">
        {title}
      </h2>
    </>
  );
};

export default SectionHeader;
