import { Link } from 'next-view-transitions';
import Container from './Container';
import { FooterStarsBackground } from './FooterStarsBackground';

const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
    ]
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Use", href: "/terms" },
    ]
  },
  {
    title: "Solutions",
    links: [
      { name: "Industrial Automation", href: "/solutions" },
      { name: "Products", href: "/products" },
    ]
  }
];

export default function Footer() {
  return (
    <footer className="relative dark:bg-neutral-950/15 bg-neutral-100/10 text-black dark:text-white pt-14 pb-8 overflow-hidden font-sans">
      <FooterStarsBackground />
      <Container className="relative z-10">
        
        {/* Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 mb-12">
          {footerLinks.map((column) => (
            <div key={column.title} className="flex flex-col">
              <h3 className="text-sm font-medium text-black dark:text-white mb-2">
                {column.title}
              </h3>
              <ul className="flex flex-col space-y-1">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-sm text-neutral-500 dark:text-[#888888]  hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="w-full flex items-center justify-center mb-8 relative">
          <h2 
            className="text-[18vw] leading-none font-medium tracking-tighter dark:text-neutral-300 text-neutral-700 hover:text-neutral-950 dark:hover:text-neutral-500 transition-all duration-400 select-none"
            style={{ WebkitFontSmoothing: "antialiased" }}
          >
            Hiecon<span className="text-[10vw] align-super">&reg;</span>
          </h2>
        </div>

        {/* Bottom Legal Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t text-xs text-[#888888]">
          <p>&copy;2026 Hiecon. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="/legal" className="hover:text-white transition-colors">
              <p className="text-sm">Legal disclosures</p>
            </Link>
          </div>
        </div>

      </Container>
    </footer>
  );
}
