'use server';

import { revalidatePath } from 'next/cache';
import { connectToDatabase } from '../../../lib/db/connectDB';
import { Project } from '../../../models/Project';

export async function CreateProject(data) {
	// console.log(data);
	const { _id, ...dataToSave } = data;
	try {
		await connectToDatabase();
		const newProject = new Project(dataToSave);
		await newProject.save();
		revalidatePath('/myProjects', 'page');
		return {
			status: 'success',
			message: 'New project created!',
			data: JSON.parse(JSON.stringify(newProject)),
		};
	} catch (error) {
		// console.log(error);
		return {
			status: 'error',
			message: 'Database Error',
		};
	}
}
export async function EditProject(id, data) {
	// console.log(data);
	try {
		await connectToDatabase();
		const updatedProject = await Project.findByIdAndUpdate(id, data, {
			new: true,
		});
		revalidatePath('/myProjects');
		return {
			status: 'success',
			message: 'Project edited!',
			data: JSON.parse(JSON.stringify(updatedProject)),
		};
	} catch (error) {
		return {
			status: 'error',
			message: 'Database Error',
		};
	}
}

export async function DeleteProject(projectId) {
	console.log(projectId);
	try {
		await connectToDatabase();
		const deletedProject = await Project.findOneAndDelete({
			_id: projectId,
		});
		revalidatePath('/myProjects');
		// await updatedProject.save();
		return {
			status: 'success',
			message: 'Project deleted!',
			data: JSON.parse(JSON.stringify(deletedProject)),
		};
	} catch (error) {
		return {
			status: 'error',
			message: 'Database Error',
		};
	}
}
