import React from "react";
import CommandCenterHome from "@/components/command-center/CommandCenterHome";
import { PrizeVision } from "@/components/command-center/home-sections/PrizeVision";
import { ActiveMissionBox } from "@/components/command-center/home-sections/ActiveMissionBox";
import { BrokerConsole } from "@/components/command-center/home-sections/BrokerConsole";
import { AgentDiary } from "@/components/command-center/home-sections/AgentDiary";
import { MissionStatusBox } from "@/components/home/MissionStatusBox";
import { MissionGamesSection } from "@/components/home/MissionGamesSection";
import { LuxuryCarsSection } from "@/components/home/LuxuryCarsSection";
import { MysteryPrizesSection } from "@/components/home/MysteryPrizesSection";
import { VideoExplainer } from "@/components/home/VideoExplainer";
import { VideoSection } from "@/components/home/VideoSection";

const AppHome: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <CommandCenterHome />
      <PrizeVision />
      <ActiveMissionBox />
      <BrokerConsole />
      <AgentDiary />
      <MissionStatusBox />
      <MissionGamesSection />
      <LuxuryCarsSection />
      <MysteryPrizesSection />
      <VideoExplainer />
      <VideoSection />
    </div>
  );
};

export default AppHome;
