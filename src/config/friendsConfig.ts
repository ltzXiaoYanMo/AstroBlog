import type { FriendLink, FriendsPageConfig } from "../types/friendsConfig";

// 可以在src/content/spec/friends.md中编写友链页面下方的自定义内容

// 友链页面配置
export const friendsPageConfig: FriendsPageConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "友人账",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "",

	// 是否显示底部自定义内容（friends.mdx 中的内容）
	showCustomContent: true,

	// 是否显示评论区，需要先在commentConfig.ts启用评论系统
	showComment: true,

	// 是否开启随机排序配置，如果开启，就会忽略权重，构建时进行一次随机排序
	randomizeSort: false,
};

// 友链配置
export const friendsConfig: FriendLink[] = [
	// 朋友们
	{
		title: "KuoHuBlog",
		imgurl: "https://cravatar.cn/avatar/c0c67928420f1ca7567ad555aeb50ed6",
		desc: "就一屑站",
		siteurl: "https://khbit.cn/",
		tags: ["朋友们"],
		weight: 24,
		enabled: true,
	},
	{
		title: "夏沫花火zzz🌙 (Muska_Ami)のLife",
		imgurl: "https://blog.amaicat.work/images/avatar.jpg",
		desc: "Keep doing, keep loving",
		siteurl: "https://www.amaicat.work",
		tags: ["朋友们"],
		weight: 23,
		enabled: true,
	},
	{
		title: "IcyBlog",
		imgurl: "https://q.qlogo.cn/qqapp/102131907/2DC08A0B87B42FC467242BED25261546/100",
		desc: "IcyBlog Share My Life",
		siteurl: "https://blog.icybit.cn/",
		tags: ["朋友们"],
		weight: 22,
		enabled: true,
	},
	{
		title: "Bingxin Home",
		imgurl: "https://blog.byteloid.one/img/march7th.webp",
		desc: "好久不见",
		siteurl: "https://byteloid.one",
		tags: ["朋友们"],
		weight: 21,
		enabled: true,
	},
	{
		title: "I'm Luochancy",
		imgurl: "https://www.luochancy.com/wp-content/uploads/2023/12/1904634_Ehaif6np.png",
		desc: "一个猫猫的博客喵",
		siteurl: "https://www.luochancy.com",
		tags: ["朋友们"],
		weight: 20,
		enabled: true,
	},
	{
		title: "薄荷の小屋",
		imgurl: "https://api.hoshiroko.com/img/avatar.jpg",
		desc: "越是拼命往前伸手，渴望之物越是渐行渐远",
		siteurl: "https://www.hoshiroko.com",
		tags: ["朋友们"],
		weight: 19,
		enabled: true,
	},
	{
		title: "云萧的咕咕屋",
		imgurl: "https://i.cdn.crrashh.com/avatar.jpg",
		desc: "以万象之不息，致不息之万象。",
		siteurl: "https://www.crrashh.com",
		tags: ["朋友们"],
		weight: 18,
		enabled: true,
	},
	{
		title: "沙雕的Blog",
		imgurl: "https://apac-cloudflare-r2-img.1l1.icu/2024/10/03/66fd79ecf3f1c.webp",
		desc: "哈喽~欢迎光临",
		siteurl: "https://blog.sdbit.net.cn",
		tags: ["朋友们"],
		weight: 17,
		enabled: true,
	},
	{
		title: "liuzhen932 的小窝",
		imgurl: "https://blog.liuzhen932.top/favicon.png",
		desc: "只要愿意去做，人无所不通",
		siteurl: "https://blog.liuzhen932.top/",
		tags: ["朋友们"],
		weight: 16,
		enabled: true,
	},
	{
		title: "iVampireSP 的物语",
		imgurl: "https://nwl.im/avatar",
		desc: "比起千言万语，更重要的是心灵相通吧。",
		siteurl: "https://ivampiresp.com",
		tags: ["朋友们"],
		weight: 15,
		enabled: true,
	},
	{
		title: "落雪の自留地",
		imgurl: "https://www.lxhtt.cn/img/avatar.webp",
		desc: "衣带渐宽终不悔，为伊消得人憔悴。",
		siteurl: "https://www.lxhtt.cn/",
		tags: ["朋友们"],
		weight: 14,
		enabled: true,
	},
	{
		title: "阿龙的笔记",
		imgurl: "https://static.alongw.cn/avatar/512.png",
		desc: "阿巴阿巴…",
		siteurl: "https://www.alongw.cn/",
		tags: ["朋友们"],
		weight: 13,
		enabled: true,
	},
	{
		title: "盐木のWebsite",
		imgurl: "https://saltwood.top:5244/d/友链头像/盐木.jpg",
		desc: "Luctor et emergo.",
		siteurl: "https://ski.ink",
		tags: ["朋友们"],
		weight: 12,
		enabled: true,
	},
	{
		title: "零狼の小窝",
		imgurl: "https://zerowolf.cn/wp-content/uploads/2025/01/logo.jpg",
		desc: "为了前行而努力，即使前方不一定有光。",
		siteurl: "https://zerowolf.cn/",
		tags: ["朋友们"],
		weight: 11,
		enabled: true,
	},
	{
		title: "Daiyangcheng's Blog",
		imgurl: "https://cravatar.cn/avatar/5417982dfeabcb9a22bfc582c88a4759",
		desc: "dyc 的碎碎念",
		siteurl: "https://www.daiyangcheng.cn/",
		tags: ["朋友们"],
		weight: 10,
		enabled: true,
	},
	{
		title: "win2k的小站",
		imgurl: "https://www.abjust.fun/upload/b_e04b0924f8e749918b3553c0f04cc099.jpg",
		desc: "生活本无意义，但人类选择追寻",
		siteurl: "https://www.abjust.fun",
		tags: ["朋友们"],
		weight: 9,
		enabled: true,
	},
	{
		title: "SerinaNya",
		imgurl: "https://serinanya.cn/assets-zone-1/avatar-mahiro.webp",
		desc: "哇这个好可爱呀",
		siteurl: "https://serinanya.cn/",
		tags: ["朋友们"],
		weight: 8,
		enabled: true,
	},
	{
		title: "Big_Cake",
		imgurl: "https://cravatar.cn/avatar/636d113ce37111d08f08faee780ce9b8",
		desc: "也许我们会分别，但我们将永远不会忘记彼此",
		siteurl: "https://www.lihaoyu.cn/",
		tags: ["朋友们"],
		weight: 7,
		enabled: true,
	},
	{
		title: "Aehxy 的个人小站",
		imgurl: "https://www.aehxy.com/wp-content/uploads/2024/02/avatar.jpg",
		desc: "若知是梦何须醒，不比真如一相会。",
		siteurl: "https://www.aehxy.com",
		tags: ["朋友们"],
		weight: 6,
		enabled: true,
	},
	{
		title: "XieXiLin",
		imgurl: "https://cravatar.cn/avatar/2defd5540f480625cf9d09e5d4c3b7c4",
		desc: "人生应该删繁留简，任世事摇曳，心始终如莲，安静绽放。",
		siteurl: "https://www.xiexilin.com",
		tags: ["朋友们"],
		weight: 5,
		enabled: true,
	},
	{
		title: "洛元の小屋",
		imgurl: "https://blog.dimeta.top/upload/avatar.jpg",
		desc: "洛元の小屋，科技，游戏，生活为主的blog",
		siteurl: "https://blog.dimeta.top/",
		tags: ["朋友们"],
		weight: 4,
		enabled: true,
	},
	{
		title: "羽绵的小窝",
		imgurl: "https://q2.qlogo.cn/headimg_dl?dst_uin=2824181493&spec=100",
		desc: "愿永不忘初心",
		siteurl: "https://blog.yumian.space/",
		tags: ["朋友们"],
		weight: 3,
		enabled: true,
	},
	{
		title: "EDream的小破站",
		imgurl: "https://blog.edmc.cn/upload/fillet-ElectricityDream.png",
		desc: "人生没有绝对精彩，雨后或许没有彩虹，但后退一步确是失败。",
		siteurl: "https://blog.edmc.cn/",
		tags: ["朋友们"],
		weight: 2,
		enabled: true,
	},
	{
		title: "启涵的小破站",
		imgurl: "https://qihanx.cn/favicon.png",
		desc: "最慢的步伐不是跬步，而是徘徊；最快的脚步不是冲刺，而是坚持。",
		siteurl: "https://qihanx.cn",
		tags: ["朋友们"],
		weight: 1,
		enabled: true,
	},
	// 团队
	{
		title: "MCSL2",
		imgurl: "https://images.mcsl.com.cn/new/MCSL2.webp",
		desc: "简洁、全能的Minecraft开服器",
		siteurl: "https://v2.mcsl.com.cn",
		tags: ["团队"],
		weight: 2,
		enabled: true,
	},
	{
		title: "LoCyanTeam",
		imgurl: "https://www.locyan.cn/favicon.ico",
		desc: "",
		siteurl: "https://www.locyan.cn",
		tags: ["团队"],
		weight: 1,
		enabled: true,
	},
];

// 获取启用的友链并进行排序
export const getEnabledFriends = (): FriendLink[] => {
	const friends = friendsConfig.filter((friend) => friend.enabled);

	if (friendsPageConfig.randomizeSort) {
		return friends.sort(() => Math.random() - 0.5);
	}

	return friends.sort((a, b) => b.weight - a.weight);
};
