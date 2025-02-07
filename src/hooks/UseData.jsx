  const useData-(endPiont, requestConfig, desp)=> {
    useEffect(() => {
      const controller = new AbortController();
      try {
          const getData = async => {
           await  apiClient.get(endPiont, { signal: controller.signal, ...requestConfig })
        .then((res) => {
        
      }) 
        }

      }
      })
}