## Definition af udsagnslogik
Et **logisk udsagn** er et udtryk, der kan være **sand** ($T$) eller **falsk** ($F$).

### Symboler og operatorer
Vi bruger $P, Q, R$ til at angive logiske udsagn.

- $\land =$ and
- $\lor =$ or
- $\lnot =$ not
- $\Rightarrow =$ implies
- $\Leftrightarrow =$ if and only if
- $T =$ altid sandt
- $F =$ altid falsk

## Sandhedstabeller

### Et udsagn
Hvis vi har ét udsagn ($P$), har vi to muligheder:

| $P$ |
|-----|
| T   |
| F   |

### To udsagn
Hvis vi har to udsagn ($P, Q$), har vi fire muligheder:

| $P$ | $Q$ |
|-----|-----|
| T   | T   |
| F   | T   |
| T   | F   |
| F   | F   |

### Tre udsagn
Hvis vi har tre udsagn ($P, Q, R$), har vi otte muligheder:

| $P$ | $Q$ | $R$ |
|-----|-----|-----|
| T   | T   | T   |
| F   | T   | T   |
| T   | F   | T   |
| F   | F   | T   |
| T   | T   | F   |
| F   | T   | F   |
| T   | F   | F   |
| F   | F   | F   |

# Definitioner

## Konjunktion (og)
$P \land Q$ er sandt, hvis både $P$ og $Q$ er sande.  
Eksempel:  
- $P$: $-1 > 0 \; [F]$  
- $Q$: $1 > 0 \; [T]$  
- $P \land Q = [F]$

## Disjunktion (eller)
$P \lor Q$ er sandt, hvis mindst ét af $P$ eller $Q$ er sandt.  

**Bemærkning:** $P \lor Q \equiv P \lor (Q \land \lnot P)$ → logisk ækvivalens.

## Negation
$\lnot P$: Hvis $P$ er sandt, er $\lnot P$ falsk, og omvendt.  
Eksempel:  
$\lnot(-1 > 0) \;\Rightarrow\; -1 < 0 \; [T]$

## Implikation
$P \Rightarrow Q$ betyder *hvis $P$, så $Q$*.  
- Kun falsk når $P$ er sand og $Q$ er falsk.  
- Hvis $P$ er falsk, kan vi ikke konkludere noget om $Q$.
### Bemærkning:
Hvis $P$: $0 = 1 \; [F]$ og $Q$: $-1 > 0 \; [F]$, så er $P \Rightarrow Q$ sandt, fordi $P$ allerede er falsk.

## Bimplikation (hvis og kun hvis)
$P \Leftrightarrow Q$: sandt, hvis $P$ og $Q$ har samme sandhedsværdi.  
Altså $P$ er logisk ækvivalent med $Q$.

## Tautologier
- Et logisk udtryk, der **altid er sandt**, kaldes en **tautologi**.  
- Hvis man sætter en bimplikation mellem to logisk ækvivalente udtryk, får man en tautologi.  

### Eksempel på en Tautologi
$(P \land (Q \land R)) \Leftrightarrow ((P \land Q) \land R)$

## De Morgans love
- $\lnot(P \land Q) \equiv (\lnot P \lor \lnot Q)$  
- $\lnot(P \lor Q) \equiv (\lnot P \land \lnot Q)$

## Kontraposition
$P \Rightarrow Q \equiv \lnot Q \Rightarrow \lnot P$

### Eksempel på Kontraposition
- $P$: $a^2$ er et lige tal  
- $Q$: $a$ er et lige tal  
Hvis $a^2$ er lige, så må $a$ være lige.  
Ækvivalent med: Hvis $a$ er ulige, så er $a^2$ også ulige.

## Modstrid
- Et logisk udtryk, der **altid er falsk**, kaldes en **modstrid** ($F$).  

## NAND operatoren
"NAND" = **Not And**.  
Symbol: $\lnot(P \land Q)$
