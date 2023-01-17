export const shoppingListLoadSuccess = (shoppingList) => ({
  type: 'shopping-list-load-success',
  payload: { shoppingList },
});

export const loadShoppingListStart = () => ({
  type: 'shopping-list-loading',
});

export const loadShoppingListError = (error) => ({
  type: 'shopping-list-error',
  payload: { error },
});

export const changeShoppingListCandidateBody = (body) => ({
  type: 'shopping-list-candidate-body-changed',
  payload: { body },
});

export const changeShoppingListSeen = (postId, seen) => ({
  type: 'shopping-list-seen-changed',
  payload: { postId, seen },
});


