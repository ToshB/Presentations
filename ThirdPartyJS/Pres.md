Third Party JavaScript
==========================

Embedding
---------
Ulike måter å laste inn sitt eget JavaScript (og CSS) på, før man kan begynne å gjøre ting.

### Viktige ting
- Må ha konstant måte for embedding, kan ikke endre ofte
- Må kunne oppdatere/endre hyppig/enkelt
- Kan ikke blokke sidelasting (lenge)

### Dra inn JavaScript direkte
Eksempel: Vanlig script tag som printer ut melding.
Pros:
- Enkelt

Cons:
- tregt hvis scriptet er stort
- blokker lasting frem til scriptet er mottatt og prosessert
- kan ikke cache særlig da vi vil ønske å pushe endringer

### Loader
Eksempel: Vanlig script tag som printer ut melding, laster nytt script som også printer melding.

Pros:
- Liten initial payload
- Kan laste async for ingen blokking
- Kan cache hovedscriptet uendelig med versjonering

Cons:
- Må dele opp logikk i to steg: Loader + Script

### Loader i flere steg
Eksempel: Vanlig script tag som printer ut melding, laster nytt script som også printer ut melding. Knapp som trigger lasting av nytt script med loading indikator, som også printer melding.
Kan brukes for sjeldnere brukte deler
Pros: 
- Mindre initial payload

Ulike typer script
------------------
Når man først har fått lastet JavaScriptet, hvordan best vise det man ønsker å vise?

### Modifisering/injisering i eksisterende DOM
Eksempel:
- En side med rar font og bilder, som viser noe inline.
- Custom stil som prøver å normalisere litt, men som fucker opp noe annet på siden.

Pros:
- Arver stiler, lettere å vise som integrert del av siden

Cons:
- Vanskelig å ha egen stiling
	- Namespacing av CSS, omfattende og uforutsigbare resets
- Ingenting av informasjon er privat

### Source-less iFrames
Kan ses på som en sandbox, en isolert del av dokumentet utenfor. Men uten sterke begrensninger for kommunikasjon inn og ut. 

Eksempel:
- Samme som i sted, men som putter inn i iframe
- Vis hvordan man kan plukke opp en eller flere stiler fra utenfra

Pros:
- Arver ikke stiler, lettere å stile uten å tenke på siden omkring
- Kan stile uten å påvirke host
- Kan laste script (inni frame) uten å påvirke host
- Kan lett kommunisere med siden utenfor

Cons:
- Informasjon er fortsatt ikke privat
- Innhold kan ikke vises utenfor (popups, popovers)

### Cross-Domain iFrames

Eksempel: 
- Samme som i sted men med cross-domain iframe
- Send inn stiler som query-parametere

Pros:
- Lett å lage
- Lett å teste
- Fullstendig isolert JavaScript og CSS
- Informasjon er utilgjengelig for vertssiden

Cons:
- Mindre fleksibilitet enn sourceless
- Vrient å kommunisere inn og ut, om nødvendig
- Innhold kan ikke vises utenfor (popups, popovers)

Hva er Cross-Domain?
--------------------
- Hvorfor SOP?
- Hva kvalifiserer som Cross-Domain?

Cross-Domain iFrame Kommunikasjon
---------------------------------
- Hva må man tenke om på man bruker cross-domain iFrames? 
- easyXDM

