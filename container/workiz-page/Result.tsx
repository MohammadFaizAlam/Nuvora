export default function Result() {
	return (
		<section className="w-full padding-y">
			<div className="w-full flex flex-col">
				<h1 className="sub-heading padding-x font-medium font-NeueMontreal text-secondry pb-[50px]">
					The Result
				</h1>
				<div className="w-full border-t border-[#21212155] pt-[20px]">
					<div className="w-full flex sm:flex-col xm:flex-col justify-between gap-y-[20px] padding-x">
						<div className="w-1/2 sm:w-full xm:w-full">
							<h3 className="paragraph font-medium text-secondry font-NeueMontreal">
								Project Outcomes:
							</h3>
						</div>
						<div className="w-1/2 sm:w-full xm:w-full flex sm:flex-col xm:flex-col gap-[20px]">
							<div className="flex flex-col gap-y-[10px] sm:w-full xm:w-full">
								<p className="paragraph font-NeueMontreal text-secondry underline">
									Feedback
								</p>
								<p className="paragraph font-NeueMontreal text-secondry">
									“Nuvora eliminated the blind spots in our
									<br className="sm:hidden xm:hidden" /> patient inquiry process. We were
									missing calls and losing <br className="sm:hidden xm:hidden" />
									high-ticket implant patients to competitors
									<br className="sm:hidden xm:hidden" /> down the road. With instant WhatsApp
									<br className="sm:hidden xm:hidden" /> triage and localized Google ranking,
									<br className="sm:hidden xm:hidden" /> our consultation bookings tripled in
									60 days. Every rupee spent is tracked
									<br className="sm:hidden xm:hidden" /> directly to clinical revenue.”
								</p>
							</div>
							<div className="flex flex-col gap-y-[10px] sm:w-full xm:w-full">
								<p className="paragraph font-NeueMontreal text-secondry underline">
									The Result
								</p>
								<p className="paragraph font-NeueMontreal text-secondry">
									Delivered a 310% increase in booked patient
									<br className="sm:hidden xm:hidden" /> consultations, reduced inquiry
									response <br className="sm:hidden xm:hidden" />
									time from 4 hours to under 90 seconds, and
									<br className="sm:hidden xm:hidden" />
									secured top 3 Google Map Pack rankings across
									Central Mumbai.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
