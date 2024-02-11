/* eslint-disable @next/next/no-img-element */
// import Image from 'next/image';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { ArrowLeft } from '../icons/arrow-left';
import { ParaWordReveal } from '../../framerAnimation/para-word-reveal';

export function Project({
	ch = '',
	cb = '',
	pd = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic odit quas delectus? Eveniet, consectetur delectus. Nobis dolor, earum aut nihil libero sequi odio id expedita recusandae, a impedit excepturi non.`,
	pn = 'Project 1',
	psd = 'Description',
	bgsrc = null,
	bgclass = '',
	src = '/dummyproject.png',
	figmaLink = 'https://www.google.com',
}) {
	return (
		<>
			<ProjectHeader
				className={twMerge('z-20', ch)}
				pn={pn}
				psd={psd}
				figmaLink={figmaLink}
			/>
			<ProjectBody
				className={twMerge('z-10', cb)}
				bgsrc={bgsrc}
				src={src}
				bgclass={bgclass}
				pd={pd}
			/>
		</>
	);
}

export const ProjectHeader = ({
	className = '',
	pn = 'Project 1',
	psd = 'Description',
	figmaLink,
}) => {
	return (
		<div
			className={twMerge(
				'sticky top-0 w-full border-t border-gray-600 px-5 py-2 flex flex-wrap gap-x-16 items-center justify-between bg-white h-24 overflow-hidden to_b_blacck_white',
				className
			)}
		>
			<p className="xs:flex-1 flex justify-start text-lg uppercase order-1 font-semibold">
				{pn}
			</p>
			<p className="xs:flex-1 flex justify-center text-lg uppercase order-3 xs:order-2 font-light sm:font-normal">
				<span className=" text-[#353535] font-bold">@&nbsp;</span>
				{psd}
			</p>
			<div className="xs:flex-1 flex justify-end order-2 xs:order-3">
				<Link
					href={figmaLink}
					className="text-lg flex gap-1 items-center justify-center "
				>
					<span>See Figma</span>
					<ArrowLeft className="w-5 -rotate-180" />
				</Link>
			</div>
		</div>
	);
};

export const ProjectBody = ({
	className = '',
	src = '/dummyproject.png',
	bgsrc = null,
	bgclass = '',
	pd = { pd },
}) => {
	return (
		<div
			className={twMerge(
				'sticky top-0 h-screen flex items-center justify-center ',
				className
			)}
		>
			<div className="z-[5] flex flex-col items-center gap-10">
				<ParaWordReveal
					className="text-lg px-3 sm:px-5 py-3 sm:py-6 md:py-10 !text-justify max-w-screen-md"
					para={pd}
				/>

				<div className="max-w-[720px] w-[75vw]">
					<img
						src={src}
						alt="image-macbook"
						className="w-full object-cover object-center"
					/>
				</div>
			</div>
			<div
				className={twMerge(
					'h-full w-full object-cover object-center absolute top-0 left-0 z-[3] {bg-[#e5e5e5]} bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-white to-[#dedddd]'
				)}
			>
				{bgsrc && (
					<img
						src={bgsrc}
						alt="imge"
						className="h-full w-full object-cover object-center absolute top-0 left-0 z-[3]"
					/>
				)}
			</div>
		</div>
	);
};
