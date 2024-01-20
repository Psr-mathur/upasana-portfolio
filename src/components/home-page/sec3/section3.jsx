import { Project } from '../../ui/project';

export function SectionThree() {
	return (
		<section id="projects">
			<Project
				pn="Happy Gifty"
				ch="top-0 h-16"
				src="/happygiftymac.png"
				bgclass="bg-red-500"
			/>
			<Project
				pn="Project 2"
				ch="top-10 xs:top-16 h-16"
				cb="top-10 xs:top-16"
			/>
			<Project
				pn="Project 3"
				ch="top-20 xs:top-32 h-16"
				cb="top-20 xs:top-32"
			/>
			<Project
				pn="Project 4"
				ch="top-[120px] xs:top-48 h-16"
				cb="top-[120px] xs:top-48"
			/>
		</section>
	);
}
