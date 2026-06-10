export default function Footer() {
  const links = [
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Services', href: '#services' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '#about' },
    { label: 'Contact Us', href: '#contact' }
  ];

  return (
    <footer className="bg-transparent border-t border-black/5 py-16 px-6 md:px-12 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start justify-items-stretch">
        
        {/* Left column: Vertical Navigation list */}
        <div className="flex flex-col gap-4 items-start text-left">
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#AAA] mb-1">
            SECTIONS
          </span>
          <nav className="flex flex-col gap-2.5 items-start">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans text-[21px] font-black tracking-tighter text-neutral-900 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#F4B179] hover:via-[#E0B3CF] hover:to-[#8A2EFF] hover:drop-shadow-[0_0_15px_rgba(138,46,255,0.45)] transition-all duration-300 block py-0.5"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Center column - Spacer for elegance */}
        <div className="hidden md:block"></div>

        {/* Right column: Brand & Copyright */}
        <div className="flex flex-col gap-6 items-start md:items-end md:text-right">
          <div className="flex items-center gap-2.5 group justify-end">
            <img 
              src="/logo.svg" 
              className="w-6 h-6 rounded-full shadow-[0_2px_8px_rgba(138,46,255,0.15)] group-hover:scale-108 transition-all duration-500" 
              alt="Logo" 
            />
            <span className="text-xl font-black tracking-tighter uppercase text-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#F4B179] hover:via-[#E0B3CF] hover:to-[#8A2EFF] hover:drop-shadow-[0_0_15px_rgba(138,46,255,0.45)] transition-all duration-300 cursor-default">
              Aeymotion.
            </span>
          </div>
          
          <p className="text-[10px] uppercase font-semibold tracking-widest text-[#AAA] leading-relaxed">
            © {new Date().getFullYear()} Aeymotion Studio.<br />
            All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-[10px] uppercase font-semibold tracking-widest text-[#AAA]">
            <a href="https://dribbble.com/aeymotion" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Dribbble</a>
            <a href="https://www.instagram.com/aey.motion/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Instagram</a>
            <a href="https://www.linkedin.com/company/aeymotion/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">LinkedIn</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
