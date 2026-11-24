import { Reveal } from "./Reveal";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t dark:border-white/5 border-slate-200 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm dark:text-slate-500 text-slate-400 sm:flex-row">
        <p className="flex items-center gap-1.5">
          Built with <Heart size={14} className="text-rose-500" /> by Navin
        </p>
        <p>© {new Date().getFullYear()} Navin K. All rights reserved.</p>
      </div>
    </footer>
  );
}
