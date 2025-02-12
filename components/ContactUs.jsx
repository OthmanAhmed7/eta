import React from "react";

const ContactUs = () => {
  return (
    <section className="mx-auto my-[8rem] max-w-[1440px] flex justify-center items-center gap-[10rem] px-[1rem]">
      <div className="flex-1 flex-col gap-[2rem] w-full">
        <div className="flex flex-col w-full">
          <p className="flex items-center gap-[.5rem] font-[300] tracking-[.45rem] text-[1.3rem]">
            Contact
          </p>

          <h2 className="text-[3.5rem] font-[700] leading-[5rem] tracking-tight">
            Talk With Us!
          </h2>
        </div>

        <p className="text-slate-500 w-[30rem] text-[1.2rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
          necessitatibus dolorum vitae obcaecati? Totam officiis hic inventore
          adipisci esse maiores nisi similique doloremque voluptas odio?
        </p>

        <div className="flex items-center justify-start gap-[2rem] mt-[4rem]">
          <div className="flex flex-col items-start gap-[2rem]">
            <span className="w-[5rem] h-[1px] bg-[#161616]"></span>

            <h4 className="font-[500] tracking-[0.1rem] text-[#161616]">
              Phone
            </h4>

            <p className="text-slate-500 text-[1.1rem]">(002) 01000083181</p>
          </div>

          <div className="flex flex-col items-start gap-[2rem]">
            <span className="w-[5rem] h-[1px] bg-[#161616]"></span>

            <h4 className="font-[500] tracking-[0.1rem] text-[#161616]">
              Email
            </h4>

            <p className="text-slate-500 text-[1.1rem]">employer@eta.com</p>
          </div>

          <div className="flex flex-col items-start gap-[2rem]">
            <span className="w-[5rem] h-[1px] bg-[#161616]"></span>

            <h4 className="font-[500] tracking-[0.1rem] text-[#161616]">
              WhatsApp
            </h4>

            <p className="text-slate-500 text-[1.1rem]">Chat With Us</p>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <form action="">
          <div>
            <input type="text" />
            <input type="text" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
