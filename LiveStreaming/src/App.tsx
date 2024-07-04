import VideoPlayer from './Components/VideoPlayer';

function App() {

  return (
    <>
      <h1>Live Streaming App by Izhar</h1>
      <br />
      <VideoPlayer src='http://localhost:8080/live/test.flv' />
    </>
  )
}

export default App
