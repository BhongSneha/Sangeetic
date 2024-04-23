import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="ml-2  tertiary_bg px-8 py-16 mb-20">
      <div className="grid grid-cols-12 ">
        <div className="col-span-3 text-sm">
          <ul>
            <li className="font-bold mb-4 hover:text-white hover:underline cursor-pointer">Company</li>
            <li className="text-gray-400 my-2 hover:text-white hover:underline cursor-pointer">About</li>
            <li className="text-gray-400 my-2 hover:text-white hover:underline cursor-pointer">Jobs</li>
            <li className="text-gray-400 my-2 hover:text-white hover:underline cursor-pointer">For the Record</li>
          </ul>
        </div>
        <div className="col-span-3">
          <ul>
            <li className="font-bold hover:text-white hover:underline cursor-pointer">Communities</li>
            <li className="text-gray-400 my-2 hover:text-white hover:underline cursor-pointer">For Artists</li>
            <li className="text-gray-400 my-2 hover:text-white hover:underline cursor-pointer">Developers</li>
            <li className="text-gray-400 my-2 hover:text-white hover:underline cursor-pointer">Advertising</li>
            <li className="text-gray-400 my-2 hover:text-white hover:underline cursor-pointer">Investors</li>
            <li className="text-gray-400 my-2 hover:text-white hover:underline cursor-pointer">Vendors</li>
          </ul>
        </div>
        <div className="col-span-3">
          <ul>
            <li className="font-bold hover:text-white hover:underline cursor-pointer">Useful links</li>
            <li className="text-gray-400 my-2 hover:text-white hover:underline cursor-pointer">Support</li>
            <li className="text-gray-400 my-2 hover:text-white hover:underline cursor-pointer">Free Mobile App</li>
          </ul>
        </div>
        <div className="col-span-3">
          <div className="flex justify-end gap-2 hover:text-white hover:underline cursor-pointer">
            <FaFacebook className="text-4xl p-2 rounded-full bg-[#292929] shadow-2xl hover:bg-white/10" />
            <FaInstagram className="text-4xl p-2 rounded-full bg-[#292929] shadow-2xl hover:bg-white/10" />
            <FaTwitter className="text-4xl p-2 rounded-full bg-[#292929] shadow-2xl hover:bg-white/10" />
          </div>
        </div>
      </div>
      <div className="border-b border-white/10 my-8 w-full"></div>
      <div className="flex justify-between">
        <ul className="text-sm flex gap-4">
          <li className="text-gray-400 hover:text-white hover:underline cursor-pointer">Legal</li>
          <li className="text-gray-400 hover:text-white hover:underline cursor-pointer">Privacy Center</li>
          <li className="text-gray-400 hover:text-white hover:underline cursor-pointer">Privacy Policy</li>
          <li className="text-gray-400 hover:text-white hover:underline cursor-pointer">Cookies</li>
          <li className="text-gray-400 hover:text-white hover:underline cursor-pointer">About Ads</li>
          <li className="text-gray-400 hover:text-white hover:underline cursor-pointer">Accessibility</li>
        </ul>
        <h4 className="text-gray-400 text-sm">© 2023 Spotify SB</h4>
      </div>
    </div>
  );
};

export default Footer;
