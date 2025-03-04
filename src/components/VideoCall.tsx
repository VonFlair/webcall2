import DailyIframe from '@daily-co/daily-js'
import { LiveKitRoom } from 'livekit-client-react'

export default function VideoCall() {
  const [dailyRoom, setDailyRoom] = useState(null)
  const [livekitToken, setLivekitToken] = useState('')

  useEffect(() => {
    const createCall = async () => {
      const { token } = await fetch('/api/daily-token').then(res => res.json())
      const callFrame = DailyIframe.createFrame({
        url: `https://your-domain.daily.co/${token}`,
      })
      setDailyRoom(callFrame)
    }
    createCall()
  }, [])

  return (
    <LiveKitRoom
      serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL}
      token={livekitToken}
      connect={true}
    >
      {/* Video interface */}
    </LiveKitRoom>
  )
}