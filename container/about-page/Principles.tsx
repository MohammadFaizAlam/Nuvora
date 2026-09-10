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
							Every rupee we spend has to answer to revenue. <br />
							We don&apos;t report likes, impressions, or &quot;brand
							<br /> reach&quot; — we report booked tables, answered
							<br /> calls, filled appointments, and enquiries you
							<br /> can count. If a channel can&apos;t show you its
							<br /> contribution to the till, we&apos;ll tell you to
							<br /> cut it.
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
								We don&apos;t build on guesswork. Every client who
								<br /> works with us teaches us what actually moves
								<br /> the needle for an Indian SME — and what we
								<br /> learn from one café or clinic gets built into
								<br /> the stack for the next. We observe before we
								<br /> build, every single time.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
