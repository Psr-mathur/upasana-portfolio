import mongoose from 'mongoose';

const { connect } = mongoose;

const connection = {};

export const connectToDatabase = async () => {
	try {
		// if (connection.isConnected) {
		// 	console.log('Using Existing connnection.');
		// 	return;
		// }
		await connect(
			'mongodb+srv://psr_mathur:12345@formilder.fvxlbut.mongodb.net/upasanaPortfolio?retryWrites=true&w=majority'
		);
		// connection.isConnected = db.connection[0].readyState;
		console.log('Connected to MongoDB');
	} catch (error) {
		throw new Error('Error in connecting to database.');
	}
};
