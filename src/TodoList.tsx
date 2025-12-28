import { useState } from "react";
import usePosts from "./hooks/usePosts";

const TodoList = () => {
  const pageSize = 10;
  const [page, setPage] = useState(1);
  const { data: posts, isLoading, error } = usePosts({ page, pageSize });
  if (isLoading)
    return (
      <p className="text-xl text-center text-green-500">Loading..........</p>
    );
  if (error)
    return <p className="text-3xl text-center text-red-500">{error.message}</p>;
  return (
    <div>
      <h3 className="text-center text-green-500 text-2xl mt-5 mb-5 underline">
        Posts Data
      </h3>

      {posts?.map((post) => (
        <div key={post.id} className="  border-2 border-blue-500 p-4 m-4">
          <h3 className="text-xl">
            ID: {post.id} . Title: {post.title}
          </h3>
        </div>
      ))}
      <div className="flex justify-center gap-4 mb-5">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="bg-blue-500 text-white p-2 rounded-md  cursor-pointer"
        >
          Previous
        </button>
        <button
          onClick={() => setPage(page + 1)}
          className="bg-green-500 text-white p-2 rounded-md cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TodoList;
