const contentfulManagement = require("contentful-management")

module.exports = function() {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: 'CFPAT-ExMN3fYrFG4ueCTquXOWoPlX2RN5fa80YA5ADR6ZAHQ',
  })

  return contentfulClient
    .getSpace('ibyhkt4uwh7i')
    .then(space => space.getEnvironment('master'))
}
