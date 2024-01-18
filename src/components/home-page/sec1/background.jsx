'use client';
import Lottie from 'lottie-react';
import BirdsAni from '@/lottie/Birds.json';
import { useEffect, useRef } from 'react';
export function Background() {
	const aniRef = useRef();
	useEffect(() => {
		aniRef.current.setSpeed(0.5);
	});
	return (
		<div className="h-[80vh] lg:h-screen w-full">
			<Lottie
				lottieRef={aniRef}
				animationData={BirdsAni}
				className=" h-full"
			/>
		</div>
	);
}
