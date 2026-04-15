import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Getting Started - AI Memory',
  description: 'Install the browser extension or integrate the @aimemory/sdk developer SDK.',
}

export default function GettingStartedLayout({ children }: { children: React.ReactNode }) {
  return children
}
