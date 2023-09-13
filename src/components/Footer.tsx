import React from "react";
 
export const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="flex justify-between mx-6 p-3">
        <ul>
          <li className="font-bold text-2xl">Company</li>
          <li>About</li>
          <li>Careers</li>
        </ul>
        <ul>
          <li className="font-bold text-2xl">Company</li>
          <li>Legal</li>
          <li>About</li>
          <li>Careers</li>
        </ul>
        <ul>
          <li className="font-bold text-2xl">Contact us</li>
          <li>Help & Support</li>
          <li>Legal</li>
          <li>Partner</li>
        </ul>
      </div>
    </div>
  );
};
