import axios, { AxiosError } from "axios";
import { useQuery } from "react-query";

export type UseApiQuery<T> = {
  data: T | undefined;
  error: AxiosError | null;
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
};

type QueryOptions = {
  enabled?: boolean;
};

type AxiosOptions = {
  method?: "post";
};

const instance = axios.create();
instance.interceptors.response.use(
  (response) => response,
  async function (error) {
    console.log(error);

    return Promise.reject(error);
  }
);

export function useApiQuery<T>(
  dataKey: string,
  url: string,
  options: QueryOptions = {},
  axiosOptions: AxiosOptions = {}
): UseApiQuery<T> {
  const { data, error, isError, isLoading, isSuccess } = useQuery<
    T,
    AxiosError
  >(
    dataKey,
    async () => {
      const response = await instance({
        url,
        // withCredentials: true,
        method: "get",
        ...axiosOptions,
      });

      return response.data;
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
      ...options,
    }
  );

  return { data, error, isError, isLoading, isSuccess };
}
