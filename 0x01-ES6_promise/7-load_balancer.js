export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]).then((value) => value);
}
// Promise.race returns the value of the first promise to be settled either rejected or resolved
