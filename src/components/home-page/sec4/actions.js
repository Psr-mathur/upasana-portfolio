'use server';
import { Resend } from 'resend';
const resend = new Resend('re_Me25pBsy_3eM4gwSGYUymhfuq1E9ippDa');
export async function SendEmail(emailContent) {
	console.log('emailContent', emailContent);
	const { data, error } = await resend.emails.send({
		from: 'onboarding@resend.dev',
		to: 'prakashkumarggh@gmail.com',
		subject: 'Message from Portfolio',
		html: emailContent,
	});

	if (error) {
		console.log('email error', error);
		return { status: 'error' };
	}
	console.log(data);
	return { status: 'success' };
}
