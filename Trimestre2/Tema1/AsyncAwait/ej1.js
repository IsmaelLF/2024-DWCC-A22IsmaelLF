// function loadJson(url) {
//     return fetch(url)
//     .then(response => {
//     if (response.status == 200) {
//     return response.json();
//     } else {
//     throw new Error(response.status);
//     }
//     });
//     }
//     loadJson('https://no-such-user.json')
//     .catch(console.log);

async function loadJson(url) {
  try {
    let awaitUrl = await fetch(url);

    if (!awaitUrl.ok) {
      throw new Error(awaitUrl.status);
    }
    let result = await awaitUrl.json();
    console.log(result);

    return result;
  } catch (error) {
    console.log(error);
  }
}

loadJson("https://randomuser.me/api/");
