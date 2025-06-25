import { getCountdownData } from "@/utils/countdownDate";
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
  const countdown = getCountdownData();
  
  <div className="pb-[env(safe-area-inset-bottom)] pt-[env(safe-area-inset-top)] w-full text-center mt-6">
    <p className="pb-[env(safe-area-inset-bottom)] pt-[env(safe-area-inset-top)] text-sm uppercase text-gray-400 tracking-widest">Mancano</p>
    <h2 className="pb-[env(safe-area-inset-bottom)] pt-[env(safe-area-inset-top)] text-4xl md:text-5xl font-bold text-white neon-text-glow">
      {countdown.remainingDays} giorni
    </h2>
    <p className="pb-[env(safe-area-inset-bottom)] pt-[env(safe-area-inset-top)] text-xs text-gray-500 mt-2">alla fine della missione</p>
  </div>
  return (
  <div className="pb-[env(safe-area-inset-bottom)] pt-[env(safe-area-inset-top)] text-center text-white py-4">
    <h2 className="pb-[env(safe-area-inset-bottom)] pt-[env(safe-area-inset-top)] text-lg">⏳ Tempo rimanente</h2>
    <p className="pb-[env(safe-area-inset-bottom)] pt-[env(safe-area-inset-top)] text-2xl font-mono neon-text-glow">
      {countdown.days}d {countdown.hours}h {countdown.minutes}m {countdown.seconds}s
    </p>
  </div>
    <div className="pb-[env(safe-area-inset-bottom)] pt-[env(safe-area-inset-top)] bg-black text-white min-h-screen overflow-x-hidden">
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
