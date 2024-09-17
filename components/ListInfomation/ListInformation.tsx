import { PhoneCall } from "lucide-react";
import React from "react";

type Props = {
  list: listInformationType[];
};

export type listInformationType = {
  title: string;
  icon: React.ReactNode;
  description?: string;
};

const ListInformation = (props: Props) => {
  return props.list.map((item: listInformationType) => (
    <div className="flex gap-4 items-start hover:bg-zinc-100 rounded-md px-4 py-2 -ml-4">
      <div>{item.icon}</div>
      <div className="flex flex-col ">
        <span className="font-medium">{item.title}</span>
        {item.description && (
          <span className="text-sm text-slate-600 tracking-wide">
            {item.description}
          </span>
        )}
      </div>
    </div>
  ));
};

export default ListInformation;
