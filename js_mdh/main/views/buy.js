/*
 * @Author: maidehao
 * @Date:   2016-03-30 09:50:19
 * @Last Modified by:   maidehao
 * @Last Modified time: 2016-03-30 10:34:08
 */
$(function() {
	var dictProv = {
		"1": "所在省份",
		"1001": "北京市",
		"1002": "天津市",
		"1003": "上海市",
		"1004": "重庆市",
		"1005": "黑龙江省",
		"1006": "吉林省",
		"1007": "辽宁省",
		"1008": "河北省",
		"1009": "山东省",
		"1010": "江苏省",
		"1011": "安徽省",
		"1012": "浙江省",
		"1013": "福建省",
		"1014": "广东省",
		"1015": "海南省",
		"1016": "云南省",
		"1017": "贵州省",
		"1018": "四川省",
		"1019": "湖南省",
		"1020": "湖北省",
		"1021": "河南省",
		"1022": "山西省",
		"1023": "陕西省",
		"1024": "甘肃省",
		"1025": "青海省",
		"1026": "江西省",
		"1027": "新疆维吾尔自治区",
		"1028": "西藏自治区",
		"1029": "宁夏回族自治区",
		"1030": "内蒙古自治区",
		"1031": "广西壮族自治区",
		"1032": "香港特别行政区",
		"1033": "澳门特别行政区",
		"1034": "台湾",
		"1035": "其他"
	};
	var arrCity = new Array();
	arrCity["1"] = {
		"1": "所在市区"
	}
	arrCity["1001"] = {
		"100101": "海淀区",
		"100102": "东城区",
		"100103": "西城区",
		"100104": "宣武区",
		"100105": "丰台区",
		"100105": "朝阳区",
		"100106": "崇文区",
		"100107": "大兴区",
		"100108": "石景山区",
		"100109": "门头沟区",
		"100110": "房山区",
		"100111": "通州区",
		"100112": "顺义区",
		"100113": "怀柔区",
		"100114": "昌平区",
		"100115": "平谷区",
		"100116": "密云县",
		"100117": "延庆县"
	};
	arrCity["1002"] = {
		"100201": "和平区",
		"100202": "河西区",
		"100203": "河北区",
		"100204": "河东区",
		"100205": "南开区",
		"100206": "红桥区",
		"100207": "北辰区",
		"100208": "津南区",
		"100209": "武清区",
		"100210": "塘沽区",
		"100211": "西青区",
		"100212": "汉沽区",
		"100213": "大港区",
		"100214": "宝坻区",
		"100215": "东丽区",
		"100216": "蓟县",
		"100217": "静海县",
		"100218": "宁河县"
	};
	arrCity["1003"] = {
		"100301": "黄浦区",
		"100302": "卢湾区",
		"100303": "徐汇区",
		"100304": "长宁区",
		"100305": "静安区",
		"100306": "普陀区",
		"100307": "闸北区",
		"100308": "杨浦区",
		"100309": "虹口区",
		"100310": "闵行区",
		"100311": "宝山区",
		"100312": "嘉定区",
		"100313": "浦东新区",
		"100314": "金山区",
		"100315": "松江区",
		"100316": "青浦区",
		"100317": "南汇区",
		"100318": "奉贤区",
		"100319": "崇明县"
	};
	arrCity["1004"] = {
		"100401": "渝中区",
		"100402": "大渡口区",
		"100403": "江北区",
		"100404": "沙坪坝区",
		"100405": "九龙坡区",
		"100406": "南岸区",
		"100407": "北碚区",
		"100408": "万盛区",
		"100409": "双桥区",
		"100410": "渝北区",
		"100411": "巴南区",
		"100412": "万州区",
		"100413": "涪陵区",
		"100414": "黔江区",
		"100415": "长寿区",
		"100416": "江津区",
		"100417": "永川区",
		"100418": "南川区",
		"100419": "綦江县",
		"100420": "潼南县",
		"100421": "铜梁县",
		"100422": "大足县",
		"100423": "荣昌县",
		"100424": "璧山县",
		"100425": "垫江县",
		"100426": "武隆县",
		"100427": "丰都县",
		"100428": "城口县",
		"100429": "梁平县",
		"100430": "开县",
		"100431": "巫溪县",
		"100432": "巫山县",
		"100433": "奉节县",
		"100434": "云阳县",
		"100435": "忠县",
		"100436": "石柱土家族自治县",
		"100437": "彭水苗族土家族自治县",
		"100438": "酉阳苗族自治县",
		"100439": "秀山土家族苗族自治县"
	};
	arrCity["1005"] = {
		"100501": "哈尔滨",
		"100502": "大庆",
		"100503": "齐齐哈尔",
		"100504": "佳木斯",
		"100505": "鸡西",
		"100506": "鹤岗",
		"100507": "双鸭山",
		"100508": "牡丹江",
		"100509": "伊春",
		"100510": "七台河",
		"100511": "黑河",
		"100512": "绥化加格达奇"
	};
	arrCity["1006"] = {
		"100601": "长春",
		"100602": "吉林",
		"100603": "四平",
		"100604": "辽源",
		"100605": "通化",
		"100606": "白山",
		"100607": "松原",
		"100608": "白城"
	};
	arrCity["1007"] = {
		"100701": "沈阳",
		"100702": "大连",
		"100703": "金州",
		"100704": "鞍山",
		"100705": "抚顺",
		"100705": "本溪",
		"100706": "丹东",
		"100707": "锦州",
		"100708": "营口",
		"100709": "阜新",
		"100710": "辽阳",
		"100711": "盘锦",
		"100712": "铁岭",
		"100713": "朝阳",
		"100714": "葫芦岛"
	};
	arrCity["1008"] = {
		"100801": "石家庄",
		"100802": "唐山",
		"100803": "邯郸",
		"100804": "秦皇岛",
		"100805": "保定",
		"100806": "张家口",
		"100807": "承德",
		"100808": "廊坊",
		"100809": "沧州",
		"100810": "衡水",
		"100811": "邢台"
	};
	arrCity["1009"] = {
		"100901": "济南",
		"100902": "青岛",
		"100903": "淄博",
		"100904": "枣庄",
		"100905": "东营",
		"100906": "烟台",
		"100907": "潍坊",
		"100908": "济宁",
		"100909": "泰安",
		"100910": "威海",
		"100911": "日照",
		"100912": "莱芜",
		"100913": "临沂",
		"100914": "德州",
		"100915": "聊城",
		"100916": "菏泽",
		"100917": "滨州"
	};
	arrCity["1010"] = {
		"101001": "南京",
		"101002": "镇江",
		"101003": "常州",
		"101004": "无锡",
		"101005": "苏州",
		"101006": "徐州",
		"101007": "连云港",
		"101008": "淮安",
		"101009": "盐城",
		"101010": "扬州",
		"101011": "泰州",
		"101012": "南通",
		"101013": "宿迁"
	};
	arrCity["1011"] = {
		"101101": "合肥",
		"101102": "蚌埠",
		"101103": "芜湖",
		"101104": "淮南",
		"101105": "亳州",
		"101106": "阜阳",
		"101107": "淮北",
		"101108": "宿州",
		"101109": "滁州",
		"101110": "安庆",
		"101111": "巢湖",
		"101112": "马鞍山",
		"101113": "宣城",
		"101114": "黄山",
		"101115": "池州",
		"101116": "铜陵"
	};
	arrCity["1012"] = {
		"101201": "杭州",
		"101202": "嘉兴",
		"101203": "湖州",
		"101204": "宁波",
		"101205": "金华",
		"101206": "温州",
		"101207": "丽水",
		"101208": "绍兴",
		"101209": "衢州",
		"101210": "舟山",
		"101211": "台州"
	};
	arrCity["1013"] = {
		"101301": "福州",
		"101302": "厦门",
		"101303": "泉州",
		"101304": "三明",
		"101305": "南平",
		"101306": "漳州",
		"101307": "莆田",
		"101308": "宁德",
		"101309": "龙岩"
	};
	arrCity["1014"] = {
		"101401": "广州",
		"101402": "深圳",
		"101403": "汕头",
		"101404": "惠州",
		"101405": "珠海",
		"101406": "揭阳",
		"101407": "佛山",
		"101408": "河源",
		"101409": "阳江",
		"101410": "茂名",
		"101411": "湛江",
		"101412": "梅州",
		"101413": "肇庆",
		"101414": "韶关",
		"101415": "潮州",
		"101416": "东莞",
		"101417": "中山",
		"101418": "清远",
		"101419": "江门",
		"101420": "汕尾",
		"101421": "云浮"
	};
	arrCity["1015"] = {
		"101501": "海口",
		"101502": "三亚"
	};
	arrCity["1016"] = {
		"101601": "昆明",
		"101602": "曲靖",
		"101603": "玉溪",
		"101604": "保山",
		"101605": "昭通",
		"101606": "丽江",
		"101607": "普洱",
		"101608": "临沧"
	};
	arrCity["1017"] = {
		"101701": "贵阳",
		"101702": "六盘水",
		"101703": "遵义",
		"101704": "安顺"
	};
	arrCity["1018"] = {
		"101801": "成都市",
		"101802": "自贡市",
		"101803": "攀枝花市",
		"101804": "泸州市",
		"101805": "德阳市",
		"101806": "绵阳市",
		"101807": "广元市",
		"101808": "遂宁市",
		"101809": "内江市",
		"101810": "乐山市",
		"101811": "南充市",
		"101812": "眉山市",
		"101813": "宜宾市",
		"101814": "广安市",
		"101815": "达州市",
		"101816": "雅安市",
		"101817": "巴中市",
		"101818": "资阳市",
		"101819": "阿坝藏族羌族自治州",
		"101820": "甘孜藏族自治州",
		"101821": "凉山彝族自治州"
	};
	arrCity["1019"] = {
		"101901": "长沙",
		"101902": "株洲",
		"101903": "湘潭",
		"101904": "衡阳",
		"101905": "岳阳",
		"101906": "郴州",
		"101907": "永州",
		"101908": "邵阳",
		"101909": "怀化",
		"101910": "常德",
		"101911": "益阳",
		"101912": "张家界",
		"101913": "娄底",
		"101914": "湘西土家族苗族自治州"
	};
	arrCity["1020"] = {
		"102001": "武汉",
		"102002": "襄樊",
		"102003": "宜昌",
		"102004": "黄石",
		"102005": "鄂州",
		"102006": "随州",
		"102007": "荆州",
		"102008": "荆门",
		"102009": "十堰",
		"102010": "孝感",
		"102011": "黄冈",
		"102012": "咸宁",
		"102013": "恩施土家族苗族自治州"
	};
	arrCity["1021"] = {
		"102101": "郑州",
		"102102": "洛阳",
		"102103": "开封",
		"102104": "漯河",
		"102105": "安阳",
		"102106": "新乡",
		"102107": "周口",
		"102108": "三门峡",
		"102109": "焦作",
		"102110": "平顶山",
		"102111": "信阳",
		"102112": "南阳",
		"102113": "鹤壁",
		"102114": "濮阳",
		"102115": "许昌",
		"102116": "商丘",
		"102117": "驻马店"
	};
	arrCity["1022"] = {
		"102201": "太原",
		"102202": "大同",
		"102203": "忻州",
		"102204": "阳泉",
		"102205": "长治",
		"102206": "晋城",
		"102207": "朔州",
		"102208": "晋中",
		"102209": "运城",
		"102210": "临汾",
		"102211": "吕梁"
	};
	arrCity["1023"] = {
		"102301": "西安",
		"102302": "咸阳",
		"102303": "铜川",
		"102304": "延安",
		"102305": "宝鸡",
		"102306": "渭南",
		"102307": "汉中",
		"102308": "安康",
		"102309": "商洛",
		"102310": "榆林"
	};
	arrCity["1024"] = {
		"102401": "兰州",
		"102402": "天水",
		"102403": "平凉",
		"102404": "酒泉",
		"102405": "嘉峪关",
		"102406": "金昌",
		"102407": "白银",
		"102408": "武威",
		"102409": "张掖",
		"102410": "庆阳",
		"102411": "定西",
		"102412": "陇南",
		"102413": "临夏回族自治州",
		"102414": "甘南藏族自治州"
	};
	arrCity["1025"] = {
		"102501": "西宁",
		"102502": "海东地区",
		"102503": "海北藏族自治州",
		"102504": "黄南藏族自治州",
		"102505": "海南藏族自治州",
		"102506": "果洛藏族自治州",
		"102507": "玉树藏族自治州",
		"102508": "海西蒙古族藏族自治州"
	};
	arrCity["1026"] = {
		"102601": "南昌",
		"102602": "九江",
		"102603": "赣州",
		"102604": "吉安",
		"102605": "鹰潭",
		"102606": "上饶",
		"102607": "萍乡",
		"102608": "景德镇",
		"102609": "新余",
		"102610": "宜春",
		"102611": "抚州"
	};
	arrCity["1027"] = {
		"102701": "乌鲁木齐市",
		"102702": "克拉玛依市",
		"102703": "吐鲁番地区",
		"102704": "哈密地区",
		"102705": "昌吉回族自治州",
		"102706": "博尔塔拉蒙古自治州",
		"102707": "巴音郭楞蒙古自治州",
		"102708": "阿克苏地区",
		"102709": "克孜勒苏柯尔克孜自治州",
		"102710": "喀什地区",
		"102711": "和田地区",
		"102712": "伊犁哈萨克自治州",
		"102713": "塔城地区",
		"102714": "阿勒泰地区"
	};
	arrCity["1028"] = {
		"102801": "拉萨",
		"102802": "昌都地区",
		"102803": "山南地区",
		"102804": "日喀则地区",
		"102805": "那曲地区",
		"102806": "阿里地区",
		"102807": "林芝地区"
	};
	arrCity["1029"] = {
		"102901": "银川",
		"102902": "石嘴山",
		"102903": "吴忠",
		"102904": "固原",
		"102905": "中卫"
	};
	arrCity["1030"] = {
		"103001": "呼和浩特市",
		"103002": "包头市",
		"103003": "乌海市",
		"103004": "赤峰市",
		"103005": "通辽市",
		"103006": "鄂尔多斯市",
		"103007": "呼伦贝尔市",
		"103008": "巴彦淖尔市",
		"103009": "乌兰察布市",
		"103010": "锡林郭勒盟",
		"103011": "兴安盟",
		"103012": "阿拉善盟"
	};
	arrCity["1031"] = {
		"103101": "南宁",
		"103102": "柳州",
		"103103": "桂林",
		"103104": "梧州",
		"103105": "北海",
		"103106": "崇左",
		"103107": "来宾",
		"103108": "贺州",
		"103109": "玉林",
		"103110": "百色",
		"103111": "河池",
		"103112": "钦州",
		"103113": "防城港",
		"103114": "贵港"
	};
	arrCity["1032"] = {
		"103201": "中西区",
		"103202": "东区",
		"103203": "九龙城区",
		"103204": "观塘区",
		"103205": "南区",
		"103206": "深水埗区",
		"103207": "黄大仙区",
		"103208": "湾仔区",
		"103209": "油尖旺区",
		"103210": "离岛区",
		"103211": "葵青区",
		"103212": "北区",
		"103213": "西贡区",
		"103214": "沙田区",
		"103215": "屯门区",
		"103216": "大埔区",
		"103217": "荃湾区",
		"103218": "元朗区"
	};
	arrCity["1033"] = {
		"103301": "花地玛堂区",
		"103302": "圣安多尼堂区（花王堂区）",
		"103303": "望德堂区",
		"103304": "大堂区",
		"103305": "风顺堂区（圣老楞佐堂区）",
		"103306": "离岛",
		"103307": "氹仔",
		"103308": "路环"
	};
	arrCity["1034"] = {
		"103401": "台北",
		"103402": "台中",
		"103403": "基隆",
		"103404": "高雄",
		"103405": "台南",
		"103406": "新竹",
		"103407": "嘉义"
	};
	arrCity["1035"] = {
		"103501": "其他"
	}


	for (var proname in dictProv) {
		var proselect = dictProv[proname]
		$("<option pid=" + proname + ">" + proselect + "</option>").appendTo($(".provinciala"))
		$("<option pid=" + proname + ">" + proselect + "</option>").appendTo($(".provincialb"))

	}
	$(".provinciala,.provincialb").change(function() {
		switch ($(this).attr("class")) //用switch语句 判断改变的class
		{
			case 'provinciala':
				var city = "citya";
				break;
			case 'provincialb':
				var city = "cityb";
				break;
		}
		$("." + city).html("");
		var pidd = $(this).find("option:selected").attr("pid");
		for (var cityid in arrCity[pidd]) {
			$("<option cid=" + cityid + ">" + (arrCity[pidd])[cityid] + "</option>").appendTo($("." + city))
		}
	})
});