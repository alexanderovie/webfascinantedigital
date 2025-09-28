import { ImageResponse } from 'next/og'

// Image metadata
export const alt = 'Fascinante Digital - Agencia de Marketing Digital'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          color: 'white',
          fontFamily: 'system-ui, sans-serif',
          textAlign: 'center',
          padding: '40px',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            marginBottom: '20px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          }}
        >
          Fascinante Digital
        </div>
        <div
          style={{
            fontSize: 36,
            opacity: 0.9,
            marginBottom: '10px',
          }}
        >
          Agencia SEO y Desarrollo Web
        </div>
        <div
          style={{
            fontSize: 24,
            opacity: 0.8,
          }}
        >
          West Palm Beach, FL
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
