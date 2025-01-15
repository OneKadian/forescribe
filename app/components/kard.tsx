// import Image from "next/image"


// interface CardProps {
//   title: string
//   subtitle: string
//   imageUrl: string
//   bgColor: string
// }

// export function Card({ title, subtitle, imageUrl, bgColor }: CardProps) {
//   return (
//   <div className={`h-[33vh] rounded-2xl ${bgColor} p-3`}>
//     <div className="h-[40%] w-full overflow-hidden rounded-lg">
//       <img
//         src={imageUrl}
//         alt={`${title} logo`}
//         className="h-full w-full object-cover"
//       />
//     </div>
//     <div className="mt-3 space-y-1 text-center">
//       <h3 className="text-xl font-semibold text-[#19154E]">{title}</h3>
//       <p className="text-sm font-semibold text-black">{subtitle}</p>
//     </div>
//   </div>
//   )
// }

import Image from "next/image";

interface CardProps {
  name: string;
  type: string;
  logo: string;
  bgColor: string;
}

export function Card({ name, type, logo, bgColor }: CardProps) {
  return (
    <div className={`h-[33vh] rounded-2xl ${bgColor} p-3`}>
      {/* Render image if available */}
      {logo ? (
        <div className="h-[40%] w-full overflow-hidden rounded-lg">
          <img
            src={logo}
            alt={`${name} logo`}
            className="h-full w-full object-cover"
          />
        </div>
      ) : (
        <div className="h-[40%] w-full bg-gray-300 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">No Image</p>
        </div>
      )}
      {/* Render text content */}
      <div className="mt-3 space-y-1 text-center">
        <h3 className="text-xl font-semibold text-[#19154E]">{name}</h3>
        <p className="text-sm font-semibold text-black">{type}</p>
      </div>
    </div>
  );
}
