import { Name } from './name';

export function SectionOne() {
	return (
		<section>
			<div className=" h-screen w-full bg-red-100">
				<div className="flex flex-col justify-between items-center h-full p-5 w-full">
					<p className="text-5xl font-bold py-[10%] border w-full flex items-center justify-around">
						<span>
							UI UX <br /> DESIGNER
						</span>
						<span className="invisible">
							UI UX <br /> DESIGNER
						</span>
					</p>
					<Name />
				</div>
			</div>
		</section>
	);
}
