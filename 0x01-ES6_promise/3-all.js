import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
    const uploadPromise = uploadPhoto();
    const createUserPromise = createUser();

    Promise.all([uploadPromise, createUserPromise])
        .then(([photoResponse, userResponse]) => {
            console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
        })
        .catch(() => {
            console.log('Signup system offline');
        });
}

export default handleProfileSignup;
