export const shoppingListLoadSuccess = (shoppingList) => ({
  type: 'shopping-list-load-success',
  payload: { shoppingList },
});

export const shoppingListLoadStart = () => ({
  type: 'shopping-list-loading',
});

export const shoppingListError = (error) => ({
  type: 'shopping-list-error',
  payload: { error },
});

export const shoppingListCandidateBodyChanged = (body) => ({
  type: 'shopping-list-candidate-body-changed',
  payload: { body },
});

export const shoppingListSeenChanged = (postId, seen) => ({
  type: 'shopping-list-seen-changed',
  payload: { postId, seen },
});


