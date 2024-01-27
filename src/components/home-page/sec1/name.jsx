'use client';
import Lottie from 'lottie-react';
import ButterFlyAni from '@/lottie/Butterfly.json';

export function Name() {
	return (
		<div data-scroll data-scroll-speed="0.5" className="relative">
			<p className="md:absolute top-0 left-0 text-2xl sm:text-4xl font-bold px-[1vw]">
				Hi, I&apos;m
			</p>
			<div className=" text-[24vw] font-bold flex overflow-clip">
				{'UPASANA'.split('').map((letter, index) => {
					if (index !== 4)
						return (
							<div className="leading-none" key={index}>
								{letter}
							</div>
						);
					return (
						<div
							key={index}
							className="relative text-blue-500 leading-none overflow-clip"
						>
							<span>{letter}</span>
							<div className="absolute top-[7%] z-[2] scale-[2.5] left-[40%]">
								<Lottie
									animationData={ButterFlyAni}
									className=""
								/>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
