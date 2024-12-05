export default function useFetch() {
  const fetchData = async () => {
    try {
      const res = await getApi.getData();
      console.log(res);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return { fetchData };
}
