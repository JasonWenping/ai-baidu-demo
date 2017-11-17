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

var gallery = ['73A34901F47A43249F43FAD4BBE9A01A','C9F0106EB5F04D3295A53171CB439DDF','E6EB2FE76B17440FA15FBA8FA8226BF1','ED52C0039B744532BE7CF8EC6DDBD1B0','F181EE38E04B4707A5A326E442E81D45'];

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
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
