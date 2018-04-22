// A simple data API that will be used to get the data for our
// components.
const LinksAPI = {
  LinkList: [
    Link: "/",
    Link: "/about",
    Link: "/contact",
    Link: "/live",
    Link: "/photos"
  ],

  get: function(id) {
    const isLink = p => p.Link === id
    return this.LinkList.find(isLink)
  }
}

export default LinksAPI
