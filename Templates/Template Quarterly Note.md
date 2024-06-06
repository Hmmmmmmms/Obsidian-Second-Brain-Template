---
Date: {{date:YYYY-MM-DD}}
tags:
  - Note
  - Quarterlynote
---
# Quarterly events
```dataview
TABLE aliases
FROM "Journal/Daily Note"
WHERE aliases != null
AND file.day.year = this.file.day.year
AND file.day.quarter = this.file.day.quarter
SORT file.day
```
## Quarterly highlights
```dataview
TABLE file.day.weekyear AS Week, highlight
FROM "Journal/Daily Note"
WHERE highlight != null
AND file.day.year = this.file.day.year
AND file.day.quarter = this.file.day.quarter
SORT file.day
```
