import { useRecoilState } from 'recoil'
import SpotifyWebApi from 'spotify-web-api-node'
import { playingTrackState } from '../atoms/playerAtom'
import Body from './Body'
import Right from './Right'
import Sidebar from './Sidebar'

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
})

const Dashboard = () => {
  const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState)
  const chooseTrack = (track) => {
    setPlayingTrack(track)
  }

  return (
    <main className="flex min-h-screen bg-black min-w-max lg:pb-24">
      <Sidebar />
      <Body spotifyApi={spotifyApi} chooseTrack={chooseTrack} />
      <Right />
    </main>
  )
}

export default Dashboard