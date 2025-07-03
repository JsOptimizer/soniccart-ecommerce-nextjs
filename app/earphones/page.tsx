import Image from "next/image";
import Link from "next/link";

const AnimatedWave = () => (
  <svg
    className="w-full h-32 md:h-48"
    viewBox="0 0 1440 320"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#d87d4a"
      fillOpacity="0.4"
      d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
    >
      <animate
        attributeName="d"
        dur="6s"
        repeatCount="indefinite"
        values="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z;M0,192L60,186.7C120,181,240,171,360,154.7C480,139,600,117,720,128C840,139,960,181,1080,197.3C1200,213,1320,203,1380,197.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z;M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
      />
    </path>
  </svg>
);

const page = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full z-0">
        <AnimatedWave />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center gap-8 px-6 py-16 rounded-xl shadow-xl bg-white/80 backdrop-blur-md mt-24">
        <Image
          src="/image-speaker-zx9.png"
          alt="Speakers Illustration"
          width={180}
          height={180}
          className="animate-bounce drop-shadow-xl mb-4"
          priority
        />
        <h1 className="text-4xl md:text-5xl font-extrabold text-brand mb-2 text-center drop-shadow-sm">
          Coming Soon
        </h1>
        <p className="text-lg md:text-xl text-gray-700 text-center max-w-xl">
          We&apos;re crafting something amazing for you. Our new headphone
          experience will launch soon.
          <br />
          Stay tuned for updates and exclusive early access!
        </p>
        <Link href="/" className="mt-4">
          <button className="px-8 py-4 bg-brand hover:bg-brand-100 transition-colors duration-300 text-white font-bold rounded-lg shadow-lg text-lg animate-pulse">
            Back to Home
          </button>
        </Link>
      </div>
    </main>
  );
};

export default page;
