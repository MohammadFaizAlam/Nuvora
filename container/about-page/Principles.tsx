import Image from "next/image";
import { principles1, principles2 } from "@/public";

export default function Principles() {
	return (
		<section className="w-full padding-y rounded-t-[20px] bg-background">
			<div>
				<h1 className="sub-heading padding-x font-medium font-NeueMontreal text-secondry mb-[50px]">
					Two principles we stand behind in
					<br className="sm:hidden xm:hidden" /> every part of our work:
				</h1>
			</div>
			<div className="w-full border-t border-[#21212155]">
				<div className="w-full padding-x mt-[50px] flex justify-between gap-[30px] items-center sm:flex-col xm:flex-col">
					<div className="w-[50%] sm:w-full xm:w-full flex flex-col gap-[20px]">
						<Image
							src={principles1}
							alt="img"
							className="w-full rounded-[15px]"
						/>
						<div className="flex flex-col gap-[20px]">
						<p className="paragraph font-NeueMontreal text-secondry">
							Every rupee spent must connect to revenue. <br />
							We don&apos;t report impressions, clicks, or vague
							<br /> &quot;brand reach&quot; — we track qualified phone
							<br /> calls, WhatsApp inquiries, and verified clients.
							<br /> If a channel cannot prove its direct financial
							<br /> impact on your bottom line, we tell you to
							<br /> cut it immediately.
						</p>
						</div>
					</div>
					<div className="w-[50%] sm:w-full xm:w-full flex flex-col gap-[20px]">
						<Image
							src={principles2}
							alt="img"
							className="w-full rounded-[15px]"
						/>
						<div className="flex flex-col gap-[20px]">
							<p className="paragraph font-NeueMontreal text-secondry">
								We prove value fast before asking for scale. <br />
								We begin with a focused audit to isolate lead
								<br /> leakage, run a targeted sprint to establish
								<br /> undeniable proof of ROI, and only then discuss
								<br /> a retainer. You never commit to an open-ended
								<br /> contract without seeing visible, verified
								<br /> cause and effect first.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
