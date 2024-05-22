
const nome = document.getElementById('#email');

const embed = new EmbedBuilder()
  .setAuthor({
    name: "Olá",
    url: "https://discord.com/api/webhooks/1235994508307599532/9FXnVf7lZMd0pMzBpmt43VQQUp6F-Nsm4SZLDsq5Pm-0nL6nD35lrqTQQldRx6t09XVX",
  })
  .setTitle("Example Title")
  .setURL("https://example.com")
  .setDescription("This is an example description. Markdown works too!\n\nhttps://automatic.links\n> Block Quotes\n```\nCode Blocks\n```\n*Emphasis* or _emphasis_\n`Inline code` or ``inline code``\n[Links](https://example.com)\n<@123>, <@!123>, <#123>, <@&123>, @here, @everyone mentions\n||Spoilers||\n~~Strikethrough~~\n**Strong**\n__Underline__")
  .addFields(
    {
      name: "Nome Completo",
      value: "This is the field value.",
      inline: false
    },
    {
      name: "The first inline field.",
      value: "This field is inline.",
      inline: true
    },
    {
      name: "The second inline field.",
      value: "Inline fields are stacked next to each other.",
      inline: true
    },
    {
      name: "The third inline field.",
      value: "You can have up to 3 inline fields in a row.",
      inline: true
    },
    {
      name: "Even if the next field is inline...",
      value: "It won't stack with the previous inline fields.",
      inline: true
    },
  )
  .setImage("https://cubedhuang.com/images/alex-knight-unsplash.webp")
  .setThumbnail("https://dan.onl/images/emptysong.jpg")
  .setColor("#00b0f4")
  .setFooter({
    text: "Example Footer",
    iconURL: "https://slate.dan.onl/slate.png",
  })
  .setTimestamp();

await message.reply({ embeds: [embed] });