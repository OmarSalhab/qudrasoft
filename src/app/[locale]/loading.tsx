
export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="w-9 h-9 md:w-16 md:h-16 border-4 border-[#0f5694]  border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-[#0f5694] font-semibold">Loading...</p>
      </div>
    </div>
  )
}
