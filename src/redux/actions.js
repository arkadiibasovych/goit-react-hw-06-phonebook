export const submitContact = contact => ({
  type: 'phoneBook/Submit',
  playload: contact,
});

export const deleteContact = id => ({
  type: 'phoneBook/Delete',
  playload: id,
});
