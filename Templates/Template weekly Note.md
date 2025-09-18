---
Date: {{date:YYYY-MM-DD}}
tags:
  - Note
  - Weeknote
---
## Weekly Review
```dataview
TABLE dateformat(file.day, "ccc") AS Day, highlight
FROM "Journal/Daily Note"
WHERE highlight != null
AND file.day.year = this.file.day.year
AND file.day.weekyear = this.file.day.weekyear
SORT file.day
```

