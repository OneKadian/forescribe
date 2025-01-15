import Image from "next/image"


interface CardProps {
  name: string
  logo: string
  type: string
  bgColor: string
}

export function Card({ name, logo, type, bgColor }: CardProps) {
  return (
    <div className={`h-[33vh] rounded-2xl ${bgColor} p-3`}>
      <div className="h-[40%] w-full overflow-hidden rounded-lg">
        <img
          src={logo}
          alt={`${name} logo`}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mt-3 space-y-1 text-center">
        <h3 className="text-xl font-semibold text-[#19154E]">{name}</h3>
        <p className="text-sm font-semibold text-black">{type}</p>
      </div>
    </div>
  )
}