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
}) {
	return (
		<>
			<ProjectHeader className={twMerge('z-20', ch)} pn={pn} pd={pd} />
			<ProjectBody className={twMerge('z-10', cb)} />
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
				'sticky top-0 w-full border-t border-gray-600 px-5 py-2 flex items-center justify-between bg-white h-24',
				className
			)}
		>
			<p className="text-lg uppercase">{pn}</p>
			<p className="text-lg uppercase">{pd}</p>
			<Link
				href="https://www.google.com"
				className=" text-lg flex gap-1 items-center justify-center"
			>
				<span>See Figma</span>
				<ArrowLeft className="w-5 -rotate-180" />
			</Link>
		</div>
	);
};

export const ProjectBody = ({ className = '' }) => {
	return (
		<div
			className={twMerge(
				'sticky top-0 bg-purple-200 h-screen',
				className
			)}
		>
			<img
				src="https://picsum.photos/700/500"
				alt="imge"
				className="h-full w-full object-cover object-center"
			/>
		</div>
	);
};
