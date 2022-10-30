import { Info } from "phosphor-react"

interface NotificationProps {
  title: string
  description: String
}

export function Notification({ title, description }: NotificationProps) {
  return (
    <a
      href="#"
      className="px-5 py-4 flex items-center bg-[rgb(32,32,36)] transition-colors hover:bg-[rgb(36,36,41)]"
    >
      <div className="relative shrink-0 p-1 after:content-[''] after:w-[6px] after:h-[6px] after:absolute after:-right-[2px] after:-top-[2px] after:bg-red-500 after:rounded-[50%]">
        <Info size={24} className="text-violet-500" />
      </div>
      <div className="flex-1 ml-5">
        <h3 className="text-sm text-[rgb(168,168,179)] font-normal mb-[0.5em] leading-[1]">
          {title}
        </h3>
        <p className="text-[10px] text-[rgb(168,168,179)]">{description}</p>
      </div>
    </a>
  )
}
