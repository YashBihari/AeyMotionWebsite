export default function Footer() {
  return (
    <footer className="bg-transparent border-t border-black/5 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="text-xl font-black tracking-tighter uppercase text-black">Aeymotion.</span>
        </div>
        
        <p className="text-[10px] uppercase font-semibold tracking-widest text-[#AAA]">
          © {new Date().getFullYear()} Aeymotion Studio. All rights reserved.
        </p>

        <div className="flex items-center gap-6 text-[10px] uppercase font-semibold tracking-widest text-[#AAA]">
          <a href="https://dribbble.com/aeymotion" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Dribbble</a>
          <a href="https://www.instagram.com/aey.motion/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Instagram</a>
          <a href="https://www.linkedin.com/company/aeymotion/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
