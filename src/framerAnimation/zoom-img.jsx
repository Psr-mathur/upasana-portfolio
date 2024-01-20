'use client';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

export function ImgZoom({
	src = 'https://picsum.photos/720/1280',
	className = 'rounded-full aspect-square w-full max-w-screen-xs',
}) {
	return (
		<motion.img
			initial={{ scale: 0.3, opacity: 0 }}
			whileInView={{ scale: 1, opacity: 1 }}
			exit={{ scale: 0.3, opacity: 0 }}
			transition={{ duration: 0.75 }}
			src={src}
			className={twMerge(className)}
			style={{
				boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
			}}
			alt="Upasana Rawat"
		/>
	);
}
