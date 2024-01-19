/* eslint-disable @next/next/no-img-element */
// import Image from 'next/image';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { ArrowLeft } from '../icons/arrow-left';

export function Project({
	ch = '',
	cb = '',
	pd = 'Description',
	pn = 'Project 1',
	bgsrc = null,
	bgclass = '',
	src = '/dummyproject.png',
}) {
	return (
		<>
			<ProjectHeader className={twMerge('z-20', ch)} pn={pn} pd={pd} />
			<ProjectBody
				className={twMerge('z-10', cb)}
				bgsrc={bgsrc}
				src={src}
				bgclass={bgclass}
			/>
		</>
	);
}

export const ProjectHeader = ({
	className = '',
	pn = 'Project 1',
	pd = 'Description',
}) => {
	return (
		<div
			className={twMerge(
				'sticky top-0 w-full border-t border-gray-600 px-5 py-2 flex flex-wrap gap-x-8 items-center justify-between bg-white h-24 overflow-hidden',
				className
			)}
		>
			<p className="xs:flex-1 flex justify-start text-lg uppercase order-1 font-semibold">
				{pn}
			</p>
			<p className="xs:flex-1 flex justify-center text-lg uppercase order-3 xs:order-2 font-light sm:font-normal">
				{pd}
			</p>
			<div className="xs:flex-1 flex justify-end order-2 xs:order-3">
				<Link
					href="https://www.google.com"
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
}) => {
	return (
		<div
			className={twMerge(
				'sticky top-0 h-screen flex items-center justify-center ',
				className
			)}
		>
			<div className="max-w-[720px] w-[75vw] z-[5]">
				<img
					src={src}
					alt="image-macbook"
					className="w-full object-cover object-center"
				/>
			</div>
			<div
				className={twMerge(
					'h-full w-full object-cover object-center absolute top-0 left-0 z-[3] bg-[#e5e5e5]'
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
