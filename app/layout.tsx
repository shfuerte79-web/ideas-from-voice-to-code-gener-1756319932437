import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: Voice-to-Code Generator',
  description: '[
  {
    "title": "Voice-Powered Game Development",
    "one_liner": "Build video games using only your voice commands.",
    "why_now": "The surge in indie game development and demand for accessible tools for non-coders.",
    "novel_mechanism": "Transforms complex game design concepts into voice parameters.",
    "ai_stack": [
      "GPT-4",
      "Speech",
      "RAG",
      "Logic-based AI"
    ],
    "edge_use_cases": [
      "Kids designing their own simple games",
      "Game jam enthusiasts creating rapid prototypes"
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "Voice command interpretation",
        "Basic game mechanics generation",
        "Voice-activated asset library"
      ],
      "tools": [
        "Unity for game dev",
        "Voice recognition API",
        "Node.js"
      ],
      "data_bootstrap": [
        "Collect existing game mechanics",
        "Public game assets",
        "Tutorial scripts from YouTube"
      ],
      "risk": [
        "Complex game logic might overwhelm users",
        "Voice recognition errors"
      ],
      "mitigation": [
        "Provide templates for common games",
        "Train on varied voice data sets"
      ]
    },
    "go_to_market": {
      "hooks": [
        "Showcase simple game creation in under 5 minutes",
        "Engage communities with game jams"
      ],
      "channels": [
        "itch.io",
        "ProductHunt",
        "Discord"
      ],
      "pricing": {
        "free": "Limited game types",
        "pro": "Unlock full game capabilities",
        "business": "Team licenses for educational institutions"
      }
    },
    "moat": [
      "Community-created templates",
      "Integration with existing game engines",
      "Regular updates based on user feedback"
    ],
    "scores": {
      "novelty": 8,
      "72h_feasibility": 7,
      "revenue_potential": 8,
      "defensibility": 7
    },
    "total_score": 30,
    "reasoning": "This idea taps into the underserved market of game creation for non-coders, making it appealing and intuitive."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}