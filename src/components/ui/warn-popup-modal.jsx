'use client';

import { useState } from 'react';
import { DeleteProject } from '../../app/addProject/actions';
import WalkingGirlBlackAnimation from '@/lottie/WalkingGirlBlack.json';
import DeletedAni from '@/lottie/Deleted.json';
import SadEmojiAni from '@/lottie/SadEmojiSwing.json';
import Lottie from 'lottie-react';

const ButtonWithWarnPopup = ({
	BtnName = 'BtnName',
	projectId = 'IdAsaPropInPopupModal',
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [status, setStatus] = useState({
		loading: false,
		error: false,
		success: false,
	});
	const handleToggle = () => setIsOpen((i) => !i);
	const handleDelete = async () => {
		setStatus({ ...status, loading: true });
		const res = await DeleteProject(projectId);
		if (res.status === 'error') {
			setStatus({ ...status, loading: false, error: true });
		} else {
			setStatus({ ...status, loading: false, success: true });
		}
	};
	return (
		<>
			<button
				onClick={handleToggle}
				className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 ms-3"
				type="button"
			>
				{BtnName}
			</button>

			{isOpen && (
				<div
					tabindex="-1"
					className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-full max-h-full bg-black/80"
				>
					<div className="relative p-4 w-full max-w-md max-h-full">
						<div className="relative bg-white rounded-lg shadow ">
							<button
								type="button"
								className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
								onClick={() => setIsOpen(false)}
							>
								<svg
									className="w-3 h-3"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 14 14"
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
									/>
								</svg>
								<span className="sr-only">Close modal</span>
							</button>
							{status.loading ? (
								<div className="p-4 md:p-5 text-center">
									<div className="mx-auto mb-4 text-gray-400 w-24 h-24">
										<Lottie
											animationData={
												WalkingGirlBlackAnimation
											}
										/>
									</div>
									<p className=" text-rose-400 text-sm text-center">
										Please Wait
									</p>
								</div>
							) : status.error ? (
								<div className="p-4 md:p-5 text-center">
									<div className="mx-auto mb-4 text-gray-400 w-24 h-24">
										<Lottie animationData={SadEmojiAni} />
									</div>
									<p className=" text-rose-400 text-sm text-center">
										Some Issuse! Try Later
									</p>
								</div>
							) : status.success ? (
								<div className="p-4 md:p-5 text-center">
									<div className="mx-auto mb-4 text-gray-400 w-24 h-24">
										<Lottie animationData={DeletedAni} />
									</div>
									<p className=" text-orange-500 text-sm text-center">
										Kar Diya Delete, Mil gayi tassali
									</p>
								</div>
							) : (
								<div className="p-4 md:p-5 text-center">
									<WarnLogo />
									<h3 className="mb-5 text-lg font-normal text-gray-500 ">
										Kitna Badhiya To Hai Kyon Delete Karna?
									</h3>
									<button
										onClick={handleDelete}
										type="button"
										className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2"
									>
										Mera mann
									</button>
									<button
										onClick={() => setIsOpen(false)}
										type="button"
										className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
									>
										Nahi kr Rahi
									</button>
								</div>
							)}
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default ButtonWithWarnPopup;

export const WarnLogo = () => {
	return (
		<svg
			className="mx-auto mb-4 text-gray-400 w-12 h-12 "
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 20 20"
		>
			<path
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
			/>
		</svg>
	);
};
