import { Link } from "react-router-dom"

interface NotificationProps {
  title: string | null | undefined
  date: string | null | undefined
  url: string
}

export function NotificationItem({ title, date, url }: NotificationProps) {
  return (
    <div className="first:rounded-t-xl last:rounded-b-xl relative w-full p-4 bg-white flex items-center justify-between">
      <div className="flex flex-1 flex-col items-start gap-1">
        <h1 className="text-slate-700 font-bold">{title}</h1>
        <span className="text-slate-600 text-sm">{date}</span>
      </div>
      <Link
        to={url}
        className="bg-slate-300/30 hover:bg-slate-300/50 border border-rifas-line rounded-xl py-3 px-4 transition-all"
      >
        <span className="text-green-500 text-sm">Visualizar</span>
      </Link>
    </div>
  )
}
