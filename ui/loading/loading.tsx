const LoadingBar = () => (
  <div className="h-[20px] w-[100%]  max-w-4xl bg-gray-200 rounded-lg animate-pulse"></div>
);

export default function Loading() {
  return (
    <div className="flex flex-col gap-3 w-full p-9">
      <LoadingBar />
      <LoadingBar />
      <LoadingBar />
      <LoadingBar />
      <LoadingBar />
      <LoadingBar />
      <LoadingBar />
      <LoadingBar />
    </div>
  );
}
