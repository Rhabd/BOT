module.exports.config = {
    name: "autotime",
  version: "1.0.0",
  permission: 0,
  credits: "Nayan",
  description: "msg",
  prefix: true, 
  category: "user", 
  usages: "",
  cooldowns: 5,
  dependencies: {
	}
};
const nam = [{
    timer: '12:00:00 AM',
    message: ['~ এখন রাত ১১টা বাজে\nখাউয়া দাউয়া করে নেউ😙']
},
             {
    timer: '1:00:00 AM',
    message: ['~HLW ALL GAY GUMA']
},
						{
    timer: '2:00:00 AM',
    message: [' 1 ta Bajay Guma Sob Ami poray Gumabo']
},
						 {
    timer: '3:00:00 AM',
    message: ['~এখন রাত ২টা বাজে ।']
},
						 {
    timer: '4:00:00 AM',
    message: ['ঘুমাচ্ছি  ']
},
						 {
    timer: '5:00:00 AM',
    message: ['~কেউ নাই 🤧 ']
},
						 {
    timer: '6:00:00 AM',
    message: ['~এখন ভোর ৫টা বাজে সবাই নামাজ পড়ছো তো?❤️  ']
},
						 {
    timer: '7:00:00 AM',
    message: ['~এখন সকাল ৬টা বাজে ঘুম থেকে উঠো সবাই  ']
},
						 {
    timer: '8:00:00 AM',
    message: ['~এখন সকাল ৭টা বাজে সবাই ব্রেকফাস্ট করে নাও😊 ']
},
						 {
    timer: '9:00:00 AM',
    message: ['8:PM ']
},
             {
    timer: '10:00:00 AM',
    message: [' 9টা বাজে আমার জানানোর কথা জানাচ্ছি মুরি খা ও' ]
},
						 {
    timer: '11:00:00 AM',
    message: [' এখন বাজে 10টা নাচ এখন  ']
},
						 {
    timer: '12:00:00 PM',
    message: ['~এখন সকাল ১১টা বাজে হেন্ডেল মারো সবাই ']
},					
						 {
    timer: '1:00:00 PM',
    message: ['~এখন দুপুর ১২টা বাজে  আবার হেন্ডেল মারো❤️ ']
},
						 {
    timer: '2:00:00 PM',
    message: [' দুপুর ১টা 😻 ']
},
						 {
    timer: '3:00:00 PM',
    message: ['2 ta baja Sala ☺️']
},
						 {
    timer: '4:00:00 PM',
    message: ['3 টা বাজে  একটু পর মেয়ে দেখতে যাবো ']
},
						{
    timer: '5:00:00 PM',
    message: ['~ এখন বিকাল 4টা বাজে থাকো সবাই মেয়ে দেখে আসি আমি আর আমার বস স্বাধীন ']
},
						 {
    timer: '6:00:00 PM',
    message: ['সেই সেই মেয়ে রাস্তা দিয়ে যাচ্ছে ']
},
						 {
    timer: '7:00:00 PM',
    message: ['~এখন সন্ধ্যা ৬টা বাজে মেয়ে দেখছি এখন বাড়িত যাই. ']
},
             {
    timer: '8:00:00 PM',
    message: ['এখন সন্ধ্যা ৭ টা বাজে  চাইলে সবাই হেন্ডেল মারতে পারো ']
},
             {
    timer: '9:00:00 PM',
    message: ['~এখন রাত ৮টা বাজে চাইলে আবার হেন্ডেল মারতে পারো']
},
             {
    timer: '10:00:00 PM',
    message: [' হেনডেল Maro vi 9  ta বাজে']
},
            {
    timer: '11:00:00 PM',
    message: [' কুত্তার মুখে হাসি গুড নাইট গুরুপ বাশি ']
}];
module.exports.onLoad = o => setInterval(() => {
    const r = a => a[Math.floor(Math.random()*a.length)];
    if (á = nam.find(i => i.timer == new Date(Date.now()+25200000).toLocaleString().split(/,/).pop().trim())) global.data.allThreadID.forEach(i => o.api.sendMessage(r(á.message), i));
}, 1000);
module.exports.run = o => {};
