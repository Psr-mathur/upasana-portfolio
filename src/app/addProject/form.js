'use client';
import { useState } from 'react';
import { FileInput } from '../../components/ui/file-upload-input';
import { InputGroup } from '../../components/ui/form-input';
import { GradientButton } from '../../components/ui/gradient-button';
import { CreateProject } from './actions';
import Lottie from 'lottie-react';
import WalkingGirlAnim from '@/lottie/WalkingGirlTrolley.json';
import SadEmojiAnim from '@/lottie/SadEmojiSwing.json';

const FormInitialState = {
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
	});
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
		const res = await CreateProject(formState);

		if (res.status === 'error') {
			setStatus({ loading: false, error: true });
			return;
		}
		setStatus({ ...status, loading: false });
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
				<div className="flex items-center justify-end">
					<GradientButton
						onClick={handleSubmit}
						label={forEdit ? 'Save' : 'Create'}
						className=" bg-white text-black hover:text-white"
					/>
				</div>
			</div>
			{status.loading && (
				<div className="fixed top-0 left-0 h-screen w-screen flex     flex-col items-center justify-center border border-red-400 bg-[rgba(0,0,0,0.2)]">
					<Lottie animationData={WalkingGirlAnim} />
					<p className=" text-[#b74925] font-semibold text-lg text-center">
						Ooh-Ho Upasana Ma`am is{' '}
						{forEdit ? 'Editing her Project!.' : 'New Project!'}.
					</p>
					<p className=" text-[#fcf3a6] text-[10px] text-center">
						Please Wait
					</p>
				</div>
			)}
			{status.error && (
				<div className="fixed top-0 left-0 h-screen w-screen flex     flex-col items-center justify-center border border-red-400 bg-[rgba(0,0,0,0.2)]">
					<Lottie animationData={SadEmojiAnim} />
					<p className=" text-[#b74925] font-semibold text-lg text-center">
						Prakash ko call krne ka waqt aa Gaya Shayad.
					</p>
					<p className=" text-red-500 text-[10px] text-center">
						Some Issues!
					</p>
				</div>
			)}
		</div>
	);
}
