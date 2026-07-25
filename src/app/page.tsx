export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-6xl md:text-7xl font-extrabold text-center bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        MotionCanvas AI
      </h1>

      <p className="mt-6 text-2xl text-center text-gray-300">
        Paint the air with your hands.
      </p>

      <p className="mt-6 max-w-3xl text-center text-gray-400 leading-8">
        Create stunning neon particle trails using AI-powered hand tracking.
        Experience a magical drawing canvas where your fingertips become your
        brush.
      </p>

      <div className="mt-10 flex gap-5">
        <button className="rounded-xl bg-cyan-500 px-8 py-3 text-lg font-semibold transition hover:bg-cyan-400">
          Start Creating
        </button>

        <button className="rounded-xl border border-gray-600 px-8 py-3 text-lg transition hover:border-cyan-400">
          Learn More
        </button>
      </div>
    </main>
  );
}