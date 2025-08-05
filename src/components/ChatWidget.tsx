"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ChatWidget() {
  return (
    <div className="fixed bottom-6 left-6 z-50">
      <Button
        size="lg"
        className="rounded-full w-14 h-14 bg-blue-600 hover:bg-blue-700 shadow-lg"
        onClick={() => {
          // Handle chat widget click
          console.log("Chat widget clicked")
        }}
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </div>
  )
}
