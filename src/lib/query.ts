import { dehydrate, QueryClient } from "@tanstack/react-query";

type QueryType = {
  queryKey: string;
  queryFn: () => void;
};

export const customPrefetchQuery = async (queries: QueryType[] = []) => {
  console.log(queries[0]);
  const queryClient = new QueryClient();
  await Promise.all([
    queries.map((query) =>
      queryClient.prefetchQuery({
        queryKey: [query.queryKey],
        queryFn: query.queryFn,
      })
    ),
  ]);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
