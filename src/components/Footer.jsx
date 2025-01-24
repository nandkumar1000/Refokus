export default function Footer() {
  return (
    <footer className="w-full bg-zinc-900 text-white">
      <div className="max-w-screen-xl mx-auto py-10 flex flex-wrap gap-10">
        {/* Logo and Description Section */}
        <div className="flex-1" style={{ paddingLeft: "32px" }}>
          <h1 className="text-9xl font-bold leading-none tracking-tight" style={{ paddingLeft: "22px" }}>
            Nand.
          </h1>
          <p className="text-gray-400 mt-4" style={{ paddingTop: "10px", paddingLeft: "22px" }}>
            Empowering ideas with technology, we strive to create impactful solutions <br />for a connected world. Let's innovate and inspire together.
          </p>
        </div>

        {/* Socials and Links Section */}
        <div className="flex-1 grid grid-cols-2 gap-8">
          {/* Socials Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 capitalize">Follow Us</h3>
            {["Instagram", "Twitter (X)", "LinkedIn", "GitHub", "YouTube"].map((item, index) => (
              <a
                key={index}
                href="#"
                className="block mt-2 capitalize text-gray-400 hover:text-white transition"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Additional Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 capitalize">Quick Links</h3>
            {["Privacy Policy", "Terms of Service", "Contact Us", "Blog", "Careers"].map((item, index) => (
              <a
                key={index}
                href="#"
                className="block mt-2 capitalize text-gray-400 hover:text-white transition"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-zinc-800 py-8">
        <div className="max-w-screen-xl mx-auto text-center">
          <h3 className="text-lg font-semibold mb-4 capitalize">Subscribe to Our Newsletter</h3>
          <p className="text-gray-400 mb-4">
            Stay updated with the latest news, articles, and resources. No spam, we promise!
          </p>
          <div className="flex justify-center items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-1/2 py-3 px-4 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring focus:ring-violet-500"
            />
            <button className="py-3 px-6 bg-violet-500 rounded-md text-white hover:bg-violet-600 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Description and Badge Section */}
      <div className="bg-zinc-900 py-8">
        <div className="max-w-screen-xl mx-auto text-center">
          <p className="text-gray-400">
            We are dedicated to delivering innovative and reliable tech solutions that empower businesses and individuals alike. Let's build the future together.
          </p>
          <img
            src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp"
            alt="Premium Partner Badge"
            className="w-32 mx-auto mt-5"
          />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-zinc-800 py-4">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <p className="text-gray-400 text-sm" style={{ marginLeft: "30px" }}>
            © {new Date().getFullYear()} Nand. All rights reserved.
          </p>
          <div className="flex gap-4" style={{ marginRight: "30px" }}>
            {["Privacy", "Terms", "Sitemap"].map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-400 text-sm hover:text-white transition"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
