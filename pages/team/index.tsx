"use client";
import {
	Heroabout,
	Aboutabout,
	Team,
	Partners,
	Insights,
	Principles,
} from "@/container";
import Head from "next/head";
import { useEffect } from "react";
import { Curve, Ready } from "@/components";

export default function About() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);
	return (
		<>
			<Head>
				<title>About Us | Founder-Led Acquisition Infrastructure — Nuvora</title>
				<meta
					name="description"
					content="Nuvora was built to eliminate lead leakage between disconnected vendors. Discover our founder-led approach, core principles, and sprint-before-retainer model."
				/>
			</Head>
			<Curve backgroundColor={"#f1f1f1"}>
				<Heroabout />
				<Aboutabout />
				<Team />
				<Principles />
				<Partners />
				<Insights />
				<Ready />
			</Curve>
		</>
	);
}
