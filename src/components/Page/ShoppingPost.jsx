export default function ShoppingPost({ post, handleSeenChanged }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={post.seen}
        onChange={() => handleSeenChanged(post.id, !post.seen)}
      />
      {post.id}
      {post.item}
    </div>
  );
}
