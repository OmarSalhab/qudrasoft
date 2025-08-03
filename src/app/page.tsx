import { Suspense } from "react"
import HomeClient from "./pageClient"
import Loading from "./loading"


export async function generateStaticParams() {
	return [];
}

// This is now a server component by default
export default function HomePage() {
  return (
    <Suspense fallback={<Loading/>}>
      <HomeClient />
    </Suspense>
  )
}