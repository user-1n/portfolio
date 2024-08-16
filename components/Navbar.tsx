// import { Socials } from "@/constants";
// import Image from "next/image";
// import React from "react";

// const Navbar = () => {
//   return (
//     <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
//       <div className="flex flex-row gap-3 items-center">
//         <div className="relative">
        
//         </div>
//         <h1 className="text-white text-[25px] font-semibold">
//           Piyush{" "}
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
//             {" "}
//             Raj{" "}
//           </span>
//         </h1>
//       </div>

//       <div className="flex flex-row gap-5 mb-2">
//         {Socials.map((social) => (
//           <Image
//             key={social.name}
//             src={social.src}
//             alt={social.name}
//             width={28}
//             height={28}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js
import React from "react";

const Navbar: React.FC = () => { // Add type annotation for functional component
  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
      <div className="flex flex-row gap-3 items-center">
        <div className="relative">
          
        </div>
        <h1 className="text-white text-[25px] font-semibold">
          Piyush{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            {" "}
            Raj{" "}
          </span>
        </h1>
      </div>

      <div className="flex flex-row gap-5 mb-2">
        {Socials.map((social) => (
          <Link key={social.name} href={social.link} target="_blank" rel="noopener noreferrer">
            <Image
              src={social.src}
              alt={social.name}
              width={28}
              height={28}
              className="cursor-pointer transition-transform duration-200 hover:scale-110" // Add hover effect
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;

