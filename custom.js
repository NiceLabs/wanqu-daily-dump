for (const link of document.links) {
  if (link.host === location.host) continue
  link.target = '_blank'
}
