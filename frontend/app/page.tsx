import Button from "../components/ui/Button";
export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-950 via-slate-950 to-black">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-green-400">
          🌾 AgriSense AI
        </h1>

        <p className="mt-6 text-2xl text-gray-300">
          An Intelligent Smart Farming Decision Support System
        </p>

        <p className="mt-4 text-lg text-gray-500">
          Empowering Farmers with Artificial Intelligence for Smarter Farming Decisions
        </p>
        <div className="mt-8">
  <Button text="Get Started" />
</div>
      </div>
    </main>
  );
}