import { Ratings } from "@/components";
import { aboutPartberItems } from "@/constants";
import { UtensilsCrossed, Scissors, Building2 } from "lucide-react";

export default function Partners() {
	const getIcon = (id: number) => {
		switch (id) {
			case 1:
				return UtensilsCrossed;
			case 2:
				return Scissors;
			case 3:
				return Building2;
			default:
				return UtensilsCrossed;
		}
	};

	return (
		<section className="w-full bg-background">
			<div>
				<h1 className="sub-heading padding-x font-medium font-NeueMontreal text-secondry">
					Built for the businesses that
					<br className="sm:hidden xm:hidden" /> keep a city running:
				</h1>
			</div>
			<div className="w-full border-t border-[#21212155] mt-[50px]">
				<div className="flex justify-between gap-[20px] sm:flex-col xm:flex-col pt-[50px]">
					{aboutPartberItems.map((item) => {
						const Icon = getIcon(item.id);
						return (
							<div
								className="w-[440px] sm:w-[380px] xm:w-[350px] padding-x py-[30px] shrink-0"
								key={item.id}>
								<div className="w-full h-full flex flex-col gap-[35px]">
									<div>
										<div className="w-[76px] h-[76px] rounded-2xl bg-[#212121]/[0.05] border border-[#212121]/15 flex items-center justify-center text-secondry">
											<Icon
												size={34}
												strokeWidth={1.6}
											/>
										</div>
									</div>
									<div className="flex flex-col gap-[20px]">
										<p className="paragraph text-secondry font-NeueMontreal font-normal underline">
											{item.title}
										</p>
										<p className="paragraph text-secondry font-NeueMontreal font-normal">
											{item.para}
										</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<div className="padding-x padding-y">
				<Ratings />
			</div>
		</section>
	);
}
