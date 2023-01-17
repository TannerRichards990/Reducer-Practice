const shoppingListLoadSuccess = 'SHOPPING_LIST_LOAD_SUCCESS';
const shoppingListLoading = 'SHOPPING_LIST_LOADING';
const shoppingListError = 'SHOPPING_LIST_ERROR';
const shoppingListCandidateBodyChanged = 'SHOPPING_LIST_CANDIDATE_BODY_CHANGED';
const shoppingListSeenChanged = 'SHOPPING_LIST_SEEN_CHANGED';

export const loadShoppingListSuccess = (shoppingList) => ({
  type: shoppingListLoadSuccess,
  payload: { shoppingList },
});

export const loadShoppingListStart = () => ({
  type: shoppingListLoading,
});

export const loadShoppingListError = (error) => ({
  type: shoppingListError,
  payload: { error },
});

export const changeShoppingListCandidateBody = (body) => ({
  type: shoppingListCandidateBodyChanged,
  payload: { body },
});

export const changeShoppingListSeen = (postId, seen) => ({
  type: shoppingListSeenChanged,
  payload: { postId, seen },
});


