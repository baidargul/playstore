"use client";
import { ChevronDown, ChevronRight, ChevronUp, PhoneCall } from "lucide-react";
import React, { useState } from "react";
import { listInformationType } from "../ListInfomation/ListInformation";

type Props = {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  alwaysOpen?: boolean;
};

const CollapsableDrawer = (props: Props) => {
  const [isCollapsed, setIsCollapsed] = useState(
    props.alwaysOpen ? (props.alwaysOpen === true ? true : false) : false
  );

  const handleToggle = () => {
    if (props.alwaysOpen) return;
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="select-none cursor-pointer" onClick={handleToggle}>
      <div className="flex items-center gap-1">
        <div className="text-xl font-semibold">{props.title}</div>
        <div className="p-3 hover:bg-slate-100 rounded-full">
          {!isCollapsed && !props.alwaysOpen && <ChevronDown />}
          {isCollapsed && !props.alwaysOpen && <ChevronUp />}
          {props.alwaysOpen && <ChevronRight />}
        </div>
      </div>
      {(props.alwaysOpen || isCollapsed) && <div>{props.children}</div>}
    </div>
  );
};

export default CollapsableDrawer;
