const baseUrl = 'https://short-url-api.herokuapp.com/v1';

const shortenLink = async (link) => {
  try {
    let data = new FormData()
    data.append('url', link)
    const resp = await fetch(`${baseUrl}/encode`, {
      method: 'POST',
      body: data
    });
    console.log(resp)
    const respJson = await resp.json();

    return respJson;
  } catch (error) {

    throw new Error(error);
  }
};

const redirectLink = async (code) => {
  try {

    const resp = await fetch(`${baseUrl}/${code}`);
    const respJson = await resp.json();

    return respJson;
  } catch (error) {

    throw new Error(error);
  }
};

export { shortenLink, redirectLink };
