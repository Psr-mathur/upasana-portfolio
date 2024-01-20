import Header from '../components/Header';
import { SectionOne } from '../components/home-page/sec1/section-1';
import { SectionTwo } from '../components/home-page/sec2/section2';
import { SectionThree } from '../components/home-page/sec3/section3';
import { StartEffect } from '../components/start-effect';

const Home = () => {
	return (
		<main className="bg-white">
			<StartEffect />
			<Header />
			<SectionOne />
			<SectionTwo />
			<SectionThree />
			<section id="contactus" className="bg-gray-100 h-screen"></section>
		</main>
	);
};

export default Home;
