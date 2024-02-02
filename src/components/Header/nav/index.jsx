import { motion } from 'framer-motion';
import { links } from './data';
import { twMerge } from 'tailwind-merge';
import Curve from '../curve';

export const perspective = {
	initial: {
		opacity: 0,
		rotateX: 90,
		translateY: 80,
		translateX: -20,
	},
	enter: (i) => ({
		opacity: 1,
		rotateX: 0,
		translateY: 0,
		translateX: 0,
		transition: {
			duration: 0.65,
			delay: 0.5 + i * 0.1,
			ease: [0.215, 0.61, 0.355, 1],
			opacity: { duration: 0.35 },
		},
	}),
	exit: {
		opacity: 0,
		transition: { duration: 0.5, type: 'linear', ease: [0.76, 0, 0.24, 1] },
	},
};

export default function Nav() {
	const hash = window.location.hash === '' ? '#home' : window.location.hash;
	return (
		<div className="flex flex-col justify-between h-full py-20 px-14">
			<div className="flex flex-col gap-4">
				{links.map((link, i) => {
					const { title, href } = link;
					return (
						<div
							key={`b_${i}`}
							// className="perspective-origin-bottom perspective-120"
						>
							<motion.div
								href={href}
								custom={i}
								variants={perspective}
								initial="initial"
								animate="enter"
								exit="exit"
							>
								<a
									href={href}
									className={twMerge(
										'text-xl md:text-2xl hover:text-gray-400 uppercase',
										hash === href
											? 'text-violet-400 font-semibold'
											: 'text-white'
									)}
								>
									{title}
								</a>
							</motion.div>
						</div>
					);
				})}
			</div>
			<Curve />
		</div>
	);
}
