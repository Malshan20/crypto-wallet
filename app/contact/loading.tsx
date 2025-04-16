import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <Loader2 className="h-12 w-12 animate-spin text-bold-lavender mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-bold-lavender mb-2">Loading...</h2>
        <p className="text-bold-lavender/70">Preparing contact information</p>
      </div>
    </div>
  )
}
