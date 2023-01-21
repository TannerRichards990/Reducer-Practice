export const shoppingListLoadSuccess = (shoppingList) => {
  return {
    type: 'shopping-list-load-success',
    shoppingList,
  };
};

export const shoppingListLoadStart = () => {
  return {
    type: 'shopping-list-loading',
  };
};

export const shoppingListError = (error) => {
  return {
    type: 'shopping-list-error',
    error,
  };
};

export const shoppingListCandidateBodyChanged = (body) => {
  return {
    type: 'shopping-list-candidate-body-changed',
    body,
  };
};

export const shoppingListSeenChanged = (postId, seen) => {
  return {
    type: 'shopping-list-seen-changed',
    postId, seen,
  };
};


