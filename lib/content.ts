// All visible text, in English and Tamil. Keep both languages in the same shape.

const en = {
  langLabel: "தமிழ்",
  status: {
    open: (t: string) => `Open now · closes ${t}`,
    soon: (t: string) => `Closing soon · ${t}`,
    closed: (t: string) => `Closed · opens ${t}`,
    fallback: (t: string) => `Closes ${t}`,
    time: (h: number, m: number) => {
      const hr = h % 12 || 12;
      return `${hr}${m ? ":" + String(m).padStart(2, "0") : ""} ${h >= 12 ? "PM" : "AM"}`;
    },
  },
  address: { street: "12, Erikarai Road", city: "Pennagaram", state: "Tamil Nadu" },
  nav: { care: "Care", visit: "Your visit", book: "Appointment", faq: "FAQ", find: "Find us", call: "Call the hospital" },
  hero: {
    eyebrow: "Pennagaram · Dharmapuri District",
    h1a: "Careful medicine,",
    h1b: "close to home.",
    lede: "Pavithra Hospital looks after families on Erikarai Road and the villages around Pennagaram — from a child's fever at night to the birth of a new one. Walk in, or call ahead and we'll be ready for you.",
    directions: "Get directions",
    book: "Request appointment",
    photoAlt: "Doctor in a white coat with a stethoscope in a hospital ward",
  },
  card: {
    today: "Today",
    rating: "on Google",
    note: "In an emergency, come straight in — no appointment needed.",
  },
  map: { hospital: "Pavithra Hospital", road: "Erikarai Rd", west: "Hogenakkal", east: "Dharmapuri", town: "Pennagaram" },
  facts: [
    { k: "4.8★", v: "Google patient rating" },
    { k: "Walk-in", v: "No appointment needed" },
    { k: "9 PM", v: "Open until" },
    { k: "தமிழ் · EN", v: "Care explained in your language" },
  ],
  care: {
    eyebrow: "What we treat",
    title: "Everyday care, and the days that aren't everyday.",
    items: [
      { title: "Emergency care", short: "Emergency", body: "Injuries, sudden pain, high fever, breathing trouble. Come in directly — you'll be seen first and stabilised, with referral arranged if specialist care is needed." },
      { title: "Maternity care", short: "Maternity", body: "Antenatal check-ups through delivery and the weeks after. A calm, clean ward and nurses who stay with the mother, not just the chart." },
      { title: "Paediatrics", short: "Paediatrics", body: "Fevers, coughs, stomach upsets, vaccinations and growth checks for babies and children — explained plainly to parents." },
      { title: "General check-ups", short: "Check-ups", body: "Blood pressure, sugar, routine health checks and follow-up for long-term conditions, so small problems stay small." },
      { title: "Outpatient services", short: "Outpatient", body: "Consultations without admission. See the doctor, get your prescription and advice, and be home the same day." },
      { title: "Nursing services", short: "Nursing", body: "Dressings, injections, IV fluids and inpatient nursing — attentive care for patients who stay with us." },
    ],
  },
  emergency: {
    title: "Emergency? Come straight in.",
    body: "No appointment needed. Call on the way and we'll be ready when you arrive. For an ambulance, dial 108.",
    cta: "Call now",
  },
  visit: {
    eyebrow: "Your visit",
    title1: "No long queues.",
    title2: "No confusing forms.",
    intro: "We're a neighbourhood hospital, and we work like one. Here's what to expect when you come in.",
    photoAlt: "A clean, bright patient room",
    steps: [
      { title: "Call or walk in", body: "Phone the front desk to check the doctor's timings, or simply come in during opening hours." },
      { title: "Bring what you have", body: "Earlier prescriptions, reports and scan results help the doctor understand your history faster. For maternity, bring your antenatal card." },
      { title: "See the doctor", body: "Consultation, tests if needed, and a clear explanation of the treatment — in Tamil or English." },
      { title: "Follow up", body: "We'll tell you when to come back. Call us anytime if symptoms change before then." },
    ],
  },
  book: {
    eyebrow: "Appointment",
    title: "Tell us when suits you.",
    body: "Send your details and the front desk will call you back to confirm a time.",
    or: "Prefer to talk?",
    name: "Your name",
    phone: "Mobile number",
    service: "Reason for visit",
    servicePick: "Choose one",
    other: "Something else",
    day: "Preferred day",
    note: "Anything we should know? (optional)",
    submit: "Send on WhatsApp",
    small: "Opens WhatsApp with your details filled in. Not for emergencies — please call or come in.",
    msg: (n: string, p: string, s: string, d: string, x: string) =>
      `Hello Pavithra Hospital, I'd like an appointment.\nName: ${n}\nMobile: ${p}\nReason: ${s}\nPreferred day: ${d}${x ? `\nNote: ${x}` : ""}`,
  },
  reviews: {
    eyebrow: "What patients say",
    meta: "Average rating on Google",
    read: "Read reviews on Google",
    ask: "Were you treated here? A short review helps other families in Pennagaram find good care.",
    write: "Write a review",
  },
  faq: {
    eyebrow: "Questions",
    title: "Good to know before you come.",
    items: [
      { q: "Do I need an appointment?", a: "No. Walk-ins are welcome during opening hours, and emergencies are seen straight away. Calling ahead helps if you'd like to see a particular doctor." },
      { q: "What are your timings?", a: "We close at 9:00 PM. Call 063831 20033 to check the doctor's consultation hours for the day." },
      { q: "Do you handle deliveries?", a: "Yes. Our maternity care covers antenatal check-ups, delivery and care after birth. Talk to us early in your pregnancy so we can plan together." },
      { q: "What should I bring?", a: "Any previous prescriptions, test reports and scans, plus your Aadhaar or another ID card." },
      { q: "Where exactly are you?", a: "12, Erikarai Road, Pennagaram. Tap 'Get directions' to navigate with Google Maps." },
    ],
  },
  find: {
    eyebrow: "Find us",
    title: "Erikarai Road, Pennagaram.",
    address: "Address",
    phone: "Phone",
    today: "Today",
    emergency: "Emergency",
    emergencyText: "Walk in directly — no appointment needed.",
    maps: "Open in Google Maps",
    call: "Call",
  },
  footer: {
    visit: "Visit",
    call: "Call",
    care: "Care",
    careText: ["Emergency · Maternity", "Paediatrics · Outpatient"],
    base: "For a medical emergency, call 108 or come straight in.",
  },
  callbar: { call: "Call now", directions: "Directions" },
};

export type Dict = typeof en;

const ta: Dict = {
  langLabel: "English",
  status: {
    open: (t) => `இப்போது திறந்துள்ளது · ${t} வரை`,
    soon: (t) => `விரைவில் மூடப்படும் · ${t}`,
    closed: (t) => `மூடப்பட்டுள்ளது · ${t} திறக்கும்`,
    fallback: (t) => `${t} வரை`,
    time: (h, m) => {
      const part = h < 12 ? "காலை" : h < 16 ? "மதியம்" : h < 19 ? "மாலை" : "இரவு";
      const hr = h % 12 || 12;
      return `${part} ${hr}${m ? ":" + String(m).padStart(2, "0") : ""} மணி`;
    },
  },
  address: { street: "12, எரிக்கரை சாலை", city: "பென்னாகரம்", state: "தமிழ்நாடு" },
  nav: { care: "சிகிச்சைகள்", visit: "வருகை", book: "முன்பதிவு", faq: "கேள்விகள்", find: "வழி", call: "அழைக்கவும்" },
  hero: {
    eyebrow: "பென்னாகரம் · தருமபுரி மாவட்டம்",
    h1a: "அக்கறையான மருத்துவம்,",
    h1b: "உங்கள் அருகிலேயே.",
    lede: "எரிக்கரை சாலையிலும் பென்னாகரத்தைச் சுற்றியுள்ள கிராமங்களிலும் உள்ள குடும்பங்களை பவித்ரா மருத்துவமனை கவனித்துக் கொள்கிறது — இரவில் குழந்தைக்கு வரும் காய்ச்சல் முதல் புதிய உயிரின் பிறப்பு வரை. நேரடியாக வாருங்கள், அல்லது முன்பே அழைத்தால் நாங்கள் தயாராக இருப்போம்.",
    directions: "வழி காட்டு",
    book: "முன்பதிவு செய்ய",
    photoAlt: "மருத்துவமனை வார்டில் ஸ்டெதஸ்கோப்புடன் மருத்துவர்",
  },
  card: {
    today: "இன்று",
    rating: "Google மதிப்பீடு",
    note: "அவசர நிலையில் நேரடியாக வாருங்கள் — முன்பதிவு தேவையில்லை.",
  },
  map: { hospital: "பவித்ரா மருத்துவமனை", road: "எரிக்கரை சாலை", west: "ஒகேனக்கல்", east: "தருமபுரி", town: "பென்னாகரம்" },
  facts: [
    { k: "4.8★", v: "Google நோயாளிகள் மதிப்பீடு" },
    { k: "நேரடி வருகை", v: "முன்பதிவு தேவையில்லை" },
    { k: "இரவு 9", v: "மணி வரை திறந்திருக்கும்" },
    { k: "தமிழ் · EN", v: "உங்கள் மொழியில் விளக்கம்" },
  ],
  care: {
    eyebrow: "எங்கள் சிகிச்சைகள்",
    title: "அன்றாட சிகிச்சையும், அவசர நாட்களுக்கான கவனிப்பும்.",
    items: [
      { title: "அவசர சிகிச்சை", short: "அவசர சிகிச்சை", body: "காயங்கள், திடீர் வலி, அதிக காய்ச்சல், மூச்சுத் திணறல். நேரடியாக வாருங்கள் — உடனே பரிசோதித்து நிலைப்படுத்துவோம்; சிறப்பு சிகிச்சை தேவைப்பட்டால் பரிந்துரை ஏற்பாடு செய்வோம்." },
      { title: "மகப்பேறு சிகிச்சை", short: "மகப்பேறு", body: "கர்ப்பகால பரிசோதனைகள் முதல் பிரசவம் மற்றும் அதன் பிறகான வாரங்கள் வரை. அமைதியான, சுத்தமான வார்டு; தாயுடனே இருக்கும் செவிலியர்கள்." },
      { title: "குழந்தைகள் நலம்", short: "குழந்தைகள் நலம்", body: "காய்ச்சல், இருமல், வயிற்றுக் கோளாறு, தடுப்பூசிகள், வளர்ச்சி பரிசோதனைகள் — பெற்றோருக்கு எளிமையாக விளக்கப்படும்." },
      { title: "பொது உடல் பரிசோதனை", short: "உடல் பரிசோதனை", body: "இரத்த அழுத்தம், சர்க்கரை, வழக்கமான பரிசோதனைகள் மற்றும் நீண்டகால நோய்களுக்கான தொடர் கவனிப்பு — சிறு பிரச்சினைகள் பெரிதாகாமல் இருக்க." },
      { title: "வெளிநோயாளர் சேவை", short: "வெளிநோயாளர்", body: "அனுமதி இல்லாமல் ஆலோசனை. மருத்துவரைப் பார்த்து, மருந்துச் சீட்டும் ஆலோசனையும் பெற்று, அதே நாளில் வீடு திரும்புங்கள்." },
      { title: "செவிலியர் சேவை", short: "செவிலியர் சேவை", body: "கட்டு போடுதல், ஊசி, IV திரவங்கள் மற்றும் உள்நோயாளர் கவனிப்பு — தங்கும் நோயாளிகளுக்கு கவனமான பராமரிப்பு." },
    ],
  },
  emergency: {
    title: "அவசரமா? நேரடியாக வாருங்கள்.",
    body: "முன்பதிவு தேவையில்லை. வரும் வழியில் அழைத்தால் நீங்கள் வரும்போது தயாராக இருப்போம். ஆம்புலன்ஸுக்கு 108 அழையுங்கள்.",
    cta: "இப்போதே அழை",
  },
  visit: {
    eyebrow: "உங்கள் வருகை",
    title1: "நீண்ட வரிசை இல்லை.",
    title2: "குழப்பமான படிவங்கள் இல்லை.",
    intro: "நாங்கள் ஒரு அக்கம்பக்க மருத்துவமனை; அப்படியே செயல்படுகிறோம். நீங்கள் வரும்போது என்ன எதிர்பார்க்கலாம் என்பது இங்கே.",
    photoAlt: "சுத்தமான, வெளிச்சமான நோயாளர் அறை",
    steps: [
      { title: "அழையுங்கள் அல்லது நேரடியாக வாருங்கள்", body: "மருத்துவரின் நேரத்தை அறிய வரவேற்பை அழையுங்கள், அல்லது திறந்திருக்கும் நேரத்தில் நேரடியாக வாருங்கள்." },
      { title: "பழைய ஆவணங்களைக் கொண்டு வாருங்கள்", body: "பழைய மருந்துச் சீட்டுகள், அறிக்கைகள், ஸ்கேன் முடிவுகள் உங்கள் உடல்நல வரலாற்றை மருத்துவர் விரைவில் புரிந்துகொள்ள உதவும். மகப்பேறுக்கு, கர்ப்பகால அட்டையைக் கொண்டு வாருங்கள்." },
      { title: "மருத்துவரைச் சந்தியுங்கள்", body: "ஆலோசனை, தேவைப்பட்டால் பரிசோதனைகள், சிகிச்சை பற்றிய தெளிவான விளக்கம் — தமிழிலோ ஆங்கிலத்திலோ." },
      { title: "தொடர் கவனிப்பு", body: "மீண்டும் எப்போது வர வேண்டும் என்று சொல்வோம். அதற்குள் அறிகுறிகள் மாறினால் எப்போது வேண்டுமானாலும் அழையுங்கள்." },
    ],
  },
  book: {
    eyebrow: "முன்பதிவு",
    title: "உங்களுக்கு வசதியான நேரத்தைச் சொல்லுங்கள்.",
    body: "உங்கள் விவரங்களை அனுப்புங்கள்; நேரத்தை உறுதிப்படுத்த வரவேற்பிலிருந்து அழைப்போம்.",
    or: "நேரில் பேச விரும்புகிறீர்களா?",
    name: "உங்கள் பெயர்",
    phone: "கைபேசி எண்",
    service: "வருகைக்கான காரணம்",
    servicePick: "ஒன்றைத் தேர்ந்தெடுக்கவும்",
    other: "வேறு காரணம்",
    day: "விரும்பும் நாள்",
    note: "குறிப்பு (விருப்பம்)",
    submit: "WhatsApp-இல் அனுப்பு",
    small: "உங்கள் விவரங்களுடன் WhatsApp திறக்கும். அவசரத்திற்கு அல்ல — தயவுசெய்து அழையுங்கள் அல்லது நேரடியாக வாருங்கள்.",
    msg: (n, p, s, d, x) =>
      `வணக்கம் பவித்ரா மருத்துவமனை, எனக்கு முன்பதிவு வேண்டும்.\nபெயர்: ${n}\nகைபேசி: ${p}\nகாரணம்: ${s}\nவிரும்பும் நாள்: ${d}${x ? `\nகுறிப்பு: ${x}` : ""}`,
  },
  reviews: {
    eyebrow: "நோயாளிகள் சொல்வது",
    meta: "Google-இல் சராசரி மதிப்பீடு",
    read: "Google-இல் மதிப்புரைகளைப் படிக்க",
    ask: "இங்கு சிகிச்சை பெற்றீர்களா? உங்கள் சிறு மதிப்புரை பென்னாகரத்தில் உள்ள மற்ற குடும்பங்களுக்கு நல்ல சிகிச்சையைக் கண்டறிய உதவும்.",
    write: "மதிப்புரை எழுதுங்கள்",
  },
  faq: {
    eyebrow: "கேள்விகள்",
    title: "வருவதற்கு முன் தெரிந்துகொள்ள.",
    items: [
      { q: "முன்பதிவு அவசியமா?", a: "இல்லை. திறந்திருக்கும் நேரத்தில் நேரடியாக வரலாம்; அவசர நிலைகள் உடனே கவனிக்கப்படும். குறிப்பிட்ட மருத்துவரைப் பார்க்க விரும்பினால் முன்பே அழைக்கவும்." },
      { q: "மருத்துவமனை நேரம் என்ன?", a: "இரவு 9 மணிக்கு மூடப்படும். அன்றைய மருத்துவர் ஆலோசனை நேரத்தை அறிய 063831 20033 அழையுங்கள்." },
      { q: "பிரசவம் பார்க்கப்படுமா?", a: "ஆம். கர்ப்பகால பரிசோதனைகள், பிரசவம், பிரசவத்திற்குப் பிந்தைய கவனிப்பு அனைத்தும் எங்கள் மகப்பேறு சேவையில் அடங்கும். கர்ப்பத்தின் ஆரம்பத்திலேயே எங்களிடம் பேசுங்கள்." },
      { q: "என்ன கொண்டு வர வேண்டும்?", a: "பழைய மருந்துச் சீட்டுகள், பரிசோதனை அறிக்கைகள், ஸ்கேன்கள், மற்றும் ஆதார் அல்லது வேறு அடையாள அட்டை." },
      { q: "மருத்துவமனை எங்கே உள்ளது?", a: "12, எரிக்கரை சாலை, பென்னாகரம். Google Maps-இல் வழி காண 'வழி காட்டு' என்பதை அழுத்துங்கள்." },
    ],
  },
  find: {
    eyebrow: "எங்களை அடைய",
    title: "எரிக்கரை சாலை, பென்னாகரம்.",
    address: "முகவரி",
    phone: "தொலைபேசி",
    today: "இன்று",
    emergency: "அவசரம்",
    emergencyText: "நேரடியாக வாருங்கள் — முன்பதிவு தேவையில்லை.",
    maps: "Google Maps-இல் திற",
    call: "அழை",
  },
  footer: {
    visit: "முகவரி",
    call: "அழைக்க",
    care: "சிகிச்சைகள்",
    careText: ["அவசரம் · மகப்பேறு", "குழந்தைகள் · வெளிநோயாளர்"],
    base: "மருத்துவ அவசரத்திற்கு 108 அழையுங்கள் அல்லது நேரடியாக வாருங்கள்.",
  },
  callbar: { call: "இப்போதே அழை", directions: "வழி" },
};

export const dict = { en, ta };
export type Lang = keyof typeof dict;
