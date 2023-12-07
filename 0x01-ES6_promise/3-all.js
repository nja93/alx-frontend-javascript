import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
/* call upload photo and create user promises in variables */
  const promiseUser = createUser();
  const promiseProfile = uploadPhoto();
  /* promise all to resolve concurrently */
  return Promise.all([promiseUser, promiseProfile])
  // .THEN contains array of resolved values once fulfilled MUST be
  // in the same order,pls dont forget note to self
    .then(([user, profile]) => {
      console.log(`${profile.body} ${user.firstName} ${user.lastName}`);
    })
  /* catch error and log it */
    .catch(() => {
      console.log('Signup system offline');
    });
}
