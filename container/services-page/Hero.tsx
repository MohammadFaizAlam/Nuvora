export default function Hero() {
	return (
		<section className="w-full min-h-screen">
			<div className="w-full flex flex-col justify-between">
				<div className="w-full flex flex-col">
					<div className="w-full margin padding-x">
						<div>
							<h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
								services
							</h1>
						</div>
					</div>
					<div className="w-full border-t border-[#21212155]">
						<p className="w-[80%] sm:w-full xm:w-full sub-heading font-normal padding-x font-NeueMontreal text-secondry padding-y">
							Not an uncoordinated menu of marketing tactics.&nbsp;
							<span className="xl:link-flash lg:link-flash md:link-flash cursor-pointer">
								One customer-acquisition engine connecting local SEO, high-converting pages,
								targeted search ads, and instant WhatsApp response&nbsp;
							</span>
							— built to turn local demand into verified revenue.
						</p>
					</div>
					<div className="w-full flex border-t border-[#21212155] py-[20px] flex-col">
						<div className="w-full flex justify-between sm:flex-col xm:flex-col padding-x sm:gap-[20px] xm:gap-[20px]">
							<div className="w-[50%] sm:w-full xm:w-full">
								<p className="paragraph font-NeueMontreal text-secondry">
									Our operating framework: <br /> Discover, Convert, Acquire, Measure.
								</p>
							</div>
							<div className="w-[50%] sm:w-full xm:w-full flex justify-between sm:flex-col xm:flex-col gap-[20px]	">
								<div className="w-[50%] sm:w-full xm:w-full flex flex-col gap-[20px]">
									<div className="flex flex-col gap-[20px]">
										<p className="paragraph font-NeueMontreal text-secondry underline">
											Audit before build
										</p>
										<p className="paragraph font-NeueMontreal text-secondry">
											Where do your highest-value enquiries
											<br className="sm:hidden xm:hidden" /> drop off today? Between search
											<br className="sm:hidden xm:hidden" /> and response, most local leads go
											<br className="sm:hidden xm:hidden" /> cold. We map the friction first so
											<br className="sm:hidden xm:hidden" /> every rupee deploys directly into
											<br className="sm:hidden xm:hidden" /> verified customer pipeline.
										</p>
									</div>
									<div className="flex flex-col gap-[20px]">
										<p className="paragraph font-NeueMontreal text-secondry underline">
											Revenue is the metric
										</p>
										<p className="paragraph font-NeueMontreal text-secondry">
											No vanity impressions or hollow traffic
											<br className="sm:hidden xm:hidden" /> graphs. We track qualified inbound
											<br className="sm:hidden xm:hidden" /> calls, WhatsApp consultations, and
											<br className="sm:hidden xm:hidden" /> completed bookings — reporting
											<br className="sm:hidden xm:hidden" /> acquisition cost and verified
											<br className="sm:hidden xm:hidden" /> revenue every month.
										</p>
									</div>
								</div>
								<div className="w-[50%] sm:w-full xm:w-full">
									<div className="flex flex-col gap-[20px]">
										<p className="paragraph font-NeueMontreal text-secondry underline">
											Connected infrastructure
										</p>
										<p className="paragraph font-NeueMontreal text-secondry">
											Top Google rankings drive high-intent
											<br className="sm:hidden xm:hidden" /> visitors. High-speed landing pages
											<br className="sm:hidden xm:hidden" /> convert them into WhatsApp chats.
											<br className="sm:hidden xm:hidden" /> Sub-2-minute response locks in
											<br className="sm:hidden xm:hidden" /> appointments before competitors
											<br className="sm:hidden xm:hidden" /> reply. One seamless revenue loop.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
