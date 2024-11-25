const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "252905253177";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_24_11_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTkxLFxuICAgICAgICAyNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDgyLFxuICAgICAgICA0MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMixcbiAgICAgICAgMTk0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjA2LFxuICAgICAgICA2MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0LFxuICAgICAgICA2LFxuICAgICAgICAyNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDM4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDkxLFxuICAgICAgICA2NSxcbiAgICAgICAgOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTY5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDkyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTc0LFxuICAgICAgICA1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDUwLFxuICAgICAgICAxODQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjIwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTAyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDk2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMixcbiAgICAgICAgNixcbiAgICAgICAgNTMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAzNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODEsXG4gICAgICAgIDQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDc0LFxuICAgICAgICAyOSxcbiAgICAgICAgMjU0LFxuICAgICAgICA1MixcbiAgICAgICAgODgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjM2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODgsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzksXG4gICAgICAgIDE4NixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDM4LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMjgsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTMwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDMzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTksXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDcsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDk2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDcwLFxuICAgICAgICAxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxODAsXG4gICAgICAgIDM4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDg1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTM4LFxuICAgICAgICA1MSxcbiAgICAgICAgODcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibnJEd0ZRUXIxUnZtRTU5dEFpcFhtdkxWVGRGNUtESHBrNmRQb2hJWWRhbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUVZhS2RmeldTNUMwbVJsUExsLVpYZ1wiLFxuICBcInBob25lSWRcIjogXCJkMGM4ZGRlMC0zNThjLTQwNzYtODc5Ny0wMjQxOWY3ODhjNWRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzIsXG4gICAgICAxNDMsXG4gICAgICAxNjcsXG4gICAgICAxODYsXG4gICAgICAxNDgsXG4gICAgICAyNTMsXG4gICAgICA5NyxcbiAgICAgIDcsXG4gICAgICAxNTksXG4gICAgICAyMTEsXG4gICAgICAxOTIsXG4gICAgICAxMjgsXG4gICAgICA5NCxcbiAgICAgIDIzOCxcbiAgICAgIDkwLFxuICAgICAgMTUsXG4gICAgICAxNjgsXG4gICAgICA2MyxcbiAgICAgIDIwMyxcbiAgICAgIDE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NixcbiAgICAgIDIzNixcbiAgICAgIDE4MSxcbiAgICAgIDEwMSxcbiAgICAgIDYxLFxuICAgICAgNDYsXG4gICAgICA4OCxcbiAgICAgIDExNCxcbiAgICAgIDYxLFxuICAgICAgMjA0LFxuICAgICAgOTAsXG4gICAgICAyMzcsXG4gICAgICAxMCxcbiAgICAgIDIzNixcbiAgICAgIDgzLFxuICAgICAgMTYxLFxuICAgICAgMTYwLFxuICAgICAgMTM4LFxuICAgICAgMjAsXG4gICAgICAxNjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNUY1SExaQTNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1MjkwNTI1MzE3NzozNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdl5fwnZeu8J2XsfCdl7HwnZiGXCIsXG4gICAgXCJsaWRcIjogXCIyNTE2MTY4MzM4NDc1Mjk6MzRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSVRaaks4RUVJajFrYm9HR0F3Z0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJRSzVEUG84VktCdDVvV2tCZ3Y1dGRoY1lCRGw0SWtlbyswUkR1dG5JOG5RPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlVha0IxVXNDWEFrWllGZk91ZXRScVBYWnJTM2FZTVc3Z2MzQkNLVmxWR2ROaWdxaW5Gai9zZStOUERjZEVNNjI0U3lXQitzL3ZSam1oZ0Qzc3ZTRUFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIklYZEoyQTBwcnVsaXhTTVJsV0ZhRXNWQStNVlhHVHdJYTAxVWRNVEtBR3R3MHNzamk0dkhINjVMakcybGt4MXVKQ1FiR1U3Yk8vQkRscEk1ajBpR0FnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1MjkwNTI1MzE3NzozNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzI1NDEwNjgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNRElcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1ESS5qc29uIjogIntcImtleURhdGFcIjpcIldLNTlBUUpDaWZEQmEzazZYMlplZmsrQmkycXRIR3dQRVRwSDN3N3BNQUU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE3MjUxNTk3MixcImN1cnJlbnRJbmRleFwiOjksXCJkZXZpY2VJbmRleGVzXCI6WzAsNSw3LDhdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
