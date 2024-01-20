/* eslint-disable @next/next/no-img-element */

import { Tab, Tabs } from '../../ui/tabs';

/* eslint-disable react/no-unescaped-entities */
export function SectionTwo() {
	return (
		<section id="aboutme">
			<div className="sticky top-0 h-14 flex items-center justify-center bg-white shadow z-[5]">
				<h1 className=" uppercase text-2xl font-semibold">About Me</h1>
			</div>
			<div className="flex flex-col sm:flex-row sm:gap-10 min-h-[90vh] py-6 sm:py-10 px-6 sm:px-10">
				<div className="flex-1 flex items-center justify-center p-10">
					<img
						src="https://picsum.photos/720/1280"
						className="rounded-full aspect-square w-full max-w-screen-xs"
						style={{
							boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
						}}
						alt="Upasana Rawat"
					/>
				</div>
				<div className="flex-1 flex flex-col gap-5 items-center justify-start sm:pt-12">
					<p className=" text-justify leading-loose tracking-wide">
						Hello, I'm Upasana Rawat, a UI/UX designer from Gadhwal
						University. With a passion for crafting seamless digital
						experiences, I bring a unique blend of creativity and
						functionality to every project. My design journey is
						inspired by the rich culture of Gadhwal, influencing my
						user-centric approach. From wireframes to polished
						interfaces, I am dedicated to creating visually
						appealing and intuitive designs. Let's connect and
						explore the possibilities of innovative and impactful
						design together.
					</p>
					<div className="border w-full">
						<Tabs>
							<Tab label="Education">
								<div className="flex flex-col gap-5 items-center justify-center px-2">
									<p className=" text-justify">
										I am pursuing my B.Tech in Computer
										Science and Engineering from Gadhwal
										University.
									</p>
								</div>
							</Tab>
							<Tab label="Experience">
								<div className="flex flex-col gap-5 items-center justify-center px-2">
									<p className=" text-justify">
										I have worked as a UI/UX designer at
										Happy Gifty.
									</p>
								</div>
							</Tab>
						</Tabs>
					</div>
				</div>
			</div>
		</section>
	);
}
