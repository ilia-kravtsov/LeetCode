var addTwoPromises = async function(promise1, promise2) {
    const [response1, response2] = await Promise.all([promise1, promise2]);

    return response1 + response2;
};