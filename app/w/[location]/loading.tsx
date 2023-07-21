const LoadingBar = () => (
  <div className=" animate-pulse rounded-xl p-4 w-full h-[5rem] flex justify-between items-center bg-slate-900"></div>
);

export default function Loading() {
  return (
    <div className="flex flex-col gap-3 w-full p-9">
      <LoadingBar />
      <LoadingBar />
      <LoadingBar />
      <LoadingBar />
      <LoadingBar />
    </div>
  );
}
