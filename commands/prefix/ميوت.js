const { PermissionFlagsBits } = require("discord.js");

module.exports = {
  name: "ميوت",
  adminOnly: true,
  permissions: PermissionFlagsBits.ModerateMembers,
  cooldown: 10,

  async execute(message, args, client, sendTemp) {

    const member = message.mentions.members.first();
    if (!member)
      return sendTemp("❌ منشن الشخص بالشكل ده: $ميوت @user 5");

    // ناخد المدة من بعد المنشن
    const duration = parseInt(args[1]);

    if (isNaN(duration))
      return sendTemp("❌ اكتب المدة بالدقائق بعد المنشن.\nمثال: $ميوت @user 5");

    // ⛔ حماية
    if (member.roles.highest.position >= message.member.roles.highest.position)
      return sendTemp("❌ متقدرش تميوت حد أعلى منك.");

    if (duration === 0) {
      await member.timeout(null);
      return sendTemp(`✅ تم فك الميوت عن ${member.user.tag}`);
    }

    try {
      await member.timeout(duration * 60 * 1000);
      sendTemp(`🔇 تم ميوت ${member.user.tag} لمدة ${duration} دقيقة.`);
    } catch (err) {
      console.log(err);
      sendTemp("❌ حصل خطأ أثناء تنفيذ الميوت.");
    }

  }
};
