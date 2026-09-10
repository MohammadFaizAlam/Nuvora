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
							One team, one stack.&nbsp;
							<span className="xl:link-flash lg:link-flash md:link-flash cursor-pointer">
								Your website, Google presence, social media, ads, reviews
								and lead follow-up&nbsp;
							</span>
							— built to bring you customers, not compliments.
						</p>
					</div>
					<div className="w-full flex border-t border-[#21212155] py-[20px] flex-col">
						<div className="w-full flex justify-between sm:flex-col xm:flex-col padding-x sm:gap-[20px] xm:gap-[20px]">
							<div className="w-[50%] sm:w-full xm:w-full">
								<p className="paragraph font-NeueMontreal text-secondry">
									We do this with a <br /> simple approach:
								</p>
							</div>
							<div className="w-[50%] sm:w-full xm:w-full flex justify-between sm:flex-col xm:flex-col gap-[20px]	">
								<div className="w-[50%] sm:w-full xm:w-full flex flex-col gap-[20px]">
										<div className="flex flex-col gap-[20px]">
											<p className="paragraph font-NeueMontreal text-secondry underline">
												We look before we build
											</p>
											<p className="paragraph font-NeueMontreal text-secondry">
												How do customers find you today? Where do
												<br className="sm:hidden xm:hidden" /> enquiries
												come from, and where do they
												<br className="sm:hidden xm:hidden" /> drop off?
												We study your business first, so
												<br className="sm:hidden xm:hidden" /> every
												rupee we spend goes where it
												<br className="sm:hidden xm:hidden" /> will
												actually move the needle.
											</p>
										</div>
										<div className="flex flex-col gap-[20px]">
											<p className="paragraph font-NeueMontreal text-secondry underline">
												Revenue is the report card
											</p>
											<p className="paragraph font-NeueMontreal text-secondry">
												We never pitch likes or impressions. We
												<br className="sm:hidden xm:hidden" /> track
												calls answered, WhatsApp messages,
												<br className="sm:hidden xm:hidden" /> forms
												filled and bookings made — and
												<br className="sm:hidden xm:hidden" /> report
												them to you every month in
												<br className="sm:hidden xm:hidden" /> plain
												language you can act on.
											</p>
										</div>
								</div>
								<div className="w-[50%] sm:w-full xm:w-full">
										<div className="flex flex-col gap-[20px]">
											<p className="paragraph font-NeueMontreal text-secondry underline">
												The stack works as one
											</p>
											<p className="paragraph font-NeueMontreal text-secondry">
												A review answered feeds your Google
												<br className="sm:hidden xm:hidden" /> ranking.
												A good landing page makes your
												<br className="sm:hidden xm:hidden" /> ad
												spend cheaper. A reel brings the
												<br className="sm:hidden xm:hidden" /> walk-in.
												None of it works in isolation —
												<br className="sm:hidden xm:hidden" /> so we
												run it as one system, not six.
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
