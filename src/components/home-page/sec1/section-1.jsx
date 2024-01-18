import { WordInChar } from '../../../framerAnimation/word-in-char';
import { Background } from './background';
import { Name } from './name';

export function SectionOne() {
	return (
		<section className="relative overflow-x-hidden">
			<Background />
			<div className="absolute top-0 left-0 h-[80vh] lg:h-screen w-full">
				<div className="flex flex-col justify-around lg:justify-between items-center h-full p-5 w-full">
					<p className="text-3xl md:text-5xl font-bold py-[10%] border w-full flex items-center justify-around">
						<span className="text-center lg:text-left">
							UI UX <br /> <WordInChar word="DESIGNER" />
						</span>
						<span className="invisible hidden sm:block">
							UI UX <br /> DESIGNER
						</span>
					</p>
					<Name />
				</div>
			</div>
		</section>
	);
}
