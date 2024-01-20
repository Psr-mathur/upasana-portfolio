import { connectToDatabase } from '@/lib/db/connectDB';
import { Project } from '@/models/Project';
import { toSimpleObject } from '@/utils/convert';
import ProjectForm from '../../addProject/form';

export default async function page({ params }) {
	const projectId = params.id;

	const fetchData = async (id) => {
		try {
			await connectToDatabase();
			const res = await Project.find({ _id: projectId });
			// console.log(toSimpleObject(res));
			return toSimpleObject(res);
		} catch (error) {
			console.log('Error fetching data in edit Page.');
			throw new Error('Error fetching data in edit Page.');
		}
	};

	const data = await fetchData();

	// console.log(data);

	return <ProjectForm forEdit={true} data={data[0]} />;
}
