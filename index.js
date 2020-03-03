// API Key
// f6434729

const fetchData = async () => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: 'f6434729',
      s: 'avengers'
    }
  });

  console.log(response.data);
};

fetchData();