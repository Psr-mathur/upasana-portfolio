import './globals.css';
import { Inconsolata } from 'next/font/google';

export const metadata = {
	title: 'Upasana Rawat',
	description: 'Portfolio of Upasana Rawat.',
};

export const inconsolata = Inconsolata({
	subsets: ['latin'],
	// variable: '--font-sans',
	display: 'swap',
	// weight: ['300', '400', '500', '600', '700'],
});

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={inconsolata.className}>
			<body className="bg-black">{children}</body>
		</html>
	);
}
