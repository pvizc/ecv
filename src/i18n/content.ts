// Datos de contacto y textos de la página: edita aquí.
// Los idiomas deben coincidir con `i18n.locales` en astro.config.mjs.

// El orden es el del selector de idioma (en | es).
export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];

// Común a todos los idiomas.
export const profile = {
	name: 'Paulo Vizcaíno',
	location: 'Ensanche de Vallecas',
	// En móvil abre la app de Google Maps.
	mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Metro+Las+Suertes,+Madrid',
	whatsapp: '34628788166', // formato internacional, sin "+" ni espacios
	email: 'learn.english@pvizc.com',
	github: 'https://github.com/pvizc',
	linkedin: 'https://www.linkedin.com/in/pvizc/',
};

export const content = {
	es: {
		tagline: 'Clases particulares de inglés',
		intro:
			'Clases para aprobar, conseguir un título oficial y ganar soltura al hablar. A tu ritmo y centradas en lo que necesitas.',
		description:
			'Clases de inglés presenciales en Ensanche de Vallecas (Madrid), a domicilio y online. ESO, Bachillerato, PAU, universidad, Cambridge hasta el B2 First y conversación.',
		modes: [
			{ label: `Presencial · ${profile.location}`, href: profile.mapsUrl, title: 'Ver en el mapa · Metro Las Suertes' },
			{ label: 'A domicilio' },
			{ label: 'Online' },
		],
		contactLabel: 'Contacto',
		whatsappCta: 'Escríbeme por WhatsApp',
		whatsappMessage: 'Hola, me interesan las clases de inglés.',
		emailSubject: 'Clases de inglés',
		offerTitle: 'En qué te ayudo',
		offer: [
			{
				title: 'ESO y Bachillerato',
				text: 'Refuerzo durante el curso y preparación de exámenes y de la PAU (Selectividad).',
			},
			{
				title: 'Universidad',
				text: 'Apoyo con las asignaturas en inglés y preparación del B1 que muchas universidades piden para obtener el título o acceder a un máster.',
			},
			{
				title: 'Títulos de Cambridge',
				text: 'A2 Key, B1 Preliminary y B2 First. Un título oficial que suma en la universidad, para un Erasmus o en tu primer trabajo.',
			},
			{
				title: 'Conversación',
				text: 'Práctica sobre temas que te interesen, para ganar fluidez y confianza al hablar.',
			},
		],
		pricesTitle: 'Precios',
		perSession: '/ sesión',
		prices: [
			{ title: 'Presencial u online', text: 'Sesiones de unos 50 minutos.', price: '15 €' },
			{
				title: 'A domicilio',
				text: 'Sesiones de unos 50 minutos, más un suplemento por desplazamiento según la zona. Consúltame.',
				price: '15 €',
			},
		],
		stepsTitle: 'Cómo empezamos',
		steps: [
			'Escríbeme por WhatsApp y cuéntame qué necesitas.',
			'Hacemos una primera clase para conocer tu nivel.',
			'Acordamos un horario y empezamos.',
		],
		aboutTitle: 'Sobre mí',
		about: [
			'Soy ingeniero de software y gallego, aunque llevo cinco años viviendo en Madrid. Viví una temporada en Estados Unidos, estudié en la Escuela Oficial de Idiomas y tengo el C1 Advanced de Cambridge.',
			'El inglés es mucho más que una asignatura: es la lengua en la que se comparte gran parte de lo que se investiga, se programa y se crea hoy en día. Te permite estudiar o trabajar fuera, acceder a más oportunidades y disfrutar de series, libros o música en versión original. Mi objetivo es que aprendas a usarlo de verdad, no solo para el examen.',
		],
		language: 'Idioma',
		theme: { legend: 'Tema', system: 'Sistema', light: 'Claro', dark: 'Oscuro' },
	},
	en: {
		tagline: 'Private English lessons',
		intro:
			'Lessons to pass your exams, earn an official certificate and speak with confidence. At your own pace and focused on what you need.',
		description:
			'English lessons in person in Ensanche de Vallecas (Madrid), at your home and online. Secondary school, university entrance exam, university, Cambridge up to B2 First and conversation.',
		modes: [
			{ label: `In person · ${profile.location}`, href: profile.mapsUrl, title: 'See on the map · Las Suertes metro' },
			{ label: 'At your home' },
			{ label: 'Online' },
		],
		contactLabel: 'Contact',
		whatsappCta: 'Message me on WhatsApp',
		whatsappMessage: 'Hi, I’m interested in English lessons.',
		emailSubject: 'English lessons',
		offerTitle: 'How I can help',
		offer: [
			{
				title: 'Secondary school',
				text: 'Support throughout the school year (ESO and Bachillerato) and preparation for exams and the PAU, the university entrance exam.',
			},
			{
				title: 'University',
				text: 'Help with courses taught in English and preparation for the B1 level many universities require to graduate or to access a master’s degree.',
			},
			{
				title: 'Cambridge certificates',
				text: 'A2 Key, B1 Preliminary and B2 First. An official certificate that counts at university, for an Erasmus or in your first job.',
			},
			{
				title: 'Conversation',
				text: 'Practice on topics you’re interested in, to gain fluency and confidence when speaking.',
			},
		],
		pricesTitle: 'Prices',
		perSession: '/ lesson',
		prices: [
			{ title: 'In person or online', text: 'Lessons of about 50 minutes.', price: '€15' },
			{
				title: 'At your home',
				text: 'Lessons of about 50 minutes, plus a travel supplement depending on the area. Just ask.',
				price: '€15',
			},
		],
		stepsTitle: 'Getting started',
		steps: [
			'Message me on WhatsApp and tell me what you need.',
			'We have a first lesson to find out your level.',
			'We agree on a schedule and get started.',
		],
		aboutTitle: 'About me',
		about: [
			'I’m a software engineer from Galicia, and I’ve been living in Madrid for five years. I lived in the United States for a while, studied at the Escuela Oficial de Idiomas (Spain’s official language school) and hold the Cambridge C1 Advanced.',
			'English is much more than a school subject: it’s the language in which much of today’s research, software and creative work is shared. It lets you study or work abroad, opens up more opportunities and lets you enjoy series, books or music in their original language. My goal is for you to really use it, not just for the exam.',
		],
		language: 'Language',
		theme: { legend: 'Theme', system: 'System', light: 'Light', dark: 'Dark' },
	},
} satisfies Record<Locale, unknown>;

export type Content = (typeof content)[Locale];
