import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <section>
      <div className="w-full">
        <Image
          width={500}
          height={500}
          alt="About Us Main Cover"
          src="https://dar-designs.net/wp-content/uploads/2022/04/park-view-19.jpg"
          className="w-[100vw] h-[100vh] object-cover object-center"
        />
      </div>

      <div></div>
    </section>
  );
};

export default page;
