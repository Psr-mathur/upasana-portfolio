import './globals.css';
import { Inconsolata } from 'next/font/google';

export const metadata = {
	title: 'Upasana Rawat',
	description: 'Portfolio of Upasana Rawat.',
};

export const inconsolata = Inconsolata({
	subsets: ['latin'],
	variable: '--font-sans',
	weight: ['300', '400', '500', '600', '700'],
});

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={inconsolata.variable}>
			<body className="bg-black font-sans">{children}</body>
		</html>
	);
}
