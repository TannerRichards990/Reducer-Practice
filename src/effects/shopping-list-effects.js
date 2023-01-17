import {
  shoppingListLoadStart,
  shoppingListLoadSuccess,
  shoppingListError,
} from '../components/actions/shopping-list-actions';
import {
  getShoppingListItems,
  getShoppingListItem,
  createShoppingListItem,
  updateShoppingItem,
  deleteShoppingItem,
} from '../services/shopping-list-items';

export const getShoppingListItemsEffect = async (dispatch) => {
  try {
    dispatch(shoppingListLoadStart());
    const posts = await getShoppingListItems();
    dispatch(shoppingListLoadSuccess(posts));
  } catch (e) {
    dispatch(shoppingListError(e));
  }
};

export const getShoppingListItemEffect = async (dispatch, itemId) => {
  try {
    const post = await getShoppingListItem(itemId);
    dispatch(shoppingListLoadSuccess(post));
  } catch (e) {
    dispatch(shoppingListError(e));
  }
};

export const createShoppingListItemEffect = async (dispatch, item) => {
  try {
    const newItem = await createShoppingListItem(item);
    dispatch(shoppingListLoadSuccess(newItem));
  } catch (e) {
    dispatch(shoppingListError(e));
  }
};

export const updateShoppingListItemEffect = async (dispatch, itemId, item) => {
  try {
    const updatedItem = await updateShoppingItem(itemId, item);
    dispatch(shoppingListLoadSuccess(updatedItem));
  } catch (e) {
    dispatch(shoppingListError(e));
  }
};

export const deleteShoppingListItemEffect = async (dispatch, itemId) => {
  try {
    await deleteShoppingItem(itemId);
    dispatch(shoppingListLoadSuccess());
  } catch (e) {
    dispatch(shoppingListError(e));
  }
};
