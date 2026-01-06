export default function Template({ children }) {
  return (
    <>
      <div
        id="banner-1"
        className="fixed top-0 min-h-screen w-1/4 left-0 bg-white z-[1000]"
      ></div>
      <div
        id="banner-2"
        className="fixed top-0 min-h-screen w-1/4 left-1/4 bg-white z-[1000]"
      ></div>
      <div
        id="banner-3"
        className="fixed top-0 min-h-screen w-1/4 left-2/4 bg-white z-[1000]"
      ></div>
      <div
        id="banner-4"
        className="fixed top-0 min-h-screen w-1/4 left-3/4 bg-white z-[1000]"
      ></div>
      {children}
    </>
  );
}
