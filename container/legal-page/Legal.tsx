"use client";
import Link from "next/link";
import { MouseEvent, useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { TextMask } from "@/animation";
import { animation } from "@/motion";
import { LegalPageContent } from "@/constants/legal";

// Easing curves reused from the site's existing motion vocabulary
// (motion/index.ts) — no new easing, colors or type styles introduced.
const fadeRise = {
	initial: { y: 24, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.15 },
	},
};

const tocContainer = {
	initial: {},
	visible: { transition: { staggerChildren: 0.06, delayChildren: 0.35 } },
};

const tocItem = {
	initial: { y: "110%" },
	visible: {
		y: "0",
		transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1] },
	},
};

const revealViewport = { once: true, margin: "0px 0px -15% 0px" };

export default function Legal({ title, updated, intro, sections }: LegalPageContent) {
	const [activeId, setActiveId] = useState<string | null>(null);
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 120,
		damping: 30,
		mass: 0.3,
	});

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveId(entry.target.id);
					}
				});
			},
			{ rootMargin: "-20% 0px -60% 0px" }
		);
		sections.forEach((section) => {
			const el = document.getElementById(section.id);
			if (el) observer.observe(el);
		});
		return () => observer.disconnect();
	}, [sections]);

	const scrollToSection = (id: string) => (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		const el = document.getElementById(id);
		if (el) {
			window.scrollTo({
				top: el.getBoundingClientRect().top + window.scrollY - 100,
				behavior: "smooth",
			});
		}
	};

	const scrollToTop = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<>
			<motion.div
				style={{ scaleX }}
				className="fixed top-0 left-0 w-full h-[2px] bg-secondry origin-left z-[60] pointer-events-none"
			/>
			<section className="w-full">
				{/* Extra top padding on small screens clears the fixed 8vh navbar */}
				<div className="w-full margin padding-x xm:pt-[50px] sm:pt-[50px] md:pt-[30px]">
					<h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
						<TextMask>{[title]}</TextMask>
					</h1>
					<p className="small-text uppercase font-NeueMontreal text-secondry opacity-40 pt-[30px]">
						Last updated — {updated}
					</p>
				</div>
				<div className="w-full border-t border-[#21212155]">
					<div className="w-full flex justify-between padding-x py-[40px] sm:flex-col xm:flex-col sm:gap-[20px] xm:gap-[20px]">
						<div className="w-[50%] sm:w-full xm:w-full">
							<p className="paragraph font-medium text-secondry font-NeueMontreal">
								Contents:
							</p>
						</div>
						<motion.div
							variants={tocContainer}
							initial="initial"
							animate="visible"
							className="w-[50%] sm:w-full xm:w-full flex flex-col gap-[10px]">
							{sections.map((section) => (
								<motion.div key={section.id} variants={tocItem} className="overflow-hidden">
									<Link
										href={`#${section.id}`}
										onClick={scrollToSection(section.id)}
										className={`w-fit paragraph font-medium font-NeueMontreal text-secondry capitalize flex flex-col hover transition-opacity duration-500 ${
											activeId === section.id ? "opacity-100" : "opacity-40"
										}`}>
										{section.title}
									</Link>
								</motion.div>
							))}
						</motion.div>
					</div>
				</div>
				<div className="w-full border-t border-[#21212155]">
					<div className="w-full padding-x py-[40px] sm:py-[30px] xm:py-[30px]">
						<motion.div
							variants={fadeRise}
							initial="initial"
							whileInView="visible"
							viewport={revealViewport}
							className="max-w-[760px] mx-auto">
							{intro.map((para, i) => (
								<p
									key={i}
									className="sub-paragraph font-NeueMontreal text-secondry pb-[20px] last:pb-0">
									{para}
								</p>
							))}
						</motion.div>
					</div>
				</div>
				{sections.map((section) => (
					<section
						key={section.id}
						id={section.id}
						className="w-full border-t border-[#21212155]">
						<div className="w-full padding-x py-[40px] sm:py-[30px] xm:py-[30px]">
							<div className="max-w-[760px] mx-auto">
								<div className="overflow-hidden">
									<motion.h2
										variants={animation}
										initial="initial"
										whileInView="visible"
										viewport={revealViewport}
										className="paragraph font-medium font-NeueMontreal text-secondry pb-[20px]">
										{section.number} {section.title}
									</motion.h2>
								</div>
								<motion.div
									variants={fadeRise}
									initial="initial"
									whileInView="visible"
									viewport={revealViewport}>
									{section.body.map((block, i) =>
										block.type === "lead" ? (
											<p
												key={i}
												className="sub-paragraph font-NeueMontreal text-secondry pb-[20px]">
												{block.text}
											</p>
										) : block.type === "sub" ? (
											<p
												key={i}
												className="small-text uppercase font-medium font-NeueMontreal text-secondry pt-[10px] pb-[10px]">
												{block.text}
											</p>
										) : block.type === "note" ? (
											<p
												key={i}
												className="small-text font-NeueMontreal text-secondry opacity-40 pt-[10px] pb-[20px]">
												— {block.text}
											</p>
										) : block.type === "p" ? (
											<p
												key={i}
												className="paragraph font-normal font-NeueMontreal text-secondry pb-[20px]">
												{block.text}
											</p>
										) : (
											<ul
												key={i}
												className="list-disc pl-[20px] flex flex-col gap-[10px] pb-[20px]">
												{block.items.map((item, j) => (
													<li
														key={j}
														className="paragraph font-normal font-NeueMontreal text-secondry">
														{item}
													</li>
												))}
											</ul>
										)
									)}
								</motion.div>
							</div>
						</div>
					</section>
				))}
				<div className="w-full border-t border-[#21212155]">
					<div className="w-full padding-x py-[40px] sm:py-[30px] xm:py-[30px]">
						<div className="max-w-[760px] mx-auto flex justify-between items-center sm:flex-col xm:flex-col sm:gap-[20px] xm:gap-[20px] sm:items-start xm:items-start">
							<p className="small-text uppercase font-NeueMontreal text-secondry opacity-40">
								End of document
							</p>
							<Link
								href="#"
								onClick={scrollToTop}
								className="w-fit paragraph font-medium font-NeueMontreal text-secondry hover">
								Back to top
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
