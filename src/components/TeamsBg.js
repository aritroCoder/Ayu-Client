import { Parallax, Background } from "react-parallax";
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import FadeInWhenVisible from './FadeInWhenVisible';
const image1 = require('../Assets/img/teams.jpg');

const styles = {
  fontFamily: "Roboto",
  textAlign: "center",
};
const insideStyles = {
  background: "transparent",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  color: "white",
  fontSize: "70px",
  width: "100%",
  opacity: "0.7"
};

const ParallaxBg = (props) => (
  <div style={styles}>
    <Parallax bgImage={image1} strength={600}>
        <FadeInWhenVisible>
      <div style={{ height: 600 }}>
          <div className="bg-primary" style={insideStyles}>{props.text}</div>
      </div>
        </FadeInWhenVisible>
    </Parallax>
  </div>
);

export default ParallaxBg;