import { Star, StarHalf, StarIcon, StarOff } from "lucide-react";
import React from "react";

type Props = {
  list: listInformationFixedType[];
};

export type listInformationFixedType = {
  title: string;
  icon: React.ReactNode;
  score: number;
  description?: string;
};

const ListInformationFixed = (props: Props) => {
  return props.list.map((item: listInformationFixedType) => (
    <div
      key={item.title}
      className="flex gap-4 items-center hover:bg-zinc-100 rounded-md px-4 py-2 -ml-4"
    >
      <div>
        <img
          src={`/Apps/${item.icon}.webp`}
          className="rounded-xl w-13 h-13 drop-shadow-[0_1px_1px_#2b2a2a8a]"
        />
      </div>
      <div className="flex flex-col ">
        <span className="font-medium">{item.title}</span>
        {item.description && (
          <span className="text-sm text-slate-600 tracking-wide">
            {item.description}
          </span>
        )}
        <span className="text-sm text-slate-600 tracking-wide flex items-center gap-2">
          {item.score}
          <Star className="w-4 h-4 fill-slate-600 opacity-80 scale-75 -ml-[6px] mt-[2px]" />
        </span>
      </div>
    </div>
  ));
};

export default ListInformationFixed;
