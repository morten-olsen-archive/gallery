import { useEffect, useState } from "react";
import { useApp } from "@morten-olsen/gallery";

const useApi = (domain: string, url: string) => {
  const { context } = useApp();
  const [error, setError] = useState<any>(undefined);
  const [result, setResult] = useState<any>(undefined);

  const proxyUrl = `/proxy?url=${encodeURIComponent(url)}`;

  useEffect(() => {
    setResult(undefined);
    setError(undefined);
    const run = async () => {
      const result = await fetch(proxyUrl, {
        headers: {
          Authorization:
            "Basic " +
            btoa(context.session!.username + ":" + context.session.apiToken),
          "Content-Type": "application/json",
        },
      });
      const body = await result.json();
      setResult(body);
    };
    run().catch((err) => {
      setError(err);
      console.error(err);
    });
  }, [context.session, url]);

  return {
    result,
    error,
  };
};

export default useApi;
