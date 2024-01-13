import './globals.css';

export const metadata = {
	title: 'Upasana Rawat',
	description: 'Portfolio of Upasana Rawat.',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
