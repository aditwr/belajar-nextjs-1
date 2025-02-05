import useSWR from "swr";

const fetcher = (...args: unknown[]) =>
  fetch(...args).then((res) => res.json());
export default fetcher;

export const useProducts = () => {
  const { data, error, isLoading } = useSWR("/api/product", fetcher);
  return {
    products: data?.data,
    isLoading,
    isError: error,
  };
};

export const useProduct = (id: string) => {
  const { data, error, isLoading } = useSWR(`/api/product/${id}`, fetcher);
  return {
    data: data?.data,
    error,
    isLoading,
  };
};
