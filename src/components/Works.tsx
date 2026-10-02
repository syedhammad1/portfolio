import Projects from "./Projects";
import AnimatedButton from "./AnimatedButton";
import { site } from "@/data/site";

// Shared by the home page ("My Works" section) and /portfolio
export default function Works({ showBorders = false }: { showBorders?: boolean }) {
  return (
    <div>
      <Projects showBorders={showBorders} />
      <div className="max-w-xl shadow-2xl h-40 py-5 md:py-0 px-5 md:px-10 mt-10 md:flex justify-between items-center">
        <p className="text-lg font-bold mb-3 md:mb-0">I cook with these ingredients 👉</p>
        <AnimatedButton title="MY RESUME" href={site.resume.href} download={site.resume.fileName} />
      </div>
    </div>
  );
}
