// Load up the discord.js library
const Discord = require("discord.js");

const cooldown = new Set();

// This is your client. Some people call it `bot`, some people call it `self`, 
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();
const token = process.env.token;


// Here we load the config.json file that contains our token and our prefix values. 
const config = require("./config.json");
// config.token contains the bot's token
// config.prefix contains the message prefix.
const PREFIX = "/"

client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started`);
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setStatus("idle");
  client.user.setActivity("for /help", { type: "STREAMING", url: "https://www.twitch.tv/aoiwjd" });
});

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity("for /help", { type: "STREMAING", url: "https://www.twitch.tv/aoiwjd" });
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity("for /help", { type: "STREMAING", url: "https://www.twitch.tv/aoiwjd" });
});


client.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.
  
  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if(message.author.bot) return;
  
  // Also good practice to ignore any message that does not start with our prefix, 
  // which is set in the configuration file.
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  // Here we separate our "command" name, and our "arguments" for the command. 
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  // Let's go with a few common example commands! Feel free to delete or change those.
  
    
    
   exports.run = async(client, message, ops) => {
    let args = message.content.split(' ').slice(1).join(' ');
    message.delete();
    if (cooldown.has(message.author.id && message.guild.id)) {
        return message.channel.send('**[COOLDOWN]** Sending tickets has **5 Minutes** Cooldown!');
    }
    if (args.length < 1) {
        return message.channel.send(`You must give me something to report first ${message.author}`);
    }
    cooldown.add(message.author.id && message.guild.id);
    setTimeout(() => {
        cooldown.delete(message.author.id && message.guild.id);
    }, 300000);
    let guild = message.guild;
    const cnl = client.channels.get('524560558654095360');
    if(command === "support") {
    message.channel.send(`Hey, ${message.author}, we got your report! We will reply soon as possible! Here is the full ticket:`);
    const embed2 = new Discord.RichEmbed()
        .setAuthor(`Ticket from ${message.author.tag}`, message.author.displayAvatarURL)
        .setColor('#ffd700')
        .addField('Ticket:', `**Tickets's Author:** ${message.author.tag}\n**Server:** ${guild.name}\n**Full ticket:** ${args}`)
        .setThumbnail(message.author.displayAvatarURL)
        .setFooter(`${moment().format('MMMM Do YYYY, h:mm:ss a')}`);
    message.channel.send({ embed: embed2 });
    const embed = new Discord.RichEmbed()
        .setAuthor(`Ticket from ${message.author.tag}`, message.author.displayAvatarURL)
        .setColor("#ffd700")
        .addField('Ticket:', `**Report's Author:** ${message.author.tag}\n**Server:** ${guild.name}\n**Full report:** ${args}`)
        .setThumbnail(message.author.displayAvatarURL);
    cnl.send({ embed })
        .catch(e => logger.error(e))
}};
    
    
  if(command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
  
  if(command === "say") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
  }
  
  if(command === "help") {
  let myembed = new Discord.RichEmbed()
  .setTitle("Help")
  .setAuthor("Abow")
  .setColor("#42f483")
  .setDescription("Klabbe")
  .addField("Hejsan hur mår du idag?", "nämen hej" )
  .addField("SverkerJS", ":fire_engine:" )
  .addField(":pig2:", ":regional_indicator_e:" )
    message.channel.send(myembed)
  
  }
    if(command === "kw") {
  let myembed = new Discord.RichEmbed()
  .setTitle("Hejsan")
  .setAuthor('Lisa "Misslisibell" Jonsson')
  .setColor("#42f483")
  .setDescription("Klabbe")
  .addField("ja")
  .addField("SverkerJS")
  .addField(":pig2:", ":dog:")
    message.channel.send(myembed)
  
  }
  
 
  
 if(command === "kick") {
   
 
  
    let kUser = message.guild.member(message.mentions.users.first()  ||  message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("That wasn't valid, type this: ``/kick <person> <reason>``.");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission to kick people!");
    if(kUser.hasPermission("ADMINISTRATOR")) return message.channel.send("That person cannot be kicked!")

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("kick")
    .setColor("RANDOM")
    .addField("Kicked user", `${kUser} with ID ${kUser.ID}`)
    .addField("Kicked by", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", kReason);

    let kickChannel = message.guild.channels.find(`name`, "logs");
    if(!kickChannel) return message.channel.send("Can't find logs channel");
    

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);

    return;
  }
  
if(command === "ban"){

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("That wasn't valid, type this: ``/ban <person> <reason>``.");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission to ban people!");
    if(bUser.hasPermission("ADMINISTRATOR")) return message.channel.send("That person can't be banned!");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("Ban")
    .setColor("#f45c41")
    .addField("Banned User", `${bUser} with ID ${bUser.id}`)
    .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "logs");
    if(!incidentchannel) return message.channel.send("Can't find logs channel");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);


    return;
  }
  
  
  
  
  
  if(command === "purge") {
    // This command removes all messages from all users in the channel, up to 100.
    
    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);
    
    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }
});
    
    
    client.login(token).catch(err => console.log(err));

