import Particles from "./Particles";
import AIGlow from "./AIGlow";
import SunRays from "./SunRays";
import Fog from "./Fog";
export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">

      <img
        src="/images/dashboard-bg.jpg"
        alt="Background"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* 2️⃣ Sun Rays (Behind everything) */}
      <SunRays />

       {/* Fog */}
      <Fog />

      <div className="absolute inset-0 bg-black/8" />

      <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-orange-400/10 blur-[200px]" />

      <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-green-500/8 blur-[220px]" />

      <AIGlow />      {/* Floating Particles */}
      <Particles />

    </div>
  
  );
}
