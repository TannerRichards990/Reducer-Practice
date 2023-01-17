import ShoppingPostList from './ShoppingPostList';
import { Context } from '../ShoppingListProvider.jsx';
import { useContext, useEffect } from 'react';
import { createShoppingListItem } from '../../services/shopping-list-items';

import {
  shoppingListCandidateBodyChanged,
  shoppingListSeenChanged,
} from '../actions/shopping-list-actions';
import ShoppingListForm from './ShoppingListForm';
import { 
  getShoppingListItemsEffect,
  updateShoppingListItemEffect, 
} from '../../effects/shopping-list-effects';


export default function ShoppingListPage() {
  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    getShoppingListItemsEffect(dispatch);
  }, []);

  const handleSeenChanged = (postId, seen) => {
    dispatch(shoppingListSeenChanged(postId, seen));
    updateShoppingListItemEffect(dispatch, postId, { seen });
  };

  return (
    <>
      <ShoppingListForm
        body={state.shoppingCandidateBody}
        onBodyChanged={(body) => {
          dispatch(shoppingListCandidateBodyChanged(body));
        }}
        onSubmit={async (body) => {
          await createShoppingListItem(body);
          getPostsEffect(dispatch);
          dispatch(shoppingListCandidateBodyChanged(''));
        }}
      />
      {state.loadingMode === 'Loading' ? (
        <div>Loading Shopping List...</div>
      ) : (
        <ShoppingPostList
          shoppingList={state.shoppingList}
          handleSeenChangedByPostId={(postId, seen) => {
            handleSeenChanged(postId, seen);
          }}
        />
      )}
    </>
  );
}



// import ShoppingPostList from './ShoppingPostList';
// import { Context } from '../ShoppingListProvider.jsx';
// import { useContext, uesEffect, useEffect } from 'react';
// import { createShoppingListItem } from '../../services/shopping-list-items';

// import {
//   shoppingListCandidateBodyChanged,
//   shoppingListSeenChanged,
// } from '../actions/shopping-list-actions';
// import ShoppingListForm from './ShoppingListForm';
// import { 
//   getPostEffect,
//   updateShoppingListItemEffect, 
// } from '../../effects/shopping-list-effects';


// export default function ShoppingListPage() {
//   const { state, dispatch } = useContext(Context);
//   useEffect(() => {
//     getPostEffect(dispatch);
//   }, []);

//   const handleSeenChanged = (postId, seen) => {
//     dispatch(shoppingListSeenChanged(postId, seen));
//     updateShoppingListItemEffect(dispatch, postId, { seen });
//   };

//   return (
//     <>
//       <ShoppingListForm
//         body={state.shoppingCandiateBody}
//         onBodyChanged={(body) => {
//           dispatch(shoppingListCandidateBodyChanged(body));
//         }}
//         onSubmit={async (body) => {
//           await createShoppingListItem(body);
//           getPostEffect(dispatch);
//           dispatch(shoppingListCandidateBodyChanged(''));
//         }}
//       />
//       {state.loadingMode === 'Loading' ? (
//         <div>Loading Shopping List...</div>
//       ) : (
//         <ShoppingPostList
//           shoppingList={state.shoppingList}
//           handleSeenChangedByPostId={(postId, seen) => {
//             handleSeenChanged(postId, seen);
//           }}
//         />
//       )}
//     </>
//   );
// }
