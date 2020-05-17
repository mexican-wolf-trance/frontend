const superagent = require('superagent');

const get = async (url, query = {}, headers = {}) =>
{
    const response = await superagent.get(url)
        .query(query)
        .set({
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJzZWNvbmQiLCJpYXQiOjE1ODk3NTA3NzEsImV4cCI6MTU4OTc1NDM3MX0.qqitzl3rynMPVfif3NwAqobAvAQ195OBe-33K_x57Dc",
            ...headers
        });
    return response
};

const makeBodyCall = (method) => async (url, payload, query = {}, headers = {}) =>
{
    const response = await superagent[method](url, payload)
        .query(query)
        .set({
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJzZWNvbmQiLCJpYXQiOjE1ODk3NTA3NzEsImV4cCI6MTU4OTc1NDM3MX0.qqitzl3rynMPVfif3NwAqobAvAQ195OBe-33K_x57Dc",
            ...headers
        });
    return response
};

module.exports = { get, post: makeBodyCall('post'), put: makeBodyCall('put') }