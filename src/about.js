import React from "react";
import tylerbig from "./tylerbig.png";
import "./App.css";

const About = () => {
	return (
		<section id="about">
			<div className="padding">
				<div className="column-wrapper">
					<div id="about-wrapper" className="opacity-wrapper">
						<img id="portrait" src={tylerbig} alt="tyler"></img>
						<p className="center-text white">
							Hi! I'm a recent graduate from the University of
							California Riverside. I graduated with a B.A in
							digital production and with a minor in business.
							Throughout my undergrad I taught myself how to code.
							I started coding with Python and took classes
							shortly after for CSS, HTML, and C++. The past year
							I have been learning JavaScript. Now, I'm onto
							React.js. This current site was made with it.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
