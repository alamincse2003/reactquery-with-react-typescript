import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

export type Post = {
  id: number;
  title: string;
  body: string;
};

interface PostQuery {
  pageSize: number;
}

const fetchPosts = async ({
  pageParam = 1,
  pageSize,
}: {
  pageParam: number;
  pageSize: number;
}): Promise<Post[]> => {
  const res = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts",
    {
      params: {
        _start: (pageParam - 1) * pageSize,
        _limit: pageSize,
      },
    }
  );

  return res.data;
};

const usePosts = ({ pageSize }: PostQuery) => {
  return useInfiniteQuery({
    queryKey: ["posts", pageSize],
    queryFn: ({ pageParam }) => fetchPosts({ pageParam, pageSize }),

    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === pageSize ? allPages.length + 1 : undefined;
    },

    staleTime: 1 * 60 * 1000, // 1 minute
    initialPageParam: 1,
  });
};

export default usePosts;
