// import { capaybilities1, capaybilities2, capaybilities3, capaybilities4, client01, client02, client03, client04, client05, client06, client07, client08, client09, insights1, insights2, insights3, latest1, latest2, phase1, phase2, phase3, phase4, phase5, planetly, project1, project2, project3, project4, project5, project6, project7, project8, project9, publication1, publication2, publication3 } from "@/public";

import { capaybilities1, capaybilities2, capaybilities3, capaybilities4, client01, client02, client03, client04, client05, client06, client07, client08, client09, insights1, insights2, insights3, latest1, latest2, phase1, phase2, phase3, phase4, phase5, planetly, project1, project2, project3, project4, project5, project6, project7, project8, project9, publication1, publication2, publication3 } from "@/public";

// Navbar
export const navbarItems = [
   {
      id: 1,
      title: "Services",
      href: "/services",
   },
   {
      id: 2,
      title: "Our work",
      href: "/presentation",
   },
   {
      id: 3,
      title: "About us",
      href: "/team",
   },
   {
      id: 4,
      title: "Insights",
      href: "/insights",
   },
   {
      id: 5,
      title: "Contact us",
      href: "/contact",
   },
];

// Footer

export const footerItems = [
   {
      id: 1,
      title: "Instagram",
      href: "https://www.instagram.com/",
   },
   {
      id: 2,
      title: "Google",
      href: "https://www.google.com/",
   },
   {
      id: 3,
      title: "Facebook",
      href: "https://www.facebook.com/",
   },
   {
      id: 4,
      title: "Linkedin",
      href: "https://www.linkedin.com/",
   },
];

export const footernavbarItems = [
   {
      id: 1,
      title: "Home",
      href: "/",
   },
   {
      id: 2,
      title: "Services",
      href: "services",
   },
   {
      id: 3,
      title: "Our work",
      href: "presentation",
   },
   {
      id: 4,
      title: "About us",
      href: "team",
   },
   {
      id: 5,
      title: "Insights",
      href: "insights",
   },
   {
      id: 6,
      title: "Contact us",
      href: "contact",
   },
];

// Client testimonials — PLACEHOLDER COPY. Reviewer names and business names
// below are invented placeholders, not real customers or establishments.
// Swap for verified client names, businesses and reviews (with permission)
// before this site goes live.
export const testimonials = [
   {
      id: 1,
      website: "The Bandra Bakehouse",
      href: "/",
      title: "Services:",
      name: "Dean D'Souza",
      src: client01,
      review: "Honest review — I had a person before who only made reels. Nuvora did my Google profile and Instagram together, and in two months people started telling me 'we found you on Maps'. Sunday brunch is fuller now. That is what I wanted, not likes.",
      links: [
         {
            id: 1,
            title: "google presence",
            href: "/services",
         },
         {
            id: 2,
            title: "social media",
            href: "/services",
         },
         {
            id: 3,
            title: "reputation",
            href: "/services",
         },
      ]
   },
   {
      id: 2,
      website: "The Glow Room Salon",
      href: "/",
      title: "Services:",
      name: "Sneha Kulkarni",
      src: client02,
      review: "What I like most is they reply on WhatsApp the same day. My old agency used to disappear for weeks. They fixed my Google reviews — I was sitting at 3.9 with angry reviews nobody answered. Now it is above 4.5 and new clients mention it on the phone.",
      links: [
         {
            id: 1,
            title: "reputation",
            href: "/services",
         },
         {
            id: 2,
            title: "google presence",
            href: "/services",
         },
      ]
   },
   {
      id: 3,
      website: "Serene Dental Clinic",
      href: "/",
      title: "Services:",
      name: "Anjali Deshpande",
      src: client03,
      review: "For a clinic, patients check everything online before they book. Nuvora rebuilt our website and Google listing so appointment requests come straight to WhatsApp. Earlier the reception was missing calls; now every enquiry is tracked. Their monthly report is in simple language, no confusing graphs.",
      links: [
         {
            id: 1,
            title: "website",
            href: "/services",
         },
         {
            id: 2,
            title: "customer acquisition",
            href: "/services",
         },
      ]
   },
   {
      id: 4,
      website: "The Parsi Table",
      href: "/",
      title: "Services:",
      name: "Imran Qureshi",
      src: client04,
      review: "We started with ads only for weekend offers. First month was learning — they told us openly one campaign was wasting money and stopped it. Now every ad shows how many table bookings came from it. Very few agencies will show you that honestly.",
      links: [
         {
            id: 1,
            title: "advertising",
            href: "/services",
         },
         {
            id: 2,
            title: "social media",
            href: "/services",
         },
      ]
   },
   {
      id: 5,
      website: "Nivara Studio",
      href: "/",
      title: "Services:",
      name: "Meher Kapadia",
      src: client05,
      review: "My old website was made in 2019 and it looked like it. The new one loads fast on the phone and my project photos actually bring enquiries — two clients last month came only from the site. Their team also runs my Instagram, so my page finally looks like my work.",
      links: [
         {
            id: 1,
            title: "website",
            href: "/services",
         },
         {
            id: 2,
            title: "social media",
            href: "/services",
         },
      ]
   },
   {
      id: 6,
      website: "Roof & Roots Realty",
      href: "/",
      title: "Services:",
      name: "Sandeep Gupta",
      src: client06,
      review: "Property is a trust business. Nuvora set up lead capture so every enquiry gets a response on WhatsApp within minutes — nothing gets lost in my phone anymore. Follow-ups are systematic now and my conversion has clearly improved. I renew every month without thinking twice.",
      links: [
         {
            id: 1,
            title: "customer acquisition",
            href: "/services",
         },
         {
            id: 2,
            title: "advertising",
            href: "/services",
         },
      ]
   },
   {
      id: 7,
      website: "Crumb Lane Bakery",
      href: "/",
      title: "Services:",
      name: "Meenakshi Iyer",
      src: client07,
      review: "Small shop, small budget — I always thought agencies are only for big companies. They did my Google Business Profile properly with photos of the counter and fresh bakes, and they reply to every review. Footfall has increased, especially people searching nearby. Worth every rupee.",
      links: [
         {
            id: 1,
            title: "google presence",
            href: "/services",
         },
         {
            id: 2,
            title: "reputation",
            href: "/services",
         },
      ]
   },
   {
      id: 8,
      website: "Vora & Sons Home Store",
      href: "/",
      title: "Services:",
      name: "Jignesh Vora",
      src: client08,
      review: "One team handling website, Instagram and ads — that itself is a relief. Before, three different people and nobody took responsibility when something broke. The monthly report shows exactly what I got: calls, enquiries, orders. Simple. I only wish I had shifted from my freelancer earlier.",
      links: [
         {
            id: 1,
            title: "website",
            href: "/services",
         },
         {
            id: 2,
            title: "advertising",
            href: "/services",
         },
         {
            id: 3,
            title: "customer acquisition",
            href: "/services",
         },
      ]
   },
];

export const clientsItem = testimonials;

// services page

// The Local Stack — six pillars, delivered as one system
export const serviceProcessItems = [
   {
      id: 1,
      phase: "01.",
      name: "Website",
      src: phase1,
      review: "A fast, mobile-first website with one job — turning visitors into enquiries. Every page is structured to move the customer toward a call, a WhatsApp message, or a booking. Clean basic SEO, quick loading, conversion-focused structure, and ongoing maintenance included.",
      button: "read"
   },
   {
      id: 2,
      phase: "02.",
      name: "Google Presence",
      src: phase2,
      review: "When someone nearby searches 'café near me' or 'dentist in Andheri', your Google Business Profile is what they see first. We optimise it fully — correct business info, fresh photos, review activity, local SEO — so you show up in local search and on Maps, where the decision actually happens.",
      button: "read"
   },
   {
      id: 3,
      phase: "03.",
      name: "Social Media",
      src: phase3,
      review: "Your Instagram and Facebook, run properly. A monthly content plan, posts and reels that show your food, your work, your space, consistent branding, and a profile built to convert scrollers into walk-ins. A customer should finish scrolling your page thinking: this place is alive, I'm going.",
      button: "read"
   },
   {
      id: 4,
      phase: "04.",
      name: "Advertising",
      src: phase4,
      review: "Meta and Google ads run against a target, not a feeling. We build the campaigns, the landing pages and the conversion tracking, then report what you actually care about — how many enquiries and bookings each rupee brought in. Nothing runs on guesswork.",
      button: "read"
   },
   {
      id: 5,
      phase: "05.",
      name: "Reputation",
      src: phase5,
      review: "One unanswered 2-star review can cost you ten customers. We monitor your reviews on Google and Facebook, respond to every one in your brand's voice, and set up simple feedback systems that ask your happy customers for a review at the right moment — so your rating climbs and stays there.",
      button: "read"
   },
   {
      id: 6,
      phase: "06.",
      name: "Customer Acquisition",
      src: phase1,
      review: "Enquiries leak money when nobody follows up. We set up lead capture on your website, WhatsApp integration so messages reach you instantly, and enquiry tracking so every lead gets answered. Then we analyse what is converting and fix the leaks — month after month.",
      button: "read"
   },
];

export const serviceClientsItem = testimonials;

export const serviceCapaybilitiesItem = [
   {
      id: 1,
      src1: capaybilities1,
      title1: "WEBSITE:",
      links1: [
         {
            id: 1,
            title: "mobile-first website",
            href: "/services"
         },
         {
            id: 2,
            title: "basic seo",
            href: "/services"
         },
         {
            id: 3,
            title: "performance optimization",
            href: "/services"
         },
         {
            id: 4,
            title: "conversion-focused structure",
            href: "/services"
         },
         {
            id: 5,
            title: "maintenance",
            href: "/services"
         },
      ],
      src2: capaybilities2,
      title2: "GOOGLE PRESENCE:",
      links2: [
         {
            id: 1,
            title: "gbp optimization",
            href: "/services"
         },
         {
            id: 2,
            title: "business info & photos",
            href: "/services"
         },
         {
            id: 3,
            title: "reviews & responses",
            href: "/services"
         },
         {
            id: 4,
            title: "local visibility",
            href: "/services"
         },
         {
            id: 5,
            title: "basic local seo",
            href: "/services"
         },
      ]
   },
   {
      id: 2,
      src1: capaybilities3,
      title1: "SOCIAL MEDIA:",
      links1: [
         {
            id: 1,
            title: "instagram management",
            href: "/services"
         },
         {
            id: 2,
            title: "facebook management",
            href: "/services"
         },
         {
            id: 3,
            title: "content planning",
            href: "/services"
         },
         {
            id: 4,
            title: "posts & reels",
            href: "/services"
         },
         {
            id: 5,
            title: "profile optimization",
            href: "/services"
         },
      ],
      src2: capaybilities4,
      title2: "ADVERTISING:",
      links2: [
         {
            id: 1,
            title: "meta ads",
            href: "/services"
         },
         {
            id: 2,
            title: "google ads",
            href: "/services"
         },
         {
            id: 3,
            title: "campaign management",
            href: "/services"
         },
         {
            id: 4,
            title: "landing pages",
            href: "/services"
         },
         {
            id: 5,
            title: "conversion tracking",
            href: "/services"
         },
      ]
   },
   {
      id: 3,
      src1: capaybilities1,
      title1: "REPUTATION:",
      links1: [
         {
            id: 1,
            title: "review monitoring",
            href: "/services"
         },
         {
            id: 2,
            title: "review responses",
            href: "/services"
         },
         {
            id: 3,
            title: "feedback systems",
            href: "/services"
         },
         {
            id: 4,
            title: "reputation improvement",
            href: "/services"
         },
      ],
      src2: capaybilities2,
      title2: "CUSTOMER ACQUISITION:",
      links2: [
         {
            id: 1,
            title: "lead capture",
            href: "/services"
         },
         {
            id: 2,
            title: "whatsapp integration",
            href: "/services"
         },
         {
            id: 3,
            title: "enquiry tracking",
            href: "/services"
         },
         {
            id: 4,
            title: "conversion optimization",
            href: "/services"
         },
         {
            id: 5,
            title: "analytics",
            href: "/services"
         },
      ]
   },
];

export const expectationsItems = [
   {
      id: 1,
      title1: "01",
      subTitle1: "Plain reporting",
      btn: "read",
      para1: "Every month you get a simple report: what we delivered, what it cost, and what it brought — calls, enquiries, bookings. No jargon, no vanity numbers to hide behind. If something did not work, you will see that too, along with what we are changing next."
   },
   {
      id: 2,
      title1: "02",
      subTitle1: "One point of contact",
      btn: "read",
      para1: "Every account is overseen by Mohammed Faiz, the founder. Not a rotating account manager who joined last week. You speak to one person who knows your business, and that person is answerable for every deliverable in your stack."
   },
   {
      id: 3,
      title1: "03",
      subTitle1: "A fixed stack, not a blank cheque",
      btn: "read",
      para1: "We do not sell open-ended 'strategy retainers'. You get a standardised set of deliverables every month — defined, repeatable, priced upfront. You always know what you are paying for, what is getting done, and when. Clear expectations are part of the product."
   },
   {
      id: 4,
      title1: "04",
      subTitle1: "We observe before we build",
      btn: "read",
      para1: "Before touching anything, we study how your customers actually find you, call you, and complain. What we build next comes from those observations, not from a recycled template. Real client problems shape what gets built — that is how our stack keeps improving."
   },
   {
      id: 5,
      title1: "05",
      subTitle1: "Narrow by choice",
      btn: "read",
      para1: "We only work with restaurants, cafés, salons, clinics, professional services, real-estate businesses, interior designers, hospitality and local retailers. That focus is deliberate. We know what makes these businesses' phones ring, because it is all we do."
   },
   {
      id: 6,
      title1: "06",
      subTitle1: "Limited number of clients",
      btn: "read",
      para1: "We take on a limited number of businesses each month so every account gets proper attention. It also means we can afford to tell you no — if something will not help your revenue, we would rather say it than bill you for it."
   },
];

export const achiveItems = [
   {
      id: 1,
      title1: ["13,500+"],
      title2: ["Top 3"],
      subTitle1: "Inbound Lead Volume",
      subTitle2: "Search Engine Dominance",
   },
   {
      id: 2,
      title1: ["4.9"],
      title2: ["100%"],
      subTitle1: "Trust & Reputation Velocity",
      subTitle2: "Mobile-First Conversion Architecture",
   },
];


export const projectItem = [
   {
      id: 1,
      title: "Google Ads",
      href: "/case/",
      src: project1,
      links: [
         {
            id: 1,
            title: "Research",
            href: "/services",
         },
         {
            id: 2,
            title: "Keywords",
            href: "/services",
         },
         {
            id: 3,
            title: "Conversions",
            href: "/services",
         },
         {
            id: 4,
            title: "Analytics",
            href: "/services",
         },
      ]
   },
   {
      id: 2,
      title: "Google Ads",
      href: "/case/",
      src: project2,
      links: [
         {
            id: 1,
            title: "Click Scaling",
            href: "/services",
         },
         {
            id: 2,
            title: "Impression Growth",
            href: "/services",
         },
      ]
   },
   {
      id: 3,
      title: "Google Ads",
      href: "/case/",
      src: project3,
      links: [
         {
            id: 1,
            title: "Revenue Tracking",
            href: "/services",
         },
         {
            id: 2,
            title: "Targeting",
            href: "/services",
         },
         {
            id: 3,
            title: "Optimization",
            href: "/services",
         },
      ]
   },
   {
      id: 4,
      title: "Google Ads",
      href: "/case/",
      src: project4,
      links: [
         {
            id: 1,
            title: "Quality Score",
            href: "/services",
         },
      ]
   },
];


// presentation page

export const presentationProjectItem = [
   {
      id: 1,
      title: "Google Ads",
      src: project1,
      href: "/case/",
      links: [
         {
            id: 1,
            title: "Research",
            href: "/services",
         },
         {
            id: 2,
            title: "Keywords",
            href: "services",
         },
         {
            id: 3,
            title: "Conversions",
            href: "services",
         },
         {
            id: 4,
            title: "Analytics",
            href: "services",
         },
      ]
   },
   {
      id: 2,
      title: "Google Ads",
      src: project3,
      href: "/case/",
      links: [
         {
            id: 1,
            title: "Revenue Tracking",
            href: "/services",
         },
         {
            id: 2,
            title: "Targeting",
            href: "services",
         },
         {
            id: 3,
            title: "Optimization",
            href: "services",
         },
      ]
   },
   {
      id: 3,
      title: "Google Ads",
      src: project4,
      href: "/case/",
      links: [
         {
            id: 1,
            title: "Quality Score",
            href: "/services",
         },
      ]
   },
   {
      id: 4,
      title: "SEO Dashboard",
      src: project5,
      href: "/case/",
      links: [
         {
            id: 1,
            title: "Organic Search",
            href: "/services",
         },
         {
            id: 2,
            title: "Traffic Analysis",
            href: "/services",
         },
         {
            id: 3,
            title: "Keyword Rankings",
            href: "/services",
         },
         {
            id: 4,
            title: "Site Audit",
            href: "/services",
         },
         {
            id: 5,
            title: "Channel Performance",
            href: "/services",
         },
         {
            id: 6,
            title: "Growth Strategy",
            href: "/services",
         },
      ]
   },
   {
      id: 5,
      title: "AgencyGrow",
      src: project8,
      href: "/case/",
      links: [
         {
            id: 1,
            title: "Marketing Agency",
            href: "/services",
         },
         {
            id: 2,
            title: "Website Design",
            href: "/services",
         },
         {
            id: 3,
            title: "Brand Identity",
            href: "/services",
         },
      ]
   },
   {
      id: 6,
      title: "Google Ads",
      src: project2,
      href: "/case/",
      links: [
         {
            id: 1,
            title: "Click Scaling",
            href: "/services",
         },
         {
            id: 2,
            title: "Impression Growth",
            href: "services",
         },
      ]
   },
   {
      id: 7,
      title: "Parsi Table",
      src: project9,
      href: "/case/",
      links: [
         {
            id: 1,
            title: "Cafe",
            href: "/services",
         },
         {
            id: 2,
            title: "Table Booking",
            href: "/services",
         },
      ]
   },
   {
      id: 8,
      title: "Google Analytics",
      src: project7,
      href: "/case/",
      links: [
         {
            id: 1,
            title: "Web & App Users",
            href: "/services",
         },
      ]
   },
   {
      id: 9,
      title: "Google Analytics",
      src: project6,
      href: "/case/",
      links: [
         {
            id: 1,
            title: "App Analytics",
            href: "/services",
         },
         {
            id: 2,
            title: "User Retention",
            href: "/services",
         },
         {
            id: 3,
            title: "Active Users",
            href: "/services",
         },
      ]
   },
];

export const publicationItems = [
   {
      id: 1,
      title: "how local seo brings walk-in customers",
      src: publication1
   },
   {
      id: 2,
      title: "whatsapp: the most underused sales tool in indian business",
      src: publication2
   },
   {
      id: 3,
      title: "meta ads on small budgets: what month one actually looks like",
      src: publication3
   },
];

// insights page constants

export const insightsPublicationItems = [
   {
      id: 1,
      title: "google business profile: the free marketing most owners ignore",
      src: insights1
   },
   {
      id: 2,
      title: "instagram for restaurants: what actually gets footfall",
      src: insights2
   },
   {
      id: 3,
      title: "why your website gets visits but no enquiries",
      src: insights3
   },
];

export const latestItemss = [
   {
      id: 1,
      href: "/",
      src: latest1,
      links: [
         {
            id: 1,
            title: "google business profile"
         },
         {
            id: 1,
            title: "local seo"
         },
      ],
      title: "Why your restaurant is invisible on Google Maps — and how to fix it.",
      subTitle: "By Mohammed Faiz",
      date: "14 Aug 2026"
   },
   {
      id: 2,
      href: "/",
      src: latest2,
      links: [
         {
            id: 1,
            title: "website"
         },
      ],
      title: "What a good website actually does for a clinic: turning searches into appointments.",
      subTitle: "By Mohammed Faiz",
      date: "02 Jul 2026"
   },
];

// workiz page constants
export const workizItem = [
   {
      id: 1,
      title: "office vibe",
      src: project7,
      href: "/case/",
      links: [
         {
            id: 1,
            title: "brand template",
            href: "/services",
         },
      ]
   },
   {
      id: 2,
      title: "planetly",
      src: project5,
      href: "/case/",
      links: [
         {
            id: 1,
            title: "brand template",
            href: "/services",
         },
         {
            id: 2,
            title: "big news deck",
            href: "/services",
         },
         {
            id: 3,
            title: "branded template",
            href: "/services",
         },
         {
            id: 4,
            title: "investor deck",
            href: "/services",
         },
         {
            id: 5,
            title: "policy deck & playbook",
            href: "/services",
         },
         {
            id: 6,
            title: "sales deck",
            href: "/services",
         },
      ]
   },
];


// about page constants

export const aboutPartberItems = [
   {
      id: 1,
      title: "Restaurants & cafés",
      para: "Full tables start with being found. We run your Google presence, your food photography on Instagram, and weekend-offer ads that end at a booked table — every channel tracked to the rupee, reported in plain language."
   },
   {
      id: 2,
      title: "Salons & clinics",
      para: "Appointments, not vanity metrics. Your booking page, your Google reviews, your WhatsApp enquiries and your reminders work as one system — so empty chairs and idle slots get filled without you chasing anyone."
   },
   {
      id: 3,
      title: "Real estate & interiors",
      para: "High-ticket enquiries are built on trust at every step. Website, targeted ads, instant WhatsApp follow-up and enquiry tracking — so serious buyers reach you, and serious leads never slip through your phone."
   },
];

// contact page constants

export const FaqItems = [
   {
      id: 1,
      question: "What does it cost, and am I locked into a long contract?",
      title: "Description",
      description: "You pay a fixed monthly fee based on which services are in your stack, and the quote is itemised before we start — no surprise 'extra charges' later. After the initial setup period, we work on rolling monthly engagements, not year-long lock-ins that punish you for leaving.",
      links: [
         {
            id: 1,
            title: 1,
            description: "We would rather earn your next month than trap you in a contract. If we are not performing, you are free to walk."
         },
         {
            id: 2,
            title: 2,
            description: "Want to add or remove a service? We adjust the fee openly before the month begins — nothing moves without your sign-off."
         },
      ],
      button: "read"
   },
   {
      id: 2,
      question: "How fast will I actually see results?",
      title: "Description",
      description: "Your website, Google profile and social pages go live within the first month and start working immediately. Ads can bring enquiries from week one once tracking is set. Search rankings and review ratings build over two to three months — and we will tell you honestly which is which, in writing.",
      links: [
         {
            id: 1,
            title: 1,
            description: "Month one: the foundations go live — website, Google Business Profile, social profiles, call and enquiry tracking."
         },
         {
            id: 2,
            title: 2,
            description: "Months two and three: results compound — rankings climb, review scores improve, ads get optimised against real conversion data."
         },
      ],
      button: "read"
   },
   {
      id: 3,
      question: "What happens to my existing website and social accounts?",
      title: "Description",
      description: "Nothing gets deleted and you lose nothing. We work on your existing domain, Google Business Profile and social handles, and ownership always stays in your name. If your current website is beyond saving, we will say so before we rebuild it, not after.",
      links: [
         {
            id: 1,
            title: 1,
            description: "You own everything — logins, domain, ad accounts, pages. If we ever part ways, you take the entire setup with you, no ransom."
         },
      ],
      button: "read"
   },
   {
      id: 4,
      question: "How is this different from hiring a freelancer or a big agency?",
      title: "Description",
      description: "A freelancer handles one piece and disappears when they get busy. A big agency assigns your account to juniors and bills you for their overhead. Nuvora is one accountable team covering the full stack, at a fee a small business can plan around.",
      links: [
         {
            id: 1,
            title: 1,
            description: "No single point of failure: your website, Google, social, ads and follow-up are coordinated together — the left hand always knows what the right hand is doing."
         },
      ],
      button: "read"
   },
   {
      id: 5,
      question: "Are results guaranteed?",
      title: "Description",
      description: "We do not sell magic numbers, and you should run from anyone who does. What we guarantee is the work: defined deliverables every month, tracking on everything, and honest reporting of what each rupee brought in. Then we keep fixing whatever the data tells us.",
      links: [
         {
            id: 1,
            title: 1,
            description: "Our standing promise: if a channel consistently cannot show its contribution to your revenue, we will tell you to cut it — even if it is the service we would bill you for."
         },
      ],
      button: "read"
   },
   {
      id: 6,
      question: "Do I need to already have a website, pages or content in place?",
      title: "Description",
      description: "No. We start from wherever you are — many of our best-fit clients come with nothing but a shop board and a phone number. Whatever exists gets audited first, and only what is worth keeping is kept.",
      links: [
         {
            id: 1,
            title: 1,
            description: "Starting from zero is normal. Building your complete presence from scratch is exactly what the first 30 days are for."
         },
      ],
      button: "read"
   },
];
