
<%*
const Alias = await tp.system.prompt("Alias af noten: ");
setTimeout(() => {
  app.fileManager.processFrontMatter(tp.config.target_file, frontmatter => {
    if (!frontmatter['aliases']) {
      // If no aliases yet, start an array
      frontmatter['aliases'] = [Alias];
    } else if (Array.isArray(frontmatter['aliases'])) {
      // Already an array, just push new alias
      frontmatter['aliases'].push(Alias);
    } else {
      // If it's a string for some reason, convert it to array
      frontmatter['aliases'] = [frontmatter['aliases'], Alias];
    }
  })
}, 200)
-%>


