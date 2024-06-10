---
cssclasses:
  - dashboard
sticker: ui//mk-ui-home
banner: "![[Secondbrain.png]]"
banner_y: 0.49
banner_x: 0.5
The creator :): Otto Stoklund
---
----
>"*Write Your favorite Quote.*" 
>&mdash; <cite>Person</cite>✍️
---
# Start her [[How to Obsidian]]
---
## Journal
### `button-CurrentDailyNote`  `button-CurrentWeeklyNote`  `button-CurrentMonthlyNote` `button-CurrentQuarterlyNote` `button-CurrentYearlyNote`

----
## MoC's
```dataview 
list WITHOUT ID link(file.link, aliases[0])
FROM #MoC AND -"Templates"
SORT file.mtime DESC
```
## Databases
```dataview 
list 
FROM #database AND -"Templates"
SORT file.mtime DESC
```
## Recently opened
`$=dv.list(dv.pages('').sort(f=>f.file.mtime.ts,"desc").limit(10).file.link)`

----
## Vault Info
- 〽️ Stats
    - Notes Count: `$=dv.pages('"Notes"').length`
