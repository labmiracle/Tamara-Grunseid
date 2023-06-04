const users = [
    {
      login: "knuth",
      firstName: "Donald",
      lastName: "Knuth",
      likes: ["C", "Unix"],
    },
    {
      login: "norvig",
      firstName: "Peter",
      lastName: "Norvig",
      likes: ["AI", "Search", "NASA", "Mars"],
    },
    {
      login: "mfowler",
      firstName: "Martin",
      lastName: "Fowler",
      likes: ["Design Patterns", "Refactoring"],
    },
    {
      login: "kent",
      firstName: "Kent",
      lastName: "Beck",
      likes: ["TDD", "wikis", "Design Patterns"],
    },
  ];

function lookup(login, property) {
    const user = users.find((user) => user.login === login);
  
    if (!user) {
      throw new Error(`Could not find user with login '${login}'.`);
    }
  
    if (!(property in user)) {
      throw new Error(`Could not find property '${property}' for user '${login}'.`);
    }
  
    return user[property];
  }
  
  module.exports = { lookup };