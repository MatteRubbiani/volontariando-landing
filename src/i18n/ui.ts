export const languages = {
	it: 'IT',
	en: 'EN',
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = 'it';

const italianUi = {
	seo: {
		title: 'Volontariando | Connettiamo comunità, associazioni e imprese',
		description:
			'Abbiamo creato Volontariando per connettere cittadini, associazioni del Terzo Settore e imprese locali. Riduciamo gli attriti, semplifichiamo il matching e rendiamo il volontariato accessibile e misurabile per tutta la comunità.',
	},
	concept:
		'Abbiamo costruito un ecosistema digitale che unisce cittadini, associazioni del Terzo Settore e imprese locali in un unico flusso operativo.',
	nav: {
		volunteers: 'Volontari',
		associations: 'Associazioni',
		companies: 'Imprese e ESG',
		login: 'Accedi alla piattaforma',
	},
	hero: {
		eyebrow: 'La nostra missione',
		title: 'Connettiamo il volontariato locale, senza attriti',
		subtitle:
			'Abbiamo progettato Volontariando per semplificare il matching tra persone, enti e imprese, accelerare l’attivazione e rendere ogni risultato tracciabile per tutta la comunità.',
		primaryCta: 'Accedi ora',
		secondaryLink: 'Scopri come funziona',
		cards: [
			{
				title: 'Connettiamo chi vuole agire',
				description: 'Mettiamo in relazione cittadini, associazioni e imprese in uno spazio unico e immediato.',
			},
			{
				title: 'Semplifichiamo ogni passaggio',
				description: 'Riduciamo burocrazia e complessità con percorsi guidati, veloci e facili da gestire.',
			},
			{
				title: 'Misuriamo il valore generato',
				description: 'Trasformiamo attività e risultati in dati chiari, utili per decidere meglio e crescere insieme.',
			},
		],
		metrics: [
			{
				label: 'Cittadini',
				title: 'Partecipazione più semplice',
				description: 'Aiutiamo ogni persona a trovare opportunità pertinenti e ad attivarsi anche con poco tempo.',
			},
			{
				label: 'Associazioni',
				title: 'Gestione più leggera',
				description: 'Affianchiamo gli enti con strumenti concreti per attrarre volontari adatti e monitorare attività.',
			},
			{
				label: 'Imprese',
				title: 'ESG con evidenze concrete',
				description: 'Mettiamo a disposizione indicatori pronti per rendicontazione sociale ESG e bilanci di sostenibilità.',
			},
		],
	},
	volunteers: {
		eyebrow: 'Per i volontari',
		title: 'Trova il tuo spazio per fare la differenza',
		description:
			'Noi semplifichiamo il cammino dal desiderio di agire alla scelta concreta. Creiamo percorsi trasparenti e immediati, sgomberi da complessità, dove il tuo impegno trova significato e traccia.',
		cards: [
			{
				eyebrow: 'Matching intelligente',
				title: 'Opportunità pensate per te',
				description:
					'Utilizziamo algoritmi sofisticati per incrociare interessi, competenze e tempo disponibile. Ogni proposta è ponderata, non casuale. Ti guidiamo verso scelte coerenti e consapevoli.',
			},
			{
				eyebrow: 'Comunità inclusiva e protetta',
				title: 'Stringi legami in uno spazio sicuro',
				description:
					'Entri in una comunità dove non c\'è spazio per giudizi, pregiudizi o dinamiche tossiche. Crediamo che il volontariato sia straordinaria occasione di socialità autentica: conosci persone che condividono i tuoi valori, fai rete e tessi legami significativi in un ambiente completamente protetto e accogliente.',
			},
			{
				eyebrow: 'Crescita e riconoscimento',
				title: 'Valorizza competenze che sviluppi davvero',
				description:
					'Tracciamo ore e esperienze. Le soft skill che costruisci - collaborazione, leadership, problem solving - diventano attestazioni concrete, parte del tuo profilo professionale e del tuo percorso di sviluppo.',
			},
		],
		cta: 'Registrati come volontario',
	},
	associations: {
		eyebrow: 'Per le associazioni',
		title: 'Siamo qui per aiutarvi a fare di più con meno risorse',
		description:
			'Sappiamo quanto sia difficile gestire attività, persone e adempimenti con team ridotti: vi aiutiamo a raccontarvi meglio, trovare candidati adatti e alleggerire il lavoro operativo.',
		cards: [
			{
				eyebrow: 'Schede volontariato',
				title: 'Vi aiutiamo a pubblicare richieste chiare',
				description:
					'Vi forniamo strumenti per creare schede complete e immediate, con obiettivi, attività, tempi e modalità di partecipazione.',
			},
			{
				eyebrow: 'Candidature coerenti',
				title: 'Vi aiutiamo a trovare candidati più pertinenti',
				description:
					'Con requisiti chiari e competenze sviluppabili, vi aiutiamo a ricevere candidature davvero in linea con la vostra missione.',
			},
			{
				eyebrow: 'Monitoraggio attività',
				title: 'Alleggeriamo il peso della rendicontazione',
				description:
					'Vi aiutiamo a monitorare presenze, ore e avanzamento con dati ordinati, così potete concentrarvi sull’impatto sociale.',
			},
		],
		cta: 'Attiva il profilo associazione',
	},
	companies: {
		eyebrow: 'Per imprese e sostenibilità ESG',
		title: 'Lavoriamo al vostro fianco per una responsabilità sociale concreta',
		description:
			'Vi forniamo strumenti operativi, pensati soprattutto per le PMI, per attivare iniziative sociali senza costruire team interni dedicati.',
		cards: [
			{
				eyebrow: 'Partnership territoriali',
				title: 'Facilitiamo partnership territoriali affidabili',
				description:
					'Vi aiutiamo a connettervi con enti affidabili per erogazioni liberali, donazioni e sponsorizzazioni, con accesso sicuro e trasparente a benefici e incentivi fiscali.',
			},
			{
				eyebrow: 'Volontariato aziendale',
				title: 'Attiviamo programmi in tempi rapidi',
				description:
					'Vi aiutiamo a organizzare iniziative di team building solidale con percorsi snelli e coordinamento immediato.',
			},
			{
				eyebrow: 'Impatto e rendicontazione',
				title: 'Vi mettiamo a disposizione dashboard pronte all’uso',
				description:
					'Tracciamo insieme l’impatto con grafici e dati pronti per semplificare rendicontazione ESG e bilanci di sostenibilità.',
			},
		],
		cta: 'Attiva il percorso ESG',
	},
} as const;

export const ui = {
	it: italianUi,
	en: italianUi,
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
