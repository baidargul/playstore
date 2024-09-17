import { AppGallery } from "@/components/site/appGallery/AppGallery";
import AppHeader from "./components/AppHeader";
import CollapsableDrawer from "@/components/collapsableDrawer/CollapsableDrawer";
import {
  ArrowRight,
  Cloud,
  Delete,
  Locate,
  Lock,
  Mail,
  PhoneCall,
  Share,
  Share2,
  Shield,
} from "lucide-react";
import ListInformation, {
  listInformationType,
} from "@/components/ListInfomation/ListInformation";
import ListInformationFixed, {
  listInformationFixedType,
} from "@/components/ListInfomation/ListInformationFixed";
import GoogleButton from "@/components/site/button/GoogleButton";
import TextAnimatedIn from "@/components/TextAnimatedIn/TextAnimatedIn";
import MyFooter from "@/components/MyFooter/MyFooter";

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
    <div className="min-h-[100dvh] px-28 p-10">
      <AppHeader />
      <div className="flex justify-between gap-1 mt-20">
        <div className="w-[67%]">
          <AppGallery />
          <div className="mt-10 px-2">
            <div className="flex flex-col gap-4 text-sm tracking-wide">
              <div className="font-medium text-2xl">What&apos;s new</div>
              <div>
                Big news: Retouching tools have arrived! You can now enjoy the
                magic of skin smoothing, reshaping, & more!
              </div>
              <div>
                Heal tool: Our basic heal feature smooths out areas to give you
                a quick and easy touch up.
              </div>
              <div>
                Reshape: Transform your photos with the reshape tool. Refine
                face shape and emphasize features by enhancing contours, lips,
                and eyes to get picture-perfect results in seconds.
              </div>
            </div>
            <div>
              <div className="font-medium text-2xl mt-10 flex items-center gap-4">
                <p>Data safety</p>
                <p>
                  <ArrowRight className="mt-2" />
                </p>
              </div>
            </div>
            <div className="mt-5">
              Safety starts with understanding how developers collect and share
              your data. Data privacy and security practices may vary based on
              your use, region, and age. The developer provided this information
              and may update it over time.
            </div>
            <div className="w-full border border-zinc-300 rounded-md flex flex-col gap-4 p-2 px-4 mt-8 text-zinc-600">
              <div className="flex items-start gap-4">
                <span>
                  <Share2 className="w-5 h-5 mt-[2px] opacity-60" />
                </span>
                <span className="font-medium ">
                  This app may share these data types with third parties Photos
                  <p className="text-sm font-normal">
                    and videos and App info and performance
                  </p>
                </span>
              </div>
              <div className="flex items-start gap-4">
                <span>
                  <Cloud className="w-5 h-5 mt-[2px] opacity-60" />
                </span>
                <span className="font-medium ">
                  This app may collect these data types
                  <p className="text-sm font-normal">
                    Personal info, Financial info and 5 others
                  </p>
                </span>
              </div>
              <div className="flex items-start gap-4">
                <span>
                  <Lock className="w-5 h-5 mt-[2px] opacity-60" />
                </span>
                <span className="font-medium ">
                  Data is encrypted in transit
                </span>
              </div>
              <div className="flex items-start gap-4">
                <span>
                  <Delete className="w-5 h-5 mt-[2px] opacity-60" />
                </span>
                <span className="font-medium ">
                  You can request that data be deleted
                </span>
              </div>
              <div className="p-2 px-4 rounded-lg font-medium text-[#01875f] w-fit cursor-pointer hover:bg-[#F6FAFE] my-2 opacity-100">
                See details
              </div>
            </div>
          </div>
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
      <MyFooter />
    </div>
  );
}
