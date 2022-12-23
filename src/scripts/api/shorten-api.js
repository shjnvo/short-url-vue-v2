const baseUrl = 'https://short-url-api.herokuapp.com/v1/encode';

const shortenLink = async (link) => {
  try {
    let data = new FormData()
    data.append('url', link)
    const resp = await fetch(`${baseUrl}`, {
      method: 'POST',
      body: data
    });
    console.log(resp)
    const respJson = await resp.json();

    return respJson;
  } catch (error) {
    // console.log('Error: ');
    // console.log(error);

    throw new Error(error);
  }
};

export default shortenLink;
