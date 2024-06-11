---
Date: 2024-01-01
tags:
  - Note
  - Yearnote
---
## Yearly goals
### Health goals
Health goal:: 
### Knowledge goal
Knowledge goal:: 
### Finance/biz goals
Finance goal:: 
### Brand goals
Brand goal:: 
### Social and relationships goals
Social goal:: 

## Yearly Events
```dataview
TABLE aliases
FROM "Journal/Daily Note"
WHERE aliases != null
AND file.day.year = this.file.day.year
SORT file.day
```
## Yearly highlights
```dataview
TABLE dateformat(file.day, "LLL yyyy") AS Month, dateformat(file.day, "W") AS Week, highlight
FROM "Journal/Daily Note"
WHERE highlight != null
AND file.day.year = this.file.day.year
SORT file.day
```
