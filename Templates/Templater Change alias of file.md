
<%*
const Alias = await tp.system.prompt("Alias af noten: ");
setTimeout(() => {
  app.fileManager.processFrontMatter(tp.config.target_file, frontmatter => {
    frontmatter['aliases'] = Alias
  })
}, 200) // the reason for the timeout is to let the template complete first
-%>

