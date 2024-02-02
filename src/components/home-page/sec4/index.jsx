import { EmailIcon } from '../../icons/email-icon';
import { GlobeIcon } from '../../icons/globe';
import { PhoneIcon } from '../../icons/phone';
import { Form } from './form';

export function SectionFour() {
	return (
		<section className=" {bg-[#353535]} min-h-[75vh] sm:min-h-[90vh] {mt-16} flex flex-col items-center justify-center gap-10 bg-[radial-gradient(ellipse_at_bottom,var(--tw-gradient-stops))] from-gray-500 to-[#353535]">
			<div className="h-16 w-full bg-gradient-to-b to_b_blacck_white" />
			<div>
				<h2 className="text-center text-6xl font-semibold text-[#f5f5f5] pt-10">
					Contact Me
				</h2>
				<p className="text-center text-[#f5f5f5] text-lg font-medium pt-2">
					{/* We would love to hear from you */}
					Available For Work
				</p>
			</div>
			<div className="p-5 sm:py-20 sm:px-24 flex flex-col sm:flex-row items-center justify-between gap-20 sm:gap-10 w-full">
				<div className="flex-1 w-full">
					<Form />
				</div>
				<div className="flex justify-center py-10">
					<div className="flex flex-col gap-8 sm:gap-5">
						<div className=" flex sm:flex-col gap-4">
							<GlobeIcon className="w-6 h-6" fill="#4998f8" />
							<span className="text-[#f5f5f5]">
								Gadhwal,Uthrakhand
							</span>
						</div>
						<div className=" flex sm:flex-col gap-4">
							<PhoneIcon className="w-6 h-6" fill="#f98585" />
							<span className="text-[#f5f5f5]">+9123456789</span>
						</div>
						<div className=" flex sm:flex-col gap-4">
							<EmailIcon className="w-6 h-6" fill="#6d3cc2" />
							<span className="text-[#f5f5f5]">
								Upasanarawat@pahadi.girl
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
