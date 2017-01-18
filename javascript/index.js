define("api/index", ["config/url"], function(e) {
	return {
		getFloorModule: {
			url: e.sFrontDomain + "/?c=widget&a=get_widget_data&t=" + (new Date).getTime(),
			isOnlyData: 1,
			post: {
				apiVersion: "t-1.0",
				cityCode: "?",
				body: "??"
			},
			body: {},
			method: "get"
		},
		getExpandIcon: {
			url: e.sFrontDomain + "/?c=fnget&a=getExpandIcon",
			isOnlyData: 1,
			post: {
				apiVersion: "t-1.0",
				cityCode: "?",
				body: "??"
			},
			body: {},
			method: "get"
		},
		getRechargeAdress: {
			url: e.sFrontDomain + "/?c=fnget&a=getMobileInfo&mobile=",
			isOnlyData: 1,
			post: {
				apiVersion: "t-1.0",
				cityCode: "?",
				body: "??"
			},
			body: {},
			method: "get"
		},
		getRechargeLst: {
			url: e.sFrontDomain + "/?c=fnget&a=getDefaultOptions&rechargeType=",
			isOnlyData: 1,
			post: {
				apiVersion: "t-1.0",
				cityCode: "?",
				body: "??"
			},
			body: {},
			method: "get"
		},
		getRechargePrice: {
			url: e.sFrontDomain + "/?c=fnget&a=getPriceRange&rechargeType=",
			isOnlyData: 1,
			post: {
				apiVersion: "t-1.0",
				cityCode: "?",
				body: "??"
			},
			body: {},
			method: "get"
		}
	}
}), define("tpl/index", [], function() {
	var e = ["{{? it.pic_list}}", "{{~it.pic_list:value:index}}", '<li style="background:{{=value.back_style ===1?value.back_image:value.back_color}}">', '    <a href="{{=value.link_url}}" alt="" title="" target="_blank">', '        <img class="J_new_lazy" data-original="{{=get_img_domain()}}{{=value.image_url}}" height="454" width="800" alt="" title="">', "    </a>", "</li>", "{{~}}", "{{?}}"].join(""),
		t = ["{{? it.ad}}", "{{~it.ad:value:index}}", "<li>", '<a href="{{=value.link_url}}" alt="" title=""><img class="J_new_lazy" data-original="{{=get_img_domain()}}{{=value.image_url}}" height="244" width="200" alt="" title=""></a>', "</li>", "{{~}}", "{{?}}"].join(""),
		n = ["{{? it.icon}}", "{{~it.icon:value:index}}", "<li>", '    <a data-tcbicon="1" href="{{=value.link_url}}" alt="" target="_blank">', '        <img class="J_new_lazy" data-original="{{=get_img_domain()}}{{=value.image_url}}" height="50" width="50" alt="">', "        <span>{{=value.icon_text}}</span>", "    </a>", "</li>", "{{~}}", "{{?}}"].join(""),
		r = ["{{? it.ad}}", "{{~it.ad:value:index}}", '<a href="{{=value.link_url}}" alt="" title=""><img class="J_new_lazy" data-original="{{=get_img_domain()}}{{=value.image_url}}" height="114" width="200" alt="" title=""></a>', "{{~}}", "{{?}}"].join(""),
		i = ["{{~it:value:index}}", '   <li {{? value.selected }}class="active"{{?}}><a href="javascript:;" data-value="{{=value.value}}" data-price="{{=value.mallPrice}}" data-goodsid="{{=value.goodsId}}">{{=value.text}}</a></li>', "{{~}}"].join(""),
		s = ['<div class="u-fn-dt fl">', '    <div class="u-t fixed">', "        <h3>{{=it.message.left_title}}</h3>", '        <img src="{{=get_img_domain()}}{{=it.message.left_topic}}" alt="">', "    </div>", '    <div class="u-c">', "    {{~it.message.item_list:value:index}}", "        {{? index===0}}", '        <div class="l fl oh">', '            {{? value.show_type==="AD"}}', '                <a class="ad" target="_blank" href="{{=value.ad_url}}" alt="" title=""><img src="{{=get_img_domain()}}{{=value.ad_pic}}" height="279" width="229" alt="" title=""></a>', "            {{??}}", "                <dl>", "                    <dt>", '                        <a href="{{=value.item_link}}" target="_blank" title="{{=value.sm_title}}">', '                         {{? value.product_type ==="1"}}', '                            <img src="{{=get_img_domain()}}{{=value.sm_pic}}" alt="{{=value.sm_title}}">', '                         {{?? value.product_type ==="2"}}', '                            <img src="{{=get_mallimg_domain(value.sm_pic)}}" alt="{{=value.sm_title}}">', "                         {{?}}", "                        </a>", "                    </dt>", '                    <dd class="n oh"><a href="{{=value.item_link}}" target="_blank" title="{{=value.sm_title}}">{{=value.sm_title}}</a>', "                    </dd>", '                    <dd class="p">', "                        <span>￥</span>", '                        <span class="">{{=value.sm_price}}</span>', "                    </dd>", "                </dl>", "            {{?}}", "        </div>", "        {{??}}", "        {{? index===1}}", '        <ul class="r fl">', "        {{?}}", "            <li>", '                {{? value.show_type === "SMSEQ"}}', "                <dl>", "                    <dt>", '                        <a href="{{=value.item_link}}" target="_blank">', '                         {{? value.product_type ==="1"}}', '                            <img src="{{=get_img_domain()}}{{=value.sm_pic}}" alt="" title="{{=value.sm_title}}">', '                         {{?? value.product_type ==="2"}}', '                            <img src="{{=get_mallimg_domain(value.sm_pic)}}" alt="" title="{{=value.sm_title}}">', "                         {{?}}", "                        </a>", "                    </dt>", '                    <dd class="n oh"><a href="{{=value.item_link}}" target="_blank" title="">{{=value.sm_title}}</a>', "                    </dd>", '                    <dd class="p">', "                        <span>￥</span>", '                        <span class="">{{=value.sm_price}}</span>', "                    </dd>", "                </dl>", "                {{??}}", '                    <a class="ad" target="_blank" href="{{=value.ad_url}}" alt="" title=""><img src="{{=get_img_domain()}}{{=value.ad_pic}}" height="139" width="219" alt="" title=""></a>', "                {{?}}", "            </li>", "        {{? index===it.message.item_list.length}}", "        </ul>", "        {{?}}", "        {{?}}", "        {{~}}", "    </div>", "</div>", '<div class="u-fn-share fl" tp-childarea="hotpl">', '    <div class="u-t">', "        <h3>{{=it.message.right_title}}</h3>", "    </div>", '    <div class="u-c">', '        <div class="u-s-lst slide fixed oh" id="slideShare">', '            <ul class="s-lst fixed slider-main" style="width: 400px;">', "                {{~it.message.ad_list:item:index}}", "                <li>", '                    <a href="{{=item.link_url}}" alt="" title="" target="_blank"><img src="{{=get_img_domain()}}{{=item.image_url}}" height="139" width="298" alt="" title="" style="background:{{=item.back_color}}"></a>', "                </li>", "                {{~}}", "            </ul>", "        </div>", "    </div>", "</div>"].join(""),
		o = ['<div class="u-t fixed" tp-childarea="tabs">', '    <h3 class="fl">{{=it.message.floor_name}}', "        <i>{{=it.message.sort}}F</i>", "    </h3>", '    <ul class="f-tab fr J-tab-menu">', "        {{~it.message.tabs:value:index}}", '            <li {{? index === 0 }}class="z-select loaded"{{?}} data-index={{=value.tab_index}}>', '                <a href="javascript:;">{{=value.tab_name}}</a>', "                <span></span>", "            </li>", "        {{~}}", "    </ul>", "</div>", '<div class="u-c fixed">', '    <div class="f-s fl oh" tp-childarea="cates">', '        <a href="{{=it.message.fixed.ad.link}}" class="ad" title="" alt="" target="_blank">', '            <img src="{{=get_img_domain()}}{{=it.message.fixed.ad.image_url}}" alt="" title="">', "        </a>", '        <ul class="nav">', '            <li class="sale">', "                {{ for(var key in it.message.fixed.texts) { }}", '                    {{? it.message.fixed.texts[key].link !=="" && it.message.fixed.texts[key].text!==""}}', '                    <a href="{{=it.message.fixed.texts[key].link}}" target="_blank" alt="" title="">{{=it.message.fixed.texts[key].text}} ></a>', "                    {{?}}", "                {{ } }}", "            </li>", '            <li class="words oh">', "            {{ for(var key in it.message.fixed.keyword) { }}", '                {{? it.message.fixed.keyword[key].isLink === "1"}}', '                    {{? it.message.fixed.keyword[key].link !=="" && it.message.fixed.keyword[key].text!==""}}', '                    <a href="{{=it.message.fixed.keyword[key].link}}" target="_blank" title="{{=it.message.fixed.keyword[key].text}}" {{? it.message.fixed.keyword[key].hasOwnProperty("isHighlight")}}class="z-h-c"{{?}}>{{=it.message.fixed.keyword[key].text}}</a>', "                    {{?}}", '                {{?? it.message.fixed.keyword[key].isLink === "2"}}', '                    {{? it.message.fixed.keyword[key].text!==""}}', '                    <a href="{{=search_domain}}/?q={{=it.message.fixed.keyword[key].text}}" target="_blank" title="{{=it.message.fixed.keyword[key].text}}" {{? it.message.fixed.keyword[key].hasOwnProperty("isHighlight")}}class="z-h-c"{{?}}>{{=it.message.fixed.keyword[key].text}}</a>', "                    {{?}}", "                {{?}}", "            {{ } }}", "            </li>", "        </ul>", "    </div>", '    <div class="f-m fl J-tab-content">', "        {{~it.message.tabs:value:index}}", "            {{? index === 0}}", '            <div class="b J-panel" tp-childarea="list_{{=index+1}}">', "                <ul>", "                {{ for(var key in value.body) { }}", '                    {{? value.body[key].type === "t1"}}', '                        <li class="b-p w200 pr" type="t1" t_id="{{=value.body[key].sid}}">', "                            {{~value.body[key].list:value1:index1}}", '                                <a href="{{=value1.link}}" alt="" title="" class="ad" target="_blank">', '                                    <img src="{{=get_img_domain()}}{{=value1.image_url}}" alt="" title="">', "                                </a>", "                            {{~}}", "                        </li>", '                    {{?? value.body[key].type === "t2"}}', '                        <li class="b-p w200 pr" type="t2" t_id="{{=value.body[key].sid}}">', "                            {{~value.body[key].list:value1:index1}}", '                                <a href="{{=value1.link}}" alt="" title="" class="ad" target="_blank">', '                                    <img src="{{=get_img_domain()}}{{=value1.image_url}}" alt="" title="">', "                                </a>", "                            {{~}}", "                        </li>", '                    {{?? value.body[key].type === "t3"}}', '                        <li class="b-p w200 pr" type="t3" t_id="{{=value.body[key].sid}}">', "                            {{~value.body[key].list:value1:index1}}", '                                {{? value1.type === "1"}}', '                                    <a href="{{=value1.adUrl}}" alt="" title="" class="ad" target="_blank">', '                                        <img src="{{=get_img_domain()}}{{=value1.adPic}}" alt="" title="">', "                                    </a>", '                                {{?? value1.type === "0"}}', '                                    <div class="prod">', '                                        <div class="p-i oh" p-id="{{=value1.smSeq}}">', '                                            {{? value1.productType === "1"}}', '                                            <a href="{{=value1.link}}" alt="" target="_blank" title=""><img src="{{=get_img_domain()}}{{=value1.smPic}}" height="160" width="160" alt="" title="{{=value1.smTitle}}"></a>', '                                            {{?? value1.productType === "2"}}', '                                            <a href="{{=value1.link}}" alt="" target="_blank" title=""><img src="{{=get_mallimg_domain(value1.smPic)}}" height="160" width="160" alt="" title="{{=value1.smTitle}}"></a>', "                                            {{?}}", "                                        </div>", '                                        <div class="p-n oh">', '                                            <a href="{{=value1.link}}" target="_blank" alt="" title="{{=value1.smTitle}}">{{=value1.smTitle}}</a>', "                                        </div>", '                                        <div class="u-price oh">', '                                            <p class="s-p fl mr10">', '                                                <span>￥</span><span class="iteminfo_sm_price">{{=value1.smPrice}}</span>', "                                            </p>", "                                            {{? value1.smPrice < value1.itPrice}}", '                                            <s class="o-p fl">', '                                                <span>￥</span><span class="iteminfo_it_mprice">{{=value1.itPrice}}</span>', "                                            </s>", "                                            {{?}}", "                                        </div>", "                                    </div>", "                                {{?}}", "                            {{~}}", "                        </li>", '                    {{?? value.body[key].type === "t4"}}', '                        <li class="b-p w200 u-bk-rk oh pr J-tab-c" type="t4" t_id="{{=value.body[key].sid}}">', '                            <div class="rk-item">', '                                <ul class="J-tab-cm">', "                                {{for(var i in value.body[key].list){}}", '                                    {{? value.body[key].list[i].hasOwnProperty("rank")}}', '                                    <li {{? i==="1" || !value.body[key].list["1"].hasOwnProperty("rank")}}class="z-select"{{?}}><a href="javascript:void(0)" alt="" title="">{{=value.body[key].list[i].custorm_name}}</a></li>', "                                    {{?}}", "                                {{}}}", "                                </ul>", "                            </div>", '                            <div class="rk-main oh J-tab-cc">', "                                {{for(var j in value.body[key].list){}}", '                                {{? value.body[key].list[j].hasOwnProperty("rank")}}', '                                <div class="rk-lst oh J-bk-rk J-c-panel {{? j!=="1" && value.body[key].list["1"].hasOwnProperty("rank")}}hide{{?}}">', "                                    <ul>", "                                        {{~value.body[key].list[j].rank:item:i}}", '                                        <li {{? i===0}}class="z-select"{{?}}>', '                                            <div class="out">', '                                                <span class="num"><b>{{=i+1}}</b></span>', '                                                <a class="oe fl">{{=item.SM_TITLE}}</a>', "                                            </div>", '                                            <dl class="in">', '                                                <dt class="i fl oh">', '                                                    <span class="num"><b>{{=i+1}}</b></span>', '                                                    <a href="{{=item.LINK}}" target="_blank" alt="" title="{{=item.SM_TITLE}}">', '                                                    {{? item.PRODUCT_TYPE === "1"}}', '                                                      <img src="{{=get_img_domain()}}{{=item.SM_PIC}}" height="50" width="50" alt="" title="{{=item.SM_TITLE}}">', '                                                    {{?? item.PRODUCT_TYPE === "2"}}', '                                                      <img src="{{=get_mallimg_domain(item.SM_PIC)}}" height="50" width="50" alt="" title="{{=item.SM_TITLE}}">', "                                                    {{?}}", "                                                    </a>", "                                                </dt>", '                                                <dd class="n fl">', '                                                    <a href="{{=item.LINK}}" target="_blank" alt="" title="{{=item.SM_TITLE}}">{{=item.SM_TITLE}}</a>', "                                                </dd>", '                                               <!--  <dd class="c fl">', '                                                    <a href="#" alt="" title="">({{=item.COMMENT_NUM || 0}}条评价)</a>', "                                                </dd> -->", '                                                <dd class="u-price fl">', '                                                    <p class="s-p fl mr10">', '                                                        <span>￥</span><span class="iteminfo_sm_price">{{=item.SM_PRICE}}</span>', "                                                    </p>", "                                                   {{? item.SM_PRICE < item.IT_PRICE}}", '                                                   <s class="o-p fl">', '                                                       <span>￥</span><span class="iteminfo_it_mprice">{{=item.IT_PRICE}}</span>', "                                                   </s>", "                                                   {{?}}", "                                                </dd>", "                                            </dl>", "                                        </li>", "                                        {{~}}", "                                    </ul>", "                                </div>", "                                {{?}}", "                                {{}}}", "                            </div>", "                        </li>", '                    {{?? value.body[key].type === "t5"}}', '                        <li class="b-p w200 pr" type="t5" t_id="{{=value.body[key].sid}}">', "                            {{~value.body[key].list:value1:index1}}", '                                <a href="{{=value1.link}}" target="_blank" alt="" title="" class="ad">', '                                    <img src="{{=get_img_domain()}}{{=value1.image_url}}" alt="" title="">', "                                </a>", "                            {{~}}", "                        </li>", '                    {{?? value.body[key].type === "t6"}}', '                        <li class="b-p w200 pr" type="t6" t_id="{{=value.body[key].sid}}">', "                            {{~value.body[key].list:value1:index1}}", '                                <a href="{{=value1.link}}" target="_blank" alt="" title="" class="ad">', '                                    <img src="{{=get_img_domain()}}{{=value1.image_url}}" alt="" title="">', "                                </a>", "                            {{~}}", "                        </li>", '                    {{?? value.body[key].type === "t7"}}', '                        <li class="b-p w250 pr" type="t7" t_id="{{=value.body[key].sid}}">', "                            {{~value.body[key].list:value1:index1}}", '                                <a href="{{=value1.link}}" target="_blank" alt="" title="" class="ad">', '                                    <img src="{{=get_img_domain()}}{{=value1.image_url}}" alt="" title="">', "                                </a>", "                            {{~}}", "                        </li>", '                    {{?? value.body[key].type === "t8"}}', '                        <li class="b-p w250 pr" type="t8" t_id="{{=value.body[key].sid}}">', "                            {{~value.body[key].list:value1:index1}}", '                                <a href="{{=value1.link}}" target="_blank" alt="" title="" class="ad">', '                                    <img src="{{=get_img_domain()}}{{=value1.image_url}}" alt="" title="">', "                                </a>", "                            {{~}}", "                        </li>", '                    {{?? value.body[key].type === "f1"}}', '                        <li class="b-p w400 pr" type="f1" t_id="{{=value.body[key].sid}}">', "                            {{~value.body[key].list:value1:index1}}", '                                <a href="{{=value1.link}}" target="_blank" alt="" title="" class="ad">', '                                    <img src="{{=get_img_domain()}}{{=value1.image_url}}" alt="" title="">', "                                </a>", "                            {{~}}", "                        </li>", '                    {{?? value.body[key].type === "f2"}}', '                        <li class="b-p w400 pr" type="f2" t_id="{{=value.body[key].sid}}">', '                             <div class="u-slide-244 slide oh J-floor-slide">', '                               <ul class="s-lst fixed slider-main">', "                               {{~value.body[key].list.top:value1:index1}}", "                                   <li>", '                                       <a target="_blank" href="{{=value1.link}}">', '                                           <img src="{{=get_img_domain()}}{{=value1.image_url}}" alt="" title="">', "                                       </a>", "                                   </li>", "                               {{~}}", "                               </ul>", "                              </div>", '                             <div class="u-slide-244 slide oh J-floor-slide">', '                               <ul class="s-lst fixed slider-main">', "                               {{~value.body[key].list.bottom:value1:index1}}", "                                   <li>", '                                       <a target="_blank" href="{{=value1.link}}">', '                                           <img src="{{=get_img_domain()}}{{=value1.image_url}}" alt="" title="">', "                                       </a>", "                                   </li>", "                               {{~}}", "                               </ul>", "                              </div>", "                        </li>", '                    {{?? value.body[key].type === "f3"}}', '                        <li class="b-p w400 pr" type="f3" t_id="{{=value.body[key].sid}}">', '                             <div class="u-slide-244 slide oh J-floor-slide">', '                               <ul class="s-lst fixed slider-main">', "                               {{~value.body[key].list.top:value1:index1}}", "                                   <li>", '                                       <a target="_blank" href="{{=value1.link}}">', '                                           <img src="{{=get_img_domain()}}{{=value1.image_url}}" alt="" title="">', "                                       </a>", "                                   </li>", "                               {{~}}", "                               </ul>", "                              </div>", "                            {{~value.body[key].list.bottom:value1:index1}}", '                            <a class="ad" target="_blank" href="{{=value1.link}}" alt="" title="">', '                                <img src="{{=get_img_domain()}}{{=value1.image_url}}" alt="" title="">', "                            </a>", "                            {{~}}", "                        </li>", '                    {{?? value.body[key].type === "f4"}}', '                        <li class="b-p w400 pr" type="f4" t_id="{{=value.body[key].sid}}">', '                             <div class="u-slide-318 slide oh J-floor-slide">', '                               <ul class="s-lst fixed slider-main">', "                               {{~value.body[key].list.top:value1:index1}}", "                                   <li>", '                                       <a target="_blank" href="{{=value1.link}}">', '                                           <img src="{{=get_img_domain()}}{{=value1.image_url}}" alt="" title="">', "                                       </a>", "                                   </li>", "                               {{~}}", "                               </ul>", "                              </div>", '                             <div class="u-slide-170 slide oh J-floor-slide">', '                               <ul class="s-lst fixed slider-main">', "                               {{~value.body[key].list.bottom:value1:index1}}", "                                   <li>", '                                       <a target="_blank" href="{{=value1.link}}">', '                                           <img src="{{=get_img_domain()}}{{=value1.image_url}}" alt="" title="">', "                                       </a>", "                                   </li>", "                               {{~}}", "                               </ul>", "                              </div>", "                        </li>", '                    {{?? value.body[key].type === "f5"}}', '                        <li class="b-p w500 pr" type="f5" t_id="{{=value.body[key].sid}}">', "                            {{~value.body[key].list:value1:index1}}", '                                <a href="{{=value1.link}}" target="_blank" alt="" title="" class="ad">', '                                    <img src="{{=get_img_domain()}}{{=value1.image_url}}" alt="" title="">', "                                </a>", "                            {{~}}", "                        </li>", "                    {{?}}", "                {{ } }}", "                </ul>", "            </div>", "            {{??}}", '            <div class="b J-panel hide" tp-childarea="list_{{=index+1}}">', '                <p class="J_tab_blank">加载中...</p>', "            </div>", "            {{?}}", "        {{~}}", "    </div>", "</div>"].join(""),
		u = ['<div class="u-t fixed" tp-childarea="tabs">', '    <h3 class="fl">{{=it.message.floor_name}}', "        <i>{{=it.message.sort}}F</i>", "    </h3>", '    <ul class="f-tab fr J-tab-menu">', "        {{~it.message.tabs:value:index}}", '            <li {{? index === 0 }}class="z-select loaded"{{?}} data-index={{=value.tab_index}}>', '                <a href="javascript:;">{{=value.tab_name}}</a>', "                <span></span>", "            </li>", "        {{~}}", "    </ul>", "</div>", '<div class="u-c fixed">', '    <div class="f-s fl oh" tp-childarea="cates">', '        <a href="{{=it.message.fixed.ad.link}}" class="ad" title="" alt="" target="_blank">', '            <img src="{{=get_img_domain()}}{{=it.message.fixed.ad.image_url}}" alt="" title="">', "        </a>", '        <ul class="sales">', "                {{ for(var key in it.message.fixed.texts) { }}", "                   <li>", '                    {{? it.message.fixed.texts[key].link !=="" && it.message.fixed.texts[key].text!==""}}', '                    <a href="{{=it.message.fixed.texts[key].link}}" target="_blank" alt="" title="">{{=it.message.fixed.texts[key].text}} ></a>', "                    {{?}}", "                   </li>", "                {{ } }}", "         </ul>", '        <ul class="assists">', "                {{ for(var key in it.message.fixed.shorttexts) { }}", '                   <li class="item">', '                    {{? it.message.fixed.shorttexts[key].link !=="" && it.message.fixed.shorttexts[key].text!==""}}', '                    <a href="{{=it.message.fixed.shorttexts[key].link}}" target="_blank" alt="" title="">{{=it.message.fixed.shorttexts[key].text}} ></a>', "                    {{?}}", "                   </li>", "                {{ } }}", "         </ul>", '         <ul class="words oh">', '           <li class="lst">', "            {{ for(var key in it.message.fixed.keyword) { }}", "              {{? key <= 6}}", '                {{? it.message.fixed.keyword[key].isLink === "1"}}', '                    {{? it.message.fixed.keyword[key].link !=="" && it.message.fixed.keyword[key].text!==""}}', '                    <a href="{{=it.message.fixed.keyword[key].link}}" target="_blank" title="{{=it.message.fixed.keyword[key].text}}" {{? it.message.fixed.keyword[key].hasOwnProperty("isHighlight")}}class="z-h-c"{{?}}>{{=it.message.fixed.keyword[key].text}}</a>', "                    {{?}}", '                {{?? it.message.fixed.keyword[key].isLink === "2"}}', '                    {{? it.message.fixed.keyword[key].text!==""}}', '                    <a href="{{=search_domain}}/?q={{=it.message.fixed.keyword[key].text}}" target="_blank" title="{{=it.message.fixed.keyword[key].text}}" {{? it.message.fixed.keyword[key].hasOwnProperty("isHighlight")}}class="z-h-c"{{?}}>{{=it.message.fixed.keyword[key].text}}</a>', "                    {{?}}", "                {{?}}", "              {{?}}", "            {{ } }}", "           </li>", '           <li class="lst">', "            {{ for(var key in it.message.fixed.keyword) { }}", "              {{? key > 6}}", '                {{? it.message.fixed.keyword[key].isLink === "1"}}', '                    {{? it.message.fixed.keyword[key].link !=="" && it.message.fixed.keyword[key].text!==""}}', '                    <a href="{{=it.message.fixed.keyword[key].link}}" target="_blank" title="{{=it.message.fixed.keyword[key].text}}" {{? it.message.fixed.keyword[key].hasOwnProperty("isHighlight")}}class="z-h-c"{{?}}>{{=it.message.fixed.keyword[key].text}}</a>', "                    {{?}}", '                {{?? it.message.fixed.keyword[key].isLink === "2"}}', '                    {{? it.message.fixed.keyword[key].text!==""}}', '                    <a href="{{=search_domain}}/?q={{=it.message.fixed.keyword[key].text}}" target="_blank" title="{{=it.message.fixed.keyword[key].text}}" {{? it.message.fixed.keyword[key].hasOwnProperty("isHighlight")}}class="z-h-c"{{?}}>{{=it.message.fixed.keyword[key].text}}</a>', "                    {{?}}", "                {{?}}", "              {{?}}", "            {{ } }}", "           </li>", "          </ul>", "    </div>", '    <div class="f-m fl J-tab-content">', "        {{~it.message.tabs:value:index}}", "            {{? index === 0}}", '            <div class="b J-panel" tp-childarea="list_{{=index+1}}">', "                <ul>", "                {{ for(var key in value.body) { }}", '                    {{? value.body[key].type === "t1"}}', '                        <li class="b-p w200 pr" type="t1" t_id="{{=value.body[key].sid}}">', "                            {{~value.body[key].list:value1:index1}}", '                                <a href="{{=value1.link}}" alt="" title="" class="ad" target="_blank">', '                                    <img src="{{=get_img_domain()}}{{=value1.image_url}}" alt="" title="">', "                                </a>", "                            {{~}}", "                        </li>", '                    {{?? value.body[key].type === "t2"}}', '                        <li class="b-p w200 pr" type="t2" t_id="{{=value.body[key].sid}}">', "                            {{~value.body[key].list:value1:index1}}", '                                <a href="{{=value1.link}}" alt="" title="" class="ad" target="_blank">', '                                    <img src="{{=get_img_domain()}}{{=value1.image_url}}" alt="" title="">', "                                </a>", "                            {{~}}", "                        </li>", '                    {{?? value.body[key].type === "t3"}}', '                        <li class="b-p w200 pr" type="t3" t_id="{{=value.body[key].sid}}">', "                            {{~value.body[key].list:value1:index1}}", '                                {{? value1.type === "1"}}', '                                    <a href="{{=value1.adUrl}}" alt="" title="" class="ad" target="_blank">', '                                        <img src="{{=get_img_domain()}}{{=value1.adPic}}" alt="" title="">', "                                    </a>", '                                {{?? value1.type === "0"}}', '                                    <div class="prod">', '                                        <div class="p-i oh" p-id="{{=value1.smSeq}}">', '                                            {{? value1.productType === "1"}}', '                                            <a href="{{=value1.link}}" alt="" target="_blank" title=""><img src="{{=get_img_domain()}}{{=value1.smPic}}" height="160" width="160" alt="" title="{{=value1.smTitle}}"></a>', '                                            {{?? value1.productType === "2"}}', '                                            <a href="{{=value1.link}}" alt="" target="_blank" title=""><img src="{{=get_mallimg_domain(value1.smPic)}}" height="160" width="160" alt="" title="{{=value1.smTitle}}"></a>', "                                            {{?}}", "                                        </div>", '                                        <div class="p-n oh">', '                                            <a href="{{=value1.link}}" target="_blank" alt="" title="{{=value1.smTitle}}">{{=value1.smTitle}}</a>', "                                        </div>", '                                        <div class="u-price oh">', '                                            <p class="s-p fl mr10">', '                                                <span>￥</span><span class="iteminfo_sm_price">{{=value1.smPrice}}</span>', "                                            </p>", "                                            {{? value1.smPrice < value1.itPrice}}", '                                            <s class="o-p fl">', '                                                <span>￥</span><span class="iteminfo_it_mprice">{{=value1.itPrice}}</span>', "                                            </s>", "                                            {{?}}", "                                        </div>", "                                    </div>", "                                {{?}}", "                            {{~}}", "                        </li>", '                    {{?? value.body[key].type === "t4"}}', '                        <li class="b-p w200 u-bk-rk oh pr J-tab-c" type="t4" t_id="{{=value.body[key].sid}}">', '                            <div class="rk-item">', '                                <ul class="J-tab-cm">', "                                {{for(var i in value.body[key].list){}}", '                                    {{? value.body[key].list[i].hasOwnProperty("rank")}}', '                                    <li {{? i==="1" || !value.body[key].list["1"].hasOwnProperty("rank")}}class="z-select"{{?}}><a href="javascript:void(0)" alt="" title="">{{=value.body[key].list[i].custorm_name}}</a></li>', "                                    {{?}}", "                                {{}}}", "                                </ul>", "                            </div>", '                            <div class="rk-main oh J-tab-cc">', "                                {{for(var j in value.body[key].list){}}", '                                {{? value.body[key].list[j].hasOwnProperty("rank")}}', '                                <div class="rk-lst oh J-bk-rk J-c-panel {{? j!=="1" && value.body[key].list["1"].hasOwnProperty("rank")}}hide{{?}}">', "                                    <ul>", "                                        {{~value.body[key].list[j].rank:item:i}}", '                                        <li {{? i===0}}class="z-select"{{?}}>', '                                            <div class="out">', '                                                <span class="num"><b>{{=i+1}}</b></span>', '                                                <a class="oe fl">{{=item.SM_TITLE}}</a>', "                                            </div>", '                                            <dl class="in">', '                                                <dt class="i fl oh">', '                                                    <span class="num"><b>{{=i+1}}</b></span>', '                                                    <a href="{{=item.LINK}}" target="_blank" alt="" title="{{=item.SM_TITLE}}">', '                                                    {{? item.PRODUCT_TYPE === "1"}}', '                                                      <img src="{{=get_img_domain()}}{{=item.SM_PIC}}" height="50" width="50" alt="" title="{{=item.SM_TITLE}}">', '                                                    {{?? item.PRODUCT_TYPE === "2"}}', '                                                      <img src="{{=get_mallimg_domain(item.SM_PIC)}}" height="50" width="50" alt="" title="{{=item.SM_TITLE}}">', "                                                    {{?}}", "                                                    </a>", "                                                </dt>", '                                                <dd class="n fl">', '                                                    <a href="{{=item.LINK}}" target="_blank" alt="" title="{{=item.SM_TITLE}}">{{=item.SM_TITLE}}</a>', "                                                </dd>", '                                               <!--  <dd class="c fl">', '                                                    <a href="#" alt="" title="">({{=item.COMMENT_NUM || 0}}条评价)</a>', "                                                </dd> -->", '                                                <dd class="u-price fl">', '                                                    <p class="s-p fl mr10">', '                                                        <span>￥</span><span class="iteminfo_sm_price">{{=item.SM_PRICE}}</span>', "                                                    </p>", "                                                   {{? item.SM_PRICE < item.IT_PRICE}}", '                                                     <s class="o-p fl">', '                                                       <span>￥</span><span class="iteminfo_it_mprice">{{=item.IT_PRICE}}</span>', "                                                     </s>", "                                                   {{?}}", "                                                </dd>", "                                            </dl>", "                                        </li>", "                                        {{~}}", "                                    </ul>", "                                </div>", "                                {{?}}", "                                {{}}}", "                            </div>", "                        </li>", '                    {{?? value.body[key].type === "t5"}}', '                        <li class="b-p w200 pr" type="t5" t_id="{{=value.body[key].sid}}">', "                            {{~value.body[key].list:value1:index1}}", '                                <a href="{{=value1.link}}" target="_blank" alt="" title="" class="ad">', '                                    <img src="{{=get_img_domain()}}{{=value1.image_url}}" alt="" title="">', "                                </a>", "                            {{~}}", "                        </li>", '                    {{?? value.body[key].type === "t6"}}', '                        <li class="b-p w200 pr" type="t6" t_id="{{=value.body[key].sid}}">', "                            {{~value.body[key].list:value1:index1}}", '                                <a href="{{=value1.link}}" target="_blank" alt="" title="" class="ad">', '                                    <img src="{{=get_img_domain()}}{{=value1.image_url}}" alt="" title="">', "                                </a>", "                            {{~}}", "                        </li>", '                    {{?? value.body[key].type === "t7"}}', '                        <li class="b-p w250 pr" type="t7" t_id="{{=value.body[key].sid}}">', "                            {{~value.body[key].list:value1:index1}}", '                                <a href="{{=value1.link}}" target="_blank" alt="" title="" class="ad">', '                                    <img src="{{=get_img_domain()}}{{=value1.image_url}}" alt="" title="">', "                                </a>", "                            {{~}}", "                        </li>", '                    {{?? value.body[key].type === "t8"}}', '                        <li class="b-p w250 pr" type="t8" t_id="{{=value.body[key].sid}}">', "                            {{~value.body[key].list:value1:index1}}", '                                <a href="{{=value1.link}}" target="_blank" alt="" title="" class="ad">', '                                    <img src="{{=get_img_domain()}}{{=value1.image_url}}" alt="" title="">', "                                </a>", "                            {{~}}", "                        </li>", '                    {{?? value.body[key].type === "f1"}}', '                        <li class="b-p w400 pr" type="f1" t_id="{{=value.body[key].sid}}">', "                            {{~value.body[key].list:value1:index1}}", '                                <a href="{{=value1.link}}" target="_blank" alt="" title="" class="ad">', '                                    <img src="{{=get_img_domain()}}{{=value1.image_url}}" alt="" title="">', "                                </a>", "                            {{~}}", "                        </li>", '                    {{?? value.body[key].type === "f2"}}', '                        <li class="b-p w400 pr" type="f2" t_id="{{=value.body[key].sid}}">', '                             <div class="u-slide-244 slide oh J-floor-slide">', '                               <ul class="s-lst fixed slider-main">', "                               {{~value.body[key].list.top:value1:index1}}", "                                   <li>", '                                       <a target="_blank" href="{{=value1.link}}">', '                                           <img src="{{=get_img_domain()}}{{=value1.image_url}}" alt="" title="">', "                                       </a>", "                                   </li>", "                               {{~}}", "                               </ul>", "                              </div>", '                             <div class="u-slide-244 slide oh J-floor-slide">', '                               <ul class="s-lst fixed slider-main">', "                               {{~value.body[key].list.bottom:value1:index1}}", "                                   <li>", '                                       <a target="_blank" href="{{=value1.link}}">', '                                           <img src="{{=get_img_domain()}}{{=value1.image_url}}" alt="" title="">', "                                       </a>", "                                   </li>", "                               {{~}}", "                               </ul>", "                              </div>", "                        </li>", '                    {{?? value.body[key].type === "f3"}}', '                        <li class="b-p w400 pr" type="f3" t_id="{{=value.body[key].sid}}">', '                             <div class="u-slide-244 slide oh J-floor-slide">', '                               <ul class="s-lst fixed slider-main">', "                               {{~value.body[key].list.top:value1:index1}}", "                                   <li>", '                                       <a target="_blank" href="{{=value1.link}}">', '                                           <img src="{{=get_img_domain()}}{{=value1.image_url}}" alt="" title="">', "                                       </a>", "                                   </li>", "                               {{~}}", "                               </ul>", "                              </div>", "                            {{~value.body[key].list.bottom:value1:index1}}", '                            <a class="ad" target="_blank" href="{{=value1.link}}" alt="" title="">', '                                <img src="{{=get_img_domain()}}{{=value1.image_url}}" alt="" title="">', "                            </a>", "                            {{~}}", "                        </li>", '                    {{?? value.body[key].type === "f4"}}', '                        <li class="b-p w400 pr" type="f4" t_id="{{=value.body[key].sid}}">', '                             <div class="u-slide-318 slide oh J-floor-slide">', '                               <ul class="s-lst fixed slider-main">', "                               {{~value.body[key].list.top:value1:index1}}", "                                   <li>", '                                       <a target="_blank" href="{{=value1.link}}">', '                                           <img src="{{=get_img_domain()}}{{=value1.image_url}}" alt="" title="">', "                                       </a>", "                                   </li>", "                               {{~}}", "                               </ul>", "                              </div>", '                             <div class="u-slide-170 slide oh J-floor-slide">', '                               <ul class="s-lst fixed slider-main">', "                               {{~value.body[key].list.bottom:value1:index1}}", "                                   <li>", '                                       <a target="_blank" href="{{=value1.link}}">', '                                           <img src="{{=get_img_domain()}}{{=value1.image_url}}" alt="" title="">', "                                       </a>", "                                   </li>", "                               {{~}}", "                               </ul>", "                              </div>", "                        </li>", '                    {{?? value.body[key].type === "f5"}}', '                        <li class="b-p w500 pr" type="f5" t_id="{{=value.body[key].sid}}">', "                            {{~value.body[key].list:value1:index1}}", '                                <a href="{{=value1.link}}" target="_blank" alt="" title="" class="ad">', '                                    <img src="{{=get_img_domain()}}{{=value1.image_url}}" alt="" title="">', "                                </a>", "                            {{~}}", "                        </li>", "                    {{?}}", "                {{ } }}", "                </ul>", "            </div>", "            {{??}}", '            <div class="b J-panel hide" tp-childarea="list_{{=index+1}}">', '                <p class="J_tab_blank">加载中...</p>', "            </div>", "            {{?}}", "        {{~}}", "    </div>", "</div>"].join(""),
		a = ['<div class="u-t fixed" tp-childarea="tabs">', '    <h3 class="fl">{{=it.message.floor_name}}', "        <i>{{=it.message.sort}}F</i>", "    </h3>", '    <ul class="f-tab fr J-tab-menu">', "        {{~it.message.tabs:value:index}}", '            <li {{? index === 0 }}class="z-select loaded"{{?}} data-index={{=value.tab_index}}>', '                <a href="javascript:;">{{=value.tab_name}}</a>', "                <span></span>", "            </li>", "        {{~}}", "    </ul>", "</div>", '<div class="u-c fixed">', '    <div class="f-s fl oh" tp-childarea="cates">', '        <a href="{{=it.message.fixed.ad.link}}" class="ad" title="" alt="" target="_blank">', '            <img src="{{=get_img_domain()}}{{=it.message.fixed.ad.image_url}}" alt="" title="">', "        </a>", '        <ul class="sales">', "                {{ for(var key in it.message.fixed.texts) { }}", "                   <li>", '                    {{? it.message.fixed.texts[key].link !=="" && it.message.fixed.texts[key].text!==""}}', '                    <a href="{{=it.message.fixed.texts[key].link}}" target="_blank" alt="" title="">{{=it.message.fixed.texts[key].text}} ></a>', "                    {{?}}", "                   </li>", "                {{ } }}", "         </ul>", '        <ul class="assists">', "                {{ for(var key in it.message.fixed.shorttexts) { }}", '                   <li class="item">', '                    {{? it.message.fixed.shorttexts[key].link !=="" && it.message.fixed.shorttexts[key].text!==""}}', '                    <a href="{{=it.message.fixed.shorttexts[key].link}}" target="_blank" alt="" title="">{{=it.message.fixed.shorttexts[key].text}} ></a>', "                    {{?}}", "                   </li>", "                {{ } }}", "         </ul>", '         <ul class="words oh">', '           <li class="lst">', "            {{ for(var key in it.message.fixed.keyword) { }}", "              {{? key <= 6}}", '                {{? it.message.fixed.keyword[key].isLink === "1"}}', '                    {{? it.message.fixed.keyword[key].link !=="" && it.message.fixed.keyword[key].text!==""}}', '                    <a href="{{=it.message.fixed.keyword[key].link}}" target="_blank" title="{{=it.message.fixed.keyword[key].text}}" {{? it.message.fixed.keyword[key].hasOwnProperty("isHighlight")}}class="z-h-c"{{?}}>{{=it.message.fixed.keyword[key].text}}</a>', "                    {{?}}", '                {{?? it.message.fixed.keyword[key].isLink === "2"}}', '                    {{? it.message.fixed.keyword[key].text!==""}}', '                    <a href="{{=search_domain}}/?q={{=it.message.fixed.keyword[key].text}}" target="_blank" title="{{=it.message.fixed.keyword[key].text}}" {{? it.message.fixed.keyword[key].hasOwnProperty("isHighlight")}}class="z-h-c"{{?}}>{{=it.message.fixed.keyword[key].text}}</a>', "                    {{?}}", "                {{?}}", "              {{?}}", "            {{ } }}", "           </li>", '           <li class="lst">', "            {{ for(var key in it.message.fixed.keyword) { }}", "              {{? key > 6}}", '                {{? it.message.fixed.keyword[key].isLink === "1"}}', '                    {{? it.message.fixed.keyword[key].link !=="" && it.message.fixed.keyword[key].text!==""}}', '                    <a href="{{=it.message.fixed.keyword[key].link}}" target="_blank" title="{{=it.message.fixed.keyword[key].text}}" {{? it.message.fixed.keyword[key].hasOwnProperty("isHighlight")}}class="z-h-c"{{?}}>{{=it.message.fixed.keyword[key].text}}</a>', "                    {{?}}", '                {{?? it.message.fixed.keyword[key].isLink === "2"}}', '                    {{? it.message.fixed.keyword[key].text!==""}}', '                    <a href="{{=search_domain}}/?q={{=it.message.fixed.keyword[key].text}}" target="_blank" title="{{=it.message.fixed.keyword[key].text}}" {{? it.message.fixed.keyword[key].hasOwnProperty("isHighlight")}}class="z-h-c"{{?}}>{{=it.message.fixed.keyword[key].text}}</a>', "                    {{?}}", "                {{?}}", "              {{?}}", "            {{ } }}", "           </li>", "          </ul>", '          <a href="{{=it.message.fixed.bottomad.link}}" class="s-ad" title="" alt="" target="_blank">', '            <img src="{{=get_img_domain()}}{{=it.message.fixed.bottomad.image_url}}" alt="" title="">', "          </a>", "    </div>", '    <div class="f-m fl J-tab-content">', "        {{~it.message.tabs:value:index}}", "            {{? index === 0}}", '            <div class="b J-panel" tp-childarea="list_{{=index+1}}">', "                <ul>", "                {{ for(var key in value.body) { }}", '                    {{? value.body[key].type === "t9"}}', '                        <li class="b-p w200 pr" type="t9" t_id="{{=value.body[key].sid}}">', "                            {{~value.body[key].list:value1:index1}}", '                                {{? value1.type === "1"}}', '                                    <a href="{{=value1.adUrl}}" alt="" title="" class="ad" target="_blank">', '                                        <img src="{{=get_img_domain()}}{{=value1.adPic}}" alt="" title="">', "                                    </a>", '                                {{?? value1.type === "0"}}', '                                    <div class="prod">', '                                        <div class="p-i oh" p-id="{{=value1.smSeq}}">', '                                            {{? value1.productType === "1"}}', '                                            <a href="{{=value1.link}}" alt="" target="_blank" title=""><img src="{{=get_img_domain()}}{{=value1.smPic}}" height="160" width="160" alt="" title="{{=value1.smTitle}}"></a>', '                                            {{?? value1.productType === "2"}}', '                                            <a href="{{=value1.link}}" alt="" target="_blank" title=""><img src="{{=get_mallimg_domain(value1.smPic)}}" height="160" width="160" alt="" title="{{=value1.smTitle}}"></a>', "                                            {{?}}", "                                        </div>", '                                        <div class="p-n oh">', '                                            <a href="{{=value1.link}}" target="_blank" alt="" title="{{=value1.smTitle}}">{{=value1.smTitle}}</a>', "                                        </div>", '                                        <div class="u-price oh">', '                                            <p class="s-p fl mr10">', '                                                <span>￥</span><span class="iteminfo_sm_price">{{=value1.smPrice}}</span>', "                                            </p>", "                                            {{? value1.smPrice < value1.itPrice}}", '                                            <s class="o-p fl">', '                                                <span>￥</span><span class="iteminfo_it_mprice">{{=value1.itPrice}}</span>', "                                            </s>", "                                            {{?}}", "                                        </div>", "                                    </div>", "                                {{?}}", "                            {{~}}", "                        </li>", '                    {{?? value.body[key].type === "x1"}}', '                        <li class="b-p w400 pr" type="x1" t_id="{{=value.body[key].sid}}">', "                            {{~value.body[key].list:value1:index1}}", '                                {{? value1.type === "1"}}', '                                    <a href="{{=value1.adUrl}}" alt="" title="" class="ad" target="_blank">', '                                        <img src="{{=get_img_domain()}}{{=value1.adPic}}" alt="" title="">', "                                    </a>", '                                {{?? value1.type === "0"}}', '                                    <div class="prod">', '                                        <div class="p-i oh" p-id="{{=value1.smSeq}}">', '                                            {{? value1.productType === "1"}}', '                                            <a href="{{=value1.link}}" alt="" target="_blank" title=""><img src="{{=get_img_domain()}}{{=value1.smPic}}" height="160" width="160" alt="" title="{{=value1.smTitle}}"></a>', '                                            {{?? value1.productType === "2"}}', '                                            <a href="{{=value1.link}}" alt="" target="_blank" title=""><img src="{{=get_mallimg_domain(value1.smPic)}}" height="160" width="160" alt="" title="{{=value1.smTitle}}"></a>', "                                            {{?}}", "                                        </div>", '                                        <div class="p-n oh">', '                                            <a href="{{=value1.link}}" target="_blank" alt="" title="{{=value1.smTitle}}">{{=value1.smTitle}}</a>', "                                        </div>", '                                        <div class="u-price oh">', '                                            <p class="s-p fl mr10">', '                                                <span>￥</span><span class="iteminfo_sm_price">{{=value1.smPrice}}</span>', "                                            </p>", "                                            {{? value1.smPrice < value1.itPrice}}", '                                            <s class="o-p fl">', '                                                <span>￥</span><span class="iteminfo_it_mprice">{{=value1.itPrice}}</span>', "                                            </s>", "                                            {{?}}", "                                        </div>", "                                    </div>", "                                {{?}}", "                            {{~}}", '                            <a href="{{=value.body[key].ad.link}}" class="ad" title="" alt="" target="_blank">', '                               <img src="{{=get_img_domain()}}{{=value.body[key].ad.image_url}}" alt="" title="">', "                           </a>", "                        </li>", "                    {{?}}", "                {{ } }}", "                </ul>", "            </div>", "            {{??}}", '            <div class="b J-panel hide" tp-childarea="list_{{=index+1}}">', '                <p class="J_tab_blank">加载中...</p>', "            </div>", "            {{?}}", "        {{~}}", "    </div>", "</div>"].join(""),
		f = ['<div class="u-rmd-pic fl">', '    <a href="{{=it.message.left.href}}" target="_blank">', '        <img src="{{=get_img_domain()}}{{=it.message.left.image_url}}" alt="" width="190" height="155">', "    </a>", "</div>", '<div class="u-rmd-slide slide fl" id="todayRec">', '    <ul class="s-lst fixed slider-main">', "        {{~it.message.right:value:index}}", "        <li>", "            {{~value:value1:index1}}", '            <a href="{{=value1.href}}" target="_blank" alt="" title="" target="_blank"><img src="{{=get_img_domain()}}{{=value1.image_url}}" alt="" title=""></a>', "            {{~}}", "        </li>", "        {{~}}", "    </ul>", "</div>"].join(""),
		l = ["<h3>{{=it.message.body.title}}</h3>", '<div class="u-spc-m fixed">', '    <div class="m-l fl oh">', '        <a class="item" href="{{=it.message.body.body[0].href}}" alt="" title="" target="_blank"><img src="{{=get_img_domain()}}{{=it.message.body.body[0].image_url}}" height="429" width="189" alt="" title=""></a>', "    </div>", '    <div class="m-c fl oh">', '        <div class="m-c-slide slide fl" id="specFloor" tp-childarea="smllb">', '            <ul class="s-lst fixed slider-main">', "                {{~it.message.body.body[1]:value:index}}", '                {{? value.href!=="" && value.image_url !==""}}', "                <li>", '                    <a href="{{=value.href}}" alt="" title="" target="_blank"><img src="{{=get_img_domain()}}{{=value.image_url}}" height="239" width="399" alt="" title=""></a>', "                </li>", "                {{?}}", "                {{~}}", "            </ul>", "        </div>", '        <a href="{{=it.message.body.body[2].href}}" class="item b" alt="" title="" target="_blank"><img src="{{=get_img_domain()}}{{=it.message.body.body[2].image_url}}" height="189" width="199" alt="" title=""></a>', '        <a href="{{=it.message.body.body[3].href}}" class="item b" alt="" title="" target="_blank"><img src="{{=get_img_domain()}}{{=it.message.body.body[3].image_url}}" alt="" title=""></a>', "    </div>", '    <div class="m-r fl oh">', '        <a href="{{=it.message.body.body[4].href}}" class="item t" alt="" title="" target="_blank"><img src="{{=get_img_domain()}}{{=it.message.body.body[4].image_url}}" alt="" title=""></a>', '        <a href="{{=it.message.body.body[6].href}}" class="item t" alt="" title="" target="_blank"><img src="{{=get_img_domain()}}{{=it.message.body.body[6].image_url}}" alt="" title=""></a>', '        <a href="{{=it.message.body.body[8].href}}" class="item t" alt="" title="" target="_blank"><img src="{{=get_img_domain()}}{{=it.message.body.body[8].image_url}}" alt="" title=""></a>', '        <a href="{{=it.message.body.body[5].href}}" class="item b" alt="" title="" target="_blank"><img src="{{=get_img_domain()}}{{=it.message.body.body[5].image_url}}" alt="" title=""></a>', '        <a href="{{=it.message.body.body[7].href}}" class="item b" alt="" title="" target="_blank"><img src="{{=get_img_domain()}}{{=it.message.body.body[7].image_url}}" alt="" title=""></a>', '        <div class="item b more" tp-childarea="more">', '            {{? it.message.body.body[9].fntype === "0"}}', '                <h4><i class="l mr10"></i>更多栏目<i class="r ml10"></i></h4>', '                <ul class="link">', "                    {{for (var i in it.message.body.body[9].list){ }}", '                        <li><a href="{{=it.message.body.body[9].list[i].href}}" target="_blank" alt="" title="" {{? it.message.body.body[9].list[i].hasOwnProperty("highlight")}}class="z-h-c"{{?}}>{{=it.message.body.body[9].list[i].text}}</a></li>', "                    {{ } }}", "                </ul>", '            {{?? it.message.body.body[9].fntype === "1"}}', '                 <a href="{{=it.message.body.body[9].href}}" class="item b" target="_blank" alt="" title=""><img src="{{=get_img_domain()}}{{=it.message.body.body[9].image_url}}" height="189" width="199" alt="" title=""></a>', "            {{?}}", "        </div>", "    </div>", "</div>"].join(""),
		c = ['<ul class="oh">', "    {{~it.message:value:index}}", "        <li>", '            <a href="{{=value.href}}" alt="" title="{{=value.text}}" target="_blank">', '                <img src="{{=get_img_domain()}}{{=value.image_url}}" alt="" title="{{=value.text}}">', "            </a>", "        </li>", "    {{~}}", "</ul>"].join(""),
		h = ["{{~it.message:value:index}}", '    <a href="{{=value.href}}" alt="" title="" target="_blank"><img src="{{=get_img_domain()}}{{=value.image_url}}" alt="" title="" {{? it.message.length === 3 && index === 2}}style="width:396px;"{{?}}></a>', "{{~}}"].join(""),
		p = ["<ul>", "{{ for(var key in it.body) { }}", '    {{? it.body[key].type === "t1"}}', '        <li class="b-p w200 pr" type="t1" t_id="{{=it.body[key].sid}}">', "            {{~it.body[key].list:value1:index1}}", '                <a href="{{=value1.link}}" target="_blank" alt="" title="" class="ad">', '                    <img src="{{=get_img_domain()}}{{=value1.image_url}}" alt="" title="">', "                </a>", "            {{~}}", "        </li>", '    {{?? it.body[key].type === "t2"}}', '        <li class="b-p w200 pr" type="t2" t_id="{{=it.body[key].sid}}">', "            {{~it.body[key].list:value1:index1}}", '                <a href="{{=value1.link}}" target="_blank" alt="" title="" class="ad">', '                    <img src="{{=get_img_domain()}}{{=value1.image_url}}" alt="" title="">', "                </a>", "            {{~}}", "        </li>", '    {{??  it.body[key].type === "t3"}}', '        <li class="b-p w200 pr" type="t3" t_id="{{=it.body[key].sid}}">', "            {{~it.body[key].list:value1:index1}}", '                {{? value1.type === "1"}}', '                    <a href="{{=value1.adUrl}}" target="_blank" alt="" title="" class="ad">', '                        <img src="{{=get_img_domain()}}{{=value1.adPic}}" alt="" title="">', "                    </a>", '                {{?? value1.type === "0"}}', '                    <div class="prod">', '                        <div class="p-i oh" p-id="{{=value1.smSeq}}">', '                            {{? value1.productType === "1"}}', '                            <a href="{{=value1.link}}" target="_blank" alt="" title="{{=value1.smTitle}}"><img src="{{=get_img_domain()}}{{=value1.smPic}}" height="160" width="160" alt="" title="{{=value1.smTitle}}"></a>', '                            {{?? value1.productType === "2"}}', '                            <a href="{{=value1.link}}" target="_blank" alt="" title="{{=value1.smTitle}}"><img src="{{=get_mallimg_domain(value1.smPic)}}" height="160" width="160" alt="" title="{{=value1.smTitle}}"></a>', "                            {{?}}", "                        </div>", '                        <div class="p-n oh">', '                            <a href="{{=value1.link}}" target="_blank" alt="" title="{{=value1.smTitle}}">{{=value1.smTitle}}</a>', "                        </div>", '                        <div class="u-price oh">', '                            <p class="s-p fl mr10">', '                                <span>￥</span><span class="iteminfo_sm_price">{{=value1.smPrice}}</span>', "                            </p>", "                            {{? value1.smPrice < value1.itPrice}}", '                            <s class="o-p fl">', '                                <span>￥</span><span class="iteminfo_it_mprice">{{=value1.itPrice}}</span>', "                            </s>", "                            {{?}}", "                        </div>", "                    </div>", "                {{?}}", "            {{~}}", "        </li>", '    {{?? it.body[key].type === "t4"}}', '        <li class="b-p w200 u-bk-rk oh pr J-tab-c" type="t4" t_id="{{=it.body[key].sid}}">', '            <div class="rk-item">', '                <ul class="J-tab-cm">', "                {{for(var i in it.body[key].list){}}", '                    {{? it.body[key].list[i].hasOwnProperty("rank")}}', '                    <li {{? i==="1" || !it.body[key].list["1"].hasOwnProperty("rank")}}class="z-select"{{?}}><a href="javascript:void(0)" alt="" title="">{{=it.body[key].list[i].custorm_name}}</a></li>', "                    {{?}}", "                {{}}}", "                </ul>", "            </div>", '            <div class="rk-main oh J-tab-cc">', "                {{for(var j in it.body[key].list){}}", '                {{? it.body[key].list[j].hasOwnProperty("rank")}}', '                <div class="rk-lst oh J-bk-rk J-c-panel {{? j!=="1" && it.body[key].list["1"].hasOwnProperty("rank")}}hide{{?}}">', "                    <ul>", "                        {{~it.body[key].list[j].rank:item:i}}", '                        <li {{? i===0}}class="z-select"{{?}}>', '                            <div class="out">', '                                <span class="num"><b>{{=i+1}}</b></span>', '                                <a class="oe fl">{{=item.SM_TITLE}}</a>', "                            </div>", '                            <dl class="in">', '                                <dt class="i fl oh">', '                                    <span class="num"><b>{{=i+1}}</b></span>', '                                    <a href="{{=item.LINK}}" target="_blank" alt="" title="{{=item.SM_TITLE}}">', '                                     {{? item.PRODUCT_TYPE === "1"}}', '                                        <img src="{{=get_img_domain()}}{{=item.SM_PIC}}" height="50" width="50" alt="" title="{{=item.SM_TITLE}}">', '                                     {{?? item.PRODUCT_TYPE === "2"}}', '                                        <img src="{{=get_mallimg_domain(item.SM_PIC)}}" height="50" width="50" alt="" title="{{=item.SM_TITLE}}">', "                                     {{?}}", "                                    </a>", "                                </dt>", '                                <dd class="n fl">', '                                    <a href="{{=item.LINK}}" target="_blank" alt="" title="{{=item.SM_TITLE}}">{{=item.SM_TITLE}}</a>', "                                </dd>", '                               <!--  <dd class="c fl">', '                                    <a href="#" alt="" title="">({{=item.COMMENT_NUM || 0}}条评价)</a>', "                                </dd> -->", '                                <dd class="u-price fl">', '                                    <p class="s-p fl mr10">', '                                        <span>￥</span><span class="iteminfo_sm_price">{{=item.SM_PRICE}}</span>', "                                    </p>", "                                    {{? item.SM_PRICE < item.IT_PRICE}}", '                                    <s class="o-p fl">', '                                        <span>￥</span><span class="iteminfo_it_mprice">{{=item.IT_PRICE}}</span>', "                                    </s>", "                                    {{?}}", "                                </dd>", "                            </dl>", "                        </li>", "                        {{~}}", "                    </ul>", "                </div>", "                {{?}}", "                {{}}}", "            </div>", "        </li>", '    {{?? it.body[key].type === "t5"}}', '        <li class="b-p w200 pr" type="t5" t_id="{{=it.body[key].sid}}">', "            {{~it.body[key].list:value1:index1}}", '                <a href="{{=value1.link}}" target="_blank" alt="" title="" class="ad">', '                    <img src="{{=get_img_domain()}}{{=value1.image_url}}" alt="" title="">', "                </a>", "            {{~}}", "        </li>", '    {{?? it.body[key].type === "t6"}}', '        <li class="b-p w200 pr" type="t6" t_id="{{=it.body[key].sid}}">', "            {{~it.body[key].list:value1:index1}}", '                <a href="{{=value1.link}}" target="_blank" alt="" title="" class="ad">', '                    <img src="{{=get_img_domain()}}{{=value1.image_url}}" alt="" title="">', "                </a>", "            {{~}}", "        </li>", '    {{?? it.body[key].type === "t7"}}', '        <li class="b-p w250 pr" type="t7" t_id="{{=it.body[key].sid}}">', "            {{~it.body[key].list:value1:index1}}", '                <a href="{{=value1.link}}" target="_blank" alt="" title="" class="ad">', '                    <img src="{{=get_img_domain()}}{{=value1.image_url}}" alt="" title="">', "                </a>", "            {{~}}", "        </li>", '    {{?? it.body[key].type === "t8"}}', '        <li class="b-p w250 pr" type="t8" t_id="{{=it.body[key].sid}}">', "            {{~it.body[key].list:value1:index1}}", '                <a href="{{=value1.link}}" target="_blank" alt="" title="" class="ad">', '                    <img src="{{=get_img_domain()}}{{=value1.image_url}}" alt="" title="">', "                </a>", "            {{~}}", "        </li>", '    {{?? it.body[key].type === "t9"}}', '        <li class="b-p w200 pr" type="t9" t_id="{{=it.body[key].sid}}">', "                            {{~it.body[key].list:value1:index1}}", '                                {{? value1.type === "1"}}', '                                    <a href="{{=value1.adUrl}}" alt="" title="" class="ad" target="_blank">', '                                        <img src="{{=get_img_domain()}}{{=value1.adPic}}" alt="" title="">', "                                    </a>", '                                {{?? value1.type === "0"}}', '                                    <div class="prod">', '                                        <div class="p-i oh" p-id="{{=value1.smSeq}}">', '                                            {{? value1.productType === "1"}}', '                                            <a href="{{=value1.link}}" alt="" target="_blank" title=""><img src="{{=get_img_domain()}}{{=value1.smPic}}" height="160" width="160" alt="" title="{{=value1.smTitle}}"></a>', '                                            {{?? value1.productType === "2"}}', '                                            <a href="{{=value1.link}}" alt="" target="_blank" title=""><img src="{{=get_mallimg_domain(value1.smPic)}}" height="160" width="160" alt="" title="{{=value1.smTitle}}"></a>', "                                            {{?}}", "                                        </div>", '                                        <div class="p-n oh">', '                                            <a href="{{=value1.link}}" target="_blank" alt="" title="{{=value1.smTitle}}">{{=value1.smTitle}}</a>', "                                        </div>", '                                        <div class="u-price oh">', '                                            <p class="s-p fl mr10">', '                                                <span>￥</span><span class="iteminfo_sm_price">{{=value1.smPrice}}</span>', "                                            </p>", "                                            {{? value1.smPrice < value1.itPrice}}", '                                            <s class="o-p fl">', '                                                <span>￥</span><span class="iteminfo_it_mprice">{{=value1.itPrice}}</span>', "                                            </s>", "                                            {{?}}", "                                        </div>", "                                    </div>", "                                {{?}}", "                            {{~}}", "         </li>", '       {{?? it.body[key].type === "x1"}}', '          <li class="b-p w400 pr" type="x1" t_id="{{=it.body[key].sid}}">', "                            {{~it.body[key].list:value1:index1}}", '                                {{? value1.type === "1"}}', '                                    <a href="{{=value1.adUrl}}" alt="" title="" class="ad" target="_blank">', '                                        <img src="{{=get_img_domain()}}{{=value1.adPic}}" alt="" title="">', "                                    </a>", '                                {{?? value1.type === "0"}}', '                                    <div class="prod">', '                                        <div class="p-i oh" p-id="{{=value1.smSeq}}">', '                                            {{? value1.productType === "1"}}', '                                            <a href="{{=value1.link}}" alt="" target="_blank" title=""><img src="{{=get_img_domain()}}{{=value1.smPic}}" height="160" width="160" alt="" title="{{=value1.smTitle}}"></a>', '                                            {{?? value1.productType === "2"}}', '                                            <a href="{{=value1.link}}" alt="" target="_blank" title=""><img src="{{=get_mallimg_domain(value1.smPic)}}" height="160" width="160" alt="" title="{{=value1.smTitle}}"></a>', "                                            {{?}}", "                                        </div>", '                                        <div class="p-n oh">', '                                            <a href="{{=value1.link}}" target="_blank" alt="" title="{{=value1.smTitle}}">{{=value1.smTitle}}</a>', "                                        </div>", '                                        <div class="u-price oh">', '                                            <p class="s-p fl mr10">', '                                                <span>￥</span><span class="iteminfo_sm_price">{{=value1.smPrice}}</span>', "                                            </p>", "                                            {{? value1.smPrice < value1.itPrice}}", '                                            <s class="o-p fl">', '                                                <span>￥</span><span class="iteminfo_it_mprice">{{=value1.itPrice}}</span>', "                                            </s>", "                                            {{?}}", "                                        </div>", "                                    </div>", "                                {{?}}", "                            {{~}}", '                            <a href="{{=it.body[key].ad.link}}" class="ad" title="" alt="" target="_blank">', '                               <img src="{{=get_img_domain()}}{{=it.body[key].ad.image_url}}" alt="" title="">', "                           </a>", "        </li>", '    {{?? it.body[key].type === "f1"}}', '        <li class="b-p w400 pr" type="f1" t_id="{{=it.body[key].sid}}">', "            {{~it.body[key].list:value1:index1}}", '                <a href="{{=value1.link}}" target="_blank" alt="" title="" class="ad">', '                    <img src="{{=get_img_domain()}}{{=value1.image_url}}" alt="" title="">', "                </a>", "            {{~}}", "        </li>", '    {{?? it.body[key].type === "f2"}}', '        <li class="b-p w400 pr" type="f2" t_id="{{=it.body[key].sid}}">', '          <div class="u-slide-244 slide oh J-floor-slide">', '             <ul class="s-lst fixed slider-main">', "             {{~it.body[key].list.top:value1:index1}}", "                <li>", '                   <a target="_blank" href="{{=value1.link}}">', '                      <img src="{{=get_img_domain()}}{{=value1.image_url}}" alt="" title="">', "                   </a>", "                </li>", "             {{~}}", "             </ul>", "          </div>", '          <div class="u-slide-244 slide oh J-floor-slide">', '             <ul class="s-lst fixed slider-main">', "             {{~it.body[key].list.bottom:value1:index1}}", "                <li>", '                   <a target="_blank" href="{{=value1.link}}">', '                      <img src="{{=get_img_domain()}}{{=value1.image_url}}" alt="" title="">', "                   </a>", "                </li>", "              {{~}}", "              </ul>", "           </div>", "     </li>", '    {{?? it.body[key].type === "f3"}}', '        <li class="b-p w400 pr" type="f3" t_id="{{=it.body[key].sid}}">', '          <div class="u-slide-244 slide oh J-floor-slide">', '             <ul class="s-lst fixed slider-main">', "             {{~it.body[key].list.top:value1:index1}}", "                <li>", '                   <a target="_blank" href="{{=value1.link}}">', '                      <img src="{{=get_img_domain()}}{{=value1.image_url}}" alt="" title="">', "                   </a>", "                </li>", "             {{~}}", "             </ul>", "          </div>", "          {{~it.body[key].list.bottom:value1:index1}}", '            <a class="ad" target="_blank" href="{{=value1.link}}" alt="" title="">', '               <img src="{{=get_img_domain()}}{{=value1.image_url}}" alt="" title="">', "             </a>", "           {{~}}", "        </li>", '    {{?? it.body[key].type === "f4"}}', '        <li class="b-p w400 pr" type="f4" t_id="{{=it.body[key].sid}}">', '          <div class="u-slide-318 slide oh J-floor-slide">', '             <ul class="s-lst fixed slider-main">', "             {{~it.body[key].list.top:value1:index1}}", "                <li>", '                   <a target="_blank" href="{{=value1.link}}">', '                      <img src="{{=get_img_domain()}}{{=value1.image_url}}" alt="" title="">', "                   </a>", "                </li>", "             {{~}}", "             </ul>", "          </div>", '          <div class="u-slide-170 slide oh J-floor-slide">', '             <ul class="s-lst fixed slider-main">', "             {{~it.body[key].list.bottom:value1:index1}}", "                <li>", '                   <a target="_blank" href="{{=value1.link}}">', '                      <img src="{{=get_img_domain()}}{{=value1.image_url}}" alt="" title="">', "                   </a>", "                </li>", "              {{~}}", "              </ul>", "           </div>", "     </li>", '    {{?? it.body[key].type === "f5"}}', '        <li class="b-p w500 pr" type="f5" t_id="{{=it.body[key].sid}}">', "            {{~it.body[key].list:value1:index1}}", '                <a href="{{=value1.link}}" target="_blank" alt="" title="" class="ad">', '                    <img src="{{=get_img_domain()}}{{=value1.image_url}}" alt="" title="">', "                </a>", "            {{~}}", "        </li>", "    {{?}}", "{{ } }}", "</ul>"].join(""),
		d = ['<ul class="oh clearfix">', "{{~it.message:value:index}}", '      <li {{? value.bgcolor }}style="background:{{=value.bgcolor}}"{{?}}>', '                    <p class="n" {{? value.fontcolor }}style="color:{{=value.fontcolor}}{{?}}">{{=value.title}}</p>', '                    <a href="{{=value.link}}" class="p" alt="" title="{{=value.title}}" target="{{= value.target == 1 ?"_blank":"" }}"><img src="{{=get_img_domain()}}{{=value.image_url}}" alt="{{=value.title}}" title="{{=value.title}}" width="100" height="100"></a>', "                </li>", "{{~}}", "            </ul>"].join(""),
		v = ['<h3 class="tt" style="color:{{=it.message.color}}">{{=it.message.title}}</h3>', '<div class="u-part-cont fixed">', "{{~it.message.list:value:index}}", '   <a href="{{=value.href}}" class="ad" target="_blank">', '       <img src="{{=get_img_domain()}}{{=value.image_url}}" title={{=value.text}}>', "   </a>", "{{~}}", "</div>"].join(""),
		m = ['<h3 class="tt"><img src="{{=get_img_domain()}}{{=it.message.title_image}}"></h3>', '<div class="u-part-cont fixed">', "{{~it.message.list:value:index}}", '   <a href="{{=value.href}}" class="ad" target="_blank">', '       <img src="{{=get_img_domain()}}{{=value.image_url}}" title={{=value.text}}>', "   </a>", "{{~}}", "</div>"].join("");
	return {
		rush: s,
		short_floor: o,
		short_wfloor: u,
		tall_wfloor: a,
		recommend: f,
		special: l,
		brand: c,
		banner: h,
		tab: p,
		big_slide: e,
		small_slide: t,
		three_link: n,
		navigation: d,
		bar_ad: r,
		recharge_lst: i,
		sale_part: v,
		sale_more_part: m
	}
}), require(["lib/common", "api/index", "tpl/index"], function(e, t, n) {
	var r = {
		init: function() {
			this.lazyloadModule(), this.bindEvent(), this.jsLoadImage(), this.rechargeFun(), this.yearFestival(), e(".J_new_lazy").lazyload({
				placeholder: "",
				threshold: 0,
				effect: "show",
				skip_invisible: !1
			}), this.removeBind()
		},
		bindEvent: function() {
			function r() {
				var t = screen.width,
					n = e(".J-g-sale");
				t >= 1600 && n.show()
			}

			function i() {
				var t = e(this),
					n = e(".J-sdb");
				n.hasClass("m-sdb-e") ? l() : (e.vars.bIsIe7 ? n.addClass("m-sdb-e").css("right", "0") : n.addClass("m-sdb-e").animate({
					right: "0"
				}, 360), t.addClass("t-cart-active"), e(".J-sdb-sale").children(".p-b").show().siblings(".p-s").hide())
			}

			function s() {
				var t = document.body.scrollTop || document.documentElement.scrollTop,
					n = 730,
					r = e(".J-sdb");
				t >= n ? r.show() : r.hide()
			}

			function o() {
				var t = e(window).height(),
					n = e(".J-sdb-cart");
				t < 635 ? n.show().siblings("li").hide() : n.show().siblings("li").show()
			}

			function u() {
				var t = e(this),
					n = t.index();
				t.addClass("active").siblings("li").removeClass("active"), e("html,body").stop(!0, !0).animate({
					scrollTop: e(".J-floor").eq(n).offset().top - 150
				}, {
					easing: "easeOutExpo",
					duration: 500,
					complete: function() {}
				})
			}

			function a() {
				var t = document.body.scrollTop || document.documentElement.scrollTop,
					n = e(window).height() / 2,
					r = e(".J-floor"),
					i = e(".J_fn_lift"),
					s = e(".J-fixbar,.J-fixcont"),
					o = 200,
					u = r.outerHeight() / 2,
					a = [],
					f = 0;
				if(r.length > 0) var l = r.eq(0).offset().top;
				t > 730 ? s.css("top", 0) : s.css("top", -50), t + n > l ? (i.show().stop(!0, !0).animate({
					opacity: 1
				}, 100, function() {
					i.addClass("m-lift-show")
				}), r.each(function(r, i) {
					var s = e(this),
						o = s.offset().top;
					a[r] = Math.abs(t + n - o - u)
				}), Array.prototype.indexOf || (Array.prototype.indexOf = function(e) {
					for(var t = 0; t < this.length; t++)
						if(this[t] == e) return t;
					return -1
				}), f = a.indexOf(Math.min.apply(Math, a)), r.eq(f).addClass("u-flo-cur").siblings(".J-floor").removeClass("u-flo-cur"), i.find("li").eq(f).addClass("active").siblings("li").removeClass("active")) : (i.removeClass("m-lift-show").stop(!0, !0).animate({
					opacity: 0
				}, 100, function() {
					i.hide()
				}), e(".J_fn_lift li").removeClass("active"), r.removeClass("u-flo-cur"))
			}

			function f() {
				var t = e(window).height(),
					n = e(".J-sdb"),
					r = 0;
				n.hasClass("m-sdb-sale") ? r = t - 337 : r = t - 137, e(".J-sdb-cb").css("height", r + "px")
			}

			function l() {
				var t = e(".J-sdb");
				e.vars.bIsIe7 ? (t.removeClass("m-sdb-e").css("right", "-280px"), e(".J-sdb-sale").children(".p-b").hide().siblings(".p-s").show()) : t.removeClass("m-sdb-e").animate({
					right: "-280px"
				}, 360, function() {
					e(".J-sdb-sale").children(".p-b").hide().siblings(".p-s").show()
				}), e(".J-sdb-cart").removeClass("t-cart-active")
			}

			function c() {
				var t = e.cookie(e.vars.sCdist),
					n = e.cookie("index_ad");
				t && !n && (e(".J-alert-ad").show(), e.cookie("index_ad", "1"))
			}
			var t = this,
				n = null;
			e(window).on("resize scroll", e.throttle(function() {
				n && clearTimeout(n), n = setTimeout(function() {
					t.lazyloadModule(), a(), s()
				}, 400)
			}, 300)), e(window).on("resize", e.throttle(function() {
				f(), o()
			}, 300)), e(".J_btn_fad").trigger("click"), setTimeout(function() {
				e(".J_btn_ufad").trigger("click")
			}, 5e3), e(document).on({
				mouseenter: function() {
					e(this).find(".J-sdb-tip").css("background", "#C70034").stop(!0, !1).animate({
						left: "-90px"
					}, 500)
				},
				mouseleave: function() {
					e(this).find(".J-sdb-tip").css("background", "#333").stop(!0, !1).animate({
						left: "35px"
					}, 500)
				}
			}, ".J-sbd-tab"), e(document).on("click", ".J-sdb-cart", i), e(document).on("click", ".J-sdb-cc", function() {
				l()
			}), e(document).on("click", ".J-sdb", function(e) {
				e.stopPropagation()
			}), e(document).on("click", "body", function(e) {
				l()
			}), e(document).on("click", ".J_fn_lift li", u), e(document).on("mouseenter", ".J-bk-rk li", function() {
				e(this).addClass("z-select").siblings("li").removeClass("z-select")
			}), r(), s(), o(), a(), f(), e(".J-alert-ad").length && c(), e(document).on("click", ".J-alert-close", function() {
				e(".J-alert-ad").hide()
			})
		},
		jsLoadImage: function() {
			var t = e(".J_category_ad");
			t.length > 0 && t.each(function() {
				var t = e(this),
					n = t.attr("data-src");
				t.html('<img class="J_new_lazy" src="' + n + '" alt="">')
			}), e.tplRender({
				tpl: n.big_slide,
				container: e(".J_big_slide"),
				json: e.vars.oPageConfig.roll
			}), e.tplRender({
				tpl: n.three_link,
				container: e(".J_three_link"),
				json: e.vars.oPageConfig.roll_right
			}), e.tplRender({
				tpl: n.bar_ad,
				container: e("#focusAd"),
				json: e.vars.oPageConfig.roll_right
			}), e("#slideMain").fn_slide({
				type: "fadeIn",
				time: 5e3,
				auto: !0,
				hide_page_btn: !0,
				has_num: !1
			}), e("#slideAd").fn_slide({
				has_num: !1,
				type: "move",
				flip: !1
			})
		},
		getUrlParam: function(e, t) {
			var n = new RegExp("(^|&)" + t + "=([^&]*)(&|$)"),
				r = e.split("?")[1].match(n);
			return r != null ? decodeURIComponent(r[2]) : null
		},
		lazyloadModule: function(r) {
			function l(t, n) {
				e.each(t, function(t, r) {
					if(e(this).hasClass("J_loaded")) return;
					var o = e(r).offset().top,
						a = e(r).height(),
						f = e(r).attr("data-floor");
					u ? n ? c(f, e(r), t) : c(f, e(r)) : o + a >= s - 300 && o - 300 <= s + i && (n ? c(f, e(r), t) : c(f, e(r)))
				})
			}

			function c(r, i, s) {
				function c(t) {
					var i = null;
					e(document).on("mouseenter", "#floor" + r + " .J-tab-menu >li", function() {
						var s = e(this),
							o = s.index(),
							u = "z-select";
						clearTimeout(i), i = setTimeout(function() {
							o !== 0 && !s.hasClass("loaded") && (e.tplRender({
								tpl: n.tab,
								container: e("#floor" + r).find(".J-tab-content >.J-panel:eq(" + o + ")"),
								json: t.message.tabs[o]
							}), s.addClass("loaded")), s.addClass(u).siblings().removeClass(u), e("#floor" + r).find(".J-tab-content >.J-panel:eq(" + o + ")").removeClass("hide").siblings().addClass("hide"), e("#floor" + r).find(".J-floor-slide").length > 0 && e("#floor" + r).find(".J-floor-slide").each(function() {
								e(this).find(".slider-nav").length === 0 && e(this).fn_slide({
									has_num: !1,
									auto: !0,
									type: "move",
									hide_page_btn: !0
								})
							})
						}, 150)
					}).on("mouseleave", "#floor" + r + " .J-tab-menu >li", function() {
						clearTimeout(i)
					})
				}
				var l = {
					widgetId: r
				};
				if(u || a) l.serSeq = f, l.isRelease = 0;
				o.loadModuleTemplate({
					url: t.getFloorModule.url,
					type: t.getFloorModule.method || "GET",
					dataType: "JSON",
					data: l,
					success: function(e) {
						if(!e || e.message === "" || e.message === "empty" || e.type !== "floor") return;
						Object.prototype.toString.call(e.message) === "[object Object]" && (e.message.sort = s + 1), c(e)
					}
				}, {
					container: e("#floor" + r + ""),
					cur_floor: i
				})
			}
			var i = e(window).height(),
				s = document.body.scrollTop || document.documentElement.scrollTop,
				o = this,
				u = e.vars.bIsEdit,
				a = e.vars.bIsPreview,
				f = "";
			u ? f = o.getUrlParam(e("body", parent.document).find("#market_frame").attr("src"), "ser_seq") : a && (f = o.getUrlParam(window.location.href, "ser_seq")), l(e(".J_n_m"), !1), l(e(".J-floor"), !0)
		},
		loadModuleTemplate: function(t, r) {
			var i = e.extend({}, t, r);
			e.ajax(i).done(function(t) {
				(t.message === "" || t.message === "empty") && i.cur_floor.addClass("J_loaded");
				if(!t || !t.type || t.message === "empty" || t.message === "") return;
				var r = null,
					s = t.type,
					o = {
						floor: n.short_floor,
						special: n.special,
						recommond: n.recommend,
						banner: n.banner,
						brand: n.brand,
						hotsale: n.rush,
						navigation: n.navigation,
						promotion3: n.sale_part,
						promotion5: n.sale_part,
						promotion14: n.sale_more_part,
						promotion16: n.sale_more_part,
						promotion18: n.sale_more_part,
						promotion6: n.sale_more_part
					};
				if(t.type === "floor") {
					var u = t.message.floorType;
					u === "shortWide" ? o.floor = n.short_wfloor : u === "tallWide" && (o.floor = n.tall_wfloor)
				}
				e.tplRender({
					tpl: o[s],
					container: i.container,
					json: t
				}), i.cur_floor.addClass(o.loaded || "J_loaded"), s === "floor" ? e(".J-floor-slide").length > 0 && e(".J-floor-slide").each(function() {
					e(this).find(".slider-nav").length === 0 && e(this).fn_slide({
						has_num: !1,
						auto: !0,
						type: "move",
						hide_page_btn: !0
					})
				}) : s === "recommond" ? e("#todayRec").fn_slide({
					type: "move",
					duration: 600,
					has_ctrl: !1,
					hide_page_btn: !0
				}) : s === "special" ? e("#specFloor").fn_slide({
					has_num: !1,
					auto: !0,
					type: "move",
					hide_page_btn: !0
				}) : s === "hotsale" && e("#slideShare").fn_slide({
					type: "up",
					duration: 600,
					auto: !0,
					has_ctrl: !1,
					flip: !1
				}), i.callback && i.callback()
			})
		},
		getExpandIcon: function(n, r, i) {
			var s = r.message.tabs[i].body,
				o = r.message.tabs[i].tab_index,
				u = [];
			for(var a in s) {
				var f = s[a].list;
				for(var l = 0; l < f.length; l++) typeof f[l].smSeq != "undefined" && u.push(f[l].smSeq)
			}
			if(!!u.length) {
				var c = {
					widgetId: n,
					params: [{
						tabId: o,
						smSeqs: u
					}]
				};
				e.ajax({
					type: t.getExpandIcon.method || "get",
					url: t.getExpandIcon.url,
					data: "data=" + JSON.stringify(c),
					success: function(t) {
						t = JSON.parse(t);
						var r = e("#floor" + n).find(".J-tab-content >.J-panel:eq(" + i + ")"),
							s = r.find(".prod"),
							o = t[0].smSeqs,
							u = "",
							a = 0;
						for(var f in o) u = o[f], a = f, u != null && s.find("[p-id='" + a + "'] a").before('<img src="' + get_img_domain() + u + '" class="z-icon" height="50" width="50" alt="">')
					}
				})
			}
		},
		removeBind: function() {
			e(document).off("mouseenter mouseleave", ".J_nav_cg")
		},
		rechargeFun: function() {
			function r(e) {
				this.container = e, this.timer = null, this.init()
			}
			r.prototype = {
				constructor: r,
				init: function() {
					this.bindEvent()
				},
				bindEvent: function() {
					function M(r) {
						if(w.test(r)) {
							var i = "";
							E === ".J-rge-cell" ? i = t.getRechargeAdress.url + r + "&rechargeType=1" : i = t.getRechargeAdress.url + r + "&rechargeType=2", e.ajaxDefine({
								url: i,
								type: t.getRechargeAdress.method || "GET",
								dataType: "jsonp",
								jsonp: "callback",
								error: function(t, n, r) {
									e.log(t, n, r)
								}
							}).done(function(t) {
								var r = JSON.parse(t),
									i = r.code,
									s = r.productSupplierName,
									o = r.packageInfo;
								if(i === 404) {
									_("系统异常！");
									return
								}
								if(!s || s === null) {
									T.hide(), x.show();
									return
								}
								T.show().children("span").html(s);
								if(i === 200) y = 1, L.children("p.tip").hide(), e.tplRender({
									tpl: n.recharge_lst,
									container: k,
									json: o
								}), D();
								else {
									if(i === 405) {
										_("充值服务维护中，请稍候再试！"), k.html("");
										return
									}
									if(i === 406) {
										_("本地区服务维护中，请稍候再试！"), k.html("");
										return
									}
								}
							})
						} else T.hide(), r.length === 11 ? x.show() : x.hide()
					}

					function _(e) {
						A.children("p.price").hide(), L.children("p.tip").html(e).show(), k.siblings('input[type="text"]').val("")
					}

					function D() {
						var n = k.children("li.active").children("a"),
							r = k.siblings('input[type="text"]'),
							i = n.attr("data-price"),
							s = n.attr("data-value"),
							o = n.html();
						if(n.length > 0)
							if(s === "undefined") {
								y && L.children("p.tip").hide();
								var u = "",
									a = S.val();
								if(T.is(":hidden")) {
									x.show(), S.focus();
									return
								}
								E === ".J-rge-cell" ? u = t.getRechargeAdress.url + a + "&rechargeType=1&text=" + parseInt(o) : u = t.getRechargeAdress.url + a + "&rechargeType=2&text=" + o, e.ajaxDefine({
									url: u,
									type: t.getRechargeAdress.method || "GET",
									dataType: "jsonp",
									jsonp: "callback",
									error: function(t, n, r) {
										e.log(t, n, r)
									}
								}).done(function(e) {
									var t = JSON.parse(e),
										r = t.code;
									if(r === 200) {
										var i = t.packageInfo[0];
										y = 1, n.attr("data-skuid", i.skuId), n.attr("data-price", i.mallPrice), n.attr("data-goodsid", i.goodsId), A.children("p.price").show().children("span").html("￥" + i.mallPrice)
									} else r === 404 ? _("系统异常！") : r === 405 ? _("充值服务维护中，请稍候再试！") : r === 406 ? _("本地区服务维护中，请稍候再试！") : _("本地区服务维护中，请稍候再试！");
									k.siblings('input[type="text"]').val(o)
								})
							} else {
								if(i !== "undefined") {
									k.siblings('input[type="text"]').val(o), A.children("p.price").show().children("span").html("￥" + i);
									return
								}
								var u = "";
								E === ".J-rge-cell" ? u = t.getRechargePrice.url + "1&text=" + parseInt(o) : u = t.getRechargePrice.url + "2&text=" + o, e.ajaxDefine({
									url: u,
									type: t.getRechargePrice.method || "GET",
									dataType: "jsonp",
									jsonp: "callback",
									error: function(t, n, r) {
										e.log(t, n, r)
									}
								}).done(function(e) {
									var t = JSON.parse(e);
									t !== "" ? (L.children("p.tip").hide(), n.attr("data-price", t), A.children("p.price").show().children("span").html("￥" + t)) : (A.children("p.price").hide(), L.children("p.tip").html("商品价格已调整，请重新下单").show()), k.siblings('input[type="text"]').val(o)
								})
							}
					}

					function P() {
						b && clearTimeout(b), b = setTimeout(function() {
							C.is(":visible") && C.hide(), C.siblings("i").removeClass("up")
						}, 500)
					}

					function H(r, i) {
						var s = S.val();
						s === "" && x.is(":hidden") && e.ajaxDefine({
							url: t.getRechargeLst.url + r,
							type: t.getRechargeLst.method || "GET",
							dataType: "jsonp",
							jsonp: "callback",
							error: function(t, n, r) {
								e.log(t, n, r)
							}
						}).done(function(t) {
							var r = JSON.parse(t),
								s = r.code;
							if(s === 404) _("系统异常！");
							else {
								if(s !== 200) {
									_("充值服务维护中，请稍候再试！");
									return
								}
								e.tplRender({
									tpl: n.recharge_lst,
									container: e("." + i).find(".J-price-lst"),
									json: r.data
								}), D()
							}
						})
					}
					var r = ".J-rge-cont",
						i = ".J-ipt-num",
						s = ".J-ipt-money",
						o = ".J-num-lst",
						u = ".J-rge-adress",
						a = ".J-rge-label",
						f = ".J-rge-sbt",
						l = ".J-rge-act",
						c = ".J-num-error",
						h = ".J-rge-icon",
						p = ".J-money-icon",
						d = ".J-rge-price",
						v = ".J-rge-tip",
						m = ".J-price-lst",
						g = this,
						y = 0,
						b = this.timer,
						w = /^0?(13|15|18|14|17)[0-9]{9}$/,
						E = this.container,
						S = e(E).find(i),
						x = e(E).find(c),
						T = e(E).find(u),
						N = e(E).find(a),
						C = e(E).find(o),
						k = e(E).find(m),
						L = e(E).find(v),
						A = e(E).find(d),
						O = e(E).find(l);
					e(document).on({
						mouseover: function() {
							clearTimeout(b)
						},
						mouseleave: function() {
							P()
						}
					}, E + " " + r), e(document).on({
						focus: function() {
							N.hide(), C.hide()
						},
						blur: function() {
							var t = e(this).val();
							t === "" && (N.show(), E === ".J-rge-cell" ? H("1", "J-rge-cell") : H("2", "J-rge-gprs"))
						},
						keydown: function() {
							y = 0
						},
						keyup: function() {
							/\D/g.test(this.value) && (this.value = this.value.replace(/\D/g, ""));
							var t = e(this).val();
							T.hide(), x.hide(), C.hide(), t.length === 11 && M(t)
						}
					}, E + " " + i), e(document).on("click", E + " " + s, function() {
						e(this).siblings("ul").toggle(), e(this).siblings("i").toggleClass("up")
					}), e(document).on("click", E + " " + a, function() {
						var t = e(this);
						t.hide(), t.siblings(i).focus()
					}), e(document).on("click", E + " " + f, function() {
						var t = e(this),
							n = e(E).find(i),
							r = n.val();
						w.test(r) || (x.show(), n.focus());
						if(T.is(":hidden") || x.is(":visible") || L.children("p").is(":visible")) {
							n.focus();
							return
						}
						if(!y) {
							L.children("p.tip").html("商品价格已调整，请重新下单").show(), T.hide();
							return
						}
						var s = k.children("li.active").children("a"),
							o = s.attr("data-price"),
							u = s.attr("data-goodsid"),
							a = s.attr("data-skuid"),
							f = "http://buy." + e.url.sSourceDomain + "/cart/recharge?phone=" + r + "&sm_seq=" + u + "&price_snapshot=" + o + "&sku_id=" + a;
						O.attr("href", f), O[0].click()
					}), e(document).on("mouseover", E + " " + h, function() {
						var t = e(this),
							n = t.siblings("ul");
						C.hide(), n.children("li").length > 0 && (t.addClass("up"), n.show())
					}), e(document).on({
						click: function() {
							var t = e(this),
								n = t.parent(),
								r = t.children("a").html(),
								i = t.children("a").data("price");
							t.addClass("active").siblings("li").removeClass("active"), x.hide(), n.hide().siblings("i").removeClass("up"), n.hasClass("J-cell-lst") && (n.siblings('input[type="text"]').val(r).siblings("label").hide(), M(r)), i && i !== "" && D()
						},
						mouseover: function() {
							clearTimeout(b)
						},
						mouseleave: function() {
							P()
						}
					}, E + " " + o + " li"), E === ".J-rge-cell" ? H("1", "J-rge-cell") : H("2", "J-rge-gprs")
				}
			}, e(document).on("click", ".J-rge-tab li", function() {
				var t = e(this),
					n = t.index();
				t.parent().parent().siblings(".J-tab-cc").children(".J-c-panel").eq(n).siblings().find(".J-num-error").hide()
			}), new r(".J-rge-cell"), new r(".J-rge-gprs")
		},
		yearFestival: function() {
			e(".J-nhd").addClass("m-nhd");
			var t = ['<div class="m-more-part ma">', '<h3 class="tt"><img src="//static02.fn-mart.com/product/images/index/nh_bg5.jpg?1234"></h3>', '<div class="u-part-cont fixed">', '<p class="ad">', '<a href="//sale.feiniu.com/activity-476556188255925.html" target="_blank" class="m-ad1 m-lnk"></a>', '<img src="//static02.fn-mart.com/product/images/index/nh_1.jpg?1234" title="美食5折GO" alt="美食5折GO">', "</p>", '<p class="ad">', '<a href="//sale.feiniu.com/activity-038346270431235.html" target="_blank" class="m-ad1 m-lnk"></a>', '<img src="//static02.fn-mart.com/product/images/index/nh_2.jpg?1234" title="满199减100" alt="满199减100">', "</p>", '<p class="ad">', '<a href="//sale.feiniu.com/activity-535696260382642.html" target="_blank" class="m-ad1 m-lnk"></a>', '<img src="//static02.fn-mart.com/product/images/index/nh_3.jpg?1234" title="满99减40 满199减100" alt="满99减40 满199减100">', "</p>", '<p class="ad">', '<a href="//sale.feiniu.com/activity-920606386310900.html" target="_blank" class="m-ad1 m-lnk"></a>', '<img src="//static02.fn-mart.com/product/images/index/nh_4.jpg?1234" title="满399减50" alt="满399减50">', "</p>", '<p class="ad" target="_blank">', '<a href="//sale.feiniu.com/activity-789546168985579.html" target="_blank" class="m-ad1 m-lnk"></a>', '<img src="//static02.fn-mart.com/product/images/index/nh_5.jpg?1234" title="折后最高立减100" alt="折后最高立减100">', "</p>", '<p class="ad">', '<a href="//sale.feiniu.com/activity-288936169478372.html" target="_blank" class="m-ad1 m-lnk"></a>', '<img src="//static02.fn-mart.com/product/images/index/nh_6.jpg?1234" title="第2件5折" alt="第2件5折">', "</p>", '<p class="ad">', '<a href="//sale.feiniu.com/activity-657926412918807.html" target="_blank" class="m-ad1 m-lnk"></a>', '<img src="//static02.fn-mart.com/product/images/index/nh_7.jpg?1234" title="加1元多1件" alt="加1元多1件">', "</p>", '<p class="ad">', '<a href="//sale.feiniu.com/activity-631426401907908.html" target="_blank" class="m-ad1 m-lnk"></a>', '<img src="//static02.fn-mart.com/product/images/index/nh_8.jpg?1234" title="全场0元起" alt="全场0元起">', "</p>", '<p class="ad">', '<a href="//sale.feiniu.com/activity-588116152131841.html" target="_blank" class="m-ad1 m-lnk"></a>', '<img src="//static02.fn-mart.com/product/images/index/nh_9.jpg?1234" title="买一送一" alt="买一送一">', "</p>", "</div>", "</div>"].join(" ");
			e(".J_year").html(t);
			var n = e.cookie("C_dist").substring(0, 4);
			n != "CPG1" && e(".u-part-cont .ad:last").find(".m-ad1").attr("href", "//sale.feiniu.com/activity-881716404159425.html").end().find(".m-ad3").attr("href", "//sale.feiniu.com/m-64044")
		}
	};
	e(function() {
		r.init()
	})
}), define("controller/www/index", function() {});