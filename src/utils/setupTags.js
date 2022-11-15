const setupTags = lots => {
  const allTags = {}

  lots.forEach(lot => {
    lot.content.tags.forEach(tag => {
      // if need quantity of tags
      if (allTags[tag]) {
        allTags[tag] = allTags[tag] + 1
      } else {
        allTags[tag] = 1
      }
    })
  })

  // each item setup as Array
  const newTags = Object.entries(allTags).sort((a, b) => {
    const [firstTag] = a
    const [secondTag] = b
    return firstTag.localeCompare(secondTag)
  })
  return newTags
}

export default setupTags
