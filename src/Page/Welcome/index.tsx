import ReactPlayer from "react-player/youtube";
import { container, link } from "./styles";

const Welcome = () => {
  const videoYoutube = "https://www.youtube.com/watch?v=32oQrjSCUTw"
  return (
    <div
      style={container}
    >
      <ReactPlayer
        url={videoYoutube}
        height={400}
        width={600}
        style={{
          marginRight: "auto",
          marginLeft: "auto",
          marginTop: "50px",
        }}
        playing={true}
        controls={true}
      />
      <p>
        Si votre navigateur ne prend pas en charge les vidéos HTML5. Voici
        <> </>
        <a href={videoYoutube} rel="noopener noreferrer" style={link}>
          un lien pour visionner la vidéo
        </a>
        .
      </p>
    </div>
  )
}

export default Welcome;