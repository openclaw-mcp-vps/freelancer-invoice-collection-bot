import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'InvoiceBot — Automated Invoice Collection for Freelancers',
  description: 'Automated invoice follow-up and collection for freelancers. Send professional payment reminders, track invoice status, and escalate to collection agencies automatically.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="5300a166-0942-42cd-add2-3aadec9d93c6"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
