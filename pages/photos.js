import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function PhotosRedirect() {
  const router = useRouter()
  useEffect(() => {
    router.push('https://photos.alexingberg.com')
  }, [router])

  return (
    <p>redirecting to portfolio...</p>
  )
}
