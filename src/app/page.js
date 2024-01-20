import Header from '../components/Header';
import { Locomotive } from '../components/Locomotive';
import { SectionOne } from '../components/home-page/sec1/section-1';
import { SectionTwo } from '../components/home-page/sec2/section2';
import { SectionThree } from '../components/home-page/sec3/section3';
import { StartEffect } from '../components/start-effect';
import { ParallaxText } from '../framerAnimation/infinite-scroll-horizontal';

const Home = () => {
	return (
		<Locomotive>
			<main className="bg-white">
				<StartEffect />
				<Header />
				<SectionOne />
				<SectionTwo />
				<SectionThree />
				<section>
					<ParallaxText baseVelocity={-1}>Upasana Rawat</ParallaxText>
					<ParallaxText baseVelocity={1}>UI UX Designer</ParallaxText>
				</section>
				<section
					id="contactus"
					className="bg-gray-100 h-screen"
				></section>
			</main>
		</Locomotive>
	);
};

export default Home;
