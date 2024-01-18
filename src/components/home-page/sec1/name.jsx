'use client';
import Lottie from 'lottie-react';
import ButterFlyAni from '@/lottie/Butterfly.json';

export function Name() {
	return (
		<div className=" border border-green-500">
			<p className=" text-2xl sm:text-4xl font-bold px-5">Hi, I&apos;m</p>
			<div className=" text-[72px] sm:text-[96px] md:text-[128px] lg:text-[256px] font-bold border flex overflow-clip">
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
