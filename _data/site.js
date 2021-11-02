module.exports = {
  meta: {
    title: "heyuits.me",
    description: "A blog about nothing and everything",
    lang: "en",
    siteUrl: "https://heyuits.me/",
  },
  feed: { // used in feed.xml.njk
    subtitle: "Feeding you my blog",
    filename: "atom.xml",
    path: "/atom.xml",
    id: "https://example.com/",
    authorName: "Chris",
    authorEmail: "chrisrindone@live.com"
  },
  hero: { // used in hero section of main page ie. index.html.njk
    title: "Welcome to my blog",
    description: "This is a blog about nothing and/or everything. Stroll around the grounds until you feel at home."
  }
}