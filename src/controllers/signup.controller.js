const axios = require("axios").default;
/**
 * Signup user on the API endpoint
 * @async
 * @function signupUser
 * @param {string} UserFullName
 * @param {string} UserPassword
 * @param {string} UserEmail
 * @returns {string} User register response
 */

async function signupUser(userFullName, userPassword, userEmail) {
  await axios.get("http://localhost:3000/api/food/allfood");
}
