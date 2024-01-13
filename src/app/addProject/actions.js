'use server';

import { connectToDatabase } from '../../lib/db/connectDB';
import { Project } from '../../models/Project';

export async function CreateProject(data) {
	// console.log(data);
	try {
		await connectToDatabase();
		const newProject = new Project(data);
		await newProject.save();
		return {
			status: 'success',
			message: 'New project created!',
			data: JSON.parse(JSON.stringify(newProject)),
		};
	} catch (error) {
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
		const newProject = new Project(data);
		await newProject.save();
		return {
			status: 'success',
			message: 'New project created!',
			data: JSON.parse(JSON.stringify(newProject)),
		};
	} catch (error) {
		return {
			status: 'error',
			message: 'Database Error',
		};
	}
}
