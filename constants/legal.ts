// PLACEHOLDER LEGAL COPY. The content below is generic sample text written
// only to establish page structure and section flow. It is NOT legal advice
// and NOT final copy — rewrite every section with reviewed legal wording
// before this site goes live.

export type LegalBlock =
	| { type: "p"; text: string }
	| { type: "ul"; items: string[] };

export type LegalSection = {
	id: string;
	number: string;
	title: string;
	body: LegalBlock[];
};

export type LegalPageContent = {
	title: string;
	updated: string;
	intro: string[];
	sections: LegalSection[];
};

// ---------------------------------------------------------------
// TERMS & CONDITIONS
// ---------------------------------------------------------------

export const termsPage: LegalPageContent = {
	title: "Terms & Conditions",
	updated: "September 2026",
	intro: [
		"These Terms & Conditions (“Terms”) govern your access to and use of the Nuvora website and the services provided by Nuvora. By using this website or engaging us for services, you agree to these Terms. This document is provided as placeholder content and will be replaced with reviewed legal copy.",
	],
	sections: [
		{
			id: "acceptance-of-terms",
			number: "01.",
			title: "Acceptance of terms",
			body: [
				{
					type: "p",
					text: "By accessing this website, contacting us, or entering into an engagement with Nuvora (“we”, “us”, “our”), you (“you”, “Client”) agree to be bound by these Terms and any proposal, quotation or statement of work issued to you that references them. If you do not agree with any part of these Terms, please do not use this website or engage our services.",
				},
				{
					type: "p",
					text: "These Terms apply together with — and not in place of — the specific scope, fees and timelines agreed in writing for each engagement. Where a signed proposal conflicts with these Terms, the signed proposal will prevail for that engagement.",
				},
			],
		},
		{
			id: "about-us-and-services",
			number: "02.",
			title: "About Nuvora and our services",
			body: [
				{
					type: "p",
					text: "Nuvora is a digital marketing and web development agency based in Mumbai, Maharashtra, serving small and medium businesses across India. Depending on the engagement, our services may include website design and development, Google Business Profile management, local SEO, social media management, online advertising, reputation management and customer acquisition support.",
				},
				{
					type: "p",
					text: "The exact services, deliverables, timelines and fees applicable to you will always be defined in a written proposal or statement of work agreed before work begins. Nothing on this website constitutes an offer or a guarantee of any particular result.",
				},
			],
		},
		{
			id: "engagement-and-scope",
			number: "03.",
			title: "Engagement and scope of work",
			body: [
				{
					type: "p",
					text: "Each engagement begins with a written scope of work that sets out the deliverables, timelines, fees and payment schedule. Work will be performed in line with that scope only. Requests that fall outside the agreed scope may require a revised quotation and separate written approval before they are undertaken.",
				},
				{
					type: "p",
					text: "Timelines shared with you are good-faith estimates and assume timely feedback, approvals and inputs from your side. We will keep you informed if anything threatens a timeline and agree on a revised plan where needed.",
				},
			],
		},
		{
			id: "client-responsibilities",
			number: "04.",
			title: "Client responsibilities",
			body: [
				{ type: "p", text: "To keep an engagement running smoothly, you agree to:" },
				{
					type: "ul",
					items: [
						"Provide accurate business information, content, brand assets and access credentials when requested.",
						"Review deliverables and respond with feedback or approvals within a reasonable time.",
						"Maintain ownership and control of your own accounts — domain, hosting, Google Business Profile, social media and ad accounts.",
						"Ensure that any materials you supply to us do not infringe the rights of any third party and comply with applicable laws.",
						"Make payments as per the schedule agreed in the proposal or statement of work.",
					],
				},
			],
		},
		{
			id: "fees-payments-and-refunds",
			number: "05.",
			title: "Fees, payments and refunds",
			body: [
				{
					type: "p",
					text: "All fees are quoted in Indian Rupees and stated in the applicable proposal, quotation or invoice. Monthly retainers are billed in advance; one-time project fees are billed per the milestones agreed in writing. Invoices are payable by the due date stated on them.",
				},
				{
					type: "p",
					text: "Because our work is custom and capacity is reserved for each client, fees for work already performed, including allocated strategy and production time, are non-refundable. Any refund of prepaid but unutilised retainer amounts will be handled as per the terms of your statement of work.",
				},
				{
					type: "p",
					text: "We may pause or delay scheduled work if invoices remain overdue, after giving you written notice. Applicable taxes are extra and will be shown separately on invoices.",
				},
			],
		},
		{
			id: "intellectual-property",
			number: "06.",
			title: "Intellectual property",
			body: [
				{
					type: "p",
					text: "Each party retains ownership of the intellectual property it brings to the engagement. Upon full payment, the final deliverables created specifically for you — such as your website design, content and campaign creative — transfer to you as set out in your statement of work.",
				},
				{
					type: "p",
					text: "We retain the right to reference non-confidential work we have produced for you in our portfolio, case studies and marketing, unless you ask us in writing not to. Third-party assets used in delivery, such as fonts, stock media, themes and plugins, remain governed by their own licences.",
				},
			],
		},
		{
			id: "confidentiality",
			number: "07.",
			title: "Confidentiality",
			body: [
				{
					type: "p",
					text: "Both parties agree to keep confidential any non-public business information shared during an engagement — including business data, marketing plans, pricing and credentials — and to use it only for the purpose of delivering the services. This obligation does not apply to information that is publicly available, independently developed, or required to be disclosed by law or a competent authority.",
				},
			],
		},
		{
			id: "third-party-platforms",
			number: "08.",
			title: "Third-party platforms",
			body: [
				{
					type: "p",
					text: "Our services rely on third-party platforms such as Google, Meta, WhatsApp and various hosting, analytics and communication tools. Those platforms are governed by their own terms and policies, which may change at any time without notice to us or to you.",
				},
				{
					type: "p",
					text: "We do not control third-party platforms and cannot guarantee search rankings, ad approvals, review outcomes, reach or any other platform-dependent result. Where a platform change affects your account or campaign, we will flag it and recommend a course of action, but the platform's decision remains outside our control.",
				},
			],
		},
		{
			id: "limitation-of-liability",
			number: "09.",
			title: "Limitation of liability",
			body: [
				{
					type: "p",
					text: "To the maximum extent permitted by law, our services are provided on an “as is” basis and we will not be liable for any indirect, incidental or consequential losses, including lost profits, lost enquiries or business interruption, arising from or related to our services or this website.",
				},
				{
					type: "p",
					text: "Our total liability for any claim arising out of an engagement will not exceed the fees paid by you to us for that engagement in the three months preceding the claim. Nothing in these Terms excludes liability that cannot be excluded under applicable law.",
				},
			],
		},
		{
			id: "termination",
			number: "10.",
			title: "Termination",
			body: [
				{
					type: "p",
					text: "Monthly engagements may be terminated by either party with written notice as per the notice period stated in your statement of work. One-time projects may be terminated in accordance with the termination provisions of the applicable proposal.",
				},
				{
					type: "p",
					text: "On termination, you remain liable for fees covering work performed up to the effective termination date. We will hand back the accounts, assets and credentials that belong to you, so that you can continue your marketing with minimal disruption.",
				},
			],
		},
		{
			id: "governing-law",
			number: "11.",
			title: "Governing law and disputes",
			body: [
				{
					type: "p",
					text: "These Terms are governed by the laws of India. Any dispute arising out of or in connection with these Terms or an engagement will first be addressed through good-faith discussion between the parties. If it cannot be resolved that way, the courts of Mumbai, Maharashtra will have exclusive jurisdiction.",
				},
			],
		},
		{
			id: "changes-to-these-terms",
			number: "12.",
			title: "Changes to these terms",
			body: [
				{
					type: "p",
					text: "We may update these Terms from time to time. The current version will always be posted on this page with a revised “last updated” date. Significant changes affecting active clients will be communicated directly before they take effect. Continuing to use this website or our services after an update means you accept the revised Terms.",
				},
			],
		},
		{
			id: "contact-us",
			number: "13.",
			title: "Contact us",
			body: [
				{
					type: "p",
					text: "If you have any questions about these Terms, please reach out to us at hello@nuvora.in or write to us at Mumbai, Maharashtra, India. We respond to queries within a reasonable time during business days.",
				},
			],
		},
	],
};

// ---------------------------------------------------------------
// PRIVACY POLICY
// ---------------------------------------------------------------

export const privacyPage: LegalPageContent = {
	title: "Privacy Policy",
	updated: "September 2026",
	intro: [
		"This Privacy Policy explains what information Nuvora collects, how we use it, and the choices you have. It applies to visitors of this website, people who contact us, and clients we work with. This document is provided as placeholder content and will be replaced with reviewed legal copy.",
	],
	sections: [
		{
			id: "introduction",
			number: "01.",
			title: "Introduction",
			body: [
				{
					type: "p",
					text: "Nuvora (“we”, “us”, “our”) respects your privacy and is committed to handling personal information responsibly and transparently. By using this website or engaging our services, you acknowledge the practices described in this Policy. If you do not agree with them, please do not use this website.",
				},
			],
		},
		{
			id: "information-we-collect",
			number: "02.",
			title: "Information we collect",
			body: [
				{
					type: "p",
					text: "We collect information in two ways: information you give us directly, and information collected automatically when you use this website.",
				},
				{
					type: "ul",
					items: [
						"Contact details you share with us through forms, WhatsApp, email or calls — such as your name, business name, email address, phone number and business requirements.",
						"Records of our communications with you, including enquiries, proposals and feedback.",
						"Billing details needed to raise invoices and receive payments for our services.",
						"Basic technical information collected automatically — such as IP address, browser and device type, pages visited and the source of your visit.",
					],
				},
			],
		},
		{
			id: "how-we-use-your-information",
			number: "03.",
			title: "How we use your information",
			body: [
				{ type: "p", text: "We use the information we collect to:" },
				{
					type: "ul",
					items: [
						"Respond to your enquiries and provide the services you engage us for.",
						"Prepare proposals, deliver work, raise invoices and maintain business records.",
						"Improve this website, our content and our marketing.",
						"Send updates or information you have asked for — you can opt out of marketing communication at any time.",
						"Meet legal, accounting and regulatory obligations.",
					],
				},
				{
					type: "p",
					text: "We do not use your information for any purpose that is incompatible with the ones above without informing you first.",
				},
			],
		},
		{
			id: "cookies",
			number: "04.",
			title: "Cookies",
			body: [
				{
					type: "p",
					text: "This website may use cookies and similar technologies to function properly and to understand how visitors use the site. Cookies are small files stored on your device by your browser.",
				},
				{
					type: "p",
					text: "You can set your browser to refuse cookies or delete existing ones. Some parts of the website may not function as intended if certain cookies are disabled.",
				},
			],
		},
		{
			id: "third-party-tools-and-analytics",
			number: "05.",
			title: "Third-party tools and analytics",
			body: [
				{
					type: "p",
					text: "We work with trusted third-party tools to run our website and our business — for example website analytics, advertising platforms such as Google Ads and Meta, communication tools such as WhatsApp and email, and hosting providers. These tools may process some of the information described in this Policy on our behalf.",
				},
				{
					type: "p",
					text: "Each of these tools processes data under its own privacy policy, which we encourage you to read. Our website may also contain links to external sites whose privacy practices we do not control — please review their policies before sharing any information with them.",
				},
			],
		},
		{
			id: "data-sharing",
			number: "06.",
			title: "Data sharing",
			body: [
				{
					type: "p",
					text: "We do not sell your personal information. We share it only where necessary: with service providers who help us operate our website and deliver our services, with professional advisors where required, when disclosure is required by law or a competent authority, or where you have asked us to or consented to it.",
				},
			],
		},
		{
			id: "data-retention",
			number: "07.",
			title: "Data retention",
			body: [
				{
					type: "p",
					text: "We keep personal information only as long as it is needed for the purposes described in this Policy and to meet legal, accounting and business requirements. Retention periods vary depending on the nature of the information and the engagement. When information is no longer required, we delete it or anonymise it.",
				},
			],
		},
		{
			id: "data-security",
			number: "08.",
			title: "Data security",
			body: [
				{
					type: "p",
					text: "We apply reasonable technical and organisational measures to protect the information we hold, and limit access to team members who need it for their work. No method of storage or transmission over the internet is completely secure, so we cannot guarantee absolute security — but we take the protection of your information seriously and review our practices regularly.",
				},
			],
		},
		{
			id: "your-rights",
			number: "09.",
			title: "Your rights",
			body: [
				{ type: "p", text: "Subject to applicable law, you can ask us to:" },
				{
					type: "ul",
					items: [
						"Confirm what personal information we hold about you and provide a copy of it.",
						"Correct information that is inaccurate or incomplete.",
						"Delete personal information that we no longer have a valid reason to keep.",
						"Stop sending you marketing communication.",
						"Withdraw consent you have previously given, where processing is based on consent.",
					],
				},
				{
					type: "p",
					text: "To exercise any of these rights, write to us using the contact details below. We will respond within a reasonable time. Applicable Indian law, including the Digital Personal Data Protection Act, 2023, may provide you with additional rights.",
				},
			],
		},
		{
			id: "changes-to-this-policy",
			number: "10.",
			title: "Changes to this policy",
			body: [
				{
					type: "p",
					text: "We may update this Privacy Policy from time to time to reflect changes in our practices or the law. The current version will always be posted on this page with a revised “last updated” date. Continued use of this website after an update means you accept the revised Policy.",
				},
			],
		},
		{
			id: "contact-us",
			number: "11.",
			title: "Contact us",
			body: [
				{
					type: "p",
					text: "If you have any questions about this Policy or how your information is handled, please reach out to us at hello@nuvora.in or write to us at Mumbai, Maharashtra, India.",
				},
			],
		},
	],
};
