'use client';
import './ish.css';
import { useRef } from 'react';
import {
	motion,
	useScroll,
	useSpring,
	useTransform,
	useMotionValue,
	useVelocity,
	useAnimationFrame,
} from 'framer-motion';
// import { wrap } from '@motionone/utils';

const wrap = (min, max, v) => {
	const rangeSize = max - min;
	return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function ParallaxText({ children, baseVelocity = 100 }) {
	const baseX = useMotionValue(0);
	const { scrollY } = useScroll();
	const scrollVelocity = useVelocity(scrollY);
	const smoothVelocity = useSpring(scrollVelocity, {
		damping: 50,
		stiffness: 400,
	});
	const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
		clamp: false,
	});

	/**
	 * This is a magic wrapping for the length of the text - you
	 * have to replace for wrapping that works for you or dynamically
	 * calculate
	 */
	// console.log(baseX.get());
	const x = useTransform(baseX, (v) => `${wrap(-20, -25, v)}%`);
	// console.log(x.get());
	const direction = useRef(1);
	useAnimationFrame((t, delta) => {
		// console.log(delta);
		// console.log(direction);
		let moveBy = direction.current * baseVelocity * (delta / 1000);

		/**
		 * This is what changes the direction of the scroll once we
		 * switch scrolling directions.
		 */
		if (velocityFactor.get() < 0) {
			direction.current = -1;
		} else if (velocityFactor.get() > 0) {
			direction.current = 1;
		}

		moveBy += direction.current * moveBy * velocityFactor.get();

		baseX.set(baseX.get() + moveBy);
	});
	return (
		<div className="parallax">
			<motion.div className="scroller" style={{ x }}>
				<span>{children} </span>
				<span>{children} </span>
				<span>{children} </span>
				<span>{children} </span>
				<span>{children} </span>
				<span>{children} </span>
				<span>{children} </span>
				<span>{children} </span>
				<span>{children} </span>
				<span>{children} </span>
				<span>{children} </span>
				<span>{children} </span>
				<span>{children} </span>
				<span>{children} </span>
				<span>{children} </span>
				<span>{children} </span>
				<span>{children} </span>
				<span>{children} </span>
				<span>{children} </span>
				<span>{children} </span>
				<span>{children} </span>
			</motion.div>
		</div>
	);
}
