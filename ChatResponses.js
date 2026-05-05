export function getBotReply(userMessage) {
  const msg = userMessage.toLowerCase();

  for (const item of searchingLimitedData) {
    const matched = item.keywords.some((kw) => msg.includes(kw.toLowerCase()));
    if (matched) return item.response;
  }

  return "I'm not sure about that yet. Please contact us at support@machineryplants.co.ke or call +254 700 000 000 and we'll be happy to help!";
}

export const searchingLimitedData = [
  // ─── GREETINGS ───────────────────────────────────────────────────────────────
  {
    keywords: ["hello", "hi", "hey", "greet"],
    utterance: "hi there hello hey greetings",
    response: "Hello! Welcome to Machinery & Plants Searching Ltd. How can I help you today — hiring machinery, buying used equipment, or shopping for power tools?"
  },
  {
    keywords: ["good morning", "morning"],
    utterance: "good morning",
    response: "Good morning! Ready to help you find the right equipment for your project."
  },
  {
    keywords: ["good afternoon", "afternoon"],
    utterance: "good afternoon",
    response: "Good afternoon! How can I assist you with machinery, plants, or power tools today?"
  },
  {
    keywords: ["good evening", "evening"],
    utterance: "good evening",
    response: "Good evening! Our platform is open 24/7 — what can I help you find?"
  },
  {
    keywords: ["what's up", "whatsup", "howdy"],
    utterance: "what's up howdy",
    response: "Hi! I can help you hire heavy machinery, browse the resale marketplace, or order power tools."
  },

  // ─── FAREWELLS ───────────────────────────────────────────────────────────────
  {
    keywords: ["goodbye", "bye", "farewell"],
    utterance: "goodbye bye farewell",
    response: "Goodbye! Come back anytime you need machinery, plants, or tools."
  },
  {
    keywords: ["thank you", "thanks", "appreciate"],
    utterance: "thank you thanks appreciate",
    response: "You're welcome! Let me know if you need anything else."
  },
  {
    keywords: ["talk later", "later"],
    utterance: "talk later see you later",
    response: "Sure, I'll be here whenever you need me."
  },

  // ─── ABOUT THE COMPANY ───────────────────────────────────────────────────────
  {
    keywords: ["who are you", "who is", "about you"],
    utterance: "who are you who is machinery and plants",
    response: "We're Machinery & Plants Searching Ltd — a hybrid platform to hire heavy machinery, buy or sell used equipment, and shop construction power tools."
  },
  {
    keywords: ["what is machinery", "about company", "machinery and plants"],
    utterance: "what is machinery and plants searching ltd about company",
    response: "We're a Kenyan-founded marketplace connecting contractors with heavy machinery for hire, used equipment for resale, and power tools for purchase or rent."
  },
  {
    keywords: ["mission"],
    utterance: "what is your mission",
    response: "Our mission is to make heavy machinery and construction tools accessible, transparent, and affordable for every contractor and builder."
  },
  {
    keywords: ["vision"],
    utterance: "what is your vision",
    response: "To be Africa's most trusted marketplace for machinery hire, resale, and construction tools."
  },
  {
    keywords: ["services", "what do you offer", "what you offer"],
    utterance: "what services do you offer",
    response: "Three core services: 1) Heavy machinery hire, 2) Used equipment resale marketplace, 3) Power tools retail and rental."
  },
  {
    keywords: ["location", "office", "where are you"],
    utterance: "where are you located office",
    response: "Our head office is in Nairobi, Kenya, and we serve clients across East Africa."
  },
  {
    keywords: ["founded", "when started"],
    utterance: "when was the company founded",
    response: "Machinery & Plants Searching Ltd was founded to solve fragmented machinery sourcing in the construction industry."
  },
  {
    keywords: ["team", "who runs", "management"],
    utterance: "who runs the company team",
    response: "We're a team of construction industry veterans, engineers, and tech specialists. See our About Us page for details."
  },
  {
    keywords: ["why use you", "why choose", "benefits"],
    utterance: "why should i use you why choose",
    response: "We offer verified sellers, transparent pricing, AI-powered matching, secure Mpesa payments, and 24/7 support."
  },
  {
    keywords: ["legit", "legitimate", "registered", "genuine company"],
    utterance: "are you a legit company",
    response: "Yes — we're a registered Kenyan company with verified sellers, secure payments, and a transparent rating system."
  },
  {
    keywords: ["industries", "sectors", "which industries"],
    utterance: "which industries do you serve",
    response: "Construction, mining, agriculture, logistics, road works, real estate development, and infrastructure projects."
  },
  {
    keywords: ["countries", "coverage", "regions", "where operate"],
    utterance: "which countries do you cover regions",
    response: "We currently operate in Kenya with expansion planned across East Africa."
  },

  // ─── ACCOUNT & AUTH ──────────────────────────────────────────────────────────
  {
    keywords: ["sign up", "register", "create account", "new account"],
    utterance: "how do i sign up register create account",
    response: "Click 'Sign Up' on the top right, enter your email, phone, and password, then verify via the link sent to your inbox."
  },
  {
    keywords: ["log in", "login", "sign in", "signin"],
    utterance: "how do i log in sign in",
    response: "Click 'Login', enter your email and password, or use Google sign-in for one-tap access."
  },
  {
    keywords: ["google sign in", "google login", "sign in google"],
    utterance: "can i sign in with google",
    response: "Yes, we support Google sign-in for faster access to your dashboard."
  },
  {
    keywords: ["can't log in", "login problem", "login issue"],
    utterance: "i can't log in login problem",
    response: "Try resetting your password using 'Forgot Password'. If it persists, contact support@machineryplants.co.ke."
  },
  {
    keywords: ["forgot password", "reset password"],
    utterance: "i forgot my password reset password",
    response: "Click 'Forgot Password' on the login page and we'll email you a reset link."
  },
  {
    keywords: ["change password", "update password"],
    utterance: "how do i change my password",
    response: "Go to Dashboard → Profile → Security → Change Password."
  },
  {
    keywords: ["delete account", "remove account"],
    utterance: "how do i delete my account",
    response: "Go to Dashboard → Profile → Settings → Delete Account. Note: all your listings and orders will be removed."
  },
  {
    keywords: ["verify email", "email verification"],
    utterance: "how do i verify my email",
    response: "Open the verification email we sent and click the link. Check spam if not found."
  },
  {
    keywords: ["verify phone", "phone verification"],
    utterance: "how do i verify my phone",
    response: "We send an SMS code during signup. Enter it on the verification screen to confirm your number."
  },
  {
    keywords: ["update profile", "edit profile", "change profile"],
    utterance: "how do i update my profile",
    response: "Go to Dashboard → Profile and edit your name, phone, photo, or address."
  },
  {
    keywords: ["account types", "buyer account", "seller account"],
    utterance: "what account types are there",
    response: "Two: Buyer/Hirer accounts (free) and Seller accounts (free to list, commission on sale)."
  },
  {
    keywords: ["become seller", "sell on platform", "start selling"],
    utterance: "how do i become a seller",
    response: "From Dashboard → Add Machine, switch to seller mode and complete the seller verification form."
  },
  {
    keywords: ["two factor", "2fa", "two-factor authentication"],
    utterance: "do you support two-factor authentication 2fa",
    response: "Yes — enable 2FA from Dashboard → Profile → Security for extra account protection."
  },

  // ─── HIRING MACHINERY ────────────────────────────────────────────────────────
  {
    keywords: ["hire machinery", "rent machinery", "hire equipment", "rent equipment"],
    utterance: "how do i hire rent machinery equipment",
    response: "Browse the Equipment page, pick your machine, choose duration, and request a quote — payment is via Mpesa or card."
  },
  {
    keywords: ["hiring process", "how hire works", "steps to hire"],
    utterance: "what is the hiring process steps",
    response: "1) Search machinery, 2) Compare options, 3) Request quote, 4) Confirm dates and pay deposit, 5) We coordinate delivery."
  },
  {
    keywords: ["minimum hire", "minimum duration", "shortest hire"],
    utterance: "what is the minimum hire duration",
    response: "Minimum hire is 1 day for most equipment, 4 hours for some power tools."
  },
  {
    keywords: ["maximum hire", "long term hire", "longest hire"],
    utterance: "what is the maximum hire duration long term",
    response: "There's no maximum — long-term hires of 6+ months get up to 30% discount."
  },
  {
    keywords: ["price quote", "get quote", "request quote", "how much to hire"],
    utterance: "how do i get a price quote",
    response: "Click 'Request Quote' on any equipment listing — you'll get pricing within 30 minutes during business hours."
  },
  {
    keywords: ["instant price", "upfront price", "see price"],
    utterance: "can i get an instant price upfront",
    response: "Yes, most listings show daily, weekly, and monthly rates upfront."
  },
  {
    keywords: ["operator included", "with operator", "without operator"],
    utterance: "is an operator included with hire",
    response: "Operators are optional — you can hire machinery alone (dry hire) or with a certified operator (wet hire)."
  },
  {
    keywords: ["operator cost", "operator rate", "operator price"],
    utterance: "how much does an operator cost",
    response: "Operator rates start at KES 2,500/day depending on machine type and certification level."
  },
  {
    keywords: ["fuel included", "fuel cost", "who pays fuel"],
    utterance: "is fuel included in hire",
    response: "Fuel is typically not included — the hirer covers fuel unless agreed otherwise in the contract."
  },
  {
    keywords: ["insurance", "hire insurance", "is insurance included"],
    utterance: "is insurance included in hire",
    response: "Basic insurance is included; comprehensive damage waiver is available as an add-on."
  },
  {
    keywords: ["deposit", "security deposit", "pay deposit"],
    utterance: "do i need to pay a deposit for hire",
    response: "Yes, a refundable security deposit (usually 20–30% of total hire) is required before delivery."
  },
  {
    keywords: ["deposit refund", "get deposit back", "when refund deposit"],
    utterance: "when do i get my deposit back refund",
    response: "Within 3 business days after the machine is returned in good condition."
  },
  {
    keywords: ["cancel hire", "cancel booking", "cancel reservation"],
    utterance: "can i cancel a hire booking",
    response: "Yes, free cancellation up to 48 hours before delivery. After that a 25% fee applies."
  },
  {
    keywords: ["extend hire", "extend period", "longer hire"],
    utterance: "can i extend my hire period",
    response: "Yes — extend from Dashboard → Orders → Extend, subject to machine availability."
  },
  {
    keywords: ["return early", "early return", "return machine before"],
    utterance: "can i return the machine early",
    response: "Yes, but the minimum hire duration still applies; partial refunds depend on the contract."
  },
  {
    keywords: ["machine damaged", "damage machine", "equipment damaged"],
    utterance: "what if the machine is damaged",
    response: "Report damage immediately. Costs are assessed and deducted from deposit or covered by insurance."
  },
  {
    keywords: ["machine breakdown", "machine broke", "equipment breakdown"],
    utterance: "what if the machine breaks down",
    response: "Call our 24/7 support line — we'll send a technician or replacement machine within hours."
  },
  {
    keywords: ["machine fit site", "site access", "machine dimensions"],
    utterance: "will the machine fit my site site access",
    response: "Check the dimensions on each listing. Our team can also do a free site survey for large equipment."
  },
  {
    keywords: ["permit", "transport permit", "road permit"],
    utterance: "do i need a permit for machinery",
    response: "For oversized machinery on public roads, yes — we help arrange transport permits."
  },
  {
    keywords: ["operator license", "operator certified", "operator qualification"],
    utterance: "does the operator have a license certification",
    response: "All our operators are licensed and certified by the relevant Kenyan authorities."
  },

  // ─── SPECIFIC MACHINERY ──────────────────────────────────────────────────────
  {
    keywords: ["excavator", "digger", "need excavator"],
    utterance: "i need an excavator digger",
    response: "We have mini, midi, and full-size excavators (1.5 to 30 tons). What's your project size?"
  },
  {
    keywords: ["excavator price", "excavator cost", "excavator rate"],
    utterance: "how much is an excavator per day price",
    response: "Mini excavators start at KES 8,000/day; 20-ton excavators around KES 25,000/day."
  },
  {
    keywords: ["mini excavator", "small excavator", "compact excavator"],
    utterance: "do you have mini small excavators",
    response: "Yes — 1.5 to 5 ton mini excavators perfect for tight urban sites."
  },
  {
    keywords: ["large excavator", "big excavator", "heavy excavator"],
    utterance: "do you have large heavy excavators",
    response: "Yes, up to 30-ton excavators for major earthworks and quarrying."
  },
  {
    keywords: ["bulldozer", "need bulldozer"],
    utterance: "i need a bulldozer hire",
    response: "We hire D6, D7, and D9 bulldozers from KES 18,000/day depending on size."
  },
  {
    keywords: ["bulldozer price", "bulldozer cost", "bulldozer rate"],
    utterance: "how much is a bulldozer per day price",
    response: "Mid-size bulldozer hire starts at KES 18,000/day with weekly discounts available."
  },
  {
    keywords: ["crane", "need crane", "hire crane"],
    utterance: "i need a crane hire",
    response: "Mobile cranes from 25 to 200 tons available. Tell me lift height and weight needed."
  },
  {
    keywords: ["tower crane"],
    utterance: "do you hire tower cranes",
    response: "Yes — tower cranes for high-rise projects with installation and dismantling included."
  },
  {
    keywords: ["mobile crane"],
    utterance: "do you have mobile cranes",
    response: "Yes, 25–200 ton mobile cranes available for short or long-term hire."
  },
  {
    keywords: ["wheel loader", "loader", "need loader"],
    utterance: "i need a wheel loader",
    response: "We have 1 to 7 cubic metre wheel loaders from KES 12,000/day."
  },
  {
    keywords: ["backhoe", "backhoe loader", "jcb"],
    utterance: "i need a backhoe loader jcb",
    response: "Backhoe loaders (JCB-style) available from KES 10,000/day with operator option."
  },
  {
    keywords: ["grader", "motor grader", "road grader"],
    utterance: "i need a motor grader",
    response: "Motor graders for road works available from KES 22,000/day."
  },
  {
    keywords: ["road roller", "roller", "compactor", "vibratory roller"],
    utterance: "i need a road roller compactor",
    response: "Vibratory rollers (single and double drum) from KES 9,000/day."
  },
  {
    keywords: ["tipper", "tipper truck", "dump truck", "dumper"],
    utterance: "i need a tipper dump truck",
    response: "7-ton to 30-ton tippers available — perfect for hauling soil, sand, or aggregate."
  },
  {
    keywords: ["concrete mixer", "mixer", "cement mixer"],
    utterance: "i need a concrete mixer",
    response: "Diesel and electric mixers from 350L to 1000L, plus mobile transit mixers."
  },
  {
    keywords: ["concrete pump", "boom pump"],
    utterance: "do you have concrete pumps",
    response: "Yes — boom pumps and line pumps for high-rise and remote pours."
  },
  {
    keywords: ["forklift", "need forklift"],
    utterance: "i need a forklift hire",
    response: "Diesel and electric forklifts (1.5 to 10 tons) for warehouses and sites."
  },
  {
    keywords: ["scissor lift", "mast lift"],
    utterance: "i need a scissor lift",
    response: "Electric scissor lifts up to 14m height from KES 4,500/day."
  },
  {
    keywords: ["boom lift", "cherry picker", "aerial lift"],
    utterance: "i need a boom lift cherry picker",
    response: "Articulated and telescopic boom lifts up to 30m available."
  },
  {
    keywords: ["generator", "need generator", "hire generator"],
    utterance: "i need a generator hire",
    response: "Diesel generators from 5 kVA to 500 kVA for events, sites, or backup power."
  },
  {
    keywords: ["welding machine", "welder hire", "hire welder"],
    utterance: "i need a welding machine hire",
    response: "Arc, MIG, and TIG welding machines available for hire or purchase."
  },
  {
    keywords: ["air compressor", "compressor hire"],
    utterance: "i need an air compressor hire",
    response: "Portable diesel compressors from 100 to 750 CFM."
  },
  {
    keywords: ["scaffolding", "hire scaffolding", "scaffold"],
    utterance: "do you hire scaffolding",
    response: "Yes — full scaffolding sets with delivery and erection service."
  },
  {
    keywords: ["water pump", "pump hire", "dewatering pump"],
    utterance: "i need a water pump hire",
    response: "Submersible and surface water pumps for dewatering and irrigation."
  },
  {
    keywords: ["trencher", "need trencher"],
    utterance: "i need a trencher hire",
    response: "Walk-behind and ride-on trenchers for cable and pipe laying."
  },
  {
    keywords: ["asphalt paver", "paver", "road paver"],
    utterance: "i need an asphalt paver",
    response: "Asphalt pavers available for road construction with experienced operators."
  },
  {
    keywords: ["drilling rig", "drill rig", "borehole rig"],
    utterance: "i need a drilling rig",
    response: "Borehole and rotary drilling rigs available with crew."
  },
  {
    keywords: ["skid steer", "bobcat", "compact loader"],
    utterance: "i need a skid steer bobcat",
    response: "Bobcat-style skid steers from KES 7,500/day with multiple attachments."
  },
  {
    keywords: ["telehandler", "telescopic handler"],
    utterance: "i need a telehandler",
    response: "Telehandlers up to 17m reach for construction sites."
  },
  {
    keywords: ["low bed trailer", "low loader", "equipment trailer"],
    utterance: "i need a low bed trailer",
    response: "Low bed trailers for transporting heavy equipment — included in delivery quotes."
  },

  // ─── BUYING & SELLING USED MACHINERY ────────────────────────────────────────
  {
    keywords: ["buy used", "used machinery", "buy second hand", "used equipment"],
    utterance: "how do i buy used machinery second hand equipment",
    response: "Visit the Marketplace page, filter by type, year, and price, then click 'Contact Seller' or 'Buy Now'."
  },
  {
    keywords: ["marketplace", "find used", "used equipment listing"],
    utterance: "where do i find used equipment marketplace",
    response: "Go to the Marketplace tab in the main menu — all client-listed used machinery is there."
  },
  {
    keywords: ["sell machine", "list machine", "sell equipment"],
    utterance: "how do i sell list my machine equipment",
    response: "From Dashboard → Add Machine → Sell tab. Add photos, specs, price, and submit for review."
  },
  {
    keywords: ["listing fee", "fee to sell", "cost to list"],
    utterance: "is there a fee to list sell",
    response: "Listing is free; we charge a 5% commission only when your item sells."
  },
  {
    keywords: ["listing approval", "how long listing approved"],
    utterance: "how long until my listing is approved",
    response: "Listings are typically approved within 24 hours after our team reviews photos and specs."
  },
  {
    keywords: ["how many photos", "photos per listing", "upload photos listing"],
    utterance: "how many photos can i upload per listing",
    response: "Up to 15 high-resolution photos per listing — more photos mean more buyer interest."
  },
  {
    keywords: ["price my machine", "how to price", "suggest price"],
    utterance: "how do i price my machine suggest price",
    response: "Our AI suggests a fair price based on year, condition, hours, and recent sales of similar machines."
  },
  {
    keywords: ["inspect machine", "machine inspection", "third party inspection"],
    utterance: "will you inspect my machine",
    response: "Yes — we offer optional third-party inspection for KES 5,000, which boosts buyer confidence."
  },
  {
    keywords: ["inspect before buying", "view before buy", "see machine"],
    utterance: "can i inspect before buying view machine",
    response: "Absolutely — schedule a viewing through the seller, or request our inspection service."
  },
  {
    keywords: ["negotiate price", "make offer", "counter offer"],
    utterance: "can i negotiate the price make offer",
    response: "Yes — use the 'Make Offer' button to send a counter-offer to the seller."
  },
  {
    keywords: ["deliver used", "delivery used machinery"],
    utterance: "do you deliver used machinery",
    response: "Delivery is arranged between buyer and seller; we can quote transport on request."
  },
  {
    keywords: ["warranty used", "guarantee used", "used warranty"],
    utterance: "is there a warranty on used equipment",
    response: "Used machines are sold as-is; some sellers offer 30-day functional warranties."
  },
  {
    keywords: ["seller genuine", "verify seller", "trust seller"],
    utterance: "how do i know the seller is genuine trust",
    response: "Look for the 'Verified Seller' badge, ratings, and transaction history on each profile."
  },
  {
    keywords: ["escrow", "escrow payment", "held payment"],
    utterance: "do you offer escrow payments",
    response: "Yes — payments can be held in escrow until you confirm receipt and inspection."
  },
  {
    keywords: ["boost listing", "feature listing", "promote listing"],
    utterance: "can i feature boost my listing",
    response: "Yes — boost listings appear at the top of search results for KES 1,500/week."
  },
  {
    keywords: ["relist", "re-list", "reactivate listing"],
    utterance: "can i relist a removed item",
    response: "Yes, expired or removed listings can be relisted from Dashboard → My Listings."
  },
  {
    keywords: ["edit listing", "update listing", "change listing"],
    utterance: "can i edit update my listing",
    response: "Yes — edit price, description, or photos anytime from Dashboard → My Listings."
  },
  {
    keywords: ["filter listings", "filter marketplace", "search filter"],
    utterance: "how do i filter listings marketplace",
    response: "Use the sidebar filters: type, brand, year, price range, location, and condition."
  },
  {
    keywords: ["save listing", "wishlist", "favourite listing"],
    utterance: "can i save listings wishlist",
    response: "Yes — click the heart icon to save listings to your wishlist for later."
  },
  {
    keywords: ["listing alerts", "notify new listings", "new machine alerts"],
    utterance: "can i get alerts for new listings",
    response: "Yes — save a search to receive email notifications when matching machines are listed."
  },
  {
    keywords: ["logbook", "documents", "ownership records"],
    utterance: "do listings include logbook documents",
    response: "Verified listings include logbook scans, service records, and ownership history."
  },
  {
    keywords: ["what can i sell", "sell categories", "sell types"],
    utterance: "what can i sell on the platform categories",
    response: "Excavators, loaders, cranes, trucks, generators, attachments, and any heavy machinery."
  },
  {
    keywords: ["sell attachments", "sell buckets", "sell accessories"],
    utterance: "can i sell attachments only",
    response: "Yes — buckets, hammers, augers, and other attachments have their own category."
  },

  // ─── POWER TOOLS ─────────────────────────────────────────────────────────────
  {
    keywords: ["buy power tools", "sell power tools", "power tools"],
    utterance: "do you sell buy power tools",
    response: "Yes — drills, grinders, welders, cutters, and more available to buy or rent."
  },
  {
    keywords: ["rent power tools", "hire power tools"],
    utterance: "can i rent hire power tools",
    response: "Yes, most power tools are available for daily, weekly, or monthly rental."
  },
  {
    keywords: ["drill", "need drill", "buy drill"],
    utterance: "i need a drill buy",
    response: "We stock cordless drills, hammer drills, and rotary drills from brands like Bosch, DeWalt, and Makita."
  },
  {
    keywords: ["hammer drill", "sds drill", "concrete drill"],
    utterance: "do you have hammer drills sds",
    response: "Yes — SDS hammer drills for concrete drilling, both corded and cordless."
  },
  {
    keywords: ["angle grinder", "grinder"],
    utterance: "i need an angle grinder",
    response: "Angle grinders from 4-inch to 9-inch, available to buy or rent."
  },
  {
    keywords: ["disc cutter", "cut off machine", "concrete cutter"],
    utterance: "i need a disc cutter cut off machine",
    response: "Petrol and electric disc cutters for concrete and steel cutting."
  },
  {
    keywords: ["circular saw", "wood saw", "skill saw"],
    utterance: "i need a circular saw",
    response: "Corded and cordless circular saws for wood and metal cutting."
  },
  {
    keywords: ["jigsaw"],
    utterance: "do you sell jigsaws",
    response: "Yes — variable-speed jigsaws for curved and detail cutting."
  },
  {
    keywords: ["nail gun", "stapler gun"],
    utterance: "do you have nail guns",
    response: "Pneumatic and cordless nail guns for framing and finishing."
  },
  {
    keywords: ["sander", "orbital sander", "belt sander"],
    utterance: "i need a sander orbital belt",
    response: "Belt sanders, orbital sanders, and detail sanders in stock."
  },
  {
    keywords: ["wood router", "router"],
    utterance: "do you sell wood routers",
    response: "Yes — fixed and plunge base routers for woodworking."
  },
  {
    keywords: ["planer", "hand planer", "bench planer"],
    utterance: "i need a planer hand bench",
    response: "Electric hand planers and benchtop planers available."
  },
  {
    keywords: ["small compressor", "workshop compressor", "portable compressor"],
    utterance: "do you sell small portable air compressors",
    response: "Portable air compressors from 25L to 200L for workshop and site use."
  },
  {
    keywords: ["industrial vacuum", "wet dry vacuum", "site vacuum"],
    utterance: "do you have industrial vacuums wet dry",
    response: "Wet/dry industrial vacuums for site cleanup."
  },
  {
    keywords: ["ladder", "extension ladder", "step ladder"],
    utterance: "do you sell ladders extension step",
    response: "Aluminium extension ladders, A-frame ladders, and platform ladders in stock."
  },
  {
    keywords: ["safety equipment", "ppe", "protective equipment"],
    utterance: "do you sell safety equipment ppe",
    response: "Yes — helmets, gloves, boots, harnesses, and high-vis vests."
  },
  {
    keywords: ["tool box", "toolbox", "tool chest"],
    utterance: "do you sell tool boxes toolboxes",
    response: "Yes, plastic and metal tool boxes plus rolling tool chests."
  },
  {
    keywords: ["brands", "tool brands", "which brands"],
    utterance: "what brands do you carry",
    response: "Bosch, DeWalt, Makita, Milwaukee, Stanley, Hilti, and other major brands."
  },
  {
    keywords: ["tool warranty", "power tool warranty"],
    utterance: "do power tools come with warranty",
    response: "Yes — manufacturer warranty (typically 1–3 years) plus our 14-day return policy."
  },
  {
    keywords: ["tool rental price", "rent tool cost", "hire tool price"],
    utterance: "how much to rent hire a power tool price",
    response: "Daily rentals start from KES 300 for small tools to KES 2,000 for larger equipment."
  },
  {
    keywords: ["buy vs rent", "should i buy or rent", "buy or rent tool"],
    utterance: "should i buy or rent a tool",
    response: "Buy if you'll use it monthly or more; rent for one-off projects. Our tool advisor can help you decide."
  },
  {
    keywords: ["bulk discount", "bulk order", "volume discount tools"],
    utterance: "do you offer bulk discounts tools",
    response: "Yes — bulk orders over KES 100,000 get 5–15% discount depending on volume."
  },
  {
    keywords: ["deliver power tools", "tool delivery"],
    utterance: "do you deliver power tools",
    response: "Yes — free Nairobi delivery on orders above KES 10,000; nationwide via courier."
  },
  {
    keywords: ["spare parts", "tool parts", "replacement parts"],
    utterance: "do you sell spare parts replacement",
    response: "Yes — replacement blades, drill bits, batteries, chargers, and more."
  },
  {
    keywords: ["spare battery", "replacement battery", "cordless battery"],
    utterance: "can i buy spare batteries replacement",
    response: "Yes — original and compatible batteries for all major cordless tool brands."
  },
  {
    keywords: ["repair tools", "fix tools", "tool service"],
    utterance: "do you repair fix tools service",
    response: "Yes — our service centre repairs power tools, both warranty and out-of-warranty."
  },

  // ─── PAYMENTS ────────────────────────────────────────────────────────────────
  {
    keywords: ["payment methods", "how to pay", "accepted payments"],
    utterance: "what payment methods do you accept",
    response: "Mpesa, Visa, Mastercard, bank transfer, and cash on delivery for select orders."
  },
  {
    keywords: ["mpesa", "lipa na mpesa", "pay mpesa"],
    utterance: "do you accept mpesa lipa na mpesa",
    response: "Yes — Mpesa is our primary payment method, fully integrated with one-tap Lipa Na Mpesa."
  },
  {
    keywords: ["pay by card", "credit card", "debit card", "visa mastercard"],
    utterance: "can i pay with a card visa mastercard",
    response: "Yes — Visa, Mastercard, and American Express accepted via secure checkout."
  },
  {
    keywords: ["bank transfer", "pay by bank", "wire transfer"],
    utterance: "can i pay by bank transfer wire",
    response: "Yes — for invoices above KES 50,000, bank transfer details are on the invoice."
  },
  {
    keywords: ["cash on delivery", "cod", "pay cash"],
    utterance: "do you accept cash on delivery cod",
    response: "Cash on delivery is available for power tool orders under KES 30,000 in Nairobi."
  },
  {
    keywords: ["installments", "pay monthly", "monthly payments", "financing"],
    utterance: "do you offer installments monthly payments financing",
    response: "Selected machinery is available on monthly installments via partner financiers."
  },
  {
    keywords: ["invoice", "get invoice", "request invoice"],
    utterance: "can i get an invoice",
    response: "Yes — invoices are auto-generated and emailed after every transaction."
  },
  {
    keywords: ["vat", "tax included", "prices include vat"],
    utterance: "do prices include vat tax",
    response: "All prices shown include 16% VAT unless marked otherwise."
  },
  {
    keywords: ["refund", "how refunds work", "get refund"],
    utterance: "how do refunds work get refund",
    response: "Refunds are processed within 5–7 business days to the original payment method."
  },
  {
    keywords: ["payment secure", "safe payment", "is payment safe"],
    utterance: "is payment secure safe",
    response: "Yes — we use PCI-DSS compliant gateways and never store your card details."
  },
  {
    keywords: ["payment failed", "payment error", "payment not going through"],
    utterance: "my payment failed error",
    response: "Try again or use a different method. Contact support if your account was charged but order not confirmed."
  },
  {
    keywords: ["receipt", "payment receipt", "get receipt"],
    utterance: "how do i get a receipt payment",
    response: "Receipts are emailed automatically and available in Dashboard → Orders."
  },
  {
    keywords: ["currency", "which currency", "kenyan shillings"],
    utterance: "what currency do you use kenyan shillings",
    response: "All prices are in Kenyan Shillings (KES). USD invoices available on request."
  },
  {
    keywords: ["pay hire deposit", "hire deposit payment"],
    utterance: "how do i pay a hire deposit",
    response: "Deposits are collected at booking via Mpesa or card and refunded after machine return."
  },

  // ─── DELIVERY ────────────────────────────────────────────────────────────────
  {
    keywords: ["deliver nationwide", "nationwide delivery", "delivery kenya"],
    utterance: "do you deliver nationwide across kenya",
    response: "Yes — we deliver across Kenya. Heavy machinery delivery is quoted per location."
  },
  {
    keywords: ["deliver nairobi", "nairobi delivery", "same day delivery"],
    utterance: "do you deliver in nairobi same day",
    response: "Yes, same-day delivery available for power tools ordered before 2pm."
  },
  {
    keywords: ["delivery cost", "delivery fee", "how much delivery"],
    utterance: "how much is delivery cost fee",
    response: "Power tools: free above KES 10,000 in Nairobi. Heavy machinery: quoted per route."
  },
  {
    keywords: ["delivery time", "how long delivery", "when delivered"],
    utterance: "how long does delivery take time",
    response: "Power tools: 1–3 days. Heavy machinery: 1–7 days depending on location and availability."
  },
  {
    keywords: ["track delivery", "track order", "track shipment"],
    utterance: "can i track my delivery order",
    response: "Yes — tracking link sent via SMS and available in Dashboard → Orders."
  },
  {
    keywords: ["self collect", "collect myself", "pickup order"],
    utterance: "can i collect myself pickup self collect",
    response: "Yes — self-collection from our depots gives a discount and faster availability."
  },
  {
    keywords: ["international shipping", "ship abroad", "ship internationally"],
    utterance: "do you ship internationally abroad",
    response: "Currently we serve Kenya only. Contact sales for cross-border requests."
  },
  {
    keywords: ["weekend delivery", "saturday delivery", "sunday delivery"],
    utterance: "do you deliver on weekends saturday sunday",
    response: "Yes — Saturday delivery available; Sunday by special arrangement."
  },
  {
    keywords: ["remote site", "remote delivery", "deliver remote"],
    utterance: "will you deliver to remote sites",
    response: "Yes — we deliver to remote sites; access requirements should be specified at booking."
  },
  {
    keywords: ["reschedule delivery", "change delivery date"],
    utterance: "can i reschedule delivery change date",
    response: "Yes — reschedule from Dashboard → Orders up to 24 hours before delivery."
  },

  // ─── SUPPORT & CONTACT ───────────────────────────────────────────────────────
  {
    keywords: ["contact support", "customer support", "help", "contact us"],
    utterance: "how do i contact support help customer service",
    response: "Email support@machineryplants.co.ke, call +254 700 000 000, or use the chat widget bottom-right."
  },
  {
    keywords: ["phone number", "call number", "telephone"],
    utterance: "what is your phone number telephone",
    response: "+254 700 000 000 — available Monday to Saturday 8am–6pm."
  },
  {
    keywords: ["email address", "contact email", "support email"],
    utterance: "what is your email address contact",
    response: "support@machineryplants.co.ke for general queries, sales@machineryplants.co.ke for sales."
  },
  {
    keywords: ["whatsapp", "whatsapp number"],
    utterance: "do you have whatsapp number",
    response: "Yes — WhatsApp us at +254 700 000 000 for quick replies."
  },
  {
    keywords: ["visit office", "come to office", "office address"],
    utterance: "can i visit your office address",
    response: "Yes — our Nairobi office is open Mon–Fri 9am–5pm. Book a visit via the Contact page."
  },
  {
    keywords: ["support hours", "opening hours", "business hours"],
    utterance: "what are your support hours business opening",
    response: "Mon–Sat 8am–6pm for general support; 24/7 emergency line for active hires."
  },
  {
    keywords: ["emergency", "site emergency", "urgent help"],
    utterance: "there is an emergency on site urgent",
    response: "Call our 24/7 emergency line +254 700 000 111 — we'll respond within the hour."
  },
  {
    keywords: ["complaint", "dispute", "file complaint"],
    utterance: "how do i file a complaint dispute",
    response: "Submit via Dashboard → Help → File Dispute. Our team responds within 48 hours."
  },
  {
    keywords: ["languages", "speak swahili", "kiswahili"],
    utterance: "what languages do you speak swahili kiswahili",
    response: "English and Kiswahili. Some staff speak French and Arabic."
  },
  {
    keywords: ["feedback", "give feedback", "rate service"],
    utterance: "how do i give feedback rate service",
    response: "We love feedback — use the feedback form in your dashboard or email feedback@machineryplants.co.ke."
  },

  // ─── AI & PLATFORM ───────────────────────────────────────────────────────────
  {
    keywords: ["are you ai", "are you a bot", "chatbot", "ai assistant"],
    utterance: "are you an ai chatbot assistant",
    response: "Yes — I'm an AI assistant trained on Machinery & Plants Searching Ltd's services to help you quickly find what you need."
  },
  {
    keywords: ["platform ai", "ai features", "smart search"],
    utterance: "does the platform use ai smart search",
    response: "Yes — AI powers smart search, price recommendations, and machine matching."
  },
  {
    keywords: ["recommend machine", "ai recommend", "suggest machine"],
    utterance: "can ai recommend suggest a machine",
    response: "Yes — describe your project and our AI suggests the best machine, capacity, and budget."
  },
  {
    keywords: ["ai price", "how ai prices", "ai suggest price"],
    utterance: "how does ai suggest prices",
    response: "Our AI analyses recent sales, machine age, hours, and condition to suggest fair market prices."
  },
  {
    keywords: ["chat swahili", "kiswahili chat", "swahili language"],
    utterance: "can i chat in swahili kiswahili",
    response: "Ndio — naweza kukusaidia kwa Kiswahili au Kiingereza."
  },
  {
    keywords: ["how search works", "search function", "search machinery"],
    utterance: "how does search work function",
    response: "Type a keyword or use filters (type, location, price). AI ranks results by relevance to your project."
  },
  {
    keywords: ["dashboard", "what is dashboard", "my dashboard"],
    utterance: "what is the dashboard my account",
    response: "Your dashboard shows orders, cart, listings, profile, and add-machine forms in one place."
  },
  {
    keywords: ["access dashboard", "how access dashboard", "open dashboard"],
    utterance: "how do i access open the dashboard",
    response: "Log in and click your profile icon → Dashboard, or visit /dashboard directly."
  },
  {
    keywords: ["notifications", "sms notifications", "email notifications"],
    utterance: "do you send notifications sms email",
    response: "Yes — order updates via SMS and email; you can manage preferences in Profile → Notifications."
  },
  {
    keywords: ["mobile app", "ios app", "android app"],
    utterance: "do you have a mobile app ios android",
    response: "Our web platform is fully mobile-responsive; a native app is in development."
  },
  {
    keywords: ["dark mode", "light mode", "theme"],
    utterance: "do you have dark mode light mode theme",
    response: "Yes — toggle dark/light mode from the header."
  },
  {
    keywords: ["offline", "use offline", "without internet"],
    utterance: "can i use it offline without internet",
    response: "The platform requires internet, but listings can be saved as PDFs for offline reference."
  },

  // ─── TRUST & SAFETY ──────────────────────────────────────────────────────────
  {
    keywords: ["seller verified", "how verified", "verified sellers"],
    utterance: "how are sellers verified",
    response: "Sellers submit ID, business registration, and machine ownership documents — we verify each one."
  },
  {
    keywords: ["reviews", "ratings", "see reviews"],
    utterance: "can i see reviews ratings",
    response: "Yes — every seller and machine has buyer reviews and a star rating."
  },
  {
    keywords: ["prevent fraud", "scam protection", "fraud prevention"],
    utterance: "how do you prevent fraud scams",
    response: "ID verification, escrow payments, in-person inspections, and a strict review system."
  },
  {
    keywords: ["report seller", "report listing", "flag seller"],
    utterance: "how do i report a seller listing",
    response: "Click 'Report' on the listing or seller profile. Our trust team reviews within 24 hours."
  },
  {
    keywords: ["blacklist", "ban seller", "banned users"],
    utterance: "do you blacklist ban bad actors",
    response: "Yes — sellers or buyers violating policies are permanently banned."
  },

  // ─── POLICIES ────────────────────────────────────────────────────────────────
  {
    keywords: ["refund policy", "return policy"],
    utterance: "what is your refund return policy",
    response: "Power tools: 14-day return if unused. Hires: refunds depend on cancellation timing."
  },
  {
    keywords: ["privacy policy", "data privacy", "personal data"],
    utterance: "what is your privacy policy personal data",
    response: "We protect your data per Kenya's Data Protection Act. Full policy at /privacy."
  },
  {
    keywords: ["terms and conditions", "terms of service", "t&c"],
    utterance: "where are your terms and conditions",
    response: "Available at /terms — please read before transacting."
  },
  {
    keywords: ["cookies", "cookie policy"],
    utterance: "do you use cookies cookie policy",
    response: "Yes — for login, preferences, and analytics. See our cookie policy at /cookies."
  },
  {
    keywords: ["warranty length", "how long warranty", "warranty period"],
    utterance: "how long is the warranty period",
    response: "Power tools: 1–3 years manufacturer warranty. Used machines: as listed by seller."
  },
  {
    keywords: ["claim warranty", "warranty claim", "make warranty claim"],
    utterance: "how do i claim warranty",
    response: "Submit a claim via Dashboard → Orders → Claim Warranty with photos and description."
  },
  {
    keywords: ["insurance coverage", "what covered", "insurance details"],
    utterance: "what does insurance cover",
    response: "Basic theft and damage during hire. Optional comprehensive cover includes accidental damage."
  },
  {
    keywords: ["extra insurance", "buy insurance", "additional insurance"],
    utterance: "can i buy extra additional insurance",
    response: "Yes — comprehensive damage waiver available at booking for 5% of hire cost."
  },

  // ─── PRICING & DISCOUNTS ─────────────────────────────────────────────────────
  {
    keywords: ["discounts", "offers", "promotions"],
    utterance: "do you have discounts offers promotions",
    response: "Yes — weekly and monthly hire discounts up to 30%, plus seasonal promos."
  },
  {
    keywords: ["promo code", "coupon", "discount code"],
    utterance: "can i use a promo coupon discount code",
    response: "Enter promo codes at checkout. Subscribe to our newsletter for monthly codes."
  },
  {
    keywords: ["negotiate hire", "negotiate rate", "custom quote"],
    utterance: "can i negotiate hire rates custom quote",
    response: "Long-term and bulk hires are negotiable — contact sales for a custom quote."
  },
  {
    keywords: ["corporate account", "corporate discount", "business account"],
    utterance: "do you offer corporate accounts business",
    response: "Yes — corporate accounts get net-30 invoicing, dedicated account managers, and bulk discounts."
  },
  {
    keywords: ["price match", "price guarantee", "best price"],
    utterance: "do you price match guarantee best price",
    response: "Yes — we'll match any verified competitor quote on identical equipment."
  },
  {
    keywords: ["seasonal offers", "seasonal discount", "seasonal promo"],
    utterance: "are there seasonal offers discounts",
    response: "Yes — dry-season construction promos, end-of-year sales, and holiday rental specials."
  },
  {
    keywords: ["referral", "refer friend", "referral program"],
    utterance: "do you have a referral program",
    response: "Yes — earn KES 1,000 credit for every friend who completes their first hire."
  },
  {
    keywords: ["loyalty program", "loyalty points", "rewards"],
    utterance: "do you have a loyalty program rewards points",
    response: "Yes — earn points on every transaction, redeemable for discounts on future orders."
  },
  {
    keywords: ["subscription", "subscription plan", "pro plan"],
    utterance: "is there a subscription plan pro",
    response: "Pro hirers get a monthly subscription with priority booking, free delivery, and 10% off."
  },
  {
    keywords: ["vat exempt", "ngo vat", "tax exempt"],
    utterance: "are ngos vat exempt tax exemption",
    response: "Registered NGOs and exempt entities — submit your exemption certificate to remove VAT."
  },

  // ─── ISSUE RESOLUTION ────────────────────────────────────────────────────────
  {
    keywords: ["order missing", "missing order", "where is my order"],
    utterance: "my order is missing where is it",
    response: "Sorry to hear that — share your order ID and we'll trace it within 1 hour."
  },
  {
    keywords: ["wrong item", "received wrong", "wrong product"],
    utterance: "i received the wrong item product",
    response: "Apologies — report it from Dashboard → Orders → Report Issue and we'll arrange a replacement."
  },
  {
    keywords: ["item damaged", "arrived damaged", "damaged on delivery"],
    utterance: "my item arrived damaged on delivery",
    response: "Take photos immediately and report from Dashboard → Orders → Report Damage. Replacement or refund within 48 hours."
  },
  {
    keywords: ["late delivery", "delivery late", "delayed order"],
    utterance: "my delivery is late delayed",
    response: "Check the tracking link in your dashboard. If still delayed, contact support for an update."
  },
  {
    keywords: ["operator late", "operator not arrived", "operator delay"],
    utterance: "the operator is late not arrived",
    response: "Call dispatch +254 700 000 222 — we'll send an update or replacement immediately."
  },
  {
    keywords: ["poor condition", "bad machine", "machine quality"],
    utterance: "the machine is in poor condition bad quality",
    response: "Report immediately — we'll send a replacement and review the seller's standing."
  },
  {
    keywords: ["overcharged", "wrong amount", "charged too much"],
    utterance: "i was overcharged wrong amount",
    response: "Send your invoice number to billing@machineryplants.co.ke — we'll review within 24 hours."
  },
  {
    keywords: ["charged twice", "double charge", "duplicate charge"],
    utterance: "i was charged twice double duplicate",
    response: "Apologies — share both transaction references and we'll refund the duplicate within 3 days."
  },
  {
    keywords: ["refund not received", "no refund", "refund missing"],
    utterance: "i haven't received my refund",
    response: "Refunds take 5–7 business days. If still missing, share the order ID for investigation."
  },
  {
    keywords: ["account locked", "locked out", "account suspended"],
    utterance: "my account is locked suspended",
    response: "Contact security@machineryplants.co.ke with your registered email to unlock."
  },
  {
    keywords: ["can't upload", "upload photos problem", "upload error"],
    utterance: "i can't upload photos error",
    response: "Try smaller files (under 5MB each) or use Chrome/Safari. Contact support if it persists."
  },
  {
    keywords: ["site slow", "website slow", "platform slow"],
    utterance: "the site website platform is slow",
    response: "Try clearing cache or switching browser. Report persistent issues to tech@machineryplants.co.ke."
  },
  {
    keywords: ["verification slow", "verification taking long", "verification stuck"],
    utterance: "my verification is taking long stuck",
    response: "Verifications usually finish in 24 hours. Email verify@machineryplants.co.ke if stuck longer."
  },

  // ─── PROJECT-BASED RECOMMENDATIONS ──────────────────────────────────────────
  {
    keywords: ["road construction", "building road", "road project"],
    utterance: "i'm building a road road construction project",
    response: "You'll need graders, rollers, pavers, and tippers — request a road project bundle for combined discount."
  },
  {
    keywords: ["building house", "residential", "home construction"],
    utterance: "i'm building a house residential home construction",
    response: "Mini excavator, concrete mixer, scaffolding, and power tools — see our 'Home Build' bundle."
  },
  {
    keywords: ["drill borehole", "borehole project", "water borehole"],
    utterance: "i want to drill a borehole water",
    response: "We hire borehole rigs with experienced crews; provide site location for a quote."
  },
  {
    keywords: ["demolition", "demolish", "tear down"],
    utterance: "i need to demolish a building tear down",
    response: "Excavators with hydraulic breakers, dump trucks, and dust suppression equipment available."
  },
  {
    keywords: ["landscaping", "landscape project", "garden"],
    utterance: "i'm doing landscaping garden project",
    response: "Mini excavator, skid steer, trenchers, and small tools — perfect for landscaping projects."
  },
  {
    keywords: ["quarry", "mining", "mine project"],
    utterance: "i run a quarry mining project",
    response: "Heavy excavators, drills, dumpers, and crushers — long-term hire with discounts."
  },
  {
    keywords: ["farm", "agriculture", "farming project"],
    utterance: "i have a farm agriculture project",
    response: "Tractors, ploughs, water pumps, and silage equipment available for agricultural use."
  },
  {
    keywords: ["event", "wedding", "outdoor event"],
    utterance: "i have an event wedding outdoor",
    response: "Event generators, lighting towers, and portable toilets available for short-term hire."
  },
  {
    keywords: ["warehouse", "setting up warehouse", "warehouse project"],
    utterance: "i'm setting up a warehouse",
    response: "Forklifts, scissor lifts, racking, and concrete polishers in stock."
  },
  {
    keywords: ["solar installation", "installing solar", "solar panels"],
    utterance: "i'm installing solar panels",
    response: "Boom lifts, drills, and safety harnesses for solar panel installations."
  },

  // ─── GENERAL INFO ────────────────────────────────────────────────────────────
  {
    keywords: ["opening hours", "when open", "open hours"],
    utterance: "when are you open hours",
    response: "Online 24/7. Office and call centre Mon–Sat 8am–6pm."
  },
  {
    keywords: ["holidays", "open on holidays", "public holidays"],
    utterance: "are you open on holidays public holidays",
    response: "Online platform always open; call centre closed on public holidays except for emergencies."
  },
  {
    keywords: ["careers", "jobs", "hiring", "job openings"],
    utterance: "are you hiring jobs careers openings",
    response: "Yes — see open roles at /careers."
  },
  {
    keywords: ["partner", "vendor", "partnership"],
    utterance: "how do i partner with you vendor",
    response: "Email partnerships@machineryplants.co.ke with your company profile and proposal."
  },
  {
    keywords: ["affiliate program", "affiliate", "earn commission"],
    utterance: "do you have an affiliate program earn commission",
    response: "Yes — earn 3% commission on referred sales. Apply at /affiliate."
  },
  {
    keywords: ["blog", "resources", "articles"],
    utterance: "do you have a blog resources articles",
    response: "Yes — visit /blog for industry tips, machine guides, and case studies."
  },
  {
    keywords: ["training", "courses", "operator training"],
    utterance: "do you offer training courses",
    response: "Yes — operator and safety training courses run monthly. See /training for the schedule."
  },
  {
    keywords: ["certify operator", "operator certification", "nita"],
    utterance: "can you certify my operator nita",
    response: "We partner with NITA-accredited centres for operator certification."
  },
  {
    keywords: ["eco friendly", "green", "sustainable"],
    utterance: "are you eco-friendly green sustainable",
    response: "We promote electric tools, hybrid generators, and offset emissions on long-distance deliveries."
  },
  {
    keywords: ["community", "csr", "social responsibility"],
    utterance: "do you do community work csr social responsibility",
    response: "Yes — we sponsor youth construction training and donate tools to vocational schools."
  },
  {
    keywords: ["press", "media", "press inquiry"],
    utterance: "how do i reach press media inquiry",
    response: "Email media@machineryplants.co.ke for press inquiries."
  },
  {
    keywords: ["investor", "invest", "investment"],
    utterance: "are you taking investors investment",
    response: "Reach out to investors@machineryplants.co.ke for investment discussions."
  },
  {
    keywords: ["api", "developer api", "partner api"],
    utterance: "do you have an api developer",
    response: "A partner API is in beta — email api@machineryplants.co.ke to request access."
  },
  {
    keywords: ["sitemap", "navigation", "site map"],
    utterance: "where is your sitemap navigation",
    response: "Available at /sitemap.xml or use the footer for full navigation."
  },

  // ─── PAGE NAVIGATION ─────────────────────────────────────────────────────────
  {
    keywords: ["home page", "homepage", "go home", "main page"],
    utterance: "take me to the home page homepage",
    response: "Sure — click the logo top-left or go to /."
  },
  {
    keywords: ["about page", "about us page"],
    utterance: "where is the about page",
    response: "Visit /about to learn more about us."
  },
  {
    keywords: ["contact page", "contact us page"],
    utterance: "where is the contact page",
    response: "Visit /contact for all our contact options."
  },
  {
    keywords: ["marketplace page", "resale page", "buy page"],
    utterance: "where is the marketplace page",
    response: "Visit /marketplace to browse used equipment."
  },
  {
    keywords: ["equipment page", "hire page", "machinery page"],
    utterance: "where is the hire equipment machinery page",
    response: "Visit /equipment to browse machinery available for hire."
  },
  {
    keywords: ["dashboard page", "my account page"],
    utterance: "where is my dashboard account page",
    response: "Visit /dashboard after logging in to manage orders, cart, and listings."
  }
];