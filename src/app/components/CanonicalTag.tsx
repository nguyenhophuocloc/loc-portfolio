'use client'

import { useEffect } from 'react'

export default function CanonicalTag() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const canonicalLink = document.createElement('link')
    canonicalLink.rel = 'canonical'
    canonicalLink.href = window.location.href
    document.head.appendChild(canonicalLink)

    return () => {
      document.head.removeChild(canonicalLink)
    }
  }, [])

  return null
}
