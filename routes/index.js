const router = require('koa-router')()


var nav_title=['产品服务','解决方案','案例与场景','资源中心','合作伙伴'];
var title_2 = ['语音识别','语音合成','语音唤醒','视频技术','文字识别','图像识别','人脸识别','图像搜索','图像审核','增强现实','语言处理基础技术','文本审核','理解与交互技术','机器翻译','智能营销','风控与反欺骗','舆情监控','知识图谱','Paddle Paddle','开放数据集'];
var list_1 = ['语音识别','长语音识别','远场语音识别'];
var list_2 = ['视频内容分析','视频封面选取','视频比例检索','视频内容审核'];
var list_3 = ['通用文字识别','网络图片识别','卡证识别','营业执照识别','车牌识别','票据识别','表格文字识别'];
var list_4 = ['通用图像分析','细粒度图像识别','人体分析','定制化图像识别'];
var list_5 = ['人脸检测','人脸对别','人脸查找'];
var list_6 = ['相同图片搜索','相似图片搜索','商品图片搜索'];
var list_7 = ['语法分析','依存句法分析','词向量表示','DNN语言模型','词义相似度','短文本相似度','评论观点抽取','情感倾向分析'];
var list_8 = ['客情分析','商情分析','司南营销分析'];
var list_9 = ['保险风险识别','保险理赔反欺诈','银行|互金风控'];
var list_10 = ['舆情平台','舆情API'];
var list_11 = ['知识图谱Schema','结构化数据抽取'];
var list_12 = ['室外场景理解','视频精彩片段','阅读理解'];

var list2 = ['人脸核身','人脸会场签到','人脸会员识别','人脸闸机','智能电销','机器人视觉','对话式机器人','DuerOS智慧家庭','DuerOS智能语音助理','AR智能营销'];
var list3 = ['客户案例','应用场景'];
var list4 = ['文档中心','SDK下载','教学视频','常见问题'];

var gallery = ['73A34901F47A43249F43FAD4BBE9A01A.jpg','C9F0106EB5F04D3295A53171CB439DDF.jpg','E6EB2FE76B17440FA15FBA8FA8226BF1.jpg','ED52C0039B744532BE7CF8EC6DDBD1B0.jpg','F181EE38E04B4707A5A326E442E81D45.jpg'];
var link_title = ['开放数据集助力AI成长 ','人脸硬件合作伙伴计划 ','Dumix AR开放平台全面公测 ','数据智能 智胜未来 ','图像审核钜惠上线 '];

var visitTitle = ['开发者快速接入百度AI只需五步轻松搞定','百度启动[燎原计划]助力开发者共创AI未来','理解与交互技术UNIT玩转“人机对话”','百度AI有奖调研3分钟领100元礼品卡'];
var visitTag = ['新手引导','上线快报','新闻资讯','精彩活动'];
var ctitle = ['全球领先的AI服务','全面开放的行业生态','丰富易用的解决方案','成功为客户提供业务新动力','助力生态伙伴 共赢AI未来','全线产品免费开放，等你加入'];

var items1 = ['语音识别','语音合成','语音唤醒','文字识别','人脸识别'];
var items2 =['语言处理技术','文本审核','理解与交互技术UNIT','机器翻译','智能营销'];
var s_title = ['','','','','','',''];
var s_note = ['','','','','','',''];
var c_name = [
{
	logo:'pongcar_logo.png',
	cname:'PONY CARD'
},
{
	logo:'18183_logo.png',
    cname:'18183'
},
{
	logo:'bm_logo.png',
	cname:'白描'
},
{
	logo:'ks_logo.png',
	cname:'卡斯数据'
},
{
	logo:'xm_logo.png',
	cname:'熊猫看书'
},
{
	logo:'lg_logo.png',
	cname:'拉勾网'
},
{
	logo:'more_logo.png',
	cname:''
}];

var c_info = [
{
	photo:'ponycar.png',
	name:'刘逸洵',
	job:'PONY CAR CEO',
	intro:'    PonyCar 作为共享出行行业率先引进 AI 技术的企业，引进百度 AI 人脸识别功能，不仅完善平台用户身份认证体系， 极大增强了整个平台的风控能力，也能辅助交管部门监测，很荣幸和百度AI 站在一起，为数亿有证无车的用户提供舒适安全的共享出行服务。'
},
{
	photo:'18183.png',
	name:'刘辉',
	job:'18183 CEO',
	intro:'    畅玩网络引进百度AI技术平台，将文字识别、图片审核等智能内容审核方案运用到平台运作中，不仅极大地确保了平台的稳定发展，净化了内容信息，远离违规风险，同时也大大节省了人力。期待能与百度AI一起，为用户打造更加纯净健康、内容丰富的网络游戏平台。'
},
{
	photo:'bm.png',
	name:'陶新乐',
	job:'白描 开发者',
	intro:'    白描是一款专注于OCR识别的效率工具，借助百度文字识别及翻译能力，已经具备准确高效的文字识别、批量文字识别、表格识别和识别后的翻译功能，有着良好的用户体验，广受用户好评，被各媒体广泛推荐，被网友称为“准确率高到没有朋友的文字识别 OCR APP”。'
},
{
	photo:'ks.png',
	name:'李若飞',
	job:'卡思数据 VP',
	intro:'    卡思数据平台是国内唯一的视频全网大数据开放平台，通过引入百度AI自然语言处理技术分析视频节目的用户互动数据，从关键词和情感分析两个角度对节目进行舆情分析，让节目创作团队更了解观众的兴趣点以及对节目的看法，更清晰高效的指导节目的研发和运营。'
},
{
	photo:'xm.png',
	name:'何健秋',
	job:'熊猫看书 VP',
	intro:'    熊猫看书作为一个阅读内容平台，通过引进百度AI语音合成技术实现了对内容的重新解读，通过语音朗读的方式让用户获得了新的内容消费场景， 让阅读更轻松，多种音色 离在线切换都更好的满足了用户多种碎片化场景下的阅读需求。'
},
{
	photo:'lg.png',
	name:'马德龙',
	job:'拉勾网 CEO',
	intro:'    拉勾将百度 AI 的人脸识别功能应用到招聘者身份审核中，实现了AI技术和招聘场景的深度结合，提升了信息审核效率和安全性。作为国内领先的互联网人力资源综合平台，和百度AI一起，为平台上的25万企业用户和1500万互联网求职者提供保障。'	
},
{

}


];

var paragraph = [
{
	author:'技术资源',
	description:'专属的定期培训、技术支持，及新产品内测体验，还将有机会参与百度AI主题沙龙。'
},
{
	author:'品牌共建',
	description:'获得百度AI的品牌赋能推广，及专有的营销渠道推广，助力您创造品牌价值。'
},
{
	author:'成就客户',
	description:'获得定制化需求支持及入驻平台展现机会，引领行业升级，携手成就客户并推进AI生态的建设与发展。'
}
];

var solution = [
{
	img:'solution1.jpg',
	s_title:'人脸核身',
	s_note:'快速完成身份核实，确保【真人】为【本人】'
},
{
	img:'solution2.jpg',
	s_title:'人脸会场签到',
	s_note:'参会人员邀请注册刷年、刷脸签到、与会人员统计管理平台`'
},
{
	img:'solution3.jpg',
	s_title:'人脸会员识别',
	s_note:'人脸注册、人脸自动补货签到、与会人员统计管理平台'
},{
	img:'solution4.jpg',
	s_title:'人脸闸机',
	s_note:'参会人员邀请注册刷年、刷脸签到、与会人员统计管理平台'
},{
	img:'solution5.jpg',
	s_title:'智能电销',
	s_note:'参会人员邀请注册刷年、刷脸签到、与会人员统计管理平台'
},{
	img:'solution6.jpg',
	s_title:'机器人视觉',
	s_note:'参会人员邀请注册刷年、刷脸签到、与会人员统计管理平台'
},{
	img:'solution7.jpg',
	s_title:'对话式机器人',
	s_note:'参会人员邀请注册刷年、刷脸签到、与会人员统计管理平台'
},
{
	img:'solution8.jpg',
	s_title:'智慧家庭',
	s_note:'参会人员邀请注册刷年、刷脸签到、与会人员统计管理平台'
},
{
	img:'solution9.jpg',
	s_title:'智能语音处理',
	s_note:'参会人员邀请注册刷年、刷脸签到、与会人员统计管理平台'
}]


var partner = ['c1.jpg','c2.jpg','c3.jpg','c4.jpg','c5.jpg','c6.jpg','c7.jpg','c8.jpg'];

var linkTitle = ['快速入口','开发资源','常见问题','服务支持'];
var links = ['账户中心','管理控制台','财务中心','价格计算器','服务协议','合作申请'];
var links2 = ['技术论坛','文档中心','SDK下载','教学视频','GitHub','QQ支持群'];
var links3 = ['账号登录','接口调用','商用咨询','技术问答'];
var links4 = ['合作咨询','提交工单','意见反馈','客服电话','4008-777-818'];
var friend_link = ['百度云','百度开发者中心','百度守住平台','百度技术学院','百度数据众包'];

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: '百度AI开放平台',
    nav_title:nav_title,
    title_2:title_2,
    list_1:list_1,
    list_2:list_2,
    list_3:list_3,
    list_4:list_4,
    list_5:list_5,
    list_6:list_6,
    list_7:list_7,
    list_8:list_8,
    list_9:list_9,
    list_10:list_10,
    list_11:list_11,
    list_12:list_12,
    list2:list2,
    list3:list3,
    list4:list4,
    gallery:gallery,	
    link_title:link_title,
    visitTag:visitTag,
    visitTitle:visitTitle,
    ctitle:ctitle,
    items1:items1,
    items2:items2,
    s_title:s_title,
    s_note:s_note,
    c_name:c_name,
    c_info:c_info,
    partner:partner,
    linkTitle:linkTitle,
    links:links,
    links2:links2,
    links3:links3,
    links4:links4,
    friend_link:friend_link,
    paragraph:paragraph,
    solution:solution
  })
})

router.get('/test',async (ctx, next) =>{
	await ctx.render('testgallery',{
		title:'test',
		gallery:gallery
	})
})
router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
