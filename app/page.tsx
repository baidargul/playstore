import { AppGallery } from "@/components/site/appGallery/AppGallery";
import AppHeader from "./components/AppHeader";
import CollapsableDrawer from "@/components/collapsableDrawer/CollapsableDrawer";
import { Locate, Mail, PhoneCall, Shield } from "lucide-react";
import ListInformation, {
  listInformationType,
} from "@/components/ListInfomation/ListInformation";
import ListInformationFixed, {
  listInformationFixedType,
} from "@/components/ListInfomation/ListInformationFixed";

export default function Home() {
  const listItems: listInformationType[] = [
    {
      title: "Phone",
      icon: <PhoneCall className="w-4 h-4 mt-2" />,
      description: "+18008336687",
    },
    {
      title: "Support email",
      icon: <Mail className="w-4 h-4 mt-2" />,
      description: "PSX-Feedback-Android@adobe.com",
    },
    {
      title: "Address",
      icon: <Locate className="w-4 h-4 mt-2" />,
      description: `Adobe Inc. 345 Park Avenue San Jose, CA 95110-2704`,
    },
    {
      title: "Privacy Policy",
      icon: <Shield className="w-4 h-4 mt-2" />,
    },
  ];

  const fixedListItems: listInformationFixedType[] = [
    {
      title: "CamScanner- scanner, PDF maker",
      icon: "cs",
      description: "CamSoft Infomation",
      score: 4.8,
    },
    {
      title: "Filmora - Video Editor & Maker",
      icon: "filmora",
      description: "Wondershare Filmora",
      score: 4.7,
    },
    {
      title: "Promova Easy Language Learning",
      icon: "easy",
      description: "Boosters",
      score: 4.3,
    },
    {
      title: "Forest: Focus for Productivity",
      icon: "forest",
      description: "Seekrtech",
      score: 4.5,
    },
    {
      title: "Gallery",
      icon: "gallery",
      description: "Google LLC",
      score: 4.4,
    },
    {
      title: "Microsoft Whiteboard",
      icon: "white",
      description: "Microsoft Corporation",
      score: 4.6,
    },
  ];

  return (
    <div className="h-[2000px] px-28 p-10">
      <AppHeader />
      <div className="flex justify-between gap-1 mt-20">
        <div className="w-[67%]">
          <AppGallery />
        </div>
        <div className="w-[28%]">
          <CollapsableDrawer title="App support">
            <ListInformation list={listItems} />
          </CollapsableDrawer>
          <CollapsableDrawer title="More apps to try" alwaysOpen>
            <ListInformationFixed list={fixedListItems} />
          </CollapsableDrawer>
        </div>
      </div>
    </div>
  );
}
