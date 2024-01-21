'use client';
import Lottie from 'lottie-react';
import WalkingGirlWhite from '@/lottie/WalkingGirlWhite.json';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export function StartEffect() {
	const [isLoaded, setIsLoaded] = useState(false);
	const startani = {
		hidden: {
			backgoundColor: 'black',
			opacity: 0,
		},
		visible: {
			opacity: 1,
			backgoundColor: 'black',
			transition: {
				duration: 1,
				delay: 1,
			},
		},
		exit: {
			opacity: 0,
			backgoundColor: 'white',
			transition: {
				duration: 1,
			},
		},
	};
	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoaded(true);
		}, 2000);
		return () => clearTimeout(timer);
	}, [isLoaded]);
	return (
		<AnimatePresence mode="wait">
			{!isLoaded && (
				<motion.section
					initial="visible"
					variants={startani}
					exit="exit"
					className="fixed top-0 left-0 h-screen w-full flex items-center justify-center z-50 bg-black"
				>
					<div className=" h-[75vh] w-full">
						<Lottie
							animationData={WalkingGirlWhite}
							className=" h-full"
						/>
					</div>
				</motion.section>
			)}
		</AnimatePresence>
	);
}
