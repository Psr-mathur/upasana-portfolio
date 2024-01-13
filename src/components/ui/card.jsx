import Link from 'next/link';

function Card({
	data = {
		_id: 'thereissomeissuse',
		title: 'Project Title',
		imgURL: 'http://placekitten.com/200/300',
		figmaLink: 'https://idkprakash.onrender.com',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem perspiciatis maxime modi nemo laboriosam sapiente eveniet corrupti sunt numquam laudantium qui minus id dolorem ducimus error eos vel, quam tempora!',
	},
}) {
	return (
		<div className="w-full max-w-[320px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
			<div className="flex flex-col items-center pb-10">
				<img
					className="w-24 h-24 mb-3 rounded-full shadow-lg"
					src={data.imgURL}
					alt="Project image"
				/>
				<h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
					{data.title}
				</h5>
				{/* <span className="text-sm text-gray-500 dark:text-gray-400">
					Visual Designer
				</span> */}
				<div className="flex mt-4 md:mt-6">
					<Link
						href={`/editProject/${data._id}`}
						className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Edit
					</Link>
					<Link
						href="#"
						className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3"
					>
						Delete
					</Link>
				</div>
			</div>
		</div>
	);
}
export { Card };
