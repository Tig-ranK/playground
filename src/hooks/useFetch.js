import { useState, useEffect } from "react";

export const useFetch = (url) => {
   const [data, setData] = useState(null);
   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const fetchData = async () => {
         try {
            setLoading(true);
            const res = await fetch(url);
            const data = await res.json();
            setData(data);
         } catch (e) {
            setError(e);
            setLoading(false);
         } finally {
            setLoading(false);
         }
      };
      fetchData();
   }, [url]);

   return { data, error, loading };
};
