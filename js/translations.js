// pt-PT Portugal
// fr-FR" France
// de-DE Germany
// en-GB United Kingdom
// es-ES Spain
var supportedCultures = ["pt-PT", "fr-FR", "de-DE", "en-GB", "es-ES"];
var currentCulture = "en-GB";
var translations = [
	{
        "id": "and",
        "pt-PT": "e",
        "fr-FR": "et",
        "de-DE": "und",
        "en-GB": "and",
        "es-ES": "y"
    },  
    {
        "id": "notSupported",
        "pt-PT": " não suportado no ambiente atual",
        "fr-FR": " non pris en charge dans l'environnement actuel",
        "de-DE": " nicht in der aktuellen umgebung unterstützt",
        "en-GB": " not supported in current environment",
        "es-ES": " no soportado en el entorno actual"
    },
    {
        "id": "operationError",
        "pt-PT": "Erro de operação",
        "fr-FR": "Erreur d'opération",
        "de-DE": "Betriebsfehler",
        "en-GB": "Operation error",
        "es-ES": "Error de operación"
    },
    {
        "id": "performs",
        "pt-PT": "Executa",
        "fr-FR": "Effectue",
        "de-DE": "Führt aus",
        "en-GB": "Performs",
        "es-ES": "Realiza"
    },
    {
        "id": "detectMe",
        "pt-PT": "Detecta me",
        "fr-FR": "Détectez-moi",
        "de-DE": "Erkenne mich",
        "en-GB": "Detect me",
        "es-ES": "Detectame"
    },
	{
        "id": "pressToCalculate",
        "pt-PT": "pressione-me para calcular ...",
        "fr-FR": "me presser pour calculer ...",
        "de-DE": "drücken mich zu berechnen ...",
        "en-GB": "press me to calculate ...",
        "es-ES": "presione para calcular ..."
    },
	{
        "id": "calculating",
        "pt-PT": "calculando ... por favor aguarde",
        "fr-FR": "calcul ... s'il vous plaît attendre",
        "de-DE": "berechnen ... bitte warten",
        "en-GB": "calculating ... please wait",
        "es-ES": "calculando ... por favor espere"
    },
	{
        "id": "disabledOnSafari",
        "pt-PT": "desativado no Safari",
        "fr-FR": "désactivé sur Safari",
        "de-DE": "deaktiviert auf Safari",
        "en-GB": "disabled on Safari",
        "es-ES": "desactivado en Safari"
    },
    {
        "id": "titleDesc",
        "pt-PT": "Usando <a href='https://www.w3schools.com/jsref/obj_navigator.asp'>navigator</a>, <a href='https://www.w3schools.com/jsref/obj_screen.asp'>screen</a>, <a href='https://www.w3schools.com/jsref/obj_window.asp'>window</a>, <a href='https://www.w3schools.com/jsref/obj_location.asp'>location</a>, <a href='https://www.w3schools.com/jsref/dom_obj_document.asp'>document</a> e <a href='https://mths.be/platform'>platform.js</a>",
        "fr-FR": "Utilisation de <a href='https://www.w3schools.com/jsref/obj_navigator.asp'>navigator</a>, <a href='https://www.w3schools.com/jsref/obj_screen.asp'>screen</a>, <a href='https://www.w3schools.com/jsref/obj_window.asp'>window</a>, <a href='https://www.w3schools.com/jsref/obj_location.asp'>location</a>, <a href='https://www.w3schools.com/jsref/dom_obj_document.asp'>document</a> et <a href='https://mths.be/platform'>platform.js</a>",
        "de-DE": "Mit <a href='https://www.w3schools.com/jsref/obj_navigator.asp'>navigator</a>, <a href='https://www.w3schools.com/jsref/obj_screen.asp'>screen</a>, <a href='https://www.w3schools.com/jsref/obj_window.asp'>window</a>, <a href='https://www.w3schools.com/jsref/obj_location.asp'>location</a>, <a href='https://www.w3schools.com/jsref/dom_obj_document.asp'>document</a> und <a href='https://mths.be/platform'>platform.js</a>",
        "en-GB": "Using <a href='https://www.w3schools.com/jsref/obj_navigator.asp'>navigator</a>, <a href='https://www.w3schools.com/jsref/obj_screen.asp'>screen</a>, <a href='https://www.w3schools.com/jsref/obj_window.asp'>window</a>, <a href='https://www.w3schools.com/jsref/obj_location.asp'>location</a>, <a href='https://www.w3schools.com/jsref/dom_obj_document.asp'>document</a> and <a href='https://mths.be/platform'>platform.js</a>",
        "es-ES": "Uso de <a href='https://www.w3schools.com/jsref/obj_navigator.asp'>navigator</a>, <a href='https://www.w3schools.com/jsref/obj_screen.asp'>screen</a>, <a href='https://www.w3schools.com/jsref/obj_window.asp'>window</a>, <a href='https://www.w3schools.com/jsref/obj_location.asp'>location</a>, <a href='https://www.w3schools.com/jsref/dom_obj_document.asp'>document</a> y <a href='https://mths.be/platform'>platform.js</a>"
    },
    {
        "id": "subTitle",
        "pt-PT": "Informações sobre o ambiente atual ...",
        "fr-FR": "Informations sur l'environnement actuel ...",
        "de-DE": "Informationen zum aktuellen umfeld ...",
        "en-GB": "Information about current environment ...",
        "es-ES": "Información sobre el entorno actual ..."
    },
	{
		"id": "disabled",
		"pt-PT": "Desativado",
		"fr-FR": "Désactivée",
		"de-DE": "Behindert",
		"en-GB": "Disabled",
		"es-ES": "Discapacitado"
	},
    {
        "id": "infoRH",
        "pt-PT": "retorna informações sobre o navegador e o sistema operativo",
        "fr-FR": "renvoie des informations sur le navigateur et le système d'exploitation",
        "de-DE": "gibt von informationen über browser und betriebssystem",
        "en-GB": "returns information about browser and operating system",
        "es-ES": "devuelve información sobre el navegador y el sistema operativo"
    },
    {
        "id": "browserNameRH",
        "pt-PT": "retorna o nome do navegador",
        "fr-FR": "renvoie le nom du navigateur",
        "de-DE": "gibt sie den namen des browsers zurück",
        "en-GB": "returns the name of the browser",
        "es-ES": "devuelve el nombre del navegador"
    },
    {
        "id": "browserVersionRH",
        "pt-PT": "retorna a versão do navegador",
        "fr-FR": "renvoie la version du navigateur",
        "de-DE": "gibt die Browser-Version zurück",
        "en-GB": "returns the browser version",
        "es-ES": "devuelve la versión del navegador"
    },
	{
		"id": "layoutEngineRH",
		"pt-PT": "retorna o nome do mecanismo de layout do navegador",
		"fr-FR": "renvoie le nom du moteur de mise en page du navigateur",
		"de-DE": "gibt sie den namen der layout-engine des browsers zurück",
		"en-GB": "returns the name of the browser's layout engine",
		"es-ES": "devuelve el nombre del motor de diseño del navegador"
	},
	{
		"id": "manufacturerRH",
		"pt-PT": "retorna o nome do fabricante do produto",
		"fr-FR": "renvoie le nom du fabricant du produit",
		"de-DE": "gibt sie den namen des herstellers des produkts zurück",
		"en-GB": "returns the name of the product's manufacturer",
		"es-ES": "devuelve el nombre del fabricante del producto"
	},
	{
		"id": "osRH",
		"pt-PT": "retorna o nome completo do sistema operativo",
		"fr-FR": "renvoie le nom complet du système d'exploitation",
		"de-DE": "gibt sie den vollständigen namen des betriebssystems zurück",
		"en-GB": "returns the complete name of operating system",
		"es-ES": "devuelve el nombre completo del sistema operativo"
	},
	{
		"id": "preReleaseRH",
		"pt-PT": "retorna o indicador de versão alfa/beta",
		"fr-FR": "renvoie l'indicateur de version alpha/bêta",
		"de-DE": "gibt die version anzeige alpha/beta",
		"en-GB": "returns the alpha/beta release indicator",
		"es-ES": "devuelve el indicador de versión alfa/beta"
	},
	{
		"id": "productNameRH",
		"pt-PT": "retorna o nome do produto que hospeda o navegador",
		"fr-FR": "renvoie le nom du produit hébergeant le navigateur",
		"de-DE": "gibt sie den namen des produkts an, der den browser hostet",
		"en-GB": "returns the name of the product hosting the browser",
		"es-ES": "devuelve el nombre del producto que aloja el navegador"
	},
	{
		"id": "OSFamilyRH",
		"pt-PT": "retorna a família do sistema operativo",
		"fr-FR": "renvoie la famille du système d'exploitation",
		"de-DE": "gibt der familie des betriebssystems",
		"en-GB": "returns the family of the operating system",
		"es-ES": "devuelve la familia del sistema operativo"
	},
	{
		"id": "OSVersionRH",
		"pt-PT": "retorna a versão do sistema operativo",
		"fr-FR": "renvoie la version du système d'exploitation",
		"de-DE": "gibt die version des betriebssystems zurück",
		"en-GB": "returns the version of the operating system",
		"es-ES": "devuelve la versión del sistema operativo"
	},
	{
		"id": "CPUArchitectureRH",
		"pt-PT": "retorna a arquitetura da CPU para o qual o sistema operativo foi construido",
		"fr-FR": "renvoie l'architecture CPU pour laquelle le système d'exploitation a été construit",
		"de-DE": "gibt die CPU architektur zurück, für die das betriebssystem aufgebaut wurde",
		"en-GB": "returns the CPU architecture for which the operating system was built",
		"es-ES": "devuelve la arquitectura de la CPU para la que se construyó el sistema operativo"
	},
	{
		"id": "appCodeName",
		"pt-PT": "retorna o nome de código do navegador (todos os navegadores modernos retornam 'Mozilla', por razões de compatibilidade)",
		"fr-FR": "renvoie le nom de code du navigateur (tous les navigateurs modernes renvoient 'Mozilla', pour des raisons de compatibilité)",
		"de-DE": "gibt Sie den codenamen des browsers zurück (alle modernen browser gibt 'Mozilla' zurück, aus kompatibilitätsgründen)",
		"en-GB": "returns the code name of the browser (all modern browsers returns 'Mozilla', for compatibility reasons)",
		"es-ES": "devuelve el nombre de código del navegador (todos los navegadores modernos devuelve 'Mozilla', por razones de compatibilidad)"
	},
	{
		"id": "appName",
		"pt-PT": "retorna o nome do navegador",
		"fr-FR": "renvoie le nom du navigateur",
		"de-DE": "gibt den namen des browsers zurück",
		"en-GB": "returns the name of the browser",
		"es-ES": "devuelve el nombre del navegador"
	},
	{
		"id": "appVersion",
		"pt-PT": "retorna as informações da versão do navegador",
		"fr-FR": "renvoie les informations de version du navigateur",
		"de-DE": "gibt die versionsinformationen des browsers zurück",
		"en-GB": "returns the version information of the browser",
		"es-ES": "devuelve la información de versión del navegador"
	},
	{
		"id": "cookieEnabled",
		"pt-PT": "retorna um valor booleano que especifica se os cookies estão habilitados no navegador",
		"fr-FR": "renvoie une valeur booléenne qui spécifie si les cookies sont activés dans le navigateur",
		"de-DE": "gibt einen booleschen Wert zurück, der angibt, ob cookies im browser aktiviert sind",
		"en-GB": "returns a boolean value that specifies whether cookies are enabled in the browser",
		"es-ES": "devuelve un valor booleano que especifica si las cookies están habilitadas en el navegador"
	},
	{
		"id": "geolocationEnabled",
		"pt-PT": "retorna um valor booleano que especifica se a geolocalização está ativada no navegador",
		"fr-FR": "renvoie une valeur booléenne qui spécifie si la géolocalisation est activée dans le navigateur",
		"de-DE": "gibt Sie einen booleschen wert zurück, der angibt, ob die geolokation im browser aktiviert ist",
		"en-GB": "returns a boolean value that specifies whether geolocation is enabled in the browser",
		"es-ES": "devuelve un valor booleano que especifica si la geolocalización está habilitada en el navegador"
	},
	{
		"id": "language",
		"pt-PT": "retorna a versão do idioma do navegador",
		"fr-FR": "renvoie la version de langue du navigateur",
		"de-DE": "gibt die sprachversion des browsers zurück",
		"en-GB": "returns the language version of the browser",
		"es-ES": "devuelve la versión de idioma del navegador"
	},
	{
		"id": "onLine",
		"pt-PT": "retorna um valor booleano que especifica se o navegador está no modo on-line ou off-line",
		"fr-FR": "renvoie une valeur booléenne qui spécifie si le navigateur est en mode en ligne ou hors ligne",
		"de-DE": "gibt einen booleschen Wert zurück, der angibt, ob sich der browser im online oder offline modus befindet",
		"en-GB": "returns a boolean value that specifies whether the browser is in online or offline mode",
		"es-ES": "devuelve un valor booleano que especifica si el navegador está en modo online o fuera de línea"
	},
	{
		"id": "compiledPlatform",
		"pt-PT": "retorna a plataforma para a qual o navegador é compilado",
		"fr-FR": "renvoie la plate-forme à laquelle le navigateur est compilé",
		"de-DE": "kehrt zurück, für welche plattform der browser kompiliert wird",
		"en-GB": "returns for which platform the browser is compiled",
		"es-ES": "devuelve la plataforma para la que se compila el explorador"
	},
	{
		"id": "product",
		"pt-PT": "retorna o nome do motor (produto) do navegador (todos os navegadores modernos retornam 'Gecko', por motivos de compatibilidade)",
		"fr-FR": "renvoie le nom du moteur (produit) du navigateur (tous les navigateurs modernes renvoient 'Gecko', pour des raisons de compatibilité)",
		"de-DE": "gibt den motor (produkt) name des browsers zurück (alle modernen browser gibt 'Gecko' aus kompatibilitätsgründen zurück)",
		"en-GB": "returns the engine (product) name of the browser (all modern browsers returns 'Gecko', for compatibility reasons)",
		"es-ES": "devuelve el nombre del motor (producto) del navegador (todos los navegadores modernos devuelven 'Gecko', por razones de compatibilidad)"
	},
	{
		"id": "userAgent",
		"pt-PT": "retorna o valor do cabeçalho do 'user-agent' enviado pelo navegador para o servidor",
		"fr-FR": "renvoie la valeur de l'en-tête de 'user-agent' envoyé par le navigateur au serveur",
		"de-DE": "gibt den wert des durch den browser an den server gesendet 'User-Agent' header",
		"en-GB": "returns the value of the user-agent header sent by the browser to the server",
		"es-ES": "devuelve el valor del encabezado del 'user-agent' enviado por el explorador al servidor"
	},
	{
		"id": "javaEnabled",
		"pt-PT": "retorna um valor booleano que especifica se o navegador tem Java habilitado",
		"fr-FR": "renvoie une valeur booléenne qui spécifie si le navigateur a Java activé",
		"de-DE": "gibt einen booleschen Wert zurück, der angibt, ob der browser Java aktiviert hat",
		"en-GB": "returns a boolean value that specifies whether the browser has Java enabled",
		"es-ES": "devuelve un valor booleano que especifica si el navegador tiene habilitado Java"
	},
	{
		"id": "suportServiceWorker",
		"pt-PT": "retorna um valor booleano que especifica se o navegador oferece suporte a Service Workers",
		"fr-FR": "renvoie une valeur booléenne qui spécifie si le navigateur prend en charge Service Workers",
		"de-DE": "gibt einen booleschen wert zurück, der angibt, ob der browser Service Workers unterstützt",
		"en-GB": "returns a boolean value that specifies whether the browser suports Service Workers",
		"es-ES": "devuelve un valor booleano que especifica si el navegador admite Service Workers"
	},
	{
		"id": "hardwareConcurrency",
		"pt-PT": "retorna o número de processadores lógicos disponíveis para executar threads no computador do utilizador",
		"fr-FR": "renvoie le nombre de processeurs logiques disponibles pour exécuter des threads sur l'ordinateur de l'utilisateur",
		"de-DE": "gibt die anzahl der logischen prozessoren zurück, die zum ausführen von threads auf dem computer des benutzers verfügbar sind",
		"en-GB": "returns the number of logical processors available to run threads on the user's computer",
		"es-ES": "devuelve el número de procesadores lógicos disponibles para ejecutar subprocesos en el equipo del usuario"
	},
	{
		"id": "maxTouchPoints",
		"pt-PT": "retorna o número máximo de pontos de contato simultâneos que são suportados pelo dispositivo atual",
		"fr-FR": "renvoie le nombre maximal de points de contact tactiles simultanés pris en charge par le périphérique actuel",
		"de-DE": "gibt die maximale anzahl der gleichzeitigen berührungspunkte zurück, die vom aktuellen Gerät unterstützt werden",
		"en-GB": "returns the maximum number of simultaneous touch contact points are supported by the current device",
		"es-ES": "devuelve el número máximo de puntos de contacto táctiles simultáneos soportados por el dispositivo actual"
	},
	{
		"id": "plugins",
		"pt-PT": "retorna um array com os plugins instalados no browser",
		"fr-FR": "renvoie un array avec les plug-ins installés dans le navigateur",
		"de-DE": "gibt einen array mit der installierten plug-in in dem browser",
		"en-GB": "returns an array with the plugins installed in the browser",
		"es-ES": "devuelve un array con los plugins instalados en el navegador"
	},
	{
		"id": "mimeTypes",
		"pt-PT": "retorna um array, que contém uma lista de objetos Mime Type que representam os tipos MIME reconhecidos pelo navegador",
		"fr-FR": "renvoie un array, qui contient une liste d'objets de type Mime représentant les types MIME reconnus par le navigateur",
		"de-DE": "gibt ein array-objekt zurück, das eine liste von Mime-Typ-Objekten enthält, die die vom browser erkannten MIME-Typen repräsentieren",
		"en-GB": "returns an array object, which contains a list of Mime Type objects representing the MIME types recognized by the browser",
		"es-ES": "devuelve un array que contiene una lista de objetos Mime Type que representan los tipos MIME reconocidos por el navegador"
	},
	{
		"id": "vendor",
		"pt-PT": "retorna o nome do fornecedor do navegador para o navegador atual",
		"fr-FR": "renvoie le nom du fournisseur du navigateur pour le navigateur actuel",
		"de-DE": "gibt den namen des browser-anbieters für den aktuellen browser zurück",
		"en-GB": "returns the name of the browser vendor for the current browser",
		"es-ES": "devuelve el nombre del proveedor del navegador para el navegador actual"
	},
	{
		"id": "suportNotifications",
		"pt-PT": "retorna um valor booleano que especifica se o navegador suporta notificações",
		"fr-FR": "renvoie une valeur booléenne qui spécifie si le navigateur prend en charge les notifications",
		"de-DE": "gibt einen booleschen Wert zurück, der angibt, ob der browser benachrichtigungen unterstützt",
		"en-GB": "returns a boolean value that specifies whether the browser supports notifications",
		"es-ES": "devuelve un valor booleano que especifica si el navegador admite notificaciones"
	},
	{
		"id": "notificationPermission",
		"pt-PT": "retorna a permissão de notificações (se o navegador suportar notificações)",
		"fr-FR": "renvoie l'autorisation des notifications (si le navigateur prend en charge les notifications)",
		"de-DE": "gibt die meldungen genehmigung (wenn der browser unterstützt benachrichtigungen)",
		"en-GB": "return notification permission (if browser supports Notifications)",
		"es-ES": "devuelve el permiso de notificaciones (si el explorador admite notificaciones)"
	},
	{
		"id": "suportApplicationCache",
		"pt-PT": "retorna um valor booleano que especifica se o navegador suporta Application Cache",
		"fr-FR": "renvoie une valeur booléenne qui spécifie si le navigateur supporte Application Cache",
		"de-DE": "gibt einen booleschen Wert zurück, der angibt, ob der browser Application Cache unterstützt",
		"en-GB": "returns a boolean value that specifies whether the browser supports Application Cache",
		"es-ES": "devuelve un valor booleano que especifica si el navegador admite Application Cache"
	},
	{
		"id": "suportIndexedDB",
		"pt-PT": "retorna um valor booleano que especifica se o navegador oferece suporte a indexedDB",
		"fr-FR": "renvoie une valeur booléenne qui spécifie si le navigateur supporte indexedDB",
		"de-DE": "gibt einen booleschen wert zurück, der angibt, ob der browser indexedDB unterstützt",
		"en-GB": "returns a Boolean value that specifies whether the browser supports indexedDB",
		"es-ES": "devuelve un valor booleano que especifica si el navegador admite indexedDB"
	},
	{
		"id": "suportPushNotifications",
		"pt-PT": "retorna um valor booleano que especifica se o navegador suporta Push Notifications",
		"fr-FR": "renvoie une valeur booléenne qui spécifie si le navigateur prend en charge les Push Notifications",
		"de-DE": "gibt einen booleschen wert zurück, der angibt, ob der browser Push Notifications unterstützt",
		"en-GB": "returns a boolean value that specifies whether the browser supports Push Notifications",
		"es-ES": "devuelve un valor booleano que especifica si el navegador admite Push Notifications"
	},
	{
		"id": "suportPromises",
		"pt-PT": "retorna um valor booleano que especifica se o navegador suporta JS Promises",
		"fr-FR": "renvoie une valeur booléenne qui spécifie si le navigateur prend en charge JS Promises",
		"de-DE": "gibt einen booleschen wert zurück, der angibt, ob der browser JS Promises unterstützt",
		"en-GB": "returns a boolean value that specifies whether the browser supports JS Promises",
		"es-ES": "devuelve un valor booleano que especifica si el navegador admite JS Promises"
	},
	{
		"id": "winInnerWidth",
		"pt-PT": "retorna a largura interna em pixels da área de conteúdo da janela",
		"fr-FR": "renvoie la largeur interne en pixels de la zone de contenu de la fenêtre",
		"de-DE": "gibt die innere breite in pixeln des fensters inhaltsbereich",
		"en-GB": "returns the inner width in pixels of the window content area",
		"es-ES": "devuelve el ancho interno en píxeles del área de contenido de la ventana"
	},
	{
		"id": "winInnerHeight",
		"pt-PT": "retorna a altura interna em pixels da área de conteúdo da janela",
		"fr-FR": "renvoie la hauteur interne en pixels de la zone de contenu de la fenêtre",
		"de-DE": "gibt die innenhöhe in pixel des fensters inhaltsbereich",
		"en-GB": "returns the inner height in pixels of the window content area",
		"es-ES": "devuelve la altura interna en píxeles del área de contenido de la ventana"
	},
	{
		"id": "winInnerResolution",
		"pt-PT": "retorna a resolução interna em pixels da área de conteúdo da janela",
		"fr-FR": "renvoie la résolution de pixel interne de la zone de contenu de la fenêtre",
		"de-DE": "liefert die interne pixelauflösung des inhaltsbereich des fensters",
		"en-GB": "returns the internal resolution in pixels of the window content area",
		"es-ES": "devuelve la resolución interna en píxeles del área de contenido de la ventana"
	},
	{
		"id": "winOuterWidth",
		"pt-PT": "retorna a largura externa da janela, incluindo toolbars/scrollbars",
		"fr-FR": "renvoie la largeur extérieure de la fenêtre, comprenant les toolbars/scrollbars",
		"de-DE": "gibt die externe breite des fensters, einschließlich der symbolleisten/scroll",
		"en-GB": "returns the external width of the window, including toolbars/scrollbars",
		"es-ES": "devuelve el ancho externo de la ventana, incluyendo los toolbars/scrollbars"
	},
	{
		"id": "winOuterHeight",
		"pt-PT": "retorna a altura externa da janela, incluindo toolbars/scrollbars",
		"fr-FR": "renvoie la hauteur extérieure de la fenêtre, comprenant les toolbars/scrollbars",
		"de-DE": "gibt die außenhöhe des fensters, einschließlich den symbolleiste/scroll",
		"en-GB": "returns the external height of the window, including toolbars/scrollbars",
		"es-ES": "devuelve la altura externa de la ventana, incluyendo los toolbars/scrollbars"
	},
	{
		"id": "winOuterResolution",
		"pt-PT": "retorna a resolução externa da janela, incluindo toolbars/scrollbars",
		"fr-FR": "renvoie la résolution externe de la fenêtre, comprenant les toolbars/scrollbars",
		"de-DE": "gibt die externe auflösung des fensters, einschließlich symbolleisten/scrollbalken",
		"en-GB": "returns external window resolution, including toolbars/scrollbars",
		"es-ES": "devuelve la resolución externa de la ventana, incluyendo los toolbars/scrollbars"
	},
	{
		"id": "winScreenX",
		"pt-PT": "retorna a coordenada horizontal da janela em relação ao ecrã",
		"fr-FR": "renvoie la coordonnée horizontale de la fenêtre par rapport à l'écran",
		"de-DE": "gibt die horizontale des fensters relativ zu screenen koordinaten",
		"en-GB": "returns the horizontal coordinate of the window relative to the screen",
		"es-ES": "devuelve la coordenada horizontal de la ventana con respecto a la pantalla"
	},
	{
		"id": "winScreenY",
		"pt-PT": "retorna a coordenada vertical da janela em relação ao ecrã",
		"fr-FR": "renvoie la coordonnée verticale de la fenêtre par rapport à l'écran",
		"de-DE": "gibt die vertikale des fensters relativ zu screenen koordinaten",
		"en-GB": "returns the vertical coordinate of the window relative to the screen",
		"es-ES": "devuelve la coordenada vertical de la ventana con respecto a la pantalla"
	},
	{
		"id": "winName",
		"pt-PT": "retorna o nome da janela",
		"fr-FR": "retourne le nom de la fenêtre",
		"de-DE": "gibt die fensternamen",
		"en-GB": "returns the name of the window",
		"es-ES": "devuelve el nombre de la ventana"
	},
	{
		"id": "availWidth",
		"pt-PT": "retorna a largura em pixels do ecrã (excluindo a barra de tarefas do Windows)",
		"fr-FR": "renvoie la largeur en pixels de l'écran (à l'exception de la barre des tâches Windows)",
		"de-DE": "gibt die breite in pixel des bildschirms (mit ausnahme der Windows-taskleiste)",
		"en-GB": "returns the width in pixels of the screen (excluding the Windows taskbar)",
		"es-ES": "devuelve el ancho en píxeles de la pantalla (excluyendo la barra de tareas de Windows)"
	},
	{
		"id": "availHeight",
		"pt-PT": "retorna a altura em pixels do ecrã (excluindo a barra de tarefas do Windows)",
		"fr-FR": "renvoie la hauteur en pixels de l'écran (à l'exception de la barre des tâches Windows)",
		"de-DE": "gibt die höhe in pixel des bildschirms (mit ausnahme der Windows-taskleiste)",
		"en-GB": "returns the height in pixels of the screen (excluding the Windows taskbar)",
		"es-ES": "devuelve el alto en píxeles de la pantalla (excluyendo la barra de tareas de Windows)"
	},
	{
		"id": "availResolution",
		"pt-PT": "retorna a resolução disponível em pixels do ecrã (excluindo a barra de tarefas do Windows)",
		"fr-FR": "renvoie les pixels de l'écran de résolution disponibles (à l'exception de la barre des tâches Windows)",
		"de-DE": "gibt die verfügbaren auflösung bildschirmpixel (mit ausnahme der Windows-taskleiste )",
		"en-GB": "returns the available resolution in pixels of the screen (excluding the Windows taskbar)",
		"es-ES": "devuelve la resolución disponible en píxeles de la pantalla (excluyendo la barra de tareas de Windows)"
	},
	{
		"id": "width",
		"pt-PT": "retorna a largura total do ecrã",
		"fr-FR": "renvoie la largeur de l'écran",
		"de-DE": "gibt die volle breite des bildschirms",
		"en-GB": "returns the total width of the screen",
		"es-ES": "devuelve el ancho total de la pantalla"
	},
	{
		"id": "height",
		"pt-PT": "retorna a altura total do ecrã",
		"fr-FR": "renvoie la hauteur totale de l'écran",
		"de-DE": "gibt die gesamtbildschirmhöhe",
		"en-GB": "returns the total height of the screen",
		"es-ES": "devuelve la altura total de la pantalla"
	},
	{
		"id": "resolution",
		"pt-PT": "retorna a resolução em pixels do ecrã",
		"fr-FR": "renvoie la résolution en pixels de l'écran",
		"de-DE": "gibt die auflösung in bildschirmpixel",
		"en-GB": "returns the pixel resolution of the screen",
		"es-ES": "devuelve la resolución en píxeles de la pantalla"
	},
	{
		"id": "colorDepth",
		"pt-PT": "retorna a profundidade de bits da palete de cores para exibir imagens",
		"fr-FR": "renvoie la palette de couleurs de profondeur de bits pour afficher des images",
		"de-DE": "gibt die farbpalette bittiefe bilder anzuzeigen",
		"en-GB": "returns the bit depth of the color palette to display images",
		"es-ES": "devuelve la profundidad de bits de la paleta de colores para mostrar imágenes"
	},
	{
		"id": "pixelDepth",
		"pt-PT": "retorna a resolução da cor (em bits por pixel) do ecrã",
		"fr-FR": "renvoie la résolution de couleurs (en bits par pixel) écran",
		"de-DE": "gibt die farbauflösung (in bits pro pixel) auf dem bildschirm",
		"en-GB": "returns the color resolution (in bits per pixel) of the screen",
		"es-ES": "devuelve la resolución del color (en bits por píxel) de la pantalla"
	},
	{
		"id": "orientation",
		"pt-PT": "retorna uma string que representa a orientação do ecrã",
		"fr-FR": "renvoie une string qui est l'orientation de l'écran",
		"de-DE": "gibt eine zeichenfolge, die die ausrichtung des bildschirms ist",
		"en-GB": "returns a string that represents the orientation of the screen",
		"es-ES": "devuelve una string que representa la orientación de la pantalla"
	},
	{
		"id": "hash",
		"pt-PT": "retorna a parte âncora (#) de um URL",
		"fr-FR": "renvoie la partie d'ancrage (#) d'une URL",
		"de-DE": "gibt den ankerteil (#) einer URL zurück",
		"en-GB": "returns the anchor part (#) of a URL",
		"es-ES": "devuelve la parte de anclaje (#) de una URL"
	},
	{
		"id": "host",
		"pt-PT": "retorna o nome do host e o número da porta de um URL",
		"fr-FR": "renvoie le nom d'hôte et le numéro de port d'une URL",
		"de-DE": "gibt den hostnamen und die portnummer einer URL zurück",
		"en-GB": "returns the hostname and port number of a URL",
		"es-ES": "devuelve el nombre de host y el número de puerto de una URL"
	},
	{
		"id": "hostname",
		"pt-PT": "retorna o nome de host de um URL",
		"fr-FR": "renvoie le nom d'hôte d'une URL",
		"de-DE": "gibt den hostnamen einer URL zurück",
		"en-GB": "returns the hostname of a URL",
		"es-ES": "devuelve el nombre de host de una URL"
	},
	{
		"id": "href",
		"pt-PT": "retorna o URL inteiro",
		"fr-FR": "renvoie l'URL entière",
		"de-DE": "gibt die gesamte URL zurück",
		"en-GB": "returns the entire URL",
		"es-ES": "devuelve la URL completa"
	},
	{
		"id": "origin",
		"pt-PT": "retorna o protocolo, nome do host e número da porta do URL",
		"fr-FR": "renvoie le protocole, le nom d'hôte et le numéro de port d'une URL",
		"de-DE": "gibt das protokoll, den hostnamen und die portnummer einer URL zurück",
		"en-GB": "returns the protocol, hostname and port number of a URL",
		"es-ES": "devuelve el protocolo, el nombre de host y el número de puerto de una URL"
	},
	{
		"id": "pathname",
		"pt-PT": "retorna o nome do caminho do URL",
		"fr-FR": "renvoie le chemin d'accès d'un URL",
		"de-DE": "gibt den pfadnamen einer URL zurück",
		"en-GB": "returns the path name of a URL",
		"es-ES": "devuelve el nombre de ruta de una URL"
	},
	{
		"id": "port",
		"pt-PT": "retorna o número da porta do URL",
		"fr-FR": "renvoie le numéro de port de l'URL",
		"de-DE": "gibt die portnummer der URL zurück",
		"en-GB": "returns the port number of URL",
		"es-ES": "devuelve el número de puerto de URL"
	},
	{
		"id": "protocol",
		"pt-PT": "retorna o protocolo da URL",
		"fr-FR": "renvoie le protocole URL",
		"de-DE": "gibt die URL-protokoll",
		"en-GB": "returns the protocol of URL",
		"es-ES": "devuelve el protocolo de URL"
	},
	{
		"id": "search",
		"pt-PT": "retorna a parte querystring do URL",
		"fr-FR": "renvoie la chaîne de requête de l'URL",
		"de-DE": "gibt die Query-String der URL",
		"en-GB": "returns the querystring part of URL",
		"es-ES": "devuelve la parte querystring de la URL"
	},
	{
		"id": "activeElement",
		"pt-PT": "retorna o elemento com o focus no documento",
		"fr-FR": "renvoie l'élément avec mise au point dans le document",
		"de-DE": "mit Fokus gibt das Element in dem Dokument",
		"en-GB": "returns the currently focused element in the document",
		"es-ES": "devuelve el elemento con el foco en el documento"
	},
	{
		"id": "baseURI",
		"pt-PT": "retorna a baseURI do documento",
		"fr-FR": "renvoie le document baseURI",
		"de-DE": "gibt das dokument baseURI",
		"en-GB": "returns the baseURI of the document",
		"es-ES": "devuelve la baseUR del documento"
	},
	{
		"id": "characterSet",
		"pt-PT": "retorna a codificação de caracteres do documento",
		"fr-FR": "renvoie le codage des caractères pour le document",
		"de-DE": "gibt die zeichencodierung für das dokument zurück",
		"en-GB": "returns the character encoding for the document",
		"es-ES": "devuelve la codificación de caracteres para el documento"
	},
	{
		"id": "doctype",
		"pt-PT": "retorna o doctype de um documento HTML",
		"fr-FR": "renvoie le doctype d'un document HTML",
		"de-DE": "gibt den doctype eines HTML-dokuments",
		"en-GB": "returns the doctype of an HTML document",
		"es-ES": "devuelve el doctype de un documento HTML"
	},
	{
		"id": "documentMode",
		"pt-PT": "retorna o método usado pelo navegador para renderizar o documento",
		"fr-FR": "renvoie la méthode utilisée par le navigateur pour rendre le document",
		"de-DE": "rückgabemodus, der vom browser verwendet wird, um das dokument zu rendern",
		"en-GB": "returns mode used by the browser to render the document",
		"es-ES": "devuelve el método utilizado por el explorador para representar el documento"
	},
	{
		"id": "documentURI",
		"pt-PT": "retorna a localização do URI do documento",
		"fr-FR": "renvoie l'URI emplacement du document",
		"de-DE": "gibt das dokument Standort URI",
		"en-GB": "returns the location of the document's URI",
		"es-ES": "devuelve la ubicación del URI del documento"
	},
	{
		"id": "domain",
		"pt-PT": "retorna o nome do domínio do servidor que carregou o documento",
		"fr-FR": "renvoie le nom de domaine du serveur qui a chargé le document",
		"de-DE": "gibt den domänennamen des servers zurück, der das dokument geladen hat",
		"en-GB": "returns the domain name of the server that loaded the document",
		"es-ES": "devuelve el nombre de dominio del servidor que cargó el documento"
	},
	{
		"id": "suportLocalStorage",
		"pt-PT": "retorna um valor booleano que especifica se o navegador suporta local storage",
		"fr-FR": "renvoie une valeur booléenne qui spécifie si le navigateur prend en charge le local storage",
		"de-DE": "gibt einen booleschen wert zurück, der angibt, ob der browser local storage unterstützt",
		"en-GB": "returns a boolean value that specifies whether the browser supports local storage",
		"es-ES": "Devuelve un valor booleano que especifica si el navegador admite el local storage"
	},
	{
		"id": "localStorageMaxSize",
		"pt-PT": "retorna o tamanho máximo do local storage",
		"fr-FR": "renvoie la taille maximale de local storage",
		"de-DE": "gibt die maximale größe von local storage",
		"en-GB": "returns the maximum size of the local storage",
		"es-ES": "devuelve el tamaño máximo del local storage"
	},
	{
		"id": "localStorageUsedSpace",
		"pt-PT": "retorna o espaço usado pelo local storage",
		"fr-FR": "renvoie l'espace utilisé par local storage",
		"de-DE": "gibt den raum, der von local storage verwendet",
		"en-GB": "returns the space used by the local storage",
		"es-ES": "devuelve el espacio utilizado por el local storage"
	},
	{
		"id": "suportSessionStorage",
		"pt-PT": "retorna um valor booleano que especifica se o navegador suporta session storage",
		"fr-FR": "renvoie une valeur booléenne qui spécifie si le navigateur prend en charge le session storage",
		"de-DE": "gibt einen booleschen wert zurück, der angibt, ob der browser session storage unterstützt",
		"en-GB": "returns a boolean value that specifies whether the browser supports session storage",
		"es-ES": "Devuelve un valor booleano que especifica si el navegador admite el session storage"
	},
	{
		"id": "sessionStorageMaxSize",
		"pt-PT": "retorna o tamanho máximo do session storage",
		"fr-FR": "renvoie la taille maximale de session storage",
		"de-DE": "gibt die maximale größe von session storage",
		"en-GB": "returns the maximum size of the session storage",
		"es-ES": "devuelve el tamaño máximo del session storage"
	},
	{
		"id": "sessionStorageUsedSpace",
		"pt-PT": "retorna o espaço usado pelo session storage",
		"fr-FR": "renvoie l'espace utilisé par session storage",
		"de-DE": "gibt den raum, der von session torage verwendet",
		"en-GB": "returns the space used by the session storage",
		"es-ES": "devuelve el espacio utilizado por el session storage"
	}
	
];