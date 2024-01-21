import Link from 'next/link';
import { DribbleIcon } from '../icons/dribble';
import { LinkedinIcon } from '../icons/linkedin';

export function Footer() {
	return (
		<footer className="bg-[#353535]">
			<div className="py-4 flex flex-col items-center justify-between gap-2">
				<div className="flex gap-10 uppercase underline underline-offset-2 text-[#f5f5f5]">
					<Link href={'#'} className="flex gap-2">
						<LinkedinIcon className="h-6 w-6" />
						<span>Linkedin</span>
					</Link>
					<Link href={'#'} className="flex gap-2">
						<DribbleIcon className="h-6 w-6" />
						<span>Dribbble</span>
					</Link>
				</div>
				<div className="text-[#678080] text-sm flex flex-col sm:flex-row items-center justify-center">
					<p>
						&copy; 2024. All Rights Reserved.{' '}
						<span className="hidden sm:inline">|| &nbsp;</span>
					</p>
					<div className="flex gap-3">
						<p>
							<a
								href="https://www.linkedin.com/in/yourlinkedin"
								target="_blank"
							>
								Designed By:{' '}
								<span className="underline  underline-offset-2">
									Upasana
								</span>
							</a>
						</p>
						<p>
							<a
								href="https://www.linkedin.com/in/yourlinkedin"
								target="_blank"
							>
								Created By:{' '}
								<span className="underline  underline-offset-2">
									Prakash
								</span>
							</a>
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
