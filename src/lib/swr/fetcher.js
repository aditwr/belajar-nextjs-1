import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default fetcher;

export const useProducts = () => {
  const { data, error, isLoading } = useSWR("/api/product", fetcher);
  return {
    products: data?.data,
    isLoading,
    isError: error,
  };
};
