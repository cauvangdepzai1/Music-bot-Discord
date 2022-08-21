module.exports = {
  Admins: ["UserID", "UserID"], // Admins of the bot, I don't know what this do. -Darren.
  ExpressServer: true, // bat hoac tat website cua bot (nen de de co the dung thu thuat cho bot online 24/7)
  DefaultPrefix: process.env.Prefix || "c!", // perfix cua bot co the doi neu thich (ex: c!play)
  Port: 3000, //port de host bot (ko nen doi)
  SupportServer: "https://discord.gg/AxZBNEkRtw", // de link server discord nao cx dc
  Token: process.env.Token || "", // Discord Bot Token (lay ben discord develpoer portual)
  ClientID: process.env.Discord_ClientID || "", // Discord Client ID (lay ben discord develpoer portual)
  ClientSecret: process.env.Discord_ClientSecret || "", // Discord Client Secret (lay ben discord develpoer portual)
  Scopes: ["identify", "guilds", "applications.commands"], // ko can de y (doi la pay bot)
  ServerDeafen: true, // nen de de tranh bot thanh cong cu nghe len
  DefaultVolume: 100, // Sets am luong mac dinh cho bot nhac
  CallbackURL: "/api/callback", // ko can de y (doi la pay bot)
  "24/7": false, // Make the bot stays in VC 24/7 (when you reboot the bot will **not** automatically rejoin.)
  CookieSecret: "Pikachu is cute", // A cookie for you, cookie for me. make sure you change this value!
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", // URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: "RANDOM", // Color of most embeds | Custom Hex value are supported. I.e: "#36393F"
  Permissions: 2205281600, // Bot Inviting Permissions
  Website: process.env.Website || "0.0.0.0", // Website where it is hosted at includes http or https || Use "0.0.0.0" if you using Heroku || Do not include /api/callback. Just the website url. I.e. "https://foo.bar"
  // If you get invalid oauth, make sure on the discord developer page you set the oauth url to something like: https://example.com/api/callback.

  Presence: {
    status: "online", //trang thai cua bot (online, idle, dnd)
    name: "Playing Music", // trang thai hoat dong cua bot (vi du: Dang choi Playing music)
    type: "LISTENING", // PLAYING, WATCHING, LISTENING, STREAMING (trang thai bot: Dang choi, Dang xem, Dang nghe, Dang stream)
  },

  // You need a lavalink server for this bot to work!!!!
  // Lavalink server; public lavalink -> https://lavalink-list.darrennathanael.com/; create one yourself -> https://darrennathanael.com/post/how-to-lavalink
  //luu y de bot chay dc can 1 server lavalink (lay ip server public tai https://lavalink.darrennathanael.com/SSL/lavalink-with-ssl/ )
  Lavalink: {
    id: "Main", //ko can de y (doi la pay bot)
    host: "lavalink.oops.wtf", //ip server lavalink
    port: 443, //port server lavalink
    pass: "www.freelavalink.ga", //pass cua server lavalink
    secure: true, // Set this to true if the lavalink uses SSL. if not set it to false.
    retryAmount: 200, //ko nen doi
    retryDelay: 40, //ko nen doi
  },
  // Spotify Integration (module giup phat nhac tu spotify, can co 2 loai id quan trong tai https://developer.spotify.com/dashboard/)
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "e41cbc45a7784d80837375386984b3ca", // Spotify Client ID (lay tai https://developer.spotify.com/dashboard/)
    ClientSecret: process.env.Spotify_ClientSecret || "63e9ed2ff2e3478bb9f2b05ce01cc0a3", // Spotify Client Secret (lay id tai https://developer.spotify.com/dashboard/)
  },
};
