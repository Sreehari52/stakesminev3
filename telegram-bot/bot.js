const { Telegraf, Markup, session } = require('telegraf');

// Initialize the bot
const BOT_TOKEN = 'c';
if (!BOT_TOKEN) {
  throw new Error('BOT_TOKEN is missing');
}
const bot = new Telegraf(BOT_TOKEN);

// Use session middleware
bot.use(session({
  defaultSession: () => ({})
}));

bot.start(async (ctx) => {
  try {
    // Send a photo
    const photoUrl = "https://i.ytimg.com/vi/FJdPymT2MV0/maxresdefault.jpg";
    await ctx.replyWithPhoto(photoUrl);

    // Send a welcome text message
    const welcomeText = "🤖𝗪𝗘𝗟𝗖𝗢𝗠𝗘 𝗧𝗢 𝗦𝗧𝗔𝗞𝗘 𝗙𝗥𝗘𝗘 𝗕𝗢𝗧🤖";
    await ctx.reply(welcomeText);

    // Send an inline button
    const button = Markup.inlineKeyboard([
      Markup.button.callback("GET STARTED", 'select_bot')
    ]);
    await ctx.reply("👇𝗦𝗲𝗹𝗲𝗰𝘁 𝘄𝗵𝗶𝗰𝗵 𝗕𝗼𝘁 𝘆𝗼𝘂 𝘄𝗮𝗻𝘁 👇", button);
  } catch (error) {
    console.error('Error in start command:', error);
  }
});

bot.action('select_bot', async (ctx) => {
  try {
    // The next text message
    const nextText = `𝗜𝗡𝗙𝗢 ⬇

🟩 𝗩𝗜𝗣 𝗕𝗢𝗧 𝟵𝟴.𝟵𝟵% 𝗔𝗖𝗖𝗨𝗥𝗔𝗖𝗬 🎯 𝗔𝗡𝗗 𝗔𝗣𝗜 𝗦𝗨𝗣𝗣𝗢𝗥𝗧 ⚡️

𝗩𝗜𝗣 𝗕𝗢𝗧 - (𝟰𝟵𝟵₹) 𝗟𝗶𝗳𝗲𝘁𝗶𝗺𝗲 𝗔𝗰𝗰𝗲𝘀𝘀
Admin - @stakes_mine_support

🟥𝗙𝗥𝗘𝗘 𝗕𝗢𝗧 𝟳𝟮.𝟳% 𝗔𝗖𝗖𝗨𝗥𝗔𝗖𝗬 🎯 𝗔𝗡𝗗 𝗡𝗢𝗧 𝗔𝗣𝗜 𝗦𝗨𝗣𝗣𝗢𝗥𝗧 🚫`;

    // Buttons for "FREE BOT" and "PAID BOT"
    const buttons = Markup.inlineKeyboard([
      Markup.button.callback("FREE BOT", 'free_bot_info'),
      Markup.button.callback("PAID BOT", 'vip_bot')
    ]);

    await ctx.editMessageText(nextText, buttons);
  } catch (error) {
    console.error('Error in select_bot action:', error);
  }
});

bot.action('free_bot_info', async (ctx) => {
  try {
    // Text for free bot info
    const freeBotText = `⚠️ 𝗔𝘁𝘁𝗲𝗻𝘁𝗶𝗼𝗻 📣

✳️ 𝗬𝗼𝘂 𝗰𝗮𝗻 𝘂𝘀𝗲 𝘁𝗵𝗲 𝗳𝗿𝗲𝗲 𝘃𝗲𝗿𝘀𝗶𝗼𝗻 🆓
⚜️ 𝗥𝗲𝘀𝘂𝗹𝘁𝘀 𝗪𝗶𝗹𝗹 𝘀𝗵𝗼𝘄 𝗨𝗻𝗹𝗶𝗺𝗶𝘁𝗲𝗱 🎰
💀 𝗟𝗶𝘁𝘁𝗹𝗲 𝗥𝗶𝘀𝗸𝘆 𝗔𝗹𝘄𝗮𝘆𝘀 𝗣𝗹𝗮𝘆 𝟱% 𝗢𝗙 𝗕𝗮𝗻𝗸𝗿𝗼𝗹𝗹

🎯 𝟳𝟮% 𝗮𝗰𝗰𝘂𝗿𝗮𝗰𝘆 𝗶𝗻 𝗙𝗿𝗲𝗲 𝘃𝗲𝗿𝘀𝗶𝗼𝗻 🤖

🔺 𝗕𝗘𝗧 𝗦𝗠𝗔𝗟𝗟 𝗔𝗠𝗢𝗨𝗡𝗧

𝗖𝗼𝗻𝘁𝗮𝗰𝘁 - @stakes_mine_support `;

    // Button to select number of mines
    const button = Markup.inlineKeyboard([
      Markup.button.callback("𝗡𝗘𝗫𝗧👉", 'select_mines')
    ]);

    await ctx.editMessageText(freeBotText, button);
  } catch (error) {
    console.error('Error in free_bot_info action:', error);
  }
});

bot.action('select_mines', async (ctx) => {
  try {
    // Text for selecting the number of mines
    const selectText = "💣𝗦𝗲𝗹𝗲𝗰𝘁 𝘁𝗵𝗲 𝗛𝗼𝘄 𝗠𝗮𝗻𝘆 𝗠𝗶𝗻𝗲𝘀⬇️";

    // Creating buttons 1 to 10 with specified labels
    const buttons = Markup.inlineKeyboard([
      [Markup.button.callback("1 [FREE] 72% ACCURACY", 'mines_1')],
      [Markup.button.callback("2 [FREE] 72% ACCURACY", 'mines_2')],
      [Markup.button.callback("3 [VIP]", 'vip_bot')],
      [Markup.button.callback("4 [VIP]", 'vip_bot')],
      [Markup.button.callback("5 [VIP]", 'vip_bot')],
      [Markup.button.callback("6 [VIP]", 'vip_bot')],
      [Markup.button.callback("7 [VIP]", 'vip_bot')],
      [Markup.button.callback("8 [VIP]", 'vip_bot')],
      [Markup.button.callback("9 [VIP]", 'vip_bot')],
      [Markup.button.callback("10 [VIP]", 'vip_bot')]
    ]);

    await ctx.editMessageText(selectText, buttons);
  } catch (error) {
    console.error('Error in select_mines action:', error);
  }
});

bot.action('mines_1', async (ctx) => {
  try {
    // Initialize session if undefined
    if (!ctx.session) {
      ctx.session = {};
    }

    // Send image and ask for server seed
    const imageUrl = "https://i.postimg.cc/0NZsvnQF/maxresdefault-2.jpg";
    await ctx.replyWithPhoto(imageUrl);
    await ctx.reply("𝗙𝗶𝗻𝗱 𝘆𝗼𝘂𝗿 (𝗔𝗰𝘁𝗶𝘃𝗲 𝗦𝗲𝗿𝘃𝗲𝗿 𝗦𝗲𝗲𝗱) 𝗮𝗻𝗱 𝗽𝗮𝘀𝘁𝗲 𝗶𝘁 𝗵𝗲𝗿𝗲 ⬇️⬇️");

    // Set the state for waiting for user input
    ctx.session.awaitingServerSeed = 'mines_1';
  } catch (error) {
    console.error('Error in mines_1 action:', error);
  }
});

bot.action('mines_2', async (ctx) => {
  try {
    // Initialize session if undefined
    if (!ctx.session) {
      ctx.session = {};
    }

    // Send image and ask for server seed
    const imageUrl = "https://i.postimg.cc/WbxhZNsS/photo-2024-03-29-14-07-57.jpg";
    await ctx.replyWithPhoto(imageUrl);
    await ctx.reply("𝗙𝗶𝗻𝗱 𝘆𝗼𝘂𝗿 (𝗔𝗰𝘁𝗶𝘃𝗲 𝗦𝗲𝗿𝘃𝗲𝗿 𝗦𝗲𝗲𝗱) 𝗮𝗻𝗱 𝗽𝗮𝘀𝘁𝗲 𝗶𝘁 𝗵𝗲𝗿𝗲 ⬇️⬇️");

    // Set the state for waiting for user input
    ctx.session.awaitingServerSeed = 'mines_2';
  } catch (error) {
    console.error('Error in mines_2 action:', error);
  }
});

bot.on('text', async (ctx) => {
  try {
    // Initialize session if undefined
    if (!ctx.session) {
      ctx.session = {};
    }

    const awaitingServerSeed = ctx.session.awaitingServerSeed;
    if (awaitingServerSeed) {
      const serverSeed = ctx.message.text;
      if (serverSeed.length === 64) {
        if (awaitingServerSeed === 'mines_1') {
          // Create button for opening the website
          const button = Markup.inlineKeyboard([
            Markup.button.webApp("ㅤㅤCLICK HERE TO STARTㅤㅤ", 'https://mines21.netlify.app/')
          ]);
          await ctx.reply("Server seed is valid.", button);
        } else if (awaitingServerSeed === 'mines_2') {
          // Create button for opening the website
          const button = Markup.inlineKeyboard([
            Markup.button.webApp("ㅤㅤCLICK HERE TO STARTㅤㅤ", 'https://mines23.netlify.app/')
          ]);
          await ctx.reply("𝗦𝗲𝗿𝘃𝗲𝗿 𝘀𝗲𝗲𝗱 𝗶𝘀 𝘃𝗮𝗹𝗶𝗱 ✔️", button);
        }
      } else {
        await ctx.reply("𝗜𝗻𝘃𝗮𝗹𝗶𝗱 𝗦𝗲𝗿𝘃𝗲𝗿 𝗦𝗲𝗲𝗱 🥲");
      }
      // Clear the state
      ctx.session.awaitingServerSeed = null;
    }
  } catch (error) {
    console.error('Error handling text message:', error);
  }
});

bot.action('vip_bot', async (ctx) => {
  try {
    // Text for paid bot info
    const paidBotText = `🟩𝗦𝘁𝗮𝗸𝗲 𝗣𝗿𝗲𝗺𝗶𝘂𝗺 𝗕𝗢𝗧 𝗳𝗲𝗮𝘁𝘂𝗿𝗲𝘀 🎐
𝟵𝟴.𝟵𝟵% 𝗔𝗰𝗰𝘂𝗿𝗮𝗰𝘆

🟩𝟯 𝘁𝗶𝗺𝗲 𝗺𝗮𝘅 𝗪𝗶𝗻 𝗠𝗼𝗱

🟩𝟰𝘅/𝟱𝘅/𝟴𝘅+ 𝗖𝗮𝘀𝗵𝗼𝘂𝘁

🟩𝗔𝗹𝗹 𝗚𝗮𝗺𝗲𝘀 𝗨𝗻𝗹𝗼𝗰𝗸𝗲𝗱

🟩𝗨𝗻𝗹𝗶𝗺𝗶𝘁𝗲𝗱 𝗧𝗶𝗺𝗲 𝗨𝘀𝗲 

🟩𝗹𝗶𝗳𝗲𝘁𝗶𝗺𝗲 𝗦𝘂𝗽𝗽𝗼𝗿𝘁

🟩𝗦𝘁𝗮𝗸𝗲 𝗔𝗣𝗜 𝗦𝘂𝗽𝗽𝗼𝗿𝘁`;

    // Button for buying the bot
    const button = Markup.inlineKeyboard([
      Markup.button.callback("BUY NOW - 499₹", 'buy_now')
    ]);

    await ctx.editMessageText(paidBotText, button);
  } catch (error) {
    console.error('Error in vip_bot action:', error);
  }
});

bot.action('buy_now', async (ctx) => {
  try {
    // Text for payment details
    const paymentText = `𝗪𝗵𝗮𝘁 𝗮𝗿𝗲 𝘆𝗼𝘂 𝗽𝗮𝘆𝗶𝗻𝗴 𝗳𝗼𝗿 ❓ ✨

🟩𝗦𝘁𝗮𝗸𝗲 𝗔𝗣𝗜 𝗙𝗲𝗲 :- 250₹
🟩𝗦𝗲𝗿𝘃𝗶𝗰𝗲 𝗙𝗲𝗲 :- 200₹
🟩𝗕𝗼𝘁 𝗠𝗮𝗶𝗻𝘁𝗲𝗻𝗮𝗻𝗰𝗲 𝗙𝗲𝗲  :-50₹

💎𝗧𝗼𝘁𝗮𝗹 𝗣𝗮𝘆 𝗔𝗺𝗼𝘂𝗻𝘁 :- 𝟰𝟵𝟵 ₹

𝗢𝗻𝗲 𝗧𝗶𝗺𝗲 𝗣𝗮𝘆𝗺𝗲𝗻𝘁`;

    const button = Markup.inlineKeyboard([
      Markup.button.callback("PAYMENT BUTTON", 'payment_button')
    ]);

    await ctx.editMessageText(paymentText, button);
  } catch (error) {
    console.error('Error in buy_now action:', error);
  }
});

bot.action('payment_button', async (ctx) => {
  try {
    // Send payment image and details
    const imageUrl = "https://i.postimg.cc/pX0SxJw5/polotno.png";
    const paymentDetailsText = `𝗩𝗜𝗣 𝗕𝗢𝗧 - 𝟰𝟵𝟵 𝗥𝘂𝗽𝗲𝗲𝘀

𝗦𝗖𝗔𝗡 𝗧𝗛𝗜𝗦 𝗢𝗥 𝗖𝗢𝗣𝗬 𝗨𝗣𝗜 𝗜𝗗 

𝘀𝘁𝗮𝗸𝗲𝗺𝗶𝗻𝗲𝘀@𝘆𝗯𝗹

𝗣𝗔𝗬 & 𝗦𝗘𝗡𝗗 𝗦𝗖𝗥𝗘𝗘𝗡𝗦𝗛𝗢𝗧 
@stakes_mine_support

𝗪𝗶𝘁𝗵𝗶𝗻 𝟭𝟱 𝗠𝗶𝗻𝘀 𝗬𝗼𝘂 𝗪𝗶𝗹𝗹 𝗚𝗲𝘁 𝗣𝗮𝗶𝗱 𝗕𝗼𝘁  🤖`;

    await ctx.replyWithPhoto(imageUrl);
    await ctx.reply(paymentDetailsText);
  } catch (error) {
    console.error('Error in payment_button action:', error);
  }
});


bot.launch();
console.log('✅✅✅✅✅✅✅✅✅✅✅');

const PORT = process.env.PORT || 3000;
