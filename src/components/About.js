import { image } from "../data/user";

function About() {
  return (
    <div id="about">
      <h2>About.</h2>
      <p>I Made This</p>
      <img src={image} alt="portrait" />
    </div>
  );
}
export default About;