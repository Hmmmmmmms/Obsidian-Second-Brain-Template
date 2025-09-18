---
Date: 2025-09-01
tags:
  - Note
  - Monthlynote
---
# Monthly events
```dataview
TABLE aliases
FROM "Journal/Daily Note"
WHERE aliases != null
AND file.day.year = this.file.day.year
AND file.day.month = this.file.day.month
SORT file.day
```
## Monthly highlights
```dataview
TABLE file.day.weekyear AS Week, highlight
FROM "Journal/Daily Note"
WHERE highlight != null
AND file.day.year = this.file.day.year
AND file.day.month = this.file.day.month
SORT file.day
```
