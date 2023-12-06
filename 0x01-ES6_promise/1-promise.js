export default function getFullResponseFromAPI(success) {
  /* promise constructor arrow fn takes in reject and resolve */
  return new Promise((resolve, reject) => {
    /* if successfull, which is true, returns success obj, else, error meesage */
    if (success)resolve({ status: 200, body: 'Success' });
    else reject(Error('The fake API is not working currently'));
  });
}
