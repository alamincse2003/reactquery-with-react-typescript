import usePosts from "./hooks/usePosts";

interface Todo {
  id: number;
  title: string;
}

interface TodoListProps {
  todos: Todo[];
}
const TodoList = ({ todos }: TodoListProps) => {
  const pageSize = 10;

  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = usePosts({ pageSize });

  if (isLoading)
    return (
      <p className="text-xl text-center text-green-500">Loading..........</p>
    );

  if (error)
    return <p className="text-3xl text-center text-red-500">{error.message}</p>;

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id} className="border-2 border-blue-500 p-4 m-4">
          <h3 className="text-lg font-semibold">{todo.title}</h3>
        </div>
      ))}
      {data?.pages.map((page) =>
        page.map((post) => (
          <div key={post.id} className="border-2 border-blue-500 p-4 m-4">
            <h3 className="text-xl">
              ID: {post.id} . Title: {post.title}
            </h3>
          </div>
        ))
      )}

      <div className="flex justify-center mb-5">
        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
          className="bg-green-500 text-white p-2 rounded-md cursor-pointer disabled:opacity-50"
        >
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </button>
      </div>
    </div>
  );
};

export default TodoList;
