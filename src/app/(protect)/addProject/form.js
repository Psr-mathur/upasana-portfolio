'use client';
import { useState } from 'react';
import { FileInput } from '@/components/ui/file-upload-input';
import { InputGroup } from '@/components/ui/form-input';
import { GradientButton } from '@/components/ui/gradient-button';
import { CreateProject, EditProject } from './actions';
import Lottie from 'lottie-react';
import WalkingGirlAnim from '@/lottie/WalkingGirlTrolley.json';
import SadEmojiAnim from '@/lottie/SadEmojiSwing.json';
import DancingGirlAni from '@/lottie/DancingGirl.json';
import { useRouter } from 'next/navigation';

const FormInitialState = {
	_id: '',
	title: '',
	figmaLink: '',
	desc: '',
	imgURL: '',
};

export default function ProjectForm({
	forEdit = false,
	data = FormInitialState,
}) {
	const [formState, setFormState] = useState(data);
	const [status, setStatus] = useState({
		loading: false,
		error: false,
		success: false,
	});
	const router = useRouter();
	const OnChange = (e) => {
		setFormState({ ...formState, [e.target.name]: e.target.value });
	};
	const OnFileChange = (e) => {
		const file = e.target.files[0];
		const reader = new FileReader();
		reader.onload = () => {
			const base64 = reader.result;
			setFormState({ ...formState, imgURL: base64 });
		};
		if (file) {
			reader.readAsDataURL(file);
		}
	};
	const handleSubmit = async (e) => {
		// console.log(formState);
		setStatus({ ...status, loading: true });
		const res = forEdit
			? await EditProject(data._id, formState)
			: await CreateProject(formState);

		if (res.status === 'error') {
			setStatus({ ...status, loading: false, error: true });
			return;
		}
		setStatus({ ...status, loading: false, success: true });
	};

	const handleClose = () => {
		setStatus({ loading: false, error: false, success: false });
		router.push('/myProjects');
	};
	const handleCancel = () => {
		if (forEdit) {
			router.back();
		} else {
			router.push('/myProjects');
		}
	};
	return (
		<div className=" bg-black/10 min-h-screen flex p-5 sm:p-10 items-center justify-center">
			<div className="flex flex-col bg-white w-full gap-8 rounded-md p-5 sm:p-10 max-w-2xl">
				<p className=" w-full text-2xl font-bold">
					{forEdit ? 'Edit Project' : 'New Project'}
				</p>
				<FileInput
					name="image"
					onChange={OnFileChange}
					imgURL={formState.imgURL}
				/>
				<InputGroup
					name="title"
					label="Title"
					onChange={OnChange}
					value={formState.title}
				/>
				<InputGroup
					name="figmaLink"
					label="Figma Link"
					onChange={OnChange}
					value={formState.figmaLink}
				/>
				<InputGroup
					name="desc"
					label="Description"
					onChange={OnChange}
					value={formState.desc}
				/>
				<div className="flex items-center justify-between">
					{forEdit && (
						<GradientButton
							onClick={handleCancel}
							label="Cancel"
							className=" bg-white text-black hover:text-white"
							gradient="green_blue"
						/>
					)}
					<GradientButton
						onClick={handleSubmit}
						label={forEdit ? 'Save' : 'Create'}
						className=" bg-white text-black hover:text-white"
					/>
				</div>
			</div>
			{status.loading && (
				<div className="fixed top-0 left-0 h-screen w-screen flex     flex-col items-center justify-center bg-[rgba(0,0,0,0.2)] p-5">
					<Lottie animationData={WalkingGirlAnim} />
					<p className=" text-[#b74925] font-semibold text-lg text-center">
						Ooh-Ho Upasana Ma`am is{' '}
						{forEdit
							? 'Editing her Project!.'
							: 'Creating new Project!'}
						.
					</p>
					<p className=" text-[#fcf3a6] text-[10px] text-center">
						Please Wait
					</p>
				</div>
			)}
			{status.error && (
				<div className="fixed top-0 left-0 h-screen w-screen flex     flex-col items-center justify-center bg-black/75 p-5">
					<div className="border-t-2 border-[#4a90e2] max-h-[50vh]">
						<Lottie
							animationData={SadEmojiAnim}
							className=" max-w-md"
						/>
					</div>
					<div className="">
						<p className=" text-rose-500 text-sm text-center ">
							Some Issues!
						</p>
						<p className=" text-[#70d4ca] font-semibold text-lg text-center py-2">
							Prakash ko call krne ka waqt aa Gaya Shayad.
						</p>
					</div>
					<button
						className=" p-3 px-5 text-white font-light font-2xl border border-black rounded-full"
						onClick={handleClose}
					>
						X
					</button>
				</div>
			)}
			{status.success && (
				<div className="fixed top-0 left-0 h-screen w-screen flex     flex-col items-center justify-center bg-black/75 p-5">
					<Lottie animationData={DancingGirlAni} />

					<p className=" text-[#b74925] font-semibold text-lg text-center">
						Ooh-Ho Upasana Ma`am{' '}
						{forEdit
							? 'Updated her Project!.'
							: 'added a New Project!'}
					</p>
					<button
						className=" mt-2 p-3 px-5 text-white font-light font-2xl border border-black rounded-full"
						onClick={handleClose}
					>
						X
					</button>
				</div>
			)}
		</div>
	);
}
