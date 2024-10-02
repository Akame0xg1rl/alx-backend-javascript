import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
    // Call signUpUser and uploadPhoto, and return a Promise that resolves when both are settled
    return Promise.allSettled([
        signUpUser(firstName, lastName),
        uploadPhoto(fileName)
    ]).then(results => {
        // Transform results to the desired structure
        return results.map(result => ({
            status: result.status,
            value: result.status === 'fulfilled' ? result.value : result.reason
        }));
    });
}
