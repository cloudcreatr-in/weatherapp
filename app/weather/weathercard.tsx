import Image from "next/image";

export default function WeatherCard({
  src,
  text,
  unit = "",
}: {
  src: string;
  text: string;
  unit?: string;
}) {
  return (
    <div className=" shadow-xl shadow-slate-400 rounded-xl p-4 w-full h-[5rem] flex justify-between items-center bg-slate-900">
      <div className="relative w-1/3 h-full grow-0">
        <Image src={src} fill className="absolute object-contain" alt="icons" />
      </div>

      <p className=" ml-6 grow text-white font-bold">{`${text} ${unit}`}</p>
    </div>
  );
}
