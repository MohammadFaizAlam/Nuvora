import { backgroundAbout } from "@/public";
import { BackgroundImg } from "@/components";

export default function About() {
	return (
		<section className="w-full padding-y">
			<div className="w-full flex flex-col bg-background">
				<div className="w-full border-t border-[#21212155] pt-[20px]">
					<div className="w-full flex justify-between padding-x sm:flex-col xm:flex-col gap-[30px]">
						<div>
							<h3 className="paragraph font-medium text-secondry font-NeueMontreal">
								We are Nuvora:
							</h3>
						</div>
						<div className="w-[48%] sm:w-full xm:w-full flex justify-between">
							<div className="w-[50%] sm:w-full xm:w-full flex flex-col gap-y-[40px]">
								<div className="flex flex-col gap-y-[20px]">
									<p className="paragraph font-NeueMontreal text-secondry">
										A digital presence and growth company for
										<br /> restaurants, cafés, salons, clinics,
										<br /> real-estate businesses, interior designers,
										<br /> and local retailers. We exist because an
										<br />
										owner shouldn&apos;t need three vendors, a
										<br />
										freelancer, and a cousin &quot;who does
										<br />
										Instagram&quot; just to be visible online.
									</p>
								</div>
								<div className="flex flex-col gap-y-[20px]">
									<p className="paragraph font-NeueMontreal text-secondry">
										So we put everything that brings a customer
										<br />
										to your door — website, Google, social,
										<br /> ads, reviews, and lead follow-up — into
										<br />
										one revenue-focused stack, delivered as a
										<br /> standard system. Not a custom science
										<br /> project. The Engine Behind Scaling Brands.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="padding-x pt-[100px] lg:pt-[80px] md:pt-[60px] sm:pt-[40px] xm:pt-[40px]">
				<BackgroundImg src={backgroundAbout} />
			</div>
		</section>
	);
}
