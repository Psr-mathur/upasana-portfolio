import { Footer } from '../components/Footer';
import Header from '../components/Header';
import { Locomotive } from '../components/Locomotive';
import { SectionOne } from '../components/home-page/sec1/section-1';
import { SectionTwo } from '../components/home-page/sec2/section2';
import { SectionThree } from '../components/home-page/sec3/section3';
import { SectionFour } from '../components/home-page/sec4';
import { StartEffect } from '../components/start-effect';
import { ParallaxText } from '../framerAnimation/infinite-scroll-horizontal';

const Home = () => {
	// console.log('home');
	return (
		<Locomotive>
			<main className="bg-white">
				<StartEffect />
				<Header />
				<SectionOne />
				<SectionTwo />
				<SectionThree />
				<SectionFour />
				<section>
					<ParallaxText baseVelocity={-1}>Upasana Rawat</ParallaxText>
					<ParallaxText baseVelocity={1}>UI UX Designer</ParallaxText>
				</section>
				<Footer />
			</main>
		</Locomotive>
	);
};

export default Home;
