---
Date: {{date}}
---
Du spørger nok, hvordan virker skidtet. Så her kommer den lange smøre
## The basics
En god artikel introduktion til hvorfor obsidian er god, hvordan man skriver i markdown, og også gode introduktioner til mere avanceret ting i obsidian
https://obsidian.rocks/getting-started-with-obsidian-a-beginners-guide/

Noget virkelig fedt ved Obsidian er at noterne man laver er markdown filer, altså bare tekstfiler, så de fylder enormt meget mindre end, andre notetagnings apps. Og oven i det så er det hele også lokalt lagret på dit eget device, i modsætning til Apps som Notion, hvor dine private filer er håndteret af Notions servers eksternt fra din computer.
## Hvordan tingende virker i den her vault
Som du nok kan se hvis du har fulgt installationsguiden, så har du en del "Community plugins" ovre i venstre side. De er håndsorteret ud fra hvad jeg har fundet mest brugbart. De kan alle ændres nede i (settings -> "core plugins" eller "community plugins")
![[Pasted image 20240605100800.png|200]]
Hvis ikke Community plugins er enabled så gå ind under (Settings ->Community plugins -> Turn on community plugins)
![[Pasted image 20240605121649.png|500]]
# Core plugins(plugins fra obsidian)
### Quick Switcher
Quick switcher plugined med følgende logo i venstre side
![[Pasted image 20240605104110.png|300]]
Dette indbygget plugin fra obsidian er en måde at skifte til andre notes, hotkeyen er "ctrl + o" eller "cmd + o" på mac. Den er enormt brugbar når man skal åbne en specifik note man leder efter.
### Command palette
Command palette plugined med følgende logo i venstre side
![[Pasted image 20240605102537.png|300]]
Dette indbygget plugin fra obsidian er en måde at tilgå alle kommandoer fra alle plugins. 
### Templates
Templates plugined med følgende logo i venstre side
![[Pasted image 20240605101211.png]]
En god obsidian youtuber "sergio" har en god video på det [[Youtube - Obsidian Templates And How I Use Them  EP 8 Mastering Obsidian|Sergio video om templates]]
Du kan tilgå de templates jeg har lavet til dig under den gemte folder "Templates". Så tryk på
![[Pasted image 20240605101846.png|200]]  og så kan du finde alle de templates jeg har lavet til dig
![[Pasted image 20240605101942.png|300]]

Hvis du vil indsætte et template i en note så kan du bruge hotkeyen "ctrl + t" eller "cmd + t" på mac. Prøv at åbne en ny note ved at trykke på "ctrl + n" eller "cmd + n" og så prøv at indsætte et template i noten. 

Templates bruges i mange af de andre plugins f.eks. til "Periodic Notes" eller "Media DB"(som jeg snakker om lige om lidt)
### Graph view
Graph view plugined med følgende logo i venstre side
![[Pasted image 20240605103727.png|300]]
Dette er hvor du kan få overblik over alle dine noter. Meget fedt at få overblik over de ting som hører sammen, men bruger det ikke selv så tit. Dog kan man også lave "local graphs" i "command palette", hvor du så kan se hvilke noter der er linked med den note du skriver i, meget godt hvis man nu har en masse filer i f.eks. et research project som man vil kigge på sammenhænge for.
![[Pasted image 20240605103653.png|500]]
### Canvas
Canvas plugined med følgende logo i venstre side
![[Pasted image 20240605103028.png|300]]
Godt til at lave brainstorms... Jeg bruger det ikke rigtig. Men det kan være jeg gør i fremtiden 🤷‍♂️
# Community plugins
### Homepage
Homepage plugined med følgende logo i venstre side
![[Pasted image 20240605095708.png|300]]
er et plugin som sørger for at du har en homepage hver gang du åbner appen. 

### Hide folders
Hide folders plugined med følgende logo i venstre side
![[Pasted image 20240605100528.png|300]]
Giver dig mulighed for at gemme de foldere væk som får din folder struktur ovre til venstre til at se lidt rodet ud. Mere en æstetisk sag. 

Man kan stadig søge efter alle de filer der er i de gemte foldere med f.eks. "quick switcheren", "normal search" eller "omnisearch". Dog har jeg slået fra at kunne søge efter billeder inde i (settings -> files and links)
![[Pasted image 20240605101057.png|500]]
Fordi det godt kan blive rimelig rodet i search når man begynder at have mange billeder

## Periodic Notes
Periodic Notes er plugined jeg bruger til at skrive journal, altså "daily note", "weekly note", "monthly note", "quarterly note" og "yearly note". Det er meget simpelt at gøre eftersom jeg har lavet knapper på [[Homepage]] som automatisk åbner de forskellige ting
![[Pasted image 20240605123734.png|400]]
Knapperne åbner den dag, uge, måned, quarter eller år det er lige nu. 

For at gå til daily note eller weekly note fra dagen eller ugen før eller efter så brug kalenderen. 
For at gå til monthly note, quarterly note eller yearly note fra måneden, quarteren, året før eller efter så skal du gå ind i den måned, quarter eller year note det er nu og så søg i command palette efter "month", "Quarter" eller "year" (Prøvede at lave knapper, men det virkede ikke)

#### Hvordan jeg skriver journal
1. Hver dag lave jeg en "daily note". Her udfylder jeg bare tingende. (Quote of the day bliver automatisk udfyldt med plugined "Quote of the day")
	![[Pasted image 20240605131210.png|500]]
2. Og hvis der skete noget meget stort på dagen, så ændrer jeg alias af noten(altså man giver noten et ekstra kaldenavn udover dens nuværende titel) så man altid kan finde den igen ved at søge i "quick switcher"
	![[Pasted image 20240605131512.png|300]]
	Husk at trykke enter for at navnet går igennem
	Her kalder jeg efter noten i quickswitcher "ctrl + o" eller "cmd + o"
	![[Pasted image 20240605131705.png|500]]
3. Hver uge laver jeg så Weekly review, hvor alle highlights fra ugen automatisk bliver trukket fra mine daily notes jeg har skrevet.
	![[Pasted image 20240605131949.png|500]]
4. Hver måned laver jeg så monthly review, hvor alle highlights og store events(aliases) fra måneden automatisk bliver trukket fra mine daily notes jeg har skrevet.
	![[Pasted image 20240605132216.png|500]]
5. Jeg laver ikke personligt quarterly review. Men det er sat op til at gøre det samme som monthly review bare for quarter
	![[Pasted image 20240605132315.png|500]]
6. Hvert år laver jeg så Yearly review hvor alle highlights og store events(aliases) fra året automatisk bliver trukket fra mine daily notes jeg har skrevet.
	![[Pasted image 20240605132356.png|500]]

Hvis du vil ændre måden du skriver journal på så bare gå ind i 
- [[Template Daily Note]]
- [[Template weekly Note]]
- [[Template Monthly Note]]
- [[Template Quarterly Note]]
- [[Template Yearly Note]]
 (Husk dog at hvis du ændrer i template for daily note, så vil det trigger Quote of the day, så før du hurtigt går ud af templaten, så husk at erstatte det quote der er indsat med ![[Pasted image 20240605133056.png|50]])

### Calender
Calender plugined virker sammen med "Periodic Notes" plugined så man kan trykke på en data og lave en daily note på den dag
![[Pasted image 20240605123544.png|500]]
Eller lave en weekly note for den uge
![[Pasted image 20240605123610.png|500]]
Alt efter hvor mange ord man skriver i den daglige note så kommer der prikker under dagen
![[Pasted image 20240605124502.png|300]]
Har sat den til at lave en prik for hver 100 ord. Dette kan dog let ændres ved at gå ind i 
(Settings -> Calender) og så ændre tallet.

### Media DB Plugin
Media DB plugined med følgende logo i venstre side
![[Pasted image 20240605112800.png|300]]
Er det plugin jeg bruger til at tilgå internettets enorme samling af, bøger, film, serier, mangaer, musik, spil, osv. for at kunne tilføje de ting til ens egen database automatisk med sidelængde, forfatter, osv.
**Måden du opsætter det på**
1. Gå ind i (Settings -> Media DB Plugin)
2. I toppen skal du angive din api key som du kan få gratis fra [www.omdbapi.com](https://www.omdbapi.com/apikey.aspx?__EVENTTARGET=freeAcct&__EVENTARGUMENT=&__LASTFOCUS=&__VIEWSTATE=%2FwEPDwUKLTIwNDY4MTIzNQ9kFgYCAQ9kFgICBw8WAh4HVmlzaWJsZWhkAgIPFgIfAGhkAgMPFgIfAGhkGAEFHl9fQ29udHJvbHNSZXF1aXJlUG9zdEJhY2tLZXlfXxYDBQtwYXRyZW9uQWNjdAUIZnJlZUFjY3QFCGZyZWVBY2N0oCxKYG7xaZwy2ktIrVmWGdWzxj%2FDhHQaAqqFYTiRTDE%3D&__VIEWSTATEGENERATOR=5E550F58&__EVENTVALIDATION=%2FwEdAAU%2BO86JjTqdg0yhuGR2tBukmSzhXfnlWWVdWIamVouVTzfZJuQDpLVS6HZFWq5fYpioiDjxFjSdCQfbG0SWduXFd8BcWGH1ot0k0SO7CfuulHLL4j%2B3qCcW3ReXhfb4KKsSs3zlQ%2B48KY6Qzm7wzZbR&at=freeAcct&Email=)
	![[Pasted image 20240605121148.png|500]]
1. Nu virker plugined

**Måden det virker**
1. Tryk på Media DB ovre til venstre eller søg under "command palette" efter (Media DB Plugin: Create Media DB entry)
2. Søg efter det du gerne vil tilføje til enten [[Database - Books]], [[Database - Movies and Series]] eller [[Database - Media]] og vælg hvilken API der skal bruges. Altså om du vil søge efter film, serier, spil, bøger, osv. (Har ikke lavet en database for musik, spil og wiki. Dog hvis du tilføjer nogle af de medier bliver der automatisk lavet en mappe med dem under Databases mappen) 
	 ![[Pasted image 20240605113256.png|300]]
3. Tryk ok og vælg hvilken version af den du gerne vil tilføje til dine obsidian, og så tryk ok ned til højre
	![[Pasted image 20240605115737.png|300]]
4. Nu popper den her side op, hvor du kan se noget information om mediet. Nogle gange er version man har valgt lidt mærkelig ift. informationer så bare tryk cancel og vælg en anden
	![[Pasted image 20240605114311.png|300]]
5. Tryk "ctrl + o" eller "cmd + o" (Den er for det meste helt øverst så snart du åbner "quick switcher") for at åbne filen der automatisk er lavet for mediet.
	![[Pasted image 20240605120027.png|400]]
6. Mediet er også automatisk blevet tilføjet til databasen det hører til.
	![[Pasted image 20240605120229.png|300]]
	Husk at du bare kan trykke på de forskellige til at ændre deres status. Så ændrer det sig automatisk også i "Metadataen for filen"(Altså baggrunds information om filen. Har automatisk opsat metadata for mange templates og andre ting, som alle har nogle forskellige formål). Har lavet et hotkey til at tilgå en files metadata, for at gå i source mode er det "Alt + p" på mac så bare søg i command palette efter "Toggle Live Preview/Source mode" og for at se property view til højre så tryk "ctrl + alt + p" eller søg i command palette efter "Properties view: Show file properties"
	![[Pasted image 20240605120558.png|500]]

### Waypoint
Waypoint plugined er det plugin jeg bruger til at lave MoC's(Maps of content) for [[Self improvement|MoC Self improvement]]. Måden man laver MoC's med waypoint plugin er
1. Lav en mappe med et navn f.eks. "test"
2. Lav en note inden i mappen med mappens navn "test"
3. Inden i noten tryk så på "ctrl + t" eller "cmd + t" og indsæt templaten [[Template Map of Content]].
4. Når denne er indsat skal du blot fjerne delen der hedder "fjern dette for at det virker" fra %% Waypoint "fjern dette for at det virker" %%. Altså skal det se ud præcis som ![[Pasted image 20240605110503.png|100]] 
5. Nu vil den automatisk opdatere når du opretter mapper eller filer inde i mappen "test".
6. Homepage opdaterer automatisk ved at tilføje den nye MoC
7. Hvis du nu gerne vil lave "landmarks" Altså mini MoC's mellem dine waypoints til at fungere som mellemliggende indekser, så er det samme procedure dog istedet for med ![[Pasted image 20240605110833.png|100]]

**Ham der har lavet plugined forklarer det her https://github.com/IdreesInc/Waypoint som:**
*Landmarks are meant to be used between your waypoints to act as intermediary indexes. They can be placed in subfolder notes of waypoint tags to generate a "waypoint-like" tree without stopping a parent waypoint from including the child files/folders in your tree. Expanding on the description for waypoints above, say you have a parent folder that holds languages such as `Languages -> Latin -> Chapter I -> Vocab -> ...`. Similar to above, you want to have chapters listed for "Latin" and also have them show up on the "Language" folder note. This is achievable with Landmarks! By using landmark, Waypoint will now generate an index in the current folder note listed as a landmark and will not stop the generation of the parent waypoint at that level, but keep going to list the chapters, as that is where the next waypoint is set.*
### ReadItLater
ReadItLater plugined med følgende logo i venstre side
![[Pasted image 20240605122424.png|300]]
Er det plugin du kan bruge til at gemme, artikler, YT videoer, og en masse andet. For at bruge det så skal du
1. Kopier et link f.eks. https://www.youtube.com/watch?v=Ud4eb7qbpfE&ab_channel=OttoStoklund
2. Tryk på ![[Pasted image 20240605122424.png|200]] eller søg i command palette efter "ReadItLater: Save clipboard"
3. Nu kan du finde filen med quick switcher "ctrl + o" eller "cmd + o"
4. Filen bliver også automatisk lagt i mappen "Media" så den kan findes i [[Database - Media]]
### Dataview
Dataview er nok et af de vigtigste community plugins der findes. Det kan en masse forskellige ting, og er en af hjørnestenene for avanceret brugere i obsidian.

Det er et plugin man kan bruge til at query sine noter efter specifikke resultater. Jeg bruger det på [[Homepage]] til at lave listerne over MoC's, Databaser, Recently opened, Stats. I "Periodic Notes" bruges det til at lave (highlight) og (aliases) oversigt i weekly, monthly, quarterly og yearly note.

### DB Folder
DB Folder plugined med følgende logo i venstre side
![[Pasted image 20240605105439.png|300]]
Er det plugin jeg har brugt til at lave databaser til f.eks. [[Database - Books]], [[Database - Movies and Series]], og [[Database - Media]].
Virker kun hvis man har "Dataview"
### Templater
Templater plugined med følgende logo i venstre side
![[Pasted image 20240605104905.png|300]]
Er stortset det indbygget "Templates" plugin bare på crack. Det kan en masse forskellige ting, og er en af hjørnestenene for avanceret brugere i obsidian. Dog bruger jeg det kun på 1 tidspunkt nemlig til "periodic notes" i daily note, så man kan ændre "alias" egenskaben af den daily note hvis der nu skete noget stort på dagen.
### Excalidraw
Excalidraw plugined med følgende logo i venstre side
![[Pasted image 20240605102835.png|300]]
Da obsidian ikke har en indbygget tegnefunktion så er der en gut som har lavet det her plugin, som jeg vil mene er bedre end alle andre tegneprogrammer i andre notetagningssystemer. Jeg har lavet et hotkey til det på windows til "alt + d", hvis du er på mac kan du blot søge efter "Excalidraw: Create new drawing - IN A NEW TAB - and embed into active document" prøv det herunder.




Hvis du gerne vil åbne en Excalidraw tegning som er embedded i et dokument skal du blot "ctrl + klik" eller "cmd + klik" på det for at kunne redigere i det. 

### Advanced tables
Advanced tables plugined med følgende logo i venstre side
![[Pasted image 20240605104741.png|300]]
Er bare et plugin hvor du kan lave tabeller i. Bruger det engang imellem.


### Omnisearch
Omnisearch plugined med følgende logo i venstre side
![[Pasted image 20240605095732.png|300]]
er et plugin der giver et mere avanceret search ift. den indbygget search. 
**Den indbygget search**
![[Pasted image 20240605100207.png|300]]
Den indbygget search giver kun mulighed for at søge på det øverste lag af dine noter.
**Omnisearch**
![[Pasted image 20240605100414.png|500]]
Omnisearch søger i alt, også pdf'er og nogle gange i billeder.

### Banner
Banner plugined er det plugin jeg bruger på [[Homepage]] aller øverst. For at ændre det skal du 
1. Lægge et billed ind i "Attachment" folderen.
2. For at ændre billedet så gå i editing view
	![[Pasted image 20240605122035.png|600]]
3. Har lavet et hotkey til at tilgå en files metadata, for at gå i source mode er det "Alt + p" på mac så bare søg i command palette efter "Toggle Live Preview/Source mode" og for at se property view til højre så tryk "ctrl + alt + p" eller søg i command palette efter "Properties view: Show file properties". Så ændre navnet
	![[Pasted image 20240605122135.png|600]]
4. Du kan trække billedet op og ned med din mus, for at tilpasse det.

### Buttons
Buttons plugined er det plugin jeg bruger til at lave knapper på [[homepage]] og i daily note til at ændre alias hvis der nu skete noget stort på dagen. Knapperne jeg bruger i den her vault kan findes under den gemte mappe (Plugins -> Buttons)
For at oprette nye buttons så søg under command paletten på "Buttons". Det er lidt svært dog kan man lave en masse forskellige knapper


## QuickAdd
QuickAdd er et plugin der kan en masse ting. Man kan opsætte macros, og en masse andet. Dog er det også enormt kompliceret.
Jeg har kun en ting i det. Dog er det også en enormt brugbar ting, nemlig et zetteliser script i javascript, der laver nye noter ud af alle headings om de er heading 2 eller heading 3, som man kan referere til, disse headings bliver gemt i en "Zettelizer boks" ovre til venstre. Jeg bruger det meget på studie for at bryde mine store noter ned i små noter som jeg kan cross referere til i andre noter.
Prøv det i den her note
1. Søg i command palette efter "QuickAdd: Run QuickAdd" og så vælg "Zetteliser Headings 3"*(Den tager alle headings på 3. niveau altså med ### foran sig og laver nye noter ud af dem)*
3. Åben "Zettelizer boks" ovre til venstre og prøv at åben en af noterne
4. Disse noter kan du altså referere til i den her note med [[]] og du kan også quick switch til med med [[Quick Switcher]]. Jeg plejer normalt at rykke dem over i en anden long term storage mappe, så "Zettelizer boksen" ikke bliver rodet.

### Latex Suite
Latex suite bruger jeg enormt meget til at skrive LaTeX hurtigere. Især fordi jeg læser fysik og konstant skal skrive formler som lorentz koordinat transformations ligninger
$$
\begin{aligned}
&t^{\prime}=\gamma\left(t-\frac{vx}{c^{2}}\right)\\
&x'=\gamma\left(x-vt\right) \\
&t=\gamma\left(t'+\frac{vx'}{c^2}\right) \\
&x=\gamma\left(x^{\prime}+vt^{\prime}\right) \\
&\gamma=\frac{1}{\sqrt{1-\frac{v^{2}}{c^{2}}}}
\end{aligned}
$$
For at vise et eksempel. Plugined er slået fra, men kan let slåes til under (Settings -> Community plugins)
I Kombination med det bruger jeg et eksternt værktøj som kan lave billeder om til LaTeX kaldt SimpleTex https://simpletex.cn/download

# Syncing across devices
### Gratis Icloud Sync eller Obsidian betalt Sync
Den her video forklarer meget godt hvordan de to systemer fungerer
[[Youtube - Syncing Vaults in Obsidian]]

Hvis du køber Obsidian Sync(10$ hver måned) så laver den også backups af din vault. Dog kan man godt gøre det selv med github som jeg har forklaret nedenfor
### Remotely Save (Onedrive, dropbox, Google Drive)
Remotely Save er det gratis plugin jeg bruger istedet for Icloud sync eller obsidian sync. Ligesom for Icloud sync så er det lidt besværligt, da ens plugins ikke gemmer på tværs af devices, så man manuelt skal sætte det op på f.eks. telefon. Dog hvis du barer prøver at sync med en anden computer, så kan du blot download den her template vault på den anden computer også virker det automatisk
Den er allerede downloaded på den her vault (Settings -> community plugins -> rull ned -> enable remotely save) Jeg bruger personligt Onedrive, så det er kun den jeg ved hvordan man setup.
1. (Settings -> Remotely save)
2. Vælg din fortrukne cloud service
	![[Pasted image 20240605141053.png|500]]
3. Søg online hvis du vil setup andet end onedrive. For onedrive så skal du bare authenticate med onedrive, så obsidian plugined får lov til at sende en kommando til onedrive om at synkronisere dine onedrive filer med clouden.
	![[Pasted image 20240605141527.png|400]]
4. På dit andet device, så lav en vault med præcis samme navn, gå ind i (Settings -> community plugins -> browse -> find og installer Remotely Save)
	![[Pasted image 20240605141654.png|400]]
5. For at sync skal du så bare trykke på iconet ovre til venstre ![[Pasted image 20240605141954.png|100]] eller så bare søg på "Remotely save: start sync" i command palette 

#### Kritiske plugins på telefon (15-30 min setup time)
Efter du har synkroniseret med enten icloud sync(Min ven sagde at plugins måske faktisk følger med over icloud alligevel) eller remotely save så hvis du gerne vil opsætte din vault på din telefon så fungerer det udemærket for mig hvis jeg bare installerer disse plugins og manuelt indstiller dem (Husk også at køre igennem alle andre settings)
![[Pasted image 20240605142331.png|100]]
og prøv at skrive det samme i alle sammen
De plugins der er kritiske for den her vault er
- Remotely save(Selvfølgelig)
- Homepage(Meget vigtig)
- Dataview(Meget vigtig)
- Templater(Meget vigtig)
- DB folder(Meget vigtig)
- Media DB plugin(Meget vigtig)
- Periodic Notes(Meget vigtig)
- waypoint
- Calender
- Quote of the day
- Hide folders
- Banners
Hvis du slavisk går igennem alle sammen og bare skriver det samme som på dit hoved device, så burde alting virke

## Git - (Gratis backup)
Obsidian Git er et plugin der lader dig backup din vault til Github, så følg nederstående videoer. Det lidt teknisk, og det fungerer ok for mig.
- [[Youtube - The Easiest Way to Setup Obsidian Git (4 Minutes)]]
- [[Youtube - Backup your Obsidian Vault for free]]

# Lidt ekstra stuff
### AI i dine noter
Jeg bruger selv meget AI plugins i mine noter. Mine favoritter er
- "Text Generator"(bruger den til at skrive noter, istedet for at søge online, så skriver jeg bare f.eks. "hvad er lysets hastighed?" og så har jeg bare binded en hotkey som så prompter openAI's API, og så skriver det en responds i mine noter på mit spørgsmål) God video af Sergio på det [[Youtube - How I'm Using AI WITH My Obsidian Vault]]
- "Copilot" er bare en ChatGPT i dine noter, hvor du så også kan give den nogle af dine noter som kontekst og så kan den give svar. Bruger den ikke så meget endnu, men løbende når OpenAI's modeller kan tage en større kontekst så begynder jeg nok at bruge den mere og mere, som en personlig assistent(Prøvede det for et stykke tid siden, og det virkede ok. Men i fremtiden bliver det bar endnu vildere).  [[Youtube - The Free AI Tool that Knows Everything You've Written (Obsidian with AI)]] 

### Social media manager eller andre projects manager - Projects plugin
Hvis du gerne vil opsætte en social media manager så følg videoen
[[Youtube - Obsidian For Content Creators (ft. Projects Plugin)]]

### Rolodex
Et Rolodex er en måde at holde styr på folks navne og informationer. Jeg bruger det meget i kombination med mine "Daily notes" hvis jeg nu har været sammen med et familiemedlem, en ven, en fremmed, osv. så kan jeg lave en ny note om dem som jeg kan skrive informationer om dem i. Det er dejligt når man har dårlig hukommelse, så man aldrig glemmer de vigtige ting om folk. 
Jeg har lagt et [[Template Rolodex entry]] inde i mappen "Templates". Så hver gang du skriver om en person eller du får ny vigtig information om en person f.eks. når du skriver daily note så kan du gå ind og tilføje det til deres rolodex entry.
	![[Pasted image 20240605154150.png|400]]
Så indsætter man blot [[Template Rolodex entry]] i noten
	![[Pasted image 20240605154726.png|200]]
Og så opdateres ens [[Rolodex|MoC - Rolodex]] 
	![[Pasted image 20240605154815.png|200]]


### Fiks up the ugly ribbon menu
For at hide de ikke brugbare plugins ovre til venstre så gå ind i (Settings -> Apperance -> Scroll ned til Interface -> ribbon menu) Du kan stadig bruge plugins under command palette
![[Pasted image 20240605150036.png|35]]
### Task håndtering med Todoist appen
Til at holde styr på de tasks jeg skal have lavet bruger jeg appen Todoist på telefon og computer. Man kan også opsætte en to do list i obsidian, dog er det lidt svært, og virker ikke altid. Sergio har igen lavet en god video på hvordan man setter det op. Meget simpelt og let.
[[Youtube - RECREATING My Todoist Workflow - How I Use Todoist]]

### Habit tracker
Til at holde styr på vaner bruger jeg en app på min telefon kaldt "Habit tracker". Det er den bedste habit tracker jeg har fundet. Man kan også opsætte en i obsidian, dog er det lidt svært. Har brugt den i 3 år, og har bygget en masse gode vaner med den.
https://apps.apple.com/us/app/habit-tracker/id1438388363

### Kontakt mig for hjælp med din vault
Skriv til mig på [[Instagram - stoklund_lifting]] hvis du har brug for hjælp til at sætte noget op. Så kan vi eventuelt hoppe på discord for at få sat ting op. 