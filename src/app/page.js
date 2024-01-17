import { SectionOne } from '../components/home-page/sec1/section-1';
import { SectionThree } from '../components/home-page/sec3/section3';

const Home = () => {
	return (
		<main className="">
			<SectionOne />
			<SectionThree />
			<section className="bg-gray-100 h-screen"></section>
		</main>
	);
};

export default Home;
