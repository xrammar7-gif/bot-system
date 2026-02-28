const { PermissionFlagsBits, EmbedBuilder } = require("discord.js");

module.exports = {
  name: "هيلب",
  adminOnly: true,
  permissions: PermissionFlagsBits.Administrator,
  cooldown: 5,

  async execute(message, args, client, sendTemp) {

    const embed = new EmbedBuilder()
      .setColor("Blue")
      .setTitle("📖 اوامر الادمن")
      .addFields(
        {
          name: "🔒 إدارة الرومات",
          value: "`$قفل`\n`$فتح`\n`$اخفاء`\n`$اظهار`",
          inline: false
        },
        {
          name: "👤 إدارة الأعضاء",
          value: "`$ميوت`",
          inline: false
        },
        {
          name: "🎭 إدارة الرولات",
          value: "`$رول`",
          inline: false
        },
        {
          name: "🧪 اختبار",
          value: "`$شغال`",
          inline: false
        }
      )
      .setFooter({ text: "Shop System Admin Panel" })
      .setTimestamp();

    const msg = await message.channel.send({ embeds: [embed] });

    setTimeout(() => {
      msg.delete().catch(() => {});
    }, 15000);
  }
};
