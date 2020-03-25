const orderItemsForChange = (origItems = [], updatedItems = []) => {
  let addedItems = []
  let deletedItems = []

  updatedItems.forEach(itemCode => {
    if (!origItems.includes(itemCode)) {
      addedItems.push(itemCode)
    }
  })

  origItems.forEach(itemCode => {
    if (!updatedItems.includes(itemCode)) {
      deletedItems.push(itemCode)
    }
  })
  let orderedUpdatedItems = []
  if (addedItems.length > 0) {
    // handle new added on top
    updatedItems.forEach(itemCode => {
      if (!addedItems.includes(itemCode)) {
        orderedUpdatedItems.push(itemCode)
      }
    })
    orderedUpdatedItems = addedItems.concat(orderedUpdatedItems)
  }
  if (deletedItems.length > 0) {
    // handle new added on top
    updatedItems.forEach(itemCode => {
      if (!deletedItems.includes(itemCode)) {
        orderedUpdatedItems.push(itemCode)
      }
    })
    orderedUpdatedItems = deletedItems.concat(orderedUpdatedItems)

    if (deletedItems.length === 0 || addedItems.length === 0)
      // no new added or deleted items, just keep order as is
      orderedUpdatedItems = updatedItems
  }
  return [...new Set(orderedUpdatedItems)]
}

module.exports = {
  orderItemsForChange
}

