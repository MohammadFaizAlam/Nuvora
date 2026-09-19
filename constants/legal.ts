// NUVORA — TERMS & CONDITIONS and PRIVACY POLICY
// Long-form draft prepared for founder review before publishing.
// Review notes: bracketed [ ] items are decisions to confirm (notice periods,
// interest rate, retention windows). Legal references are drafted to the
// Act level (DPDPA 2023, IT Act 2000, IT RSPP Rules 2011, CPA 2019,
// Indian Contract Act 1872, A&C Act 1996) — validate with counsel.

export type LegalBlock =
	| { type: "lead"; text: string }
	| { type: "p"; text: string }
	| { type: "sub"; text: string }
	| { type: "ul"; items: string[] }
	| { type: "note"; text: string };

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

// =============================================================
// TERMS & CONDITIONS
// =============================================================

export const termsPage: LegalPageContent = {
	title: "Terms & Conditions",
	updated: "19 September 2026",
	intro: [
		"Before anything else: thank you for opening this page. Most people never read a terms document, and the fact that you have tells us you take your business — and your trust — seriously. So do we. Nuvora is a deliberately small operation, and the only kind of client relationship we are interested in is one where both sides know exactly what they have agreed to. What follows is the complete legal framework for that agreement, written to be read.",
		"A word on how this document is built. Every section opens with a short summary in plain language, followed by the precise legal clause, and — wherever a clause could otherwise read as cold or one-sided — a brief aside explaining why it exists and what it protects you from. Nothing is buried. If any provision here is unclear, write to us and we will walk you through it before you commit to anything, not after.",
	],
	sections: [
		{
			id: "about-these-terms",
			number: "01.",
			title: "About these Terms",
			body: [
				{
					type: "lead",
					text: "This section sets out when these Terms apply, the documents that together form our agreement with you, and which document prevails if they ever appear to disagree.",
				},
				{
					type: "p",
					text: "These Terms & Conditions (“Terms”) govern your access to and use of the Nuvora website and all services provided by Nuvora (“we”, “us”, “our”). By accessing this website, requesting an audit, accepting a proposal, or engaging us for any service, you (“you”, “Client”) agree to be bound by these Terms and by any accepted proposal, quotation or statement of work (“SOW”) that references them. The Terms, together with your accepted proposal or SOW, constitute the entire agreement between us (the “Agreement”).",
				},
				{
					type: "sub",
					text: "1.1 — Order of precedence",
				},
				{
					type: "p",
					text: "Where an accepted proposal or SOW expressly modifies these Terms, the proposal or SOW prevails for that engagement. Where it is silent, these Terms apply. Descriptions of services, indicative pricing or illustrative timelines on this website are informational and are superseded by your accepted proposal.",
				},
				{
					type: "p",
					text: "These Terms are governed by the Indian Contract Act, 1872 and all other laws of India applicable to service agreements. If you do not agree with any part of them, please do not use this website or engage our services — and if you would like to discuss a specific clause before engaging, we will genuinely make the time.",
				},
				{
					type: "note",
					text: "Why one master document: so that nothing about your rights depends on which version of a PDF either of us can find. Your proposal only ever changes what it explicitly says it changes.",
				},
			],
		},
		{
			id: "who-we-are",
			number: "02.",
			title: "Who we are and what we do",
			body: [
				{
					type: "lead",
					text: "This section describes Nuvora's business accurately — what we sell, how our service is structured, and what sits outside it — so that the rest of this document has an honest foundation.",
				},
				{
					type: "p",
					text: "Nuvora is a Mumbai-based, founder-led digital agency that builds and operates customer-acquisition systems for established, high-value local businesses in India. Our initial focus is owner-led businesses with substantial transaction values — clinics and healthcare practices, high-value home services, interior design and architecture studios, and comparable businesses where each new customer matters and one unanswered enquiry has a real cost.",
				},
				{
					type: "sub",
					text: "2.1 — The four layers of our service",
				},
				{
					type: "ul",
					items: [
						"Discover — managing and optimising your Google Business Profile, local search visibility and the fundamentals of how customers find you when they search nearby.",
						"Convert — building and improving websites and landing pages, lead capture forms, WhatsApp integration, scheduling, and the follow-up automation that ensures an enquiry becomes a conversation rather than a missed call.",
						"Acquire — planning, building and managing advertising campaigns on Google and Meta, including campaign landing pages and conversion tracking. Campaigns are run either directly by us or through vetted advertising partners, always under our supervision and your instruction on budgets.",
						"Measure — lead-source attribution, funnel tracking and revenue reporting, so that every month you can see which channel produced which enquiry, and what each rupee returned.",
					],
				},
				{
					type: "sub",
					text: "2.2 — Optional add-ons",
				},
				{
					type: "p",
					text: "Social media management, content production and branding are available as optional add-ons where expressly included in an accepted proposal or SOW. They are not part of any engagement unless written down as such — we would rather you receive exactly what was promised than a loose assortment of extras nobody scoped.",
				},
				{
					type: "note",
					text: "We are deliberately small. Every account is overseen by the founder, which means the person answerable for your results is the person you speak to. Where specialist execution requires it, we work with a small circle of vetted collaborators under confidentiality.",
				},
			],
		},
		{
			id: "engagement-structure",
			number: "03.",
			title: "How engagements are structured",
			body: [
				{
					type: "lead",
					text: "Most clients move through three stages — an Audit, a Sprint, then an ongoing Retainer. This section defines each stage, what it contains, and what it obliges either of us to do.",
				},
				{
					type: "sub",
					text: "3.1 — The Audit",
				},
				{
					type: "p",
					text: "An Audit is an assessment of your current acquisition setup — your visibility, your website, your reviews, your follow-up — concluding in a written findings document and a recommendation. Audits may be free or low-cost as stated when offered. An Audit creates no obligation on either side to proceed to a Sprint; its fee, where charged, earns the findings document itself.",
				},
				{
					type: "sub",
					text: "3.2 — The Sprint",
				},
				{
					type: "p",
					text: "A Sprint is a one-time, scoped implementation project — typically ₹15,000 to ₹30,000 — with deliverables, timelines and milestones defined in a written SOW. Sprint pricing is fixed for the agreed scope; work outside that scope is quoted separately before it is undertaken, never discovered on an invoice afterwards.",
				},
				{
					type: "sub",
					text: "3.3 — The Core Retainer",
				},
				{
					type: "p",
					text: "The Core Retainer (typically ₹25,000 to ₹45,000 per month) covers ongoing management of the systems a Sprint put in place: your Google presence, your website's upkeep, campaign management and monthly measurement and reporting. Deliverables for each month are listed in your proposal.",
				},
				{
					type: "sub",
					text: "3.4 — The Growth / Performance Retainer",
				},
				{
					type: "p",
					text: "The Growth / Performance Retainer (typically ₹45,000 to ₹80,000 and above per month) covers expanded acquisition activity — larger or additional campaign programmes, deeper funnel work, and more intensive optimisation — as detailed in your proposal.",
				},
				{
					type: "p",
					text: "The ranges above are indicative and exist so that a quote can be sanity-checked against them. Your binding fee is the figure in your accepted proposal. Fee reviews, where the scope of an engagement grows or shrinks, happen by mutual written consent before the month in which they take effect — never retrospectively.",
				},
			],
		},
		{
			id: "our-commitments",
			number: "04.",
			title: "What we commit to",
			body: [
				{
					type: "lead",
					text: "Obligations in an agreement should run in both directions. This one sets out ours, in writing, before we ask anything of you.",
				},
				{
					type: "ul",
					items: [
						"We will perform the services defined in your SOW with professional skill, care and diligence.",
						"We will send you a monthly report in plain language — calls, enquiries, bookings, spend, and what each channel contributed — with no vanity numbers and no jargon intended to obscure.",
						"We will keep one accountable point of contact: the founder. You will not be handed to a rotating cast.",
						"We will tell you, honestly and in writing, when something is not working — including recommending that a channel be reduced or stopped when the data says so, even when that reduces our fee.",
						"We will treat your business information, your performance data and your customers' details with the confidentiality and care described in Sections 11 and 12.",
					],
				},
				{
					type: "note",
					text: "This section is deliberately specific. “Quality service” is not a promise anyone can hold anyone to; the five commitments above can each be checked against a month's work.",
				},
			],
		},
		{
			id: "client-responsibilities",
			number: "05.",
			title: "Your responsibilities as a client",
			body: [
				{
					type: "lead",
					text: "An acquisition system is a joint operation: we can generate the enquiry, but what happens to it inside your business decides what it is worth. This section records the small number of things we need from you.",
				},
				{
					type: "ul",
					items: [
						"Access and inputs — timely provision of the account access, business information, brand assets and content we reasonably require, including access to your domain, hosting, Google Business Profile, social and advertising accounts where relevant to the engagement.",
						"Approvals — review of deliverables and campaigns within the review window stated in your SOW (or, if none is stated, within ten business days of our request). We will always send a reminder before treating inaction as approval, and where a deadline matters — a campaign launch, a date-bound promotion — we will say so explicitly.",
						"Accuracy — confirmation that information and materials you supply are accurate, lawfully yours to use, and non-infringing.",
						"Ownership of your accounts — maintaining registration of your domain, hosting, ad accounts, Google Business Profile and social handles in your (or your business's) name. We operate as authorised users; you remain the owner. This is for your protection as much as ours.",
						"Follow-up — attending to the enquiries the system produces. Response speed, pricing, capacity and service quality on your side are the largest determinants of conversion, and they are, necessarily, yours.",
					],
				},
				{
					type: "note",
					text: "Why the last point appears in a legal document rather than a friendly email: because it would be dishonest of us to accept money for campaigns while pretending that lead quality is the only variable. We will do our half with full effort; this clause simply records that yours exists.",
				},
			],
		},
		{
			id: "fees-and-payment",
			number: "06.",
			title: "Fees, invoices and payment",
			body: [
				{
					type: "lead",
					text: "This section states when invoices are issued, when they fall due, what happens if one is late, and the one promise we will always keep about money: no charge will ever appear that was not agreed in writing first.",
				},
				{
					type: "sub",
					text: "6.1 — Fees and taxes",
				},
				{
					type: "p",
					text: "All fees are quoted and payable in Indian Rupees. Goods and Services Tax, and any other applicable taxes or statutory levies, are payable in addition at the rates in force. Sprint fees are invoiced as stated in the SOW — typically upfront or against defined milestones. Retainers are invoiced monthly in advance. Audit fees, where charged, are invoiced on commencement of the Audit.",
				},
				{
					type: "sub",
					text: "6.2 — Due dates",
				},
				{
					type: "p",
					text: "Invoices are due within seven (7) days of issue unless your proposal states otherwise. If an invoice will be late for a reason worth explaining — a pending reimbursement, an internal approval cycle — tell us; a short note costs nothing and changes how the next clause is applied.",
				},
				{
					type: "sub",
					text: "6.3 — Late payment",
				},
				{
					type: "p",
					text: "If an invoice remains unpaid fifteen (15) days after its due date, we may, at our discretion and after written reminder: (a) charge interest on the overdue amount at 1.5% per month or part thereof, from the due date until receipt; and (b) suspend further work under the affected engagement until the account is settled or a written payment plan is agreed. Suspension under this clause is never treated as termination, and no suspension will begin without at least one written reminder first.",
				},
				{
					type: "sub",
					text: "6.4 — Scope changes",
				},
				{
					type: "p",
					text: "Work outside the agreed scope — additional pages, new campaigns, platforms added mid-month — is quoted in writing and undertaken only on your written approval. Estimated efforts quoted during a Sprint are revised in writing before they are exceeded wherever practicable.",
				},
				{
					type: "note",
					text: "Why we reserve the right to pause rather than penalise first: a pause protects the standard of work we can honestly deliver; interest alone protects nobody. In practice, a conversation has resolved every late invoice we have ever had.",
				},
			],
		},
		{
			id: "advertising-spend",
			number: "07.",
			title: "Advertising spend and platform costs",
			body: [
				{
					type: "lead",
					text: "Your media budget is yours. It never becomes our revenue, and this section is where we make that legally binding rather than merely a claim on a sales call.",
				},
				{
					type: "sub",
					text: "7.1 — Spend is billed separately, never through our margin",
				},
				{
					type: "p",
					text: "Advertising spend on Google Ads, Meta Ads or any other platform is always billed separately from our fees — either directly by the platform to you, or via a vetted advertising partner under arrangements disclosed to you in advance. We do not absorb media spend into our fee, do not mark it up, and do not profit from it in any form.",
				},
				{
					type: "sub",
					text: "7.2 — Disclosure of any economic interest",
				},
				{
					type: "p",
					text: "If any platform, partner or reseller ever offers us a commission, rebate, credit or other economic benefit connected in any way to your spend, we will disclose it to you in writing and either pass it through to your account or credit it against our fee — whichever you prefer. We consider an undisclosed interest in a client's media budget to be a breach of this Agreement.",
				},
				{
					type: "sub",
					text: "7.3 — Budgets are set by you",
				},
				{
					type: "p",
					text: "Campaign budgets are set with you and changed only on your instruction (or your approved standing rule, such as a monthly cap with defined flexibility). We may recommend minimum spends below which a campaign cannot produce meaningful data, and we may recommend pausing spend where performance does not justify it — but the decision, and the budget, remain yours.",
				},
				{
					type: "sub",
					text: "7.4 — Account ownership",
				},
				{
					type: "p",
					text: "Advertising accounts, campaign structures, conversion data and audiences reside in accounts owned by you. Where an engagement runs through a vetted ad partner, we will state so in the proposal, explain the billing arrangement in plain terms, and record what happens to campaign assets if the engagement ends.",
				},
				{
					type: "note",
					text: "Why this section is unusually emphatic: media spend is where agency clients are most often quietly overcharged, so we have written the opposite of that practice into the contract itself. Your fee and your media budget are two separate numbers, and only the first is ours.",
				},
			],
		},
		{
			id: "refunds",
			number: "08.",
			title: "Refunds",
			body: [
				{
					type: "lead",
					text: "Refund boundaries are stated here exactly, stage by stage — not because we expect the conversation, but because you deserve to know the rules before, not after, money changes hands.",
				},
				{
					type: "sub",
					text: "8.1 — Audits",
				},
				{
					type: "p",
					text: "A paid Audit fee earns the findings document. It is non-refundable once the Audit has been delivered. Where you proceed to a Sprint within thirty (30) days of receiving the Audit, any Audit fee you paid is credited in full against the Sprint invoice — the Audit, in effect, becomes free for clients who continue.",
				},
				{
					type: "sub",
					text: "8.2 — Sprints",
				},
				{
					type: "p",
					text: "A Sprint may be cancelled in writing at any time before work begins for a full refund. Once work has begun, fees for milestones performed are earned and non-refundable, because the capacity reserved for your project cannot be resold; milestones not yet commenced are refunded in full. Where a Sprint is cancelled mid-stream, we will deliver all completed work product to you regardless.",
				},
				{
					type: "sub",
					text: "8.3 — Retainers",
				},
				{
					type: "p",
					text: "Retainer fees are billed monthly in advance and cover the month ahead. If an engagement terminates, the current month's fee is not refunded (we remain available and working through the notice period described in Section 18), but any fully prepaid future months are refunded in full within fifteen (15) days of the termination date. Because media spend never passes through us, there is nothing for us to refund on the advertising side — unspent platform balances remain in your platform accounts, in your name.",
				},
				{
					type: "note",
					text: "The principle underneath all three paragraphs is the same: we do not want a rupee we have not earned, and we do not want you trapped by a fee. If you believe a charge is wrong, say so; errors are corrected the day we find them.",
				},
			],
		},
		{
			id: "intellectual-property",
			number: "09.",
			title: "Intellectual property",
			body: [
				{
					type: "lead",
					text: "This section answers the only question that matters here in practice: what becomes yours, what remains ours, and when the transfer happens.",
				},
				{
					type: "sub",
					text: "9.1 — What each party keeps",
				},
				{
					type: "p",
					text: "Each party retains all intellectual property rights it held before the engagement. You grant us a limited licence to use your brand assets, content and materials as reasonably necessary to deliver the services; we grant you a equivalent licence to use our working files, templates and frameworks as embedded in your deliverables. Neither licence extends beyond the purposes of the engagement.",
				},
				{
					type: "sub",
					text: "9.2 — What becomes yours",
				},
				{
					type: "p",
					text: "Upon full payment of the fees attributable to them, all final deliverables created specifically for you — the website and its design, landing pages, copy, creative assets, campaign structures and configuration, and documentation — are assigned to you. From that point, they are yours to use, modify, host, and hand to any other provider without restriction or further payment to us.",
				},
				{
					type: "sub",
					text: "9.3 — What remains ours",
				},
				{
					type: "p",
					text: "We retain ownership of our underlying methodologies, frameworks, internal tools, playbooks and templates, and of aggregated and anonymised performance benchmarks derived across engagements (which never identify you or your customers without the consent described in Section 10). You receive, as part of 9.1, the right to keep using whatever of ours is embedded in your deliverables — so nothing you have paid for ever stops working because of this paragraph.",
				},
				{
					type: "sub",
					text: "9.4 — Third-party components",
				},
				{
					type: "p",
					text: "Deliverables may incorporate third-party components — fonts, stock media, plugins, themes, platform features — governed by their own licences. We will prefer, where a genuine choice exists, components whose licences survive the end of our relationship, and we will flag in writing any component that carries a material restriction.",
				},
				{
					type: "sub",
					text: "9.5 — Non-payment",
				},
				{
					type: "p",
					text: "Where fees attributable to deliverables remain overdue beyond the cure period in Section 18, those deliverables remain licensed to you rather than assigned, and transfer of source files is completed on settlement. To be plain about intent: this is a provision of last resort for abandoned invoices, not leverage in an ordinary disagreement — and it never authorises us to take a live website offline or interrupt your advertising without the notice process in Section 18. Your statutory rights, including under the Consumer Protection Act, 2019, are unaffected.",
				},
				{
					type: "note",
					text: "Why the last clause exists at all: an agency that assigns everything before payment occasionally meets a client who collects the work and vanishes. We have written the remedy narrowly — source files await settlement, nothing is switched off — because a sledgehammer clause would be unfair to the ninety-nine honest clients who never trigger it.",
				},
			],
		},
		{
			id: "case-studies",
			number: "10.",
			title: "Case studies, testimonials and pilot engagements",
			body: [
				{
					type: "lead",
					text: "Some of our earliest clients helped us build proof in exchange for preferential pricing. This section records that bargain precisely — and records, just as precisely, that it touches nothing else about their rights.",
				},
				{
					type: "sub",
					text: "10.1 — The pilot arrangement",
				},
				{
					type: "p",
					text: "Where we agree pilot or preferential pricing partly in exchange for testimonial and case-study rights, the arrangement is recorded in writing in your proposal: what pricing applies, for how long, and what usage we may make of your results. If your proposal says nothing about case-study rights, nothing in this section grants them.",
				},
				{
					type: "sub",
					text: "10.2 — The shape of consent",
				},
				{
					type: "p",
					text: "Consent under this section is specific. Where figures, screenshots or customer outcomes are shared, they are shared only with your express sign-off on the specific material. You may choose to be named or anonymised. You may withdraw consent to future use at any time by writing to us; materials already printed or published will be withdrawn from active use within a reasonable period, and we will not reproduce them thereafter. If consent is withdrawn entirely and the usage rights were a stated part of your pricing consideration, we may adjust future pricing to standard rates with thirty (30) days' notice — never retrospectively, and never for past work.",
				},
				{
					type: "sub",
					text: "10.3 — What consent never affects",
				},
				{
					type: "p",
					text: "Granting testimonial or case-study consent does not reduce, condition or otherwise touch your rights as a client: the same service standards, response commitments, reporting, refund terms and termination rights apply to pilot clients as to every other client. Your consent is also never a precondition of our basic performance — the work comes first, always, and the story is told only if it is true and you permit it.",
				},
				{
					type: "sub",
					text: "10.4 — Honesty of testimonials",
				},
				{
					type: "p",
					text: "We do not script, pay for, or incentivise testimonials beyond the pricing arrangement described in your proposal, and we will not publish any statement you have not reviewed and approved in the form in which it appears.",
				},
				{
					type: "note",
					text: "A case study is only worth having if the client behind it would still say yes a year later. Everything in this section is designed so that the answer stays yes.",
				},
			],
		},
		{
			id: "confidentiality",
			number: "11.",
			title: "Confidentiality",
			body: [
				{
					type: "lead",
					text: "We see your numbers, your pipeline and your customers' details. This section states what we may do with that knowledge — which is: our job, and nothing else.",
				},
				{
					type: "p",
					text: "Each party will keep confidential all non-public information disclosed by the other in connection with the engagement — including business and financial information, pricing, performance and campaign data, customer and lead information, plans and know-how — and will use it solely to perform the Agreement. We will restrict access to such information within our team and our vetted collaborators to those who need it to deliver the services, and under obligations of confidentiality no weaker than this one.",
				},
				{
					type: "p",
					text: "The obligation does not apply to information that is or becomes public through no breach of this section, was already known to the receiving party without restriction, is independently developed, or must be disclosed by law or a competent authority — in which case we will give you prompt written notice where lawfully permitted, so that you may seek protective relief. These obligations survive the end of the engagement for three (3) years, and indefinitely for information that constitutes a trade secret.",
				},
			],
		},
		{
			id: "data-protection",
			number: "12.",
			title: "Data protection",
			body: [
				{
					type: "lead",
					text: "When we handle your customers' data, we are acting on your behalf — and we hold ourselves to the full standard the law sets for both of us. This section allocates those responsibilities precisely.",
				},
				{
					type: "sub",
					text: "12.1 — Our respective roles",
				},
				{
					type: "p",
					text: "For personal data of your customers, patients, leads and prospects that we process in delivering the services — enquiry forms, WhatsApp conversations, call logs, CRM records and the like — you are the Data Fiduciary and we act as your Data Processor under the Digital Personal Data Protection Act, 2023 (“DPDPA”), processing only on your documented instructions. For personal data of website visitors, enquirers and client contacts who deal with us directly, we are the Data Fiduciary, and our own Privacy Policy governs.",
				},
				{
					type: "sub",
					text: "12.2 — Our obligations as your Processor",
				},
				{
					type: "ul",
					items: [
						"We maintain reasonable security safeguards and procedures in accordance with Section 8(5) of the DPDPA and the Information Technology (Reasonable Security Practices and Procedures) Rules, 2011, including the contractual and documented-practice measures recognised thereunder.",
						"We process personal data only on your instructions, only for the engagement, and engage sub-processors — the platforms named in Section 13 and in our Privacy Policy — only as necessary to deliver the services, and subject to obligations consistent with this section.",
						"We will assist you, proportionately and promptly, in responding to access, correction, erasure and grievance requests from your customers, and in meeting your obligations as a Data Fiduciary.",
						"We will notify you without undue delay upon becoming aware of any personal data breach affecting data processed for you, in sufficient detail to allow you to meet your notification obligations under Section 9 of the DPDPA.",
						"On termination, we will delete or return personal data processed for you, subject to the retention periods our Privacy Policy reserves for legal, tax and dispute purposes.",
					],
				},
				{
					type: "p",
					text: "Nothing in this Agreement limits either party's liability under Section 43A of the Information Technology Act, 2000 or under the DPDPA where applicable. Your attention is also invited to Section 15 of our Privacy Policy, which describes what we need from you as the Data Fiduciary — principally, that the data you route through our systems was collected with proper notice and consent.",
				},
				{
					type: "note",
					text: "The division of roles is not a shield; it is how the law assigns duties so that nothing falls between two chairs. In practice: your customers' data is yours, our handling of it is answerable to you, and our own practices are answerable to everyone.",
				},
			],
		},
		{
			id: "third-party-platforms",
			number: "13.",
			title: "Third-party platforms and dependencies",
			body: [
				{
					type: "lead",
					text: "Our work runs on platforms we do not own — Google, Meta, WhatsApp, hosting and analytics providers among them. This section is the honest boundary of what we can and cannot control on your behalf.",
				},
				{
					type: "p",
					text: "Delivery of the services depends on third-party platforms and tools, which at present include Google Business Profile, Google Ads, Meta Ads, the WhatsApp Business API, website hosting providers, analytics tools and CRM/automation tools. These services are governed by their own terms, policies and technical behaviour, each of which may change at any time and without notice to us. We do not control their approval decisions, ranking and reach policies, feature availability, pricing, or account-suspension processes.",
				},
				{
					type: "p",
					text: "Where a platform change materially affects your results or your account, we will identify it, explain it in plain language, and recommend a course of action — but the platform's decision is not ours to override, and we accept no liability for acts or omissions of third-party platforms, save where our own negligence contributes to the loss. Account setups (Section 7.4) are made in your name from the outset precisely so that no third-party relationship is ever intermediated by us.",
				},
				{
					type: "note",
					text: "We choose tools with export paths and data portability wherever a real choice exists, so that your history and your audiences are never hostage to any platform — including us.",
				},
			],
		},
		{
			id: "results-and-expectations",
			number: "14.",
			title: "Results: what we promise, and what we do not",
			body: [
				{
					type: "lead",
					text: "This is the most important honesty clause in the document, and we have written it as carefully as we know how. We promise you our work, our judgement and our candour. We do not promise outcomes that no one can deliver — and we would encourage you to treat any agency that does as a warning sign rather than an opportunity.",
				},
				{
					type: "sub",
					text: "14.1 — What we do promise",
				},
				{
					type: "p",
					text: "We promise the defined deliverables of your SOW, executed with professional skill and care; honest campaign management against the budgets you set; tracking and measurement installed so that results can be attributed rather than asserted; transparent monthly reporting; and our candid recommendation whenever the data suggests a channel should be changed, reduced or stopped — including when that recommendation reduces our fee.",
				},
				{
					type: "sub",
					text: "14.2 — What we do not promise",
				},
				{
					type: "p",
					text: "We do not guarantee, and you acknowledge that no agency or professional can guarantee: specific search rankings or map positions (search engines alone determine these, and Google itself publishes guidance warning against ranking guarantees); specific volumes of leads, calls or enquiries; specific conversion rates or costs per acquisition; or specific revenue outcomes. These outcomes are influenced by factors outside anyone's control, including market demand and seasonality, competitor behaviour and spend, platform algorithms and auction dynamics, the level and timing of advertising spend, and — materially — client-side factors such as response speed to enquiries, pricing, capacity, reputation and service quality.",
				},
				{
					type: "sub",
					text: "14.3 — Estimates and forward-looking statements",
				},
				{
					type: "p",
					text: "Any projections, ranges, benchmarks or expected timelines we share — including figures illustrating what comparable businesses have achieved — are honest professional judgements based on experience and available data at the time they are given. They are statements of expectation, not warranties of outcome, and should not be the sole basis of a business decision. Where a projection turns on assumptions (your follow-up speed, a given ad budget, a given close rate), we will say what those assumptions are.",
				},
				{
					type: "sub",
					text: "14.4 — When performance disappoints",
				},
				{
					type: "p",
					text: "When results fall short of a reasonable expectation, our obligation and our practice is the same: to diagnose the cause in writing, to separate what the data supports from what it does not, and to present options — including spending less, pausing a channel, or ending the engagement (Section 18) — with the cost and evidence for each. We would rather lose a retainer honestly than keep one on implied promises we cannot underwrite.",
				},
				{
					type: "note",
					text: "Why insist on this in writing: because the guarantee a salesperson offers verbally is the first thing a contract quietly deletes. Ours says the same thing in both places.",
				},
			],
		},
		{
			id: "warranties",
			number: "15.",
			title: "Warranties and disclaimers",
			body: [
				{
					type: "lead",
					text: "A short section, kept separate from Section 14 so it cannot be mistaken for it: the limited warranty we give, and the disclaimers that remain once it is stated.",
				},
				{
					type: "p",
					text: "We warrant that the services will be performed with reasonable skill and care, and that deliverables created by us will not, to our knowledge, infringe the intellectual property rights of any third party. Except as expressly stated in this Agreement, and to the maximum extent permitted by applicable law, the services and this website are provided on an “as is” basis, without warranties of any kind, express or implied, including any implied warranty of merchantability, fitness for a particular purpose, or non-infringement — save that nothing in this section excludes or limits any liability which cannot lawfully be excluded or limited, including liability for fraud or wilful misconduct.",
				},
			],
		},
		{
			id: "limitation-of-liability",
			number: "16.",
			title: "Limitation of liability",
			body: [
				{
					type: "lead",
					text: "Liability caps are standard in professional-services agreements, but they are often written to frighten. Ours is written to be understood: what it caps, at what level, and the rights it deliberately leaves untouched.",
				},
				{
					type: "sub",
					text: "16.1 — The cap",
				},
				{
					type: "p",
					text: "To the maximum extent permitted by law, neither party will be liable to the other for any indirect, incidental, special, consequential or exemplary loss, or for loss of profits, revenue, anticipated savings, goodwill or business interruption, arising out of or relating to the Agreement. Each party's total aggregate liability for all claims arising out of or relating to the Agreement is limited to the fees paid by you to us under the affected engagement in the three (3) months immediately preceding the event giving rise to the claim (or, where the engagement is shorter, the fees paid to date).",
				},
				{
					type: "sub",
					text: "16.2 — What no clause can touch",
				},
				{
					type: "p",
					text: "Nothing in this Agreement excludes or limits: (a) either party's liability for fraud or fraudulent misrepresentation, or for wilful misconduct; (b) liability for death or personal injury caused by negligence; (c) liability under Section 43A of the Information Technology Act, 2000, or under the DPDPA, in each case to the extent such liability cannot lawfully be limited; or (d) your rights as a consumer under the Consumer Protection Act, 2019, where applicable.",
				},
				{
					type: "note",
					text: "Why the cap is sized as it is: it approximates a quarter of an annual retainer — proportionate to the relationship, large enough to be meaningful, and symmetrical (it protects you against us, as well as us against you). It is a boundary, not a fortress: everything in 16.2 sits outside it.",
				},
			],
		},
		{
			id: "indemnity",
			number: "17.",
			title: "Indemnity",
			body: [
				{
					type: "lead",
					text: "Each party answers for what it brings to the table. This section says so in both directions, and in the narrowest workable terms.",
				},
				{
					type: "p",
					text: "You will indemnify us against third-party claims arising from materials, content, instructions or data you supply — including claims that such materials infringe third-party rights or breach applicable law — provided we notify you promptly of any such claim and cooperate reasonably in its defence. We will correspondingly indemnify you against third-party intellectual-property claims arising from the original deliverables we create, excluding claims traceable to materials you supplied or to modifications made after handover. Neither indemnity extends to amounts payable under Section 16.1's carve-outs, and neither overrides the cap in Section 16.1 except in cases of fraud or wilful misconduct.",
				},
			],
		},
		{
			id: "termination",
			number: "18.",
			title: "Term, suspension and termination",
			body: [
				{
					type: "lead",
					text: "Every engagement should be easy to leave. This section describes exactly how either of us ends it, and what we owe each other on the way out.",
				},
				{
					type: "sub",
					text: "18.1 — Ending a retainer",
				},
				{
					type: "p",
					text: "Retainers operate on a rolling monthly basis. Either party may end the engagement without cause on thirty (30) days' written notice, given at any time. Sprints end on completion or on the cancellation terms in Section 8.2. We do not use lock-in periods, exit fees, or notice windows designed to be missed.",
				},
				{
					type: "sub",
					text: "18.2 — Ending for cause",
				},
				{
					type: "p",
					text: "Either party may terminate immediately by written notice where the other commits a material breach which is not cured within fifteen (15) days of written notice of it, or becomes insolvent or enters an analogous arrangement with creditors. We may also terminate on written notice where invoices remain unpaid more than thirty (30) days beyond their due date despite the reminder process in Section 6.3 — a step we have never yet needed.",
				},
				{
					type: "sub",
					text: "18.3 — What happens on the notice date",
				},
				{
					type: "p",
					text: "During a notice period, we continue working and reporting normally, and campaigns continue under your existing budgets unless you instruct otherwise. On the termination date, active campaigns are paused or handed over per your written instruction, no new work commences, and a final invoice is issued for work performed and expenses properly incurred up to that date.",
				},
				{
					type: "note",
					text: "We wrote this section in the spirit of an exit, not a punishment. Businesses' needs change; a provider who makes leaving difficult is telling you something about staying.",
				},
			],
		},
		{
			id: "handover",
			number: "19.",
			title: "Handover on exit",
			body: [
				{
					type: "lead",
					text: "What you built with us is yours to walk away with. This section makes the handover concrete rather than a promise of goodwill.",
				},
				{
					type: "p",
					text: "On termination (and subject to Section 9.5 only where fees remain overdue), we will hand over: all credentials and account access within our control; the website and its source files; campaign structures, audiences and conversion data resident in your accounts; and documentation sufficient for any competent successor to continue. We will provide up to two (2) hours of transition assistance in the final month at no charge, and further transition support if you wish it at our then-standard rates, quoted in writing first. Your domain, hosting, advertising accounts and analytics were registered in your name from day one (Sections 5 and 7.4), so nothing needs to be “released” — it was never ours.",
				},
			],
		},
		{
			id: "dispute-resolution",
			number: "20.",
			title: "Dispute resolution",
			body: [
				{
					type: "lead",
					text: "Nobody benefits from a rush to litigation — least of all two parties who until recently were collaborators. This section sets a short ladder: talk, then mediate, then arbitrate; and it preserves every right you hold outside this Agreement.",
				},
				{
					type: "sub",
					text: "20.1 — The ladder",
				},
				{
					type: "p",
					text: "Any dispute arising out of or in connection with this Agreement will first be addressed in good faith by the parties' principals within thirty (30) days of written notice of the dispute. If unresolved, the parties will attempt mediation before a sole mediator in Mumbai, on terms mutually agreed, for a period of up to sixty (60) days. If mediation fails or is declined, the dispute will be finally resolved by arbitration under the Arbitration and Conciliation Act, 1996, by a sole arbitrator mutually appointed (or, failing agreement, appointed per the Act), with the seat and venue in Mumbai, Maharashtra, and proceedings in English.",
				},
				{
					type: "sub",
					text: "20.2 — Rights preserved",
				},
				{
					type: "p",
					text: "Either party may seek urgent interim or protective relief from a competent court, and nothing in this section ousts or delays your right, where the law gives it to you, to approach a consumer dispute redressal commission under the Consumer Protection Act, 2019. Subject to those carve-outs, the courts of Mumbai, Maharashtra retain exclusive subject-matter jurisdiction.",
				},
				{
					type: "note",
					text: "The ladder exists because in eight cases out of ten a dispute is a misunderstanding with a number attached; the first rung costs nothing and settles most of those.",
				},
			],
		},
		{
			id: "governing-law",
			number: "21.",
			title: "Governing law and jurisdiction",
			body: [
				{
					type: "lead",
					text: "One short section to anchor everything above: whose law governs this Agreement, and where its questions are decided.",
				},
				{
					type: "p",
					text: "This Agreement and any dispute arising from it are governed by the laws of India, with formation, validity and interpretation subject to the Indian Contract Act, 1872 and other applicable Indian statutes, including the Information Technology Act, 2000, the Consumer Protection Act, 2019 and the Digital Personal Data Protection Act, 2023. Subject to Section 20, the courts of Mumbai, Maharashtra have exclusive jurisdiction.",
				},
			],
		},
		{
			id: "statutory-rights",
			number: "22.",
			title: "Your statutory rights",
			body: [
				{
					type: "lead",
					text: "Contract terms can narrow commercial expectations; they cannot narrow the law. This section says so explicitly, so no clause in this document is ever read as attempting it.",
				},
				{
					type: "p",
					text: "Nothing in this Agreement limits or excludes any right you hold under statute — including the Consumer Protection Act, 2019 (where its protections apply to you), the Information Technology Act, 2000 and the rules made under it, and the Digital Personal Data Protection Act, 2023. We note in particular that the Consumer Protection Act, 2019 empowers authorities to declare unfair terms in contracts with consumers to be null and void; no clause in this document is drafted with that intent, and any clause held unenforceable will be severed (Section 24.3) without affecting the remainder.",
				},
			],
		},
		{
			id: "changes-to-terms",
			number: "23.",
			title: "Changes to these Terms",
			body: [
				{
					type: "lead",
					text: "A living business needs living terms. This section fixes the etiquette for changing them: visible, dated, and never retrospective.",
				},
				{
					type: "p",
					text: "We may update these Terms from time to time. The current version is always posted on this page with a revised “last updated” date, and we will maintain reasonable prior versions, available on request, for reference. Where a change materially and adversely affects clients in an active engagement, we will give at least fourteen (14) days' written notice (email to your last provided address is sufficient) before it takes effect, and you may terminate without penalty before that date. Continued use of the website or services after a change takes effect constitutes acceptance of the revised Terms. No change applies retrospectively to work already performed or fees already earned.",
				},
			],
		},
		{
			id: "force-majeure",
			number: "24.",
			title: "Force majeure",
			body: [
				{
					type: "lead",
					text: "Some things suspend everyone's obligations equally. This section names them and sets a limit to how long either of us must wait.",
				},
				{
					type: "p",
					text: "Neither party is liable for failure or delay in performance caused by events beyond its reasonable control, including acts of God, natural calamities, epidemics, war, civil disturbance, riots, strikes, governmental action or changes in law, internet or telecommunications failures, and mass-scale outages of third-party platforms (which are additionally governed by Section 13). The affected party will notify the other promptly, mitigate reasonably, and resume performance as soon as practicable. If a force majeure event continues for more than sixty (60) consecutive days, either party may terminate the affected engagement on written notice, with fees settled pro rata for work performed and no further liability between the parties.",
				},
			],
		},
		{
			id: "general-provisions",
			number: "25.",
			title: "General provisions",
			body: [
				{
					type: "lead",
					text: "The standard closing machinery of a contract — kept brief, and listed so you know nothing unusual is hiding here.",
				},
				{
					type: "sub",
					text: "25.1 — Entire agreement",
				},
				{
					type: "p",
					text: "The Agreement comprises these Terms and your accepted proposal or SOW, and supersedes all prior discussions, representations and understandings on the same subject. Nothing here excludes liability for fraudulent misrepresentation.",
				},
				{
					type: "sub",
					text: "25.2 — Amendments",
				},
				{
					type: "p",
					text: "Amendments to the Agreement are valid only in writing, signed or expressly acknowledged by email by both parties.",
				},
				{
					type: "sub",
					text: "25.3 — Severability",
				},
				{
					type: "p",
					text: "If any provision is held invalid or unenforceable, it will be modified to the minimum extent necessary or severed, and the remainder continues in force.",
				},
				{
					type: "sub",
					text: "25.4 — No waiver; no agency",
				},
				{
					type: "p",
					text: "A party's failure to enforce a right is not a waiver of it. Nothing in the Agreement creates a partnership, joint venture, agency or employment relationship. We act as an independent contractor throughout.",
				},
				{
					type: "sub",
					text: "25.5 — Assignment and notices",
				},
				{
					type: "p",
					text: "You may not assign the Agreement without our prior written consent (not to be unreasonably withheld); we may assign it only to a successor of substantially all of our business, with written notice to you. Notices are validly given by email to the addresses each party has provided (or later designates), and are deemed received on the next business day after sending.",
				},
			],
		},
		{
			id: "contact-us",
			number: "26.",
			title: "Contact and grievances",
			body: [
				{
					type: "lead",
					text: "If any part of this document raised a question rather than answered one, this section is where the answer lives.",
				},
				{
					type: "p",
					text: "For questions about these Terms, your engagement, or anything in between, write to us at hello@nuvora.in, or by post to Nuvora, Mumbai, Maharashtra, India. We acknowledge written queries within two (2) business days and resolve them within fifteen (15) where the matter is within our control. For privacy-related grievances, our Grievance Officer and the escalation path are named in Section 18 of our Privacy Policy.",
				},
			],
		},
	],
};

// =============================================================
// PRIVACY POLICY
// =============================================================

export const privacyPage: LegalPageContent = {
	title: "Privacy Policy",
	updated: "19 September 2026",
	intro: [
		"We build systems that help good local businesses get found and chosen. That work runs on trust — yours, and your customers'. This policy explains what information touches us, why we hold it, where it travels, and the control you keep at every step. We have written it to be read: every section opens with a short plain-language summary, followed by the precise legal terms, and a quiet aside wherever the why matters more than the what.",
		"If you want the shortest possible version: we collect what we need to do the work you hired us for and to run our own business honestly; we share it only with the platforms required to deliver that work; we never sell it; and you can ask us to show you, correct, or erase it at any time. The sections below are the complete and binding version.",
	],
	sections: [
		{
			id: "introduction",
			number: "01.",
			title: "Introduction",
			body: [
				{
					type: "lead",
					text: "Who we are, what this document is, and the standard we hold ourselves to before a single clause follows.",
				},
				{
					type: "p",
					text: "Nuvora (“we”, “us”, “our”) is a Mumbai-based digital agency building customer-acquisition systems for established local businesses across India. This Privacy Policy explains how we collect, use, disclose, retain and protect personal data when you visit our website, contact us, or engage us as a client. It is issued under, and is intended to comply with, the Digital Personal Data Protection Act, 2023 (“DPDPA”), the Information Technology Act, 2000 (“IT Act”), and the Information Technology (Reasonable Security Practices and Procedures) Rules, 2011 (“SPDI Rules”). Where those statutes confer rights on you as a data principal, this policy is written so that exercising them is easy, not an obstacle course.",
				},
				{
					type: "note",
					text: "One promise before the legal text begins: your data is not a revenue stream to us. It is the working material of the services you hired us to perform, and we treat it that way.",
				},
			],
		},
		{
			id: "scope",
			number: "02.",
			title: "Scope of this policy",
			body: [
				{
					type: "lead",
					text: "Whose data this policy covers, and the one boundary it draws — other people's websites are governed by their own rules, not ours.",
				},
				{
					type: "p",
					text: "This policy applies to: (a) visitors of this website; (b) individuals who contact us by form, email, WhatsApp or telephone; (c) clients, their owners and team members whose details we hold for the engagement; and (d) visitors and enquirers on our clients' websites and profiles, to the limited extent described in Section 3. It does not govern third-party websites or platforms reachable through links from our site or our clients' properties — Google, Meta, WhatsApp and similar services process data under their own privacy policies, which we encourage you to read for anything you do directly on their platforms.",
				},
			],
		},
		{
			id: "roles-we-play",
			number: "03.",
			title: "The roles we play with your data",
			body: [
				{
					type: "lead",
					text: "Data protection law assigns two different jobs, and we hold both — for different data. This section tells you which applies to you, because your rights follow from it.",
				},
				{
					type: "sub",
					text: "3.1 — When we are the Data Fiduciary",
				},
				{
					type: "p",
					text: "For personal data we collect for our own purposes — website visits, your enquiries with us, your contact and billing details as a client — we are the Data Fiduciary under the DPDPA: we decide why and how that data is processed, and this policy governs it.",
				},
				{
					type: "sub",
					text: "3.2 — When we are the Data Processor",
				},
				{
					type: "p",
					text: "For personal data of our clients' customers, patients and leads — enquiry forms, WhatsApp conversations, call logs, CRM records on a client's systems — our client is the Data Fiduciary and we act as their Data Processor, processing only on their documented instructions under Section 10 of the DPDPA and the obligations in Section 12 of our Terms & Conditions. If you are a consumer enquiring about a Nuvora client's business, your data rights against that business are exercised with them (though we will always help such a request find its way to the right desk).",
				},
				{
					type: "note",
					text: "Why this matters to you: it tells you whom to write to. Our website, our enquiries, our clients' records held by us — write to us, Section 18 below. A client's own customer data — write to that client; we will process the request on their instruction, promptly.",
				},
			],
		},
		{
			id: "information-we-collect",
			number: "04.",
			title: "Information we collect",
			body: [
				{
					type: "lead",
					text: "The complete inventory, in four groups: what you give us, what our conversations create, what our website observes, and what our clients entrust to us.",
				},
				{
					type: "sub",
					text: "4.1 — Information you give us directly",
				},
				{
					type: "p",
					text: "When you enquire or engage us: your name, business name, role, email address, telephone number, and the details of your business and requirements you choose to share — including, where relevant to an engagement, access credentials to accounts you ask us to operate on your behalf.",
				},
				{
					type: "sub",
					text: "4.2 — Communications and billing records",
				},
				{
					type: "p",
					text: "Records of our communications — emails, WhatsApp messages and call notes — which form part of the working file of your engagement; and billing details necessary to invoice and reconcile payments (bank account or UPI identifiers, invoices, and payment references). We do not collect or store card numbers; card transactions, where they occur, are handled entirely by payment processors.",
				},
				{
					type: "sub",
					text: "4.3 — Information collected automatically",
				},
				{
					type: "p",
					text: "When you visit this website, standard technical data is observed: IP address (as transmitted), approximate location inferred from it, browser and device type, pages viewed, time on page, referring source, and similar analytics fields, together with cookies and similar technologies as described in Sections 7 and 8.",
				},
				{
					type: "sub",
					text: "4.4 — Client-side data we process as a Processor",
				},
				{
					type: "p",
					text: "Where we operate acquisition systems for a client, we process (on that client's instructions) the personal data those systems generate: website enquiry forms, WhatsApp Business conversations, call and enquiry logs, CRM records, Google Business Profile interactions and insights, advertising performance data, and lead-source attribution records. This data belongs to the client's relationship with their customers; our handling of it is described in Sections 6, 9, 11, 12 and 13 below.",
				},
				{
					type: "note",
					text: "Sensitive categories — health details, for instance, when we work with clinics — reach us only inside client systems, under the client's instructions and the safeguards of Section 12. We do not ask for, and do not want, sensitive personal data beyond what a service strictly requires.",
				},
			],
		},
		{
			id: "how-we-collect",
			number: "05.",
			title: "How we collect information",
			body: [
				{
					type: "lead",
					text: "The five doors through which data reaches us — each one you opened first, or a platform you use.",
				},
				{
					type: "ul",
					items: [
						"Directly from you — website forms, email, WhatsApp, telephone conversations and onboarding documents.",
						"Automatically from this website — cookies, analytics and measurement technologies described in Sections 7 and 8.",
						"From account access you grant — when you authorise us to operate your Google, Meta, hosting, analytics or CRM accounts for an engagement.",
						"From advertising and measurement platforms — conversion data, campaign statistics and audience information generated by Google Ads, Meta Ads and connected tools while running your campaigns.",
						"From third parties acting for you — vetted advertising partners and service providers delivering components of your engagement, under confidentiality and data-protection obligations no weaker than ours.",
					],
				},
			],
		},
		{
			id: "why-we-process",
			number: "06.",
			title: "Why we process your information",
			body: [
				{
					type: "lead",
					text: "Every purpose has a reason, and every reason has a lawful basis. This section pairs them, so you can see not just what we do but under what authority.",
				},
				{
					type: "sub",
					text: "6.1 — Purposes and lawful bases",
				},
				{
					type: "ul",
					items: [
						"Responding to your enquiries and preparing proposals — because you asked us to (your consent, and the natural performance of the discussion you initiated).",
						"Delivering the services you engaged us for — operating campaigns, websites, WhatsApp flows and reporting — on the basis of your consent as our client and the documented instructions of the engagement.",
						"Billing, invoicing, accounting and tax compliance — to meet obligations under Indian tax and corporate law, which permit such processing without further consent.",
						"Improving our website and our services — understanding what visitors read, where forms are abandoned, what content helps — on the basis of consent (Section 7) kept narrow and withdrawable.",
						"Communicating about our work — occasional updates, insights or case-study requests — only with consent, given separately, withdrawable at any time by reply or through the mechanism in Section 15.",
						"Defending legal claims and meeting lawful requests — as permitted by law and within the limits of Sections 11 and 14.",
					],
				},
				{
					type: "sub",
					text: "6.2 — What we do not do",
				},
				{
					type: "p",
					text: "We do not sell or rent personal data. We do not use clients' customer data to build advertising audiences for any other client — campaign audiences belong to the client whose customers they describe. We do not process personal data for purposes incompatible with those above without first asking you.",
				},
				{
					type: "note",
					text: "The narrowness is the point: under the DPDPA, purpose limitation is not a courtesy but a duty. We keep our purposes few and legible because that is both the law and good practice.",
				},
			],
		},
		{
			id: "cookies",
			number: "07.",
			title: "Cookies and similar technologies",
			body: [
				{
					type: "lead",
					text: "What a cookie is, which categories this site uses, and the controls that are yours by default.",
				},
				{
					type: "p",
					text: "Cookies are small files a website stores on your device. On this website we use three categories: (a) strictly necessary cookies, which make the site function and cannot be switched off; (b) analytics and performance cookies, which tell us in aggregate how pages are used so we can improve them; and (c) advertising and measurement cookies, set by platforms such as Google and Meta, which attribute conversions and help campaigns reach relevant audiences (Section 8). Where the law requires consent for a category, we seek it before it is set, honour your choice, and record it.",
				},
				{
					type: "p",
					text: "Your browser gives you ongoing control: you can block or delete cookies, and opt out of browser-level tracking, through your browser settings. Some parts of the site may behave differently with certain cookies blocked — we will not respond by breaking the page you came for.",
				},
			],
		},
		{
			id: "advertising-technologies",
			number: "08.",
			title: "Advertising and measurement technologies",
			body: [
				{
					type: "lead",
					text: "When we run campaigns, platforms need to know which clicks became enquiries. This section explains that machinery — pixels, conversion APIs and audiences — and where your controls sit.",
				},
				{
					type: "p",
					text: "For engagements involving advertising, we deploy measurement technologies such as the Google and Meta pixels, conversion APIs, and Google Analytics on our clients' properties. These record conversion events — a form submitted, a WhatsApp thread started, a call placed — so that spend can be attributed to outcomes and campaigns optimised toward what works. Audience segments (for example, people who visited a page but did not enquire) may be built from this data, and remain within the client's advertising accounts, for that client's campaigns only.",
				},
				{
					type: "p",
					text: "Your controls are both browser-level (Section 7) and platform-level: Google and Meta each offer ad-preference and opt-out tools that govern how they use your activity across their networks. We do not override those choices, and we configure our measurement to respect consent signals where platforms support them.",
				},
				{
					type: "note",
					text: "Measurement is what lets us tell a client “this rupee produced this enquiry” — it is the difference between advertising and gambling. We keep it proportionate, consented, and confined to the client's own campaigns.",
				},
			],
		},
		{
			id: "who-we-share-with",
			number: "09.",
			title: "Who we share information with",
			body: [
				{
					type: "lead",
					text: "The complete list of recipients, each with its reason — and the standing rule that covers everything not on it.",
				},
				{
					type: "p",
					text: "We share personal data only with parties necessary to deliver the services or to meet a legal obligation, and never as a commercial product in itself. The recipients, at present, are:",
				},
				{
					type: "ul",
					items: [
						"Google — Google Business Profile, Google Ads, Google Analytics and related services: running campaigns, measuring outcomes, managing local visibility.",
						"Meta — Meta Ads and the WhatsApp Business API: campaign delivery, click-to-WhatsApp flows, messaging automation, conversion measurement.",
						"Website hosting providers — storing and serving the websites and landing pages we build and operate.",
						"Analytics and CRM/automation tools — enquiry tracking, pipeline management, follow-up automation and reporting.",
						"Payment processors and banking partners — collecting fees; card data never touches our systems.",
						"Vetted advertising partners — where campaigns run through a partner under arrangements disclosed to the client, under confidentiality and data-protection obligations consistent with this policy.",
						"Professional advisers — accountants and legal counsel, to the extent necessary, in confidence.",
						"Authorities — where disclosure is required by law, regulation or a competent authority's order, with prompt notice to you where lawfully permitted.",
					],
				},
				{
					type: "p",
					text: "Each recipient processes data under its own privacy policy and, where the DPDPA or SPDI Rules require, under contractual obligations we maintain no weaker than this policy. If a new category of recipient becomes necessary for an active engagement, clients are told before data flows.",
				},
			],
		},
		{
			id: "cross-border-transfers",
			number: "10.",
			title: "Cross-border data transfers",
			body: [
				{
					type: "lead",
					text: "Some of the tools we use process data outside India. This section says which, why, and under what safeguard.",
				},
				{
					type: "p",
					text: "Google, Meta and several hosting, analytics and CRM providers operate global infrastructure, and personal data processed through them may be stored or processed outside India. Such transfers are made in accordance with Section 16 of the DPDPA and the transfer directions in force under it, and we prefer, where a genuine choice of provider exists, those offering strong contractual safeguards, regional data-residency options and recognised certification. If transfers to any destination are restricted under law in the future, we will adjust tooling or notify affected clients before the restriction bites.",
				},
				{
					type: "note",
					text: "We cannot promise that Google stores your analytics in Mumbai; no agency using these platforms honestly can. What we can promise — and do — is that the choice of tool is disclosed, and the data shared with each is limited to what its job requires.",
				},
			],
		},
		{
			id: "data-retention",
			number: "11.",
			title: "How long we keep information",
			body: [
				{
					type: "lead",
					text: "Retention is where privacy policies usually go vague. Ours states numbers, per category, and the rules that override them.",
				},
				{
					type: "ul",
					items: [
						"Website analytics and cookie data — up to twenty-four (24) months from collection, and shorter where the tool permits.",
						"Enquiry and pre-client correspondence — twenty-four (24) months from your last contact with us, after which it is deleted or anonymised.",
						"Client engagement records (communications, reports, deliverables) — the duration of the engagement, plus eight (8) years, aligned with statutory accounting and tax-retention obligations.",
						"Billing and payment records — eight (8) years, as required by tax law.",
						"Client customer data we process as a Processor — only for the duration of the engagement and its wind-down, then deleted or returned per client instruction (backups age out within ninety (90) days).",
						"Campaign performance data retained for benchmarking — only in aggregated, anonymised form that no longer identifies you, your business or any individual customer.",
					],
				},
				{
					type: "p",
					text: "Where a specific retention period is stated in a client's SOW, it prevails. Where we are preserving data in response to a legal notice, an audit or a bona fide dispute, retention extends until that matter concludes — and no further than it requires.",
				},
			],
		},
		{
			id: "security-measures",
			number: "12.",
			title: "How we protect information",
			body: [
				{
					type: "lead",
					text: "The concrete measures, not the adjective: what we actually do, benchmarked against the standards the law names.",
				},
				{
					type: "p",
					text: "We maintain reasonable security safeguards and procedures in accordance with Section 8(5) of the DPDPA and the SPDI Rules, 2011, including: multi-factor authentication and least-privilege access on all business and client accounts; unique, credential-managed passwords; encrypted transport for data in motion over our systems; access logs on client accounts; vendor selection that weighs security posture; and a documented, practiced incident process (Section 13). Access to client systems is limited to the individuals delivering the engagement and revoked promptly when their involvement ends.",
				},
				{
					type: "p",
					text: "Honesty requires one further sentence: no method of storage or transmission over the internet is absolutely secure, and we do not represent otherwise. What we commit to is proportionate protection, continuous attention, and the fast, candid handling of anything that goes wrong.",
				},
			],
		},
		{
			id: "breach-notification",
			number: "13.",
			title: "What happens if there is a data breach",
			body: [
				{
					type: "lead",
					text: "The sequence we follow, hour by hour — written down now, so it does not have to be improvised later.",
				},
				{
					type: "p",
					text: "On becoming aware of a personal data breach affecting data we hold as a Data Fiduciary, we will: contain and assess it immediately; and where the breach is likely to result in a risk to affected data principals, intimate each affected data principal and the Data Protection Board of India without delay, describing the nature of the breach, the data involved and the remedial steps, as required by Section 9 of the DPDPA. Where the breach affects a client's customer data processed by us as a Data Processor, we will notify that client without undue delay with the detail they need to meet their own notification obligations.",
				},
				{
					type: "p",
					text: "After containment, we document the incident, its cause and the corrective measures adopted, and we review whether practice or tooling should change so the same failure cannot recur quietly. Nothing in this section limits any right you hold under Section 43A of the IT Act, 2000.",
				},
				{
					type: "note",
					text: "We would rather over-notify than under-notify. A breach you hear about from us, early and plainly, is survivable; a breach you discover yourself is not — for your data, or for our relationship.",
				},
			],
		},
		{
			id: "your-rights",
			number: "14.",
			title: "Your rights and how to exercise them",
			body: [
				{
					type: "lead",
					text: "The rights the DPDPA gives you, in the order you would realistically use them, with the practical route for each.",
				},
				{
					type: "sub",
					text: "14.1 — The rights",
				},
				{
					type: "ul",
					items: [
						"Access — a summary of the personal data we hold about you, what we do with it, and with whom we have shared it (Section 11, DPDPA).",
						"Correction and completion — fixing what is inaccurate or incomplete, and updating what is out of date (Section 12).",
						"Erasure — deletion of your data where it is no longer needed for the purpose it was collected, consent has been withdrawn, or processing was unlawful (Section 12).",
						"Grievance redressal — a named officer and a defined process, described in Section 18 (Section 13).",
						"Nomination — nominating another individual to exercise your rights in the event of your death or incapacity (Section 14).",
						"Consent withdrawal — withdrawing consent at any time, through means as easy as the ones used to give it (Section 6; see also Section 15).",
					],
				},
				{
					type: "sub",
					text: "14.2 — How to exercise them",
				},
				{
					type: "p",
					text: "Write to our Grievance Officer (Section 18) from your usual email address or WhatsApp number, describing the right you wish to exercise. We will verify your identity by means proportionate to the sensitivity of the request, respond within thirty (30) days, and act on valid requests without charge. Where we cannot comply in full — because a legal obligation requires us to retain something, or because the data belongs to a client's systems — we will tell you exactly what we can do, what we cannot, and why.",
				},
				{
					type: "p",
					text: "The law also asks something of you as a data principal: to furnish information that is authentic, and not to impersonate or suppress material information when exercising these rights. We mention it for completeness, not as a warning.",
				},
				{
					type: "note",
					text: "Withdrawing consent does not un-send an email or un-run a campaign, and the law recognises this: withdrawal applies going forward. What it always does is stop the processing that depended on your consent, immediately and without argument.",
				},
			],
		},
		{
			id: "consent-management",
			number: "15.",
			title: "Managing and withdrawing consent",
			body: [
				{
					type: "lead",
					text: "How consent is recorded at our end, and the three ways to take it back.",
				},
				{
					type: "p",
					text: "Where we process on the basis of consent, we record what was consented to, when, and through which action — a form ticked, a number messaged, a cookie banner accepted — so that our records and your memory agree. You may withdraw consent at any time: (a) by replying to any marketing message with its opt-out instruction; (b) by writing to our Grievance Officer (Section 18); or (c) by adjusting your cookie choices in your browser (Section 7). Withdrawal is free, immediate in effect on our systems, and never a condition of receiving the services you have otherwise engaged.",
				},
			],
		},
		{
			id: "childrens-data",
			number: "16.",
			title: "Children's information",
			body: [
				{
					type: "lead",
					text: "A short section, because our services are not addressed to minors and we keep it that way.",
				},
				{
					type: "p",
					text: "This website and our services are directed at businesses and adults, and are not intended for use by anyone under eighteen (18) years of age — the age the DPDPA defines as a child. We do not knowingly collect the personal data of children, do not track or behaviourally target children, and do not process children's data in any manner likely to cause them detriment. If we learn that we have received personal data of a child, we will delete it promptly; parents or guardians who believe a child has provided us information may write to our Grievance Officer and we will act immediately.",
				},
			],
		},
		{
			id: "client-obligations",
			number: "17.",
			title: "If you are a client: your customers' data",
			body: [
				{
					type: "lead",
					text: "For the business owner reading this as a client rather than a visitor: the three duties that sit on your side of our Processor arrangement.",
				},
				{
					type: "p",
					text: "Because you are the Data Fiduciary for your customers' data that flows through the systems we operate, we need you to: (a) ensure the data reaching us — website forms, WhatsApp threads, call logs, CRM records — was collected with proper notice to, and consent from, the individuals concerned, or under another lawful basis the DPDPA recognises; (b) route any request from one of your customers for access, correction, erasure or grievance to us where our systems hold the relevant data, so we can action it on your instruction within the timelines in Section 14.2; and (c) tell us promptly if the purposes of processing change, so that instructions remain current. We will assist with all three — templates for consent language, notice text for forms, and a practical process for data-principal requests are available to every client on request.",
				},
				{
					type: "note",
					text: "This is the least glamorous section in the document and one of the most useful: it is where the compliance work of a clinic or studio actually gets done, quietly, month after month.",
				},
			],
		},
		{
			id: "grievance-officer",
			number: "18.",
			title: "Grievance Officer",
			body: [
				{
					type: "lead",
					text: "A named person, a direct channel, and a clock on every reply — as the IT Rules require, and as we would want ourselves.",
				},
				{
					type: "p",
					text: "Our Grievance Officer under the Information Technology rules and the DPDPA is: Mohammed Faiz, Founder — Nuvora, reachable at hello@nuvora.in (subject line “Grievance” or “Data Request”) and by post to Nuvora, Mumbai, Maharashtra, India. We acknowledge every grievance or data-principal request within forty-eight (48) business hours of receipt, and resolve or respond substantively within thirty (30) days.",
				},
				{
					type: "p",
					text: "If a grievance remains unresolved after our process, you may escalate it to the Data Protection Board of India in the manner provided under the DPDPA and the rules framed thereunder — and nothing in this policy, or in our Terms & Conditions, limits that right, or any other remedy available to you under law.",
				},
			],
		},
		{
			id: "changes-to-policy",
			number: "19.",
			title: "Changes to this policy",
			body: [
				{
					type: "lead",
					text: "How this document changes, and the promise that it will never change behind your back.",
				},
				{
					type: "p",
					text: "We may update this policy as our practices, tools or the law evolve. The current version is always posted on this page with its “last updated” date; prior versions are available on request. Where a change materially affects data we already hold, we will notify affected individuals and active clients directly at least fourteen (14) days before it takes effect, and — where the change requires fresh consent — we will ask for it rather than assume it.",
				},
			],
		},
		{
			id: "contact-us",
			number: "20.",
			title: "Contact us",
			body: [
				{
					type: "lead",
					text: "The end of the document, and the beginning of the simplest route through it: ask us.",
				},
				{
					type: "p",
					text: "For anything in this policy — a question, a request, a correction we should make to this very page — write to hello@nuvora.in or to Nuvora, Mumbai, Maharashtra, India. Privacy questions and data requests reach our Grievance Officer fastest with “Grievance” or “Data Request” in the subject line. If you have read this far, thank you: trust is the only infrastructure we have ever built on, and documents like this one are how we keep it load-bearing.",
				},
			],
		},
	],
};
