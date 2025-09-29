module.exports = async (params) => {
    console.log("Starting...")
    console.log(params);
    const currentFile = params.app.workspace.getActiveFile();
    if (!currentFile) {
        new Notice("No active file.");
        return;
    }
    console.log("Found active file: ", currentFile.basename);

    const currentFileCache = params.app.metadataCache.getFileCache(currentFile);
    const headingsInFile = currentFileCache.headings;
    if (!headingsInFile) {
        new Notice(`No headers in file ${currentFile.name}`);
        return;
    }
    console.log("Found headings in active file: ", headingsInFile);

    const folder = "Permanent Notes";
    if (!params.app.vault.adapter.exists(folder)) {
        new Notice(`Could not find folder ${folder}`);
        return;
    }

    console.log("Folder does exist: ", folder);

    headingsInFile.forEach(async heading => {
        console.log(`Checking ${heading.heading}. It is level ${heading.level}`);
        if (heading.level == 3) {
            const text = heading.heading;

            const path = `${folder}/${text.replace(/[\\,#%&\{\}\/*<>$\'\":@]*/g, '')}.md`;
            const content = `---
aliases:
---

\`\`\`button
name Change Alias of note
type command
action Templater: Insert Templater Change alias of file
\`\`\`
---
![[${currentFile.basename}#${text}]]
`;

            
            if (text && !(await params.app.vault.adapter.exists(path))) {
                await params.app.vault.create(path, content);
                new Notice(`File ${path} Created.`, 5000);
            } else if (text) {
                new Notice(`File ${path} already exists.`, 5000);
            }
        }
    });
}