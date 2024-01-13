import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		figmaLink: {
			type: String,
			required: true,
			unique: true,
		},
		desc: {
			type: String,
		},
		imgURL: {
			type: String,
			required: true,
			default: 'http://placekitten.com/200/300',
		},
	},
	{ timestamps: true }
);

export const Project =
	mongoose.models.Project || mongoose.model('Project', projectSchema);
