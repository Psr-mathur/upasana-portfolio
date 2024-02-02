/* eslint-disable @next/next/no-img-element */

import { Paragraph } from '../../../framerAnimation/Paragraph';
import { ImgZoom } from '../../../framerAnimation/zoom-img';
import { Tab, Tabs } from '../../ui/tabs';

/* eslint-disable react/no-unescaped-entities */

const Para = `Hello, I'm Upasana Rawat, a UI/UX Designer with 1 year of hands-on design practice.
Proficient in tools like Figma and Adobe XD, I’m dedicated
to creating intuitive and visually compelling user experi-
ences. Eager to bring my skills and fresh perspective to
contribute to innovative design projects.`;
export function SectionTwo() {
	return (
		<section id="aboutme">
			<div className="{sticky top-0} h-14 flex items-center justify-center shadow z-[5] to_b_blacck_white">
				<h1 className=" uppercase text-2xl font-semibold">About Me</h1>
			</div>
			<div className="flex flex-col sm:flex-row sm:gap-10 min-h-[90vh] py-6 sm:py-10 px-6 sm:px-10">
				<div className="flex-1 flex items-center justify-center p-10">
					<ImgZoom
						className="rounded-full aspect-square w-full max-w-[360px]"
						src="/Upasanadped.jpg"
					/>
				</div>
				<div className="flex-1 flex flex-col gap-5 items-center justify-start sm:pt-12">
					<Paragraph
						para={Para}
						className="text-justify leading-loose tracking-wide"
					/>
					<div className="border w-full">
						<Tabs className="max-w-full">
							<Tab label="Education">
								<div className="flex flex-col gap-5 items-start justify-center px-2 sm:px-6">
									<div>
										<p className="font-semibold text-2xl">
											Masters in Psychology
										</p>
										<p>
											HNBG University, Garhwal,
											Uttarakhand{' '}
											<i className="text-xs">
												[2020 - 2022]
											</i>
										</p>
									</div>
									<div>
										<p className="font-semibold text-2xl">
											Bachelors in Psychology
										</p>
										<p>
											HNBG University, Garhwal,
											Uttarakhand{' '}
											<i className="text-xs">
												[2017 - 2020]
											</i>
										</p>
									</div>
								</div>
							</Tab>
							<Tab label="Experience">
								<div className="flex flex-col gap-5 items-start justify-center px-2 sm:px-6">
									<div>
										<p className="font-semibold text-2xl">
											Visual Design Partner L1
										</p>
										<p>
											JSTigers, Banglore, India{' '}
											<i className="text-xs">
												[JUL 2023 - JAN 2024]
											</i>
										</p>
									</div>
									<div>
										<p className="font-semibold text-2xl">
											UI/UX Design Intern
										</p>
										<p>
											Zyva, Banglore, India{' '}
											<i className="text-xs">
												[DEC 2022 - MAY 2023]
											</i>
										</p>
									</div>
								</div>
							</Tab>
							<Tab label="Courses">
								<div className="flex flex-col gap-5 items-start justify-center px-2 sm:px-6">
									<div>
										<p className="font-semibold text-2xl">
											Web and Mobile Design Course
										</p>
										<p>Udemy </p>
									</div>
									<div>
										<p className="font-semibold text-2xl">
											UI/UX Design Course
										</p>
										<p>My Captain </p>
									</div>
								</div>
							</Tab>
						</Tabs>
					</div>
				</div>
			</div>
		</section>
	);
}
