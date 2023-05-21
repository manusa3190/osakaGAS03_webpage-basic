const doGet=()=>{
  const html = HtmlService.createTemplateFromFile('src/main')
  return html.evaluate()
}