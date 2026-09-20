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
										Customer-acquisition infrastructure for
										<br /> clinics, high-value home services, interior
										<br /> studios, and high-ticket local firms.
										<br /> We exist because an owner shouldn&apos;t
										<br /> lose revenue juggling three disconnected
										<br /> agencies and a freelancer who vanishes
										<br /> when ad spend stops converting.
									</p>
								</div>
								<div className="flex flex-col gap-y-[20px]">
									<p className="paragraph font-NeueMontreal text-secondry">
										We integrate the entire customer journey —
										<br /> Google visibility, conversion landing pages,
										<br /> high-intent ads, instant WhatsApp follow-up,
										<br /> and revenue attribution — into one operating
										<br /> engine. Predictable customer flow, proven
										<br /> with data before asking for scale.
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
