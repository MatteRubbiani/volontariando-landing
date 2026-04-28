export const languages = {
	it: 'IT',
	en: 'EN',
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = 'it';

export const ui = {
	it: {
		seo: {
			title: 'Volontariando | Volontariato digitale a impatto misurabile',
			description:
				"Una piattaforma digitale che connette cittadini, organizzazioni non profit e imprese per un volontariato accessibile, misurabile e ad alto impatto sociale.",
		},
		concept:
			"Una piattaforma digitale che connette cittadini, organizzazioni non profit e imprese per un volontariato accessibile, misurabile e ad alto impatto sociale.",
		nav: {
			volunteers: 'Volontari',
			associations: 'Associazioni',
			companies: 'Imprese ESG',
			login: 'Accedi',
		},
		hero: {
			eyebrow: 'Social innovation platform',
			title: "L'evoluzione digitale del volontariato",
			subtitle:
				'Costruiamo una nuova infrastruttura civica per attivare persone, organizzazioni e aziende con processi moderni e risultati misurabili.',
			primaryCta: 'Inizia ora',
			secondaryLink: 'Esplora la piattaforma',
			cards: [
				{
					title: 'Accessibile by design',
					description: 'Esperienza semplice per partecipare, coordinare iniziative e partire senza attrito.',
				},
				{
					title: 'Misurabile in tempo reale',
					description: "Dati chiari sull'impatto generato, utili a volontari, enti e stakeholder.",
				},
				{
					title: 'Impatto che scala',
					description: 'Una regia unica che accelera la collaborazione tra cittadini, nonprofit e imprese.',
				},
			],
			metrics: [
				{
					label: 'Cittadini',
					title: 'People first',
					description: 'Esperienze progettate per attivare comunita locali in modo continuativo.',
				},
				{
					label: 'Nonprofit',
					title: 'Execution layer',
					description: 'Strumenti operativi per accelerare onboarding e coordinamento sul campo.',
				},
				{
					label: 'Aziende',
					title: 'Measurable impact',
					description: 'KPI e reporting ESG per decisioni rapide e accountability trasparente.',
				},
			],
		},
		volunteers: {
			eyebrow: 'Per volontari',
			title: 'Talento civico, risultati concreti.',
			description:
				'Ogni persona puo trovare il contesto giusto per contribuire, con percorsi guidati e tracciamento del valore generato.',
			cards: [
				{
					eyebrow: 'Matching basato su competenze',
					title: 'Opportunita in linea con il tuo profilo',
					description:
						'Il matching valorizza skill, disponibilita e interessi per proporre attivita ad alta rilevanza personale e sociale.',
				},
				{
					eyebrow: 'Mappa interattiva',
					title: 'Cause vicine, impatto immediato',
					description:
						"Visualizza in pochi secondi le opportunita nel tuo territorio e unisciti alle iniziative con onboarding rapido.",
				},
				{
					eyebrow: 'Percorso professionale',
					title: 'Esperienze utili anche alla crescita',
					description:
						'Competenze e contributi restano tracciati in modo chiaro per raccontare il tuo impatto con credibilita.',
				},
			],
			cta: 'Registrati come volontario',
		},
		associations: {
			eyebrow: 'Per associazioni',
			title: 'Digitalizza i processi, rafforza la fiducia.',
			description:
				'Semplifica la gestione operativa e attiva una rete affidabile per crescere con partner, volontari e aziende.',
			cards: [
				{
					eyebrow: 'Digitalizzazione dei processi',
					title: 'Dal recruiting alla conferma presenze',
					description:
						'Flussi digitali per candidature, turni, comunicazioni e coordinamento operativo in un unico ambiente.',
				},
				{
					eyebrow: 'Rete di fiducia verificata',
					title: 'Collaborazioni trasparenti e sicure',
					description:
						'Profili verificati e governance chiara per costruire partnership solide con cittadini e stakeholder territoriali.',
				},
				{
					eyebrow: 'Execution orientata ai risultati',
					title: 'Meno attrito, piu impatto',
					description:
						'Riduci il carico amministrativo e concentra il team su attivazione volontari e obiettivi sociali misurabili.',
				},
			],
			cta: "Attiva l'associazione",
		},
		companies: {
			eyebrow: 'Per aziende',
			title: 'Strategie ESG che diventano impatto reale.',
			description:
				'Progetta iniziative di volontariato aziendale, coordina team interni e trasforma le attivita in evidenze misurabili.',
			cards: [
				{
					eyebrow: 'Strategie ESG',
					title: 'Programmi sociali allineati al business',
					description:
						'Definisci priorita, obiettivi e governance ESG con una roadmap operativa integrata.',
				},
				{
					eyebrow: "Volontariato aziendale",
					title: 'Team engagement su progetti ad alto valore',
					description:
						'Attiva dipendenti e ambassador con iniziative coordinate insieme a enti nonprofit verificati.',
				},
				{
					eyebrow: "Report d'impatto",
					title: 'Misurazione pronta per stakeholder e board',
					description:
						'Dati tracciabili e KPI leggibili per reporting ESG, comunicazione istituzionale e decisioni data-driven.',
				},
			],
			cta: 'Attiva il piano ESG',
		},
	},
	en: {
		seo: {
			title: 'Volontariando | Digital volunteering with measurable impact',
			description:
				'A digital platform connecting citizens, nonprofits and businesses for accessible, measurable and impactful volunteering.',
		},
		concept:
			'A digital platform connecting citizens, nonprofits and businesses for accessible, measurable and impactful volunteering.',
		nav: {
			volunteers: 'Volunteers',
			associations: 'Nonprofits',
			companies: 'ESG Companies',
			login: 'Login',
		},
		hero: {
			eyebrow: 'Social innovation platform',
			title: 'The digital evolution of volunteering',
			subtitle:
				'We are building a modern civic infrastructure to activate people, nonprofits and businesses with measurable outcomes.',
			primaryCta: 'Start now',
			secondaryLink: 'Explore the platform',
			cards: [
				{
					title: 'Accessible by design',
					description: 'A smooth experience to participate, coordinate and launch initiatives faster.',
				},
				{
					title: 'Measurable in real time',
					description: 'Clear impact data for volunteers, nonprofits and institutional stakeholders.',
				},
				{
					title: 'Built to scale impact',
					description: 'One shared operating layer connecting citizens, nonprofits and businesses.',
				},
			],
			metrics: [
				{
					label: 'Citizens',
					title: 'People first',
					description: 'Experiences designed to activate local communities with continuity.',
				},
				{
					label: 'Nonprofits',
					title: 'Execution layer',
					description: 'Operational tools to accelerate onboarding and field coordination.',
				},
				{
					label: 'Businesses',
					title: 'Measurable impact',
					description: 'Clear ESG KPI and reporting for fast decisions and transparent accountability.',
				},
			],
		},
		volunteers: {
			eyebrow: 'For volunteers',
			title: 'Civic talent, measurable outcomes.',
			description:
				'Every person can find the right way to contribute through guided journeys and clear impact tracking.',
			cards: [
				{
					eyebrow: 'Skill-based matching',
					title: 'Opportunities aligned with your profile',
					description:
						'Matching combines skills, availability and interests to suggest high-relevance opportunities.',
				},
				{
					eyebrow: 'Interactive map',
					title: 'Nearby causes, immediate action',
					description:
						'Discover local opportunities quickly and join initiatives with a fast onboarding flow.',
				},
				{
					eyebrow: 'Professional growth',
					title: 'Experience that strengthens your journey',
					description:
						'Contributions and skills are clearly tracked so you can communicate your impact credibly.',
				},
			],
			cta: 'Sign up as a volunteer',
		},
		associations: {
			eyebrow: 'For nonprofits',
			title: 'Digitize operations, strengthen trust.',
			description:
				'Simplify execution and activate a reliable network to grow with volunteers, partners and companies.',
			cards: [
				{
					eyebrow: 'Process digitalization',
					title: 'From recruiting to attendance validation',
					description:
						'Digital workflows for applications, shifts, communication and coordination in one platform.',
				},
				{
					eyebrow: 'Verified trust network',
					title: 'Transparent and secure collaboration',
					description:
						'Verified profiles and clear governance to build durable partnerships with stakeholders.',
				},
				{
					eyebrow: 'Outcome-oriented execution',
					title: 'Less admin, more impact',
					description:
						'Reduce operational friction and focus teams on volunteer activation and social outcomes.',
				},
			],
			cta: 'Activate your nonprofit',
		},
		companies: {
			eyebrow: 'For businesses',
			title: 'ESG strategies turned into real impact.',
			description:
				'Design corporate volunteering programs, coordinate teams and convert actions into measurable evidence.',
			cards: [
				{
					eyebrow: 'ESG strategies',
					title: 'Social programs aligned with business goals',
					description:
						'Define priorities, governance and ESG objectives with a clear operational roadmap.',
				},
				{
					eyebrow: 'Corporate volunteering',
					title: 'Team engagement through high-value initiatives',
					description:
						'Activate employees and ambassadors with coordinated projects and verified nonprofit partners.',
				},
				{
					eyebrow: 'Impact reporting',
					title: 'Measurable evidence for stakeholders and board',
					description:
						'Traceable data and clear KPI for ESG reporting, institutional storytelling and decisions.',
				},
			],
			cta: 'Activate your ESG plan',
		},
	},
} as const;

export const getLangFromUrl = (url: URL): Language => {
	const [, pathLang] = url.pathname.split('/');
	if (pathLang === 'it' || pathLang === 'en') {
		return pathLang;
	}

	const langParam = url.searchParams.get('lang');
	if (langParam === 'it' || langParam === 'en') {
		return langParam;
	}

	return defaultLang;
};

export const useTranslations = (lang: Language) => ui[lang];
