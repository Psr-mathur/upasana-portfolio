import { twMerge } from 'tailwind-merge';
import { Card } from '../../components/ui/card';
import Link from 'next/link';

const MyProjects = () => {
	return (
		<div className={twMerge('flex items-center justify-center w-full')}>
			<div
				className={twMerge(
					'border border-red-400 max-w-screen-md w-full p-5'
				)}
			>
				<div
					className={twMerge(
						'flex border border-red-400 justify-between items-center w-full'
					)}
				>
					<h1 className="text-center font-bold text-2xl">
						My Projects
					</h1>
					<Link
						href="/addProject"
						className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
					>
						Add Project
					</Link>
				</div>
				<div className=" mt-4">
					<Card />
				</div>
			</div>
		</div>
	);
};

export default MyProjects;
