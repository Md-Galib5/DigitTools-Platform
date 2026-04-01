import { FaYoutube, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#101727] pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Brand */}
          <div className="md:col-span-5">
            <h2 className="text-3xl font-bold text-white mb-6">
              DigiTools
            </h2>

            <p className="text-zinc-400 text-lg max-w-md leading-relaxed">
              Premium digital tools for creators,<br />
              professionals, and businesses. Work smarter<br />
              with our suite of powerful tools.
            </p>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-6 text-lg">
              Product
            </h3>
            <ul className="space-y-4 text-zinc-400">
              <li><a href="#" className="hover:text-white">Features</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">Templates</a></li>
              <li><a href="#" className="hover:text-white">Integrations</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-6 text-lg">
              Company
            </h3>
            <ul className="space-y-4 text-zinc-400">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Press</a></li>
            </ul>
          </div>
          <div className="md:col-span-3 grid grid-cols-2 gap-6">
            
            <div>
              <h3 className="text-white font-semibold mb-6 text-lg">
                Resources
              </h3>
              <ul className="space-y-4 text-zinc-400">
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Community</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-6 text-lg">
                Social Links
              </h3>

              <div className="flex items-center gap-3">
                <a className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
                  <FaYoutube className="text-white text-lg" />
                </a>
                <a className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
                  <FaFacebookF className="text-white text-lg" />
                </a>
                <a className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
                  <FaXTwitter className="text-white text-lg" />
                </a>
              </div>
            </div>

          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <div>© {new Date().getFullYear()} DigiTools. All rights reserved.</div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;