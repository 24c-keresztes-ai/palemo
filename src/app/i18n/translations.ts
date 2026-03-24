import { FileText, Map, Bus, Trash2, Building, HelpCircle, Phone, Stethoscope, Briefcase, GraduationCap, Leaf, Shield } from 'lucide-react';

export const translations = {
  EN: {
    nav: {
      home: "Home",
      news: "News",
      services: "Services",
      history: "History",
      contacts: "Contacts",
      football: "Football"
    },
    hero: {
      update: "Update",
      newServices: "New digital services available",
      welcome: "Welcome to the",
      portal: "City Portal",
      desc: "Access local news, municipal services, and community resources all in one place. We are dedicated to providing transparent and efficient services to our citizens.",
      cta: "Explore Services"
    },
    news: {
      sub: "Latest Updates",
      title: "City News & Announcements",
      viewAll: "View all news",
      readMore: "Read more",
      items: [
        {
          id: 1,
          title: "New City Hall Renovations Complete",
          excerpt: "The historic city hall building has reopened its doors after a six-month renovation project aimed at modernizing facilities and improving accessibility.",
          date: "Mar 15, 2026",
          category: "Infrastructure",
          image: "https://images.unsplash.com/photo-1710896875539-7e4702af0615?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwaGFsbCUyMGJ1aWxkaW5nJTIwZGF5fGVufDF8fHx8MTc3NDMzOTMxNHww&ixlib=rb-4.1.0&q=80&w=1080",
          fullContent: {
            intro: "After six months of comprehensive renovation work, Palermo's historic City Hall has officially reopened to the public. The €12 million project has transformed the 19th-century building into a modern, accessible hub for civic services while preserving its architectural heritage.",
            body: "The renovation project focused on three main areas: structural improvements, technological upgrades, and enhanced accessibility. Engineers worked meticulously to reinforce the building's foundation and restore its ornate facades while implementing state-of-the-art climate control systems. New elevators, wheelchair ramps, and accessible restrooms ensure that all citizens can access municipal services with ease. The interior has been redesigned with an open-plan layout featuring natural lighting, energy-efficient LED systems, and modern workspaces for over 200 city employees.",
            highlights: [
              "Complete restoration of the historic façade and original architectural details",
              "Installation of cutting-edge HVAC and energy management systems",
              "Universal accessibility features including elevators and ramps",
              "Modern digital service counters with multilingual support",
              "Eco-friendly materials achieving LEED Gold certification"
            ],
            impact: "The reopening marks a significant milestone in Palermo's commitment to preserving its cultural heritage while embracing modernization. Citizens can now enjoy shorter wait times, improved service delivery, and a welcoming environment. The building is expected to reduce energy consumption by 40% compared to pre-renovation levels.",
            quote: "This renovation represents our dedication to serving the community with excellence while honoring our city's rich history. Every detail was carefully considered to create a space that belongs to all citizens.",
            author: "Mayor Giuseppe Russo"
          }
        },
        {
          id: 2,
          title: "Annual Spring Festival in the Park",
          excerpt: "Join us this weekend for the community outdoor spring festival featuring local artisans, food trucks, and live music for all ages.",
          date: "Mar 12, 2026",
          category: "Community",
          image: "https://images.unsplash.com/photo-1768776179834-93e6cafc6d97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBldmVudCUyMG91dGRvb3JzfGVufDF8fHx8MTc3NDMzOTMxNHww&ixlib=rb-4.1.0&q=80&w=1080",
          fullContent: {
            intro: "This Saturday and Sunday, Villa Giulia Park will come alive with Palermo's beloved Annual Spring Festival. Now in its 15th year, the festival celebrates the arrival of spring with two days of art, music, food, and family entertainment.",
            body: "Over 80 local artisans will showcase their handcrafted goods, from traditional Sicilian ceramics to contemporary jewelry and artwork. Food lovers can explore 25 gourmet food trucks offering everything from arancini and cannoli to international street food. Three stages will host continuous entertainment, including traditional Sicilian folk music, jazz ensembles, rock bands, and children's theater performances. Special workshops throughout the weekend will teach pottery, painting, and traditional crafts to visitors of all ages.",
            highlights: [
              "80+ artisan vendors featuring unique handcrafted products",
              "25 gourmet food trucks with diverse culinary offerings",
              "Live performances on three stages throughout the weekend",
              "Interactive workshops for children and adults",
              "Free admission and family-friendly activities"
            ],
            impact: "The Spring Festival has become a cornerstone of Palermo's cultural calendar, attracting over 30,000 visitors annually. It provides local artisans and small businesses with valuable exposure while strengthening community bonds and celebrating Sicilian culture.",
            quote: "This festival is a testament to the vibrant creativity and warm spirit of our community. It brings families together and showcases the incredible talent we have right here in Palermo.",
            author: "Cultural Director Maria Santoro"
          }
        },
        {
          id: 3,
          title: "Expansion of Public Transit Fleet",
          excerpt: "The city has acquired 20 new zero-emission buses to improve public transportation reliability and reduce our carbon footprint.",
          date: "Mar 10, 2026",
          category: "Transport",
          image: "https://images.unsplash.com/photo-1765034511020-fbf315b3134c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWJsaWMlMjB0cmFuc2l0JTIwYnVzJTIwbW9kZXJufGVufDF8fHx8MTc3NDMzOTMxNHww&ixlib=rb-4.1.0&q=80&w=1080",
          fullContent: {
            intro: "Palermo takes a major step toward sustainable transportation with the introduction of 20 brand-new electric buses. This €18 million investment represents the city's largest expansion of public transit in a decade and underscores our commitment to environmental responsibility.",
            body: "The new fleet consists of state-of-the-art electric buses manufactured by Solaris, each equipped with advanced battery technology providing a range of 250 kilometers per charge. These buses feature climate control, USB charging ports at every seat, real-time GPS tracking displays, and low-floor accessibility for passengers with mobility challenges. Four new charging stations have been installed at strategic depot locations, powered partially by solar panels. The buses will serve high-traffic routes connecting residential neighborhoods to the city center, university campuses, and major employment hubs.",
            highlights: [
              "20 zero-emission electric buses with 250km range",
              "Modern amenities including WiFi, USB charging, and air conditioning",
              "Enhanced accessibility features for all passengers",
              "Solar-powered charging infrastructure at depot locations",
              "Projected reduction of 800 tons of CO2 emissions annually"
            ],
            impact: "This expansion will increase service frequency on key routes by 30%, reducing wait times and overcrowding. Environmental studies project the new fleet will eliminate approximately 800 tons of CO2 emissions per year while reducing noise pollution in residential areas.",
            quote: "Sustainable public transit is not just about reducing emissions—it's about providing reliable, comfortable, and accessible transportation that improves quality of life for everyone in our city.",
            author: "Transport Commissioner Luca Ferraro"
          }
        },
        {
          id: 4,
          title: "New Tech Hub Opening",
          excerpt: "A state-of-the-art innovation center is opening downtown, offering workspaces for startups and free coding classes for youth.",
          date: "Mar 08, 2026",
          category: "Business",
          image: "https://images.unsplash.com/photo-1748353672526-57695dd11cdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBtb2Rlcm4lMjBldXJvcGVhniUyMGNpdHklMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc0MzM5MzExfDA&ixlib=rb-4.1.0&q=80&w=1080"
        },
        {
          id: 5,
          title: "Citywide Recycling Initiative",
          excerpt: "New smart bins are being deployed across all neighborhoods to optimize waste collection and boost recycling rates.",
          date: "Mar 05, 2026",
          category: "Environment",
          image: "https://images.unsplash.com/photo-1710896875539-7e4702af0615?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwaGFsbCUyMGJ1aWxkaW5nJTIwZGF5fGVufDF8fHx8MTc3NDMzOTMxNHww&ixlib=rb-4.1.0&q=80&w=1080"
        },
        {
          id: 6,
          title: "Marathon Causes Road Closures",
          excerpt: "Please be advised of traffic detours this Sunday due to the Annual City Marathon. Find the updated map online.",
          date: "Mar 01, 2026",
          category: "Alert",
          image: "https://images.unsplash.com/photo-1768776179834-93e6cafc6d97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBldmVudCUyMG91dGRvb3JzfGVufDF8fHx8MTc3NDMzOTMxNHww&ixlib=rb-4.1.0&q=80&w=1080"
        }
      ]
    },
    services: {
      sub: "Digital Portal",
      title: "Online Municipal Services",
      desc: "Access essential city services from the comfort of your home. Quick, easy, and secure.",
      viewAll: "View all services",
      details: {
        back: "Back to Services",
        applyTitle: "How to Access",
        applyDesc: "Log in with your Civic ID to securely manage and request this service online.",
        contactTitle: "Need Assistance?",
        contactDesc: "Our support center is open Monday - Friday, 8am to 5pm.",
        actionBtn: "Start Online Process",
        features: [
          "24/7 Secure Online Access",
          "Track Request Status",
          "Digital Delivery & Confirmations"
        ]
      },
      items: [
        { id: 'certificates', name: 'Certificates & Documents', icon: 'FileText', color: 'bg-blue-50 text-blue-600', detail: 'Request and download official city documents, including birth certificates, residence proofs, and marriage licenses.' },
        { id: 'taxes', name: 'Taxes & Payments', icon: 'Building', color: 'bg-emerald-50 text-emerald-600', detail: 'Pay local municipal taxes, parking fines, and service fees securely online.' },
        { id: 'waste', name: 'Waste Collection', icon: 'Trash2', color: 'bg-amber-50 text-amber-600', detail: 'Check your local waste collection schedule, report missed pickups, or request bulk waste removal.' },
        { id: 'planning', name: 'Urban Planning', icon: 'Map', color: 'bg-purple-50 text-purple-600', detail: 'Access zoning maps, track ongoing city development projects, and submit planning feedback.' },
        { id: 'transport', name: 'Public Transport', icon: 'Bus', color: 'bg-rose-50 text-rose-600', detail: 'View real-time bus tracking, download schedules, and purchase digital transit passes.' },
        { id: 'health', name: 'Health Services', icon: 'Stethoscope', color: 'bg-cyan-50 text-cyan-600', detail: 'Find local clinics, book public health appointments, and access wellness resources.' },
        { id: 'emergency', name: 'Emergency Contacts', icon: 'Phone', color: 'bg-red-50 text-red-600', detail: 'Quick access to police, fire, medical emergencies, and municipal crisis hotlines.' },
        { id: 'faq', name: 'FAQ & Support', icon: 'HelpCircle', color: 'bg-gray-50 text-gray-600', detail: 'Find answers to common questions about city services, or open a support ticket.' },
        { id: 'business', name: 'Business Permits', icon: 'Briefcase', color: 'bg-indigo-50 text-indigo-600', detail: 'Apply for commercial licenses, renew business permits, and access entrepreneur resources.' },
        { id: 'education', name: 'Education', icon: 'GraduationCap', color: 'bg-orange-50 text-orange-600', detail: 'Register for public schools, access adult education programs, and find local libraries.' },
        { id: 'environment', name: 'Parks & Environment', icon: 'Leaf', color: 'bg-green-50 text-green-600', detail: 'Discover city parks, reserve picnic areas, and learn about our sustainability initiatives.' },
        { id: 'safety', name: 'Public Safety', icon: 'Shield', color: 'bg-slate-50 text-slate-600', detail: 'Report non-emergency neighborhood issues and access community policing resources.' },
      ]
    },
    history: {
      sub: "Our Heritage",
      title: "City History Timeline",
      desc: "Discover the defining moments that shaped our city over the centuries.",
      timeline: [
        { year: "734 BC", title: "Foundation", desc: "The city was originally founded by Phoenician traders, establishing a major port settlement." },
        { year: "831 AD", title: "Golden Age", desc: "Under new rule, the city flourished into a major cultural and economic capital in the Mediterranean." },
        { year: "1860", title: "Unification", desc: "The city officially became part of the unified nation, entering a modern industrial era." },
        { year: "1930-1993", title: "Toto Riina - Dark Years", desc: "Salvatore 'Totò' Riina, known as 'The Beast', was one of the most ruthless mafia bosses in Sicilian history, responsible for countless crimes until his arrest in 1993." },
        { year: "1962-2023", title: "Matteo Messina Denaro", desc: "One of the most wanted mafia bosses who evaded capture for 30 years. His reign of terror ended with his arrest in 2023, marking a significant victory in the fight against organized crime." },
        { year: "1992", title: "Heroes: Falcone & Borsellino", desc: "Giovanni Falcone and Paolo Borsellino, two courageous anti-mafia judges, sacrificed their lives fighting organized crime in Palermo. Their legacy inspired a generation to stand against the mafia." },
        { year: "1992", title: "Cultural Revival", desc: "A period of intense civic and cultural revival began, restoring historic monuments and public spaces." },
        { year: "2026", title: "Smart City Era", desc: "Launch of the comprehensive digital portal, connecting citizens to fully modernized municipal services." }
      ]
    },
    contact: {
      title: "Contact Us",
      subtitle: "Get in Touch",
      description: "Have questions or need assistance? We're here to help. Reach out to us through any of the channels below.",
      form: {
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        subject: "Subject",
        message: "Your Message",
        submit: "Send Message"
      },
      info: {
        address: "City Hall, Piazza Pretoria, Palermo, Italy",
        phone: "+39 091 740 1111",
        email: "info@comune.palermo.it",
        hours: "Monday - Friday: 8:00 AM - 5:00 PM"
      },
      sections: {
        address: "Address",
        phoneTitle: "Phone",
        emailTitle: "Email",
        hours: "Office Hours"
      }
    },
    football: {
      title: "Palermo FC",
      subtitle: "The Pride of Sicily",
      founded: "Founded",
      stadium: "Stadium",
      capacity: "Capacity",
      colors: "Colors",
      league: "Current League",
      about: {
        title: "About the Club",
        description: "Palermo Football Club, known for its iconic pink and black (rosanero) colors, has been a cornerstone of Sicilian football since 1900. The club has experienced numerous successes in Serie A and has been home to some of football's greatest talents."
      },
      stadiumInfo: {
        title: "Stadio Renzo Barbera",
        description: "The historic home of Palermo FC, Stadio Renzo Barbera has witnessed countless memorable moments since its opening in 1932. Located in the heart of Palermo, the stadium creates an electrifying atmosphere on match days."
      },
      achievements: {
        title: "Major Achievements",
        items: [
          "Serie A: Multiple campaigns in Italy's top flight",
          "Coppa Italia: Quarter-finals and semi-finals appearances",
          "UEFA Cup: Historic European campaigns",
          "Serie B Champions: Multiple promotions",
          "Anglo-Italian Cup: Winners 1992-93"
        ]
      },
      legends: {
        title: "Club Legends",
        players: [
          { name: "Luca Toni", role: "Striker", years: "2003-2005", description: "Serie A top scorer, became one of Italy's greatest forwards" },
          { name: "Edinson Cavani", role: "Forward", years: "2007-2010", description: "Rose to stardom in Palermo before joining Napoli and PSG" },
          { name: "Paulo Dybala", role: "Forward", years: "2012-2015", description: "Started his European career in Palermo's pink jersey" },
          { name: "Javier Pastore", role: "Midfielder", years: "2009-2011", description: "Brilliant playmaker who enchanted Barbera before PSG move" },
          { name: "Amauri", role: "Striker", years: "2005-2007", description: "Prolific goalscorer in rosanero colors" }
        ]
      },
      currentSeason: {
        title: "Current Season",
        league: "Serie B",
        description: "Palermo FC is competing in Serie B, working towards promotion back to Italy's top division. The club is owned by City Football Group and continues its proud tradition."
      }
    },
    footer: {
      about: "Committed to providing transparent, efficient, and accessible services to all citizens and visitors.",
      quickLinks: "Quick Links",
      servicesTitle: "Services",
      contactUs: "Contact Us",
      rights: "City Municipality. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      accessibility: "Accessibility"
    }
  },
  HU: {
    nav: {
      home: "Főoldal",
      news: "Hírek",
      services: "Szolgáltatások",
      history: "Történelem",
      contacts: "Kapcsolat",
      football: "Futball"
    },
    hero: {
      update: "Frissítés",
      newServices: "Új digitális szolgáltatások",
      welcome: "Üdvözöljük a",
      portal: "Városi Portálon",
      desc: "Férjen hozzá a helyi hírekhez, önkormányzati szolgáltatásokhoz és közösségi erőforrásokhoz egy helyen. Célunk, hogy átlátható és hatékony szolgáltatásokat nyújtsunk polgárainknak.",
      cta: "Szolgáltatások Felfedezése"
    },
    news: {
      sub: "Legfrissebbek",
      title: "Városi Hírek és Közlemények",
      viewAll: "Összes hír",
      readMore: "Tovább",
      items: [
        {
          id: 1,
          title: "Befejeződött a Városháza Felújítása",
          excerpt: "A történelmi városháza épülete újra megnyitotta kapuit a hat hónapos felújítási projekt után, amely a létesítmények korszerűsítését célozta.",
          date: "2026. Márc 15.",
          category: "Infrastruktúra",
          image: "https://images.unsplash.com/photo-1710896875539-7e4702af0615?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwaGFsbCUyMGJ1aWxkaW5nJTIwZGF5fGVufDF8fHx8MTc3NDMzOTMxNHww&ixlib=rb-4.1.0&q=80&w=1080"
        },
        {
          id: 2,
          title: "Éves Tavaszi Fesztivál a Parkban",
          excerpt: "Csatlakozzon hozzánk ezen a hétvégén a szabadtéri tavaszi fesztiválon, helyi kézművesekkel, ételkamionokkal és élőzenével.",
          date: "2026. Márc 12.",
          category: "Közösség",
          image: "https://images.unsplash.com/photo-1768776179834-93e6cafc6d97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBldmVudCUyMG91dGRvb3JzfGVufDF8fHx8MTc3NDMzOTMxNHww&ixlib=rb-4.1.0&q=80&w=1080"
        },
        {
          id: 3,
          title: "Tömegközlekedési Flotta Bővítése",
          excerpt: "A város 20 új, zéró emissziós buszt szerzett be a tömegközlekedés megbízhatóságának javítása és a szénlábnyom csökkentése érdekében.",
          date: "2026. Márc 10.",
          category: "Közlekedés",
          image: "https://images.unsplash.com/photo-1765034511020-fbf315b3134c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWJsaWMlMjB0cmFuc2l0JTIwYnVzJTIwbW9kZXJufGVufDF8fHx8MTc3NDMzOTMxNHww&ixlib=rb-4.1.0&q=80&w=1080"
        },
        {
          id: 4,
          title: "Új Technológiai Központ Nyílik",
          excerpt: "Korszerű innovációs központ nyílik a belvárosban, amely munkaterületeket kínál startupoknak és ingyenes programozó kurzusokat fiataloknak.",
          date: "2026. Márc 08.",
          category: "Üzlet",
          image: "https://images.unsplash.com/photo-1748353672526-57695dd11cdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBtb2Rlcm4lMjBldXJvcGVhniUyMGNpdHklMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc0MzM5MzExfDA&ixlib=rb-4.1.0&q=80&w=1080"
        },
        {
          id: 5,
          title: "Városi Újrahasznosítási Kezdeményezés",
          excerpt: "Új okos kukákat telepítünk minden kerületben a hulladékgyűjtés optimalizálása és az újrahasznosítási arány növelése érdekében.",
          date: "2026. Márc 05.",
          category: "Környezet",
          image: "https://images.unsplash.com/photo-1710896875539-7e4702af0615?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwaGFsbCUyMGJ1aWxkaW5nJTIwZGF5fGVufDF8fHx8MTc3NDMzOTMxNHww&ixlib=rb-4.1.0&q=80&w=1080"
        },
        {
          id: 6,
          title: "Maraton Miatti Útlezárások",
          excerpt: "Felhívjuk figyelmüket az e vasárnapi forgalomelterelésekre az Éves Városi Maraton miatt. A frissített térkép elérhető online.",
          date: "2026. Márc 01.",
          category: "Riasztás",
          image: "https://images.unsplash.com/photo-1768776179834-93e6cafc6d97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBldmVudCUyMG91dGRvb3JzfGVufDF8fHx8MTc3NDMzOTMxNHww&ixlib=rb-4.1.0&q=80&w=1080"
        }
      ]
    },
    services: {
      sub: "Digitális Portál",
      title: "Online Önkormányzati Szolgáltatások",
      desc: "Férjen hozz az alapvető városi szolgáltatásokhoz otthonából. Gyors, egyszerű és biztonságos.",
      viewAll: "Összes szolgáltatás",
      details: {
        back: "Vissza a Szolgáltatásokhoz",
        applyTitle: "Hogyan Férhet Hozzá",
        applyDesc: "Jelentkezzen be Városi Azonosítójával a szolgáltatás biztonságos online igényléséhez és kezeléséhez.",
        contactTitle: "Segítségre Van Szüksége?",
        contactDesc: "Ügyfélszolgálatunk hétfőtől péntekig, 8:00 és 17:00 óra között tart nyitva.",
        actionBtn: "Online Folyamat Indítása",
        features: [
          "24/7 Biztonságos Online Hozzáférés",
          "Kérelem Státuszának Nyomon Követése",
          "Digitális Kézbesítés és Visszaigazolás"
        ]
      },
      items: [
        { id: 'certificates', name: 'Iratok és Bizonyítványok', icon: 'FileText', color: 'bg-blue-50 text-blue-600', detail: 'Hivatalos városi dokumentumok igénylése és letöltése, beleértve a születési anyakönyvi kivonatokat, lakcímkártyákat és házassági anyakönyvi kivonatokat.' },
        { id: 'taxes', name: 'Adók és Befizetések', icon: 'Building', color: 'bg-emerald-50 text-emerald-600', detail: 'Helyi önkormányzati adók, parkolási bírságok és szolgáltatási díjak biztonságos online befizetése.' },
        { id: 'waste', name: 'Hulladékkezelés', icon: 'Trash2', color: 'bg-amber-50 text-amber-600', detail: 'Ellenőrizze a helyi hulladékszállítási menetrendet, jelentse a kimaradt elszállítást, vagy kérjen lomtalanítást.' },
        { id: 'planning', name: 'Várostervezés', icon: 'Map', color: 'bg-purple-50 text-purple-600', detail: 'Férjen hozzá az övezeti térképekhez, kövesse nyomon a folyamatban lévő városfejlesztési projekteket, és küldjön visszajelzést.' },
        { id: 'transport', name: 'Tömegközlekedés', icon: 'Bus', color: 'bg-rose-50 text-rose-600', detail: 'Tekintse meg a valós idejű buszkövetést, töltse le a menetrendeket, és vásároljon digitális bérleteket.' },
        { id: 'health', name: 'Egészségügyi Ellátás', icon: 'Stethoscope', color: 'bg-cyan-50 text-cyan-600', detail: 'Keressen helyi klinikákat, foglaljon időpontot a közegészségügyi intézményekbe, és férjen hozzá wellness erőforrásokhoz.' },
        { id: 'emergency', name: 'Vészhelyzeti Elérhetőségek', icon: 'Phone', color: 'bg-red-50 text-red-600', detail: 'Gyors hozzáférés a rendőrséghez, tűzoltósághoz, orvosi vészhelyzetekhez és a városi krízisvonalakhoz.' },
        { id: 'faq', name: 'GYIK és Támogatás', icon: 'HelpCircle', color: 'bg-gray-50 text-gray-600', detail: 'Találjon válaszokat a városi szolgáltatásokkal kapcsolatos gyakori kérdésekre, vagy nyisson támogatási jegyet.' },
        { id: 'business', name: 'Vállalkozói Engedélyek', icon: 'Briefcase', color: 'bg-indigo-50 text-indigo-600', detail: 'Igényeljen kereskedelmi engedélyeket, újítsa meg vállalkozói engedélyeit, és férjen hozzá a vállalkozói erőforrásokhoz.' },
        { id: 'education', name: 'Oktatás', icon: 'GraduationCap', color: 'bg-orange-50 text-orange-600', detail: 'Regisztráljon állami iskolákba, férjen hozzá felnőttképzési programokhoz, és találja meg a helyi könyvtárakat.' },
        { id: 'environment', name: 'Parkok és Környezet', icon: 'Leaf', color: 'bg-green-50 text-green-600', detail: 'Fedezze fel a városi parkokat, foglaljon piknikezőhelyeket, és tájékozódjon fenntarthatósági kezdeményezéseinkről.' },
        { id: 'safety', name: 'Közbiztonság', icon: 'Shield', color: 'bg-slate-50 text-slate-600', detail: 'Jelentse a nem vészhelyzeti jellegű környékbeli problémákat, és férjen hozzá a közösségi rendvédelmi erőforrásokhoz.' },
      ]
    },
    history: {
      sub: "Örökségünk",
      title: "Várostörténeti Idővonal",
      desc: "Fedezze fel azokat a meghatározó pillanatokat, amelyek évszázadokon át formálták városunkat.",
      timeline: [
        { year: "i. e. 734", title: "Alapítás", desc: "A várost eredetileg föníciai kereskedők alapították, jelentős kikötői települést hozva létre." },
        { year: "i. sz. 831", title: "Aranykor", desc: "Új uralom alatt a város jelentős kulturális és gazdasági fővárossá virágzott a Földközi-tengeren." },
        { year: "1860", title: "Egyesülés", desc: "A város hivatalosan is az egyesült nemzet részévé vált, belépve a modern ipari korszakba." },
        { year: "1930-1993", title: "Toto Riina - Dark Years", desc: "Salvatore 'Totò' Riina, known as 'The Beast', was one of the most ruthless mafia bosses in Sicilian history, responsible for countless crimes until his arrest in 1993." },
        { year: "1962-2023", title: "Matteo Messina Denaro", desc: "One of the most wanted mafia bosses who evaded capture for 30 years. His reign of terror ended with his arrest in 2023, marking a significant victory in the fight against organized crime." },
        { year: "1992", title: "Heroes: Falcone & Borsellino", desc: "Giovanni Falcone and Paolo Borsellino, two courageous anti-mafia judges, sacrificed their lives fighting organized crime in Palermo. Their legacy inspired a generation to stand against the mafia." },
        { year: "1992", title: "Kulturális Megújulás", desc: "Az intenzív polgári és kulturális újjászületés időszaka kezdődött el." },
        { year: "2026", title: "Okos Város Korszaka", desc: "Az átfogó digitális portál elindítása, amely összeköti a polgárokat a modernizált szolgáltatásokkal." }
      ]
    },
    contact: {
      title: "Kapcsolat",
      subtitle: "Lépjen Kapcsolatba Velünk",
      description: "Kérdése van vagy segítségre van szüksége? Szívesen segítünk. Keressen minket az alábbi csatornákon.",
      form: {
        name: "Teljes Név",
        email: "E-mail Cím",
        phone: "Telefonszám",
        subject: "Tárgy",
        message: "Üzenet",
        submit: "Üzenet Küldése"
      },
      info: {
        address: "Városháza, Piazza Pretoria, Palermo, Olaszország",
        phone: "+39 091 740 1111",
        email: "info@comune.palermo.it",
        hours: "Hétfő - Péntek: 8:00 - 17:00"
      },
      sections: {
        address: "Cím",
        phoneTitle: "Telefon",
        emailTitle: "E-mail",
        hours: "Nyitvatartás"
      }
    },
    football: {
      title: "Palermo FC",
      subtitle: "Szicília Büszkesége",
      founded: "Alapítva",
      stadium: "Stadion",
      capacity: "Befogadóképesség",
      colors: "Színek",
      league: "Jelenlegi Bajnokság",
      about: {
        title: "A Klubról",
        description: "A Palermo Futball Klub, amely ikonikus rózsaszín és fekete (rosanero) színeiről ismert, 1900 óta a szicíliai futball sarokköve. A klub számos sikert ért el a Serie A-ban, és otthont adott a futball néhány legnagyobb tehetségének."
      },
      stadiumInfo: {
        title: "Stadio Renzo Barbera",
        description: "A Palermo FC történelmi otthona, a Stadio Renzo Barbera számtalan emlékezetes pillanatnak adott otthont 1932-es megnyitása óta. Palermo szívében található, és villamosító hangulatot teremt a meccsnap során."
      },
      achievements: {
        title: "Főbb Eredmények",
        items: [
          "Serie A: Többszörös szereplés az olasz élvonalban",
          "Coppa Italia: Negyeddöntős és elődöntős szereplések",
          "UEFA Kupa: Történelmi európai kampányok",
          "Serie B Bajnok: Többszörös feljutás",
          "Anglo-Olasz Kupa: Győztes 1992-93"
        ]
      },
      legends: {
        title: "Klub Legendák",
        players: [
          { name: "Luca Toni", role: "Csatár", years: "2003-2005", description: "Serie A gólkirály, Olaszország egyik legnagyobb csatára lett" },
          { name: "Edinson Cavani", role: "Támadó", years: "2007-2010", description: "Palermóban lett sztár, mielőtt a Napolihoz és a PSG-hez csatlakozott" },
          { name: "Paulo Dybala", role: "Támadó", years: "2012-2015", description: "Európai karrierjét Palermo rózsaszín mezében kezdte" },
          { name: "Javier Pastore", role: "Középpályás", years: "2009-2011", description: "Briliáns játékmester, aki elbűvölte a Barberát a PSG-átigazolás előtt" },
          { name: "Amauri", role: "Csatár", years: "2005-2007", description: "Produktív gólszerző a rosanero színekben" }
        ]
      },
      currentSeason: {
        title: "Jelenlegi Szezon",
        league: "Serie B",
        description: "A Palermo FC a Serie B-ben versenyez, azon dolgozik, hogy visszajusson az olasz élvonalba. A klubot a City Football Group birtokolja, és folytatja büszke hagyományait."
      }
    },
    footer: {
      about: "Elkötelezettek vagyunk amellett, hogy átlátható, hatékony és hozzáférhető szolgáltatásokat nyújtsunk minden polgárnak és látogatónak.",
      quickLinks: "Gyorslinkek",
      servicesTitle: "Szolgáltatások",
      contactUs: "Kapcsolat",
      rights: "Városi Önkormányzat. Minden jog fenntartva.",
      privacy: "Adatvédelmi Szabályzat",
      terms: "Felhasználási Feltételek",
      accessibility: "Akadálymentesítés"
    }
  },
  IT: {
    nav: {
      home: "Home",
      news: "Notizie",
      services: "Servizi",
      history: "Storia",
      contacts: "Contatti",
      football: "Calcio"
    },
    hero: {
      update: "Aggiornamento",
      newServices: "Nuovi servizi digitali disponibili",
      welcome: "Benvenuti al",
      portal: "Portale Cittadino",
      desc: "Accedi a notizie locali, servizi comunali e risorse della comunità, tutto in un unico posto. Siamo dedicati a fornire servizi trasparenti ed efficienti ai nostri cittadini.",
      cta: "Esplora i Servizi"
    },
    news: {
      sub: "Ultimi Aggiornamenti",
      title: "Notizie e Comunicazioni della Città",
      viewAll: "Vedi tutte le notizie",
      readMore: "Leggi di più",
      items: [
        {
          id: 1,
          title: "Completati i Lavori di Ristrutturazione del Municipio",
          excerpt: "Lo storico edificio del municipio ha riaperto le sue porte dopo un progetto di ristrutturazione di sei mesi volto a modernizzare le strutture e migliorare l'accessibilità.",
          date: "15 Mar 2026",
          category: "Infrastrutture",
          image: "https://images.unsplash.com/photo-1710896875539-7e4702af0615?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwaGFsbCUyMGJ1aWxkaW5nJTIwZGF5fGVufDF8fHx8MTc3NDMzOTMxNHww&ixlib=rb-4.1.0&q=80&w=1080"
        },
        {
          id: 2,
          title: "Festival Annuale di Primavera al Parco",
          excerpt: "Unisciti a noi questo fine settimana per il festival primaverile all'aperto con artigiani locali, food truck e musica dal vivo per tutte le età.",
          date: "12 Mar 2026",
          category: "Comunità",
          image: "https://images.unsplash.com/photo-1768776179834-93e6cafc6d97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBldmVudCUyMG91dGRvb3JzfGVufDF8fHx8MTc3NDMzOTMxNHww&ixlib=rb-4.1.0&q=80&w=1080"
        },
        {
          id: 3,
          title: "Espansione della Flotta di Trasporto Pubblico",
          excerpt: "La città ha acquisito 20 nuovi autobus a zero emissioni per migliorare l'affidabilità del trasporto pubblico e ridurre l'impronta di carbonio.",
          date: "10 Mar 2026",
          category: "Trasporti",
          image: "https://images.unsplash.com/photo-1765034511020-fbf315b3134c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWJsaWMlMjB0cmFuc2l0JTIwYnVzJTIwbW9kZXJufGVufDF8fHx8MTc3NDMzOTMxNHww&ixlib=rb-4.1.0&q=80&w=1080"
        },
        {
          id: 4,
          title: "Apertura del Nuovo Hub Tecnologico",
          excerpt: "Un centro di innovazione all'avanguardia sta aprendo in centro, offrendo spazi di lavoro per startup e corsi di programmazione gratuiti per i giovani.",
          date: "08 Mar 2026",
          category: "Business",
          image: "https://images.unsplash.com/photo-1748353672526-57695dd11cdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBtb2Rlcm4lMjBldXJvcGVhniUyMGNpdHklMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc0MzM5MzExfDA&ixlib=rb-4.1.0&q=80&w=1080"
        },
        {
          id: 5,
          title: "Iniziativa di Riciclaggio Cittadina",
          excerpt: "Nuovi cestini intelligenti vengono distribuiti in tutti i quartieri per ottimizzare la raccolta dei rifiuti e aumentare i tassi di riciclaggio.",
          date: "05 Mar 2026",
          category: "Ambiente",
          image: "https://images.unsplash.com/photo-1710896875539-7e4702af0615?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwaGFsbCUyMGJ1aWxkaW5nJTIwZGF5fGVufDF8fHx8MTc3NDMzOTMxNHww&ixlib=rb-4.1.0&q=80&w=1080"
        },
        {
          id: 6,
          title: "La Maratona Causa Chiusure Stradali",
          excerpt: "Si prega di notare le deviazioni del traffico questa domenica a causa della Maratona Annuale della Città. Trova la mappa aggiornata online.",
          date: "01 Mar 2026",
          category: "Avviso",
          image: "https://images.unsplash.com/photo-1768776179834-93e6cafc6d97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBldmVudCUyMG91dGRvb3JzfGVufDF8fHx8MTc3NDMzOTMxNHww&ixlib=rb-4.1.0&q=80&w=1080"
        }
      ]
    },
    services: {
      sub: "Portale Digitale",
      title: "Servizi Comunali Online",
      desc: "Accedi ai servizi essenziali della città comodamente da casa tua. Veloce, facile e sicuro.",
      viewAll: "Vedi tutti i servizi",
      details: {
        back: "Torna ai Servizi",
        applyTitle: "Come Accedere",
        applyDesc: "Accedi con il tuo ID Civico per gestire e richiedere questo servizio online in modo sicuro.",
        contactTitle: "Hai Bisogno di Assistenza?",
        contactDesc: "Il nostro centro assistenza è aperto dal lunedì al venerdì, dalle 8:00 alle 17:00.",
        actionBtn: "Inizia Processo Online",
        features: [
          "Accesso Online Sicuro 24/7",
          "Traccia lo Stato della Richiesta",
          "Consegna Digitale e Conferme"
        ]
      },
      items: [
        { id: 'certificates', name: 'Certificati e Documenti', icon: 'FileText', color: 'bg-blue-50 text-blue-600', detail: 'Richiedi e scarica documenti ufficiali della città, inclusi certificati di nascita, certificati di residenza e certificati di matrimonio.' },
        { id: 'taxes', name: 'Tasse e Pagamenti', icon: 'Building', color: 'bg-emerald-50 text-emerald-600', detail: 'Paga le tasse comunali locali, le multe per il parcheggio e le tariffe dei servizi in modo sicuro online.' },
        { id: 'waste', name: 'Raccolta Rifiuti', icon: 'Trash2', color: 'bg-amber-50 text-amber-600', detail: 'Controlla il programma locale di raccolta rifiuti, segnala ritiri mancati o richiedi la rimozione di rifiuti ingombranti.' },
        { id: 'planning', name: 'Pianificazione Urbana', icon: 'Map', color: 'bg-purple-50 text-purple-600', detail: 'Accedi alle mappe di zonizzazione, segui i progetti di sviluppo urbano in corso e invia feedback sulla pianificazione.' },
        { id: 'transport', name: 'Trasporto Pubblico', icon: 'Bus', color: 'bg-rose-50 text-rose-600', detail: 'Visualizza il tracciamento degli autobus in tempo reale, scarica gli orari e acquista abbonamenti di trasporto digitali.' },
        { id: 'health', name: 'Servizi Sanitari', icon: 'Stethoscope', color: 'bg-cyan-50 text-cyan-600', detail: 'Trova cliniche locali, prenota appuntamenti per la salute pubblica e accedi alle risorse per il benessere.' },
        { id: 'emergency', name: 'Contatti di Emergenza', icon: 'Phone', color: 'bg-red-50 text-red-600', detail: 'Accesso rapido alla polizia, ai vigili del fuoco, alle emergenze mediche e alle linee di crisi comunali.' },
        { id: 'faq', name: 'FAQ e Supporto', icon: 'HelpCircle', color: 'bg-gray-50 text-gray-600', detail: 'Trova risposte alle domande comuni sui servizi della città o apri un ticket di supporto.' },
        { id: 'business', name: 'Permessi Commerciali', icon: 'Briefcase', color: 'bg-indigo-50 text-indigo-600', detail: 'Richiedi licenze commerciali, rinnova i permessi aziendali e accedi alle risorse per imprenditori.' },
        { id: 'education', name: 'Istruzione', icon: 'GraduationCap', color: 'bg-orange-50 text-orange-600', detail: 'Iscriviti alle scuole pubbliche, accedi ai programmi di istruzione per adulti e trova le biblioteche locali.' },
        { id: 'environment', name: 'Parchi e Ambiente', icon: 'Leaf', color: 'bg-green-50 text-green-600', detail: 'Scopri i parchi cittadini, prenota aree picnic e scopri le nostre iniziative di sostenibilità.' },
        { id: 'safety', name: 'Sicurezza Pubblica', icon: 'Shield', color: 'bg-slate-50 text-slate-600', detail: 'Segnala problemi di vicinato non di emergenza e accedi alle risorse di polizia comunitaria.' },
      ]
    },
    history: {
      sub: "Il Nostro Patrimonio",
      title: "Cronologia della Storia della Città",
      desc: "Scopri i momenti che hanno definito la nostra città nel corso dei secoli.",
      timeline: [
        { year: "734 a.C.", title: "Fondazione", desc: "La città fu originariamente fondata dai commercianti fenici, stabilendo un importante insediamento portuale." },
        { year: "831 d.C.", title: "Età d'Oro", desc: "Sotto il nuovo governo, la città prosperò diventando una grande capitale culturale ed economica nel Mediterraneo." },
        { year: "1860", title: "Unificazione", desc: "La città divenne ufficialmente parte della nazione unificata, entrando nell'era industriale moderna." },
        { year: "1930-1993", title: "Totò Riina - Anni Bui", desc: "Salvatore 'Totò' Riina, conosciuto come 'La Belva', fu uno dei boss mafiosi più spietati della storia siciliana, responsabile di innumerevoli crimini fino al suo arresto nel 1993." },
        { year: "1962-2023", title: "Matteo Messina Denaro", desc: "Uno dei boss mafiosi più ricercati che ha eluso la cattura per 30 anni. Il suo regno di terrore è terminato con il suo arresto nel 2023, segnando una vittoria significativa nella lotta contro il crimine organizzato." },
        { year: "1992", title: "Eroi: Falcone e Borsellino", desc: "Giovanni Falcone e Paolo Borsellino, due coraggiosi giudici antimafia, hanno sacrificato le loro vite combattendo il crimine organizzato a Palermo. La loro eredità ha ispirato una generazione a opporsi alla mafia." },
        { year: "1992", title: "Rinascita Culturale", desc: "Iniziò un periodo di intensa rinascita civile e culturale, restaurando monumenti storici e spazi pubblici." },
        { year: "2026", title: "Era della Smart City", desc: "Lancio del portale digitale completo, che collega i cittadini ai servizi comunali completamente modernizzati." }
      ]
    },
    contact: {
      title: "Contattaci",
      subtitle: "Mettiti in Contatto",
      description: "Hai domande o hai bisogno di assistenza? Siamo qui per aiutarti. Contattaci attraverso uno dei canali qui sotto.",
      form: {
        name: "Nome Completo",
        email: "Indirizzo Email",
        phone: "Numero di Telefono",
        subject: "Oggetto",
        message: "Il Tuo Messaggio",
        submit: "Invia Messaggio"
      },
      info: {
        address: "Palazzo Comunale, Piazza Pretoria, Palermo, Italia",
        phone: "+39 091 740 1111",
        email: "info@comune.palermo.it",
        hours: "Lunedì - Venerdì: 8:00 - 17:00"
      },
      sections: {
        address: "Indirizzo",
        phoneTitle: "Telefono",
        emailTitle: "Email",
        hours: "Orari di Apertura"
      }
    },
    football: {
      title: "Palermo FC",
      subtitle: "Il Pride of Sicily",
      founded: "Fondata",
      stadium: "Stadio",
      capacity: "Capacità",
      colors: "Colori",
      league: "Attuale Lega",
      about: {
        title: "Sul Club",
        description: "Palermo Football Club, noto per i suoi iconeici colori rosa e nero (rosanero), è stato un pilastro del calcio siciliano dal 1900. Il club ha avuto numerose successi in Serie A e ha ospitato alcuni dei più grandi talenti del calcio."
      },
      stadiumInfo: {
        title: "Stadio Renzo Barbera",
        description: "Il tetro storico di Palermo FC, Stadio Renzo Barbera, ha testimoniato numerose memorabili occasioni dal suo apertura nel 1932. Situato nel cuore di Palermo, lo stadio crea un'atmosfera elettrizzante nei giorni di partita."
      },
      achievements: {
        title: "Principali Realizzazioni",
        items: [
          "Serie A: Numerose campagne nella prima lega italiana",
          "Coppa Italia: Apparizioni in semifinale e in finale",
          "UEFA Cup: Campagne storiche in Europa",
          "Campioni di Serie B: Numerose promozioni",
          "Coppa Anglo-Italiana: Vincitori 1992-93"
        ]
      },
      legends: {
        title: "Leggende del Club",
        players: [
          { name: "Luca Toni", role: "Attaccante", years: "2003-2005", description: "Top scorer della Serie A, divenuto uno dei più grandi attaccanti italiani" },
          { name: "Edinson Cavani", role: "Attaccante", years: "2007-2010", description: "Si è fatto stella a Palermo prima di trasferirsi a Napoli e al PSG" },
          { name: "Paulo Dybala", role: "Attaccante", years: "2012-2015", description: "Ha iniziato la sua carriera europea con la maglia rosa di Palermo" },
          { name: "Javier Pastore", role: "Centrocampista", years: "2009-2011", description: "Brillante giocatore creativo che ha incantato il Barbera prima del suo trasferimento al PSG" },
          { name: "Amauri", role: "Attaccante", years: "2005-2007", description: "Produttore di gol nei colori rosanero" }
        ]
      },
      currentSeason: {
        title: "Stagione Corrente",
        league: "Serie B",
        description: "Palermo FC sta competendo in Serie B, lavorando per la promozione di ritorno alla prima divisione italiana. Il club è posseduto da City Football Group e continua la sua tradizione orgogliosa."
      }
    },
    footer: {
      about: "Impegnati a fornire servizi trasparenti, efficienti e accessibili a tutti i cittadini e visitatori.",
      quickLinks: "Link Rapidi",
      servicesTitle: "Servizi",
      contactUs: "Contattaci",
      rights: "Comune Città. Tutti i diritti riservati.",
      privacy: "Politica sulla Privacy",
      terms: "Termini di Servizio",
      accessibility: "Accessibilità"
    }
  }
};