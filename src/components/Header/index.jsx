'use client';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Hamburger } from '../ui/hamburger';
import Nav from './nav';

export const menuSlide = {
	initial: { x: 'calc(100% + 100px)' },
	enter: {
		x: '0',
		width: '320px',
		height: 'calc(100vh)',
		transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
	},
	exit: {
		x: 'calc(100% + 100px)',
		width: '320px',
		height: 'calc(100vh)',
		transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
	},
};

const menu = {
	open: {
		width: '320px',
		height: 'calc(100vh)',
		transition: { duration: 0.6, type: 'tween', ease: [0.76, 0, 0.24, 1] },
	},
	closed: {
		width: '0px',
		height: '0px',
		transition: {
			duration: 0.6,
			delay: 0.35,
			type: 'tween',
			ease: [0.76, 0, 0.24, 1],
		},
	},
};

export default function Header() {
	const [isActive, setIsActive] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			setIsActive(false);
		};
		// Attach scroll event listener on component mount
		window.addEventListener('scroll', handleScroll);

		// Detach scroll event listener on component unmount
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [isActive, setIsActive]);
	return (
		<header className="fixed top-0 left-0 w-full h-full max-h-16 bg-black z-[3] shadow">
			<div className="px-6 sm:px-10 bg-white flex items-center justify-between w-full h-full bg-gradient-to-b from-gray-400 to-blue-50">
				<div>
					<h1 className="font-extrabold text-3xl tracking-widest">
						UR
					</h1>
				</div>
				<div>
					<Hamburger
						isActive={isActive}
						setIsActive={setIsActive}
						className="relative"
					/>
					<motion.div
						className="rounded-l-2xl {bg-[#353535]} bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-gray-500 to-[#353535] absolute top-0 right-0 z-[9]"
						// variants={menu}
						// animate={isActive ? 'open' : 'closed'}
						// initial="closed"
						variants={menuSlide}
						initial="initial"
						animate={isActive ? 'enter' : 'exit'}
						exit="exit"
					>
						<AnimatePresence>{isActive && <Nav />}</AnimatePresence>
					</motion.div>
				</div>
			</div>
		</header>
	);
}
