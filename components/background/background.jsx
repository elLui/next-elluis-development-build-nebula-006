import styled from "styled-components";
import background_video from "../../public/assets/video/AdobeStock_255259620.mp4"
//background-image: url(${ backgroundPoster });

const BackgroundVideoStyles = styled.div`
  video {
    position: absolute;
    background-color: #a9c5c5;
    background-attachment: scroll;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-position: center;
    object-fit: fill;
    z-index: -10;
  }

  @keyframes play {
    100% {
      //transform: translateY(-100%);
      //transform: scale(0.25);

    }
`;





export default function BackgroundVideo() {



	let video__background;
	return (

		<BackgroundVideoStyles>
			{/* playsinline is needed for IOS */ }
			<video playsInline autoPlay muted loop>
				<source src={ background_video } type={ "video/mp4" }/>
			</video>
		</BackgroundVideoStyles>

	)

}