import Link from 'next/link';
import ButtonWithWarnPopup from './warn-popup-modal';

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
		<div className="w-full max-w-[320px] bg-white border border-gray-200 rounded-lg shadow">
			<div className="flex flex-col items-center py-3">
				<img
					className="w-24 h-24 mb-3 rounded-full shadow-lg"
					src={data.imgURL}
					alt="Project image"
				/>
				<h5 className="mb-1 text-xl font-medium text-gray-900">
					{data.title}
				</h5>
				{/* <span className="text-sm text-gray-500 dark:text-gray-400">
					Visual Designer
				</span> */}
				<div className="flex mt-4 md:mt-6">
					<Link
						href={`/editProject/${data._id}`}
						className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
					>
						Edit
					</Link>
					<ButtonWithWarnPopup
						BtnName="Delete"
						projectId={data._id}
					/>
				</div>
			</div>
		</div>
	);
}
export { Card };
