// hooks/prefetchQueries.ts
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";

const prefetchQueries = async (
  context: GetServerSidePropsContext,
  queries: { key: string[]; fetchFn: () => Promise<any> }[]
) => {
  const queryClient = new QueryClient();
  const session = await getSession(context);

  await Promise.all(
    queries.map(({ key, fetchFn }) =>
      queryClient.prefetchQuery({
        queryKey: key,
        queryFn: fetchFn,
      })
    )
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      session,
    },
  };
};

export default prefetchQueries;
