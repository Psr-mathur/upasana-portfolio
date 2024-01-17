'use client';
import Lottie from 'lottie-react';
import ButterFlyAni from '@/lottie/Butterfly.json';

export function Name() {
	return (
		<div className=" border border-green-500 overflow-cli">
			<p className=" text-4xl font-bold px-5">Hi, I&apos;m</p>
			<div className=" text-[256px] font-bold border flex overflow-clip">
				{'UPASANA'.split('').map((letter, index) => {
					if (index !== 4)
						return (
							<div className="border leading-none" key={index}>
								{letter}
							</div>
						);
					return (
						<div
							key={index}
							className="relative text-blue-500 border border-rose-500 leading-none overflow-clip"
						>
							<span>{letter}</span>
							<div className="absolute top-0 z-10 scale-[2.5] left-[40%]">
								<Lottie animationData={ButterFlyAni} />
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
