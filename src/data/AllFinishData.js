import cookdata1 from '../data/food.js'
import cookdata2 from '../data/foodcid02.js'
import cookdata3 from '../data/foodcid03.js'
import cookdata4 from '../data/foodcid04.js'
import cookdata5 from '../data/foodcid05.js'
import cookdata6 from '../data/foodcid06.js'
import cookdata7 from '../data/foodcid07.js'
import cookdata8 from '../data/foodcid08.js'
import cookdata9 from '../data/foodcid09.js'
import cookdata10 from '../data/foodcid10.js'
import cookdata11 from '../data/foodcid11.js'
import cookdata12 from '../data/foodcid12.js'
import cookdata13 from '../data/foodcid13.js'
import cookdata14 from '../data/foodcid14.js'
import cookdata15 from '../data/foodcid15.js'
import cookdata16 from '../data/foodcid16.js'
import cookdata17 from '../data/foodcid17.js'
import cookdata18 from '../data/foodcid18.js'
export default {
	getdata() {

		let food1 = cookdata1.cid01;
		let food2 = cookdata2.cid21;
		let food3 = cookdata3.cid03;
		let food4 = cookdata4.cid04;
		let food5 = cookdata5.cid05;
		let food6 = cookdata6.cid06; //甜品
		let food7 = cookdata7.cid07; //早餐
		let food8 = cookdata8.cid08; //汤
		let food9 = cookdata9.cid09; //川菜
		let food10 = cookdata10.cid10; //粤菜
		let food11 = cookdata11.cid11; //湘菜
		let food12 = cookdata12.cid12; //鲁菜
		let food13 = cookdata13.cid13; //京菜
		let food14 = cookdata14.cid14; //法国菜
		let food15 = cookdata15.cid15; //日本料理菜
		let food16 = cookdata16.cid16; //韩国料理菜
		let food17 = cookdata17.cid17; //家常料理菜
		let food18 = cookdata18.cid18; //家常料理菜
		//合并所有数组
		let food = food1.concat(food2, food3, food4, food5, food6, food7, food8, food9,
			food10, food11, food12, food13, food14, food15, food16, food17, food18)

		//id重复去除重复id
//		for(let i = 0; i < food.length; i++) {
//			for(let j = food.length; j > 0; j--) {
//				let vi = food[i].id;
//				let vii = food[j].id;
//				if(vi == vii) {
//					delete food[j]
//				}
//			}
//		}
//		console.log(food)
		let Allfoods = window.localStorage;
		//把獲取到的數據存儲到本地轉換為json對象
		Allfoods["Allfoods"] = JSON.stringify(food);
		//console.log(food[0].id)

		let vlaus1 = '早餐'
		let vlaus2 = '家常';
		let vlaus3 = '甜';
		let vlaus4 = '小吃';
		let vlaus5 = '粥';
		let vlaus6 = '汤';
		let serchData1 = [];
		let serchData2 = [];
		let serchData3 = [];
		let serchData4 = [];
		let serchData5 = [];
		let serchData6 = [];

		let vlauss1 = '粤'
		let vlauss2 = '川'
		let vlauss3 = '鲁'
		let vlauss4 = '京'
		let vlauss5 = '湘'
		let vlauss6 = '法国'
		let vlauss7 = '日本'
		let vlauss8 = '韩国'
		let vlauss9 = '小吃'
		let vlauss10 = '凉拌'
		let vlaussData1 = [];
		let vlaussData2 = [];
		let vlaussData3 = [];
		let vlaussData4 = [];
		let vlaussData5 = [];
		let vlaussData6 = [];
		let vlaussData7 = [];
		let vlaussData8 = [];
		let vlaussData9 = [];

		//					早餐
		food.forEach(v => {
				let match = new RegExp('(' + vlaus1 + ')', 'img');

				if(match.test(v.tags) || match.test(v.title)) {
					serchData1.push(v);
				}
			}),
			//					家常
			food.forEach(v => {
				let match = new RegExp('(' + vlaus2 + ')', 'img');

				if(match.test(v.tags) || match.test(v.title)) {
					serchData2.push(v);
				}
			}),
			//					甜
			food.forEach(v => {
				let match = new RegExp('(' + vlaus3 + ')', 'img');

				if(match.test(v.tags) || match.test(v.title)) {
					serchData3.push(v);
				}
			}),
			//					小吃
			food.forEach(v => {
				let match = new RegExp('(' + vlaus4 + ')', 'img');

				if(match.test(v.tags) || match.test(v.title)) {
					serchData4.push(v);
				}
			}),
			//					粥
			food.forEach(v => {
				let match = new RegExp('(' + vlaus5 + ')', 'img');

				if(match.test(v.tags) || match.test(v.title)) {
					serchData5.push(v);
				}
			}),
			//					汤
			food.forEach(v => {
				let match = new RegExp('(' + vlaus6 + ')', 'img');

				if(match.test(v.tags) || match.test(v.title)) {
					serchData6.push(v);
				}
			}),
			//				粤菜
			food.forEach(v => {
				let match = new RegExp('(' + vlauss1 + ')', 'img');

				if(match.test(v.tags) || match.test(v.title)) {
					vlaussData1.push(v);
				}
			}),
			//				粤菜
			food.forEach(v => {
				let match = new RegExp('(' + vlauss1 + ')', 'img');

				if(match.test(v.tags) || match.test(v.title)) {
					vlaussData1.push(v);
				}
			}),
			//				川菜
			food.forEach(v => {
				let match = new RegExp('(' + vlauss2 + ')', 'img');

				if(match.test(v.tags) || match.test(v.title)) {
					vlaussData2.push(v);
				}
			}),
			//				鲁菜
			food.forEach(v => {
				let match = new RegExp('(' + vlauss3 + ')', 'img');

				if(match.test(v.tags) || match.test(v.title)) {
					vlaussData3.push(v);
				}
			}),
			//				京菜
			food.forEach(v => {
				let match = new RegExp('(' + vlauss4 + ')', 'img');

				if(match.test(v.tags) || match.test(v.title)) {
					vlaussData4.push(v);
				}
			}),
			//				湘菜
			food.forEach(v => {
				let match = new RegExp('(' + vlauss5 + ')', 'img');

				if(match.test(v.tags) || match.test(v.title)) {
					vlaussData5.push(v);
				}
			}),
			//				法国菜
			food.forEach(v => {
				let match = new RegExp('(' + vlauss6 + ')', 'img');

				if(match.test(v.tags) || match.test(v.title)) {
					vlaussData6.push(v);
				}
			}),
			//				日本菜
			food.forEach(v => {
				let match = new RegExp('(' + vlauss7 + ')', 'img');

				if(match.test(v.tags) || match.test(v.title)) {
					vlaussData7.push(v);
				}
			}),
			//				韩国菜
			food.forEach(v => {
				let match = new RegExp('(' + vlauss8 + ')', 'img');

				if(match.test(v.tags) || match.test(v.title)) {
					vlaussData8.push(v);
				}
			}),
			//				特色小吃
			food.forEach(v => {
				let match = new RegExp('(' + vlauss9 + ')', 'img');
				let match2 = new RegExp('(' + vlauss10 + ')', 'img');
				if(match.test(v.tags) || match.test(v.title) || match2.test(v.tags) || match2.test(v.title)) {
					vlaussData9.push(v);
				}
			});

//		console.log('早餐', serchData1);
		let breakfast = window.localStorage;
		//把獲取到的數據存儲到本地轉換為json對象
		breakfast["breakfast"] = JSON.stringify(serchData1);
//		console.log('家常', serchData2);
		let homgcooking = window.localStorage;
		//把獲取到的數據存儲到本地轉換為json對象
		homgcooking["homgcooking"] = JSON.stringify(serchData2);
//		console.log('甜', serchData3);
		let sweet = window.localStorage;
		//把獲取到的數據存儲到本地轉換為json對象
		sweet["sweet"] = JSON.stringify(serchData3);
//		console.log('小吃', serchData4);
		let snack = window.localStorage;
		//把獲取到的數據存儲到本地轉換為json對象
		snack["snack"] = JSON.stringify(serchData4);
//		console.log('粥', serchData5);
		let porridge = window.localStorage;
		//把獲取到的數據存儲到本地轉換為json對象
		porridge["porridge"] = JSON.stringify(serchData5);
//		console.log('汤', serchData6);
		let soup = window.localStorage;
		//把獲取到的數據存儲到本地轉換為json對象
		soup["soup"] = JSON.stringify(serchData6);
//		console.log('粤菜', vlaussData1);
		let Yue = window.localStorage;
		//把獲取到的數據存儲到本地轉換為json對象
		Yue["Yue"] = JSON.stringify(vlaussData1);
//		console.log('川菜', vlaussData2);
		let Chuan = window.localStorage;
		//把獲取到的數據存儲到本地轉換為json對象
		Chuan["Chuan"] = JSON.stringify(vlaussData2);
//		console.log('鲁菜', vlaussData3);
		let Lu = window.localStorage;
		//把獲取到的數據存儲到本地轉換為json對象
		Lu["Lu"] = JSON.stringify(vlaussData3);
//		console.log('京菜', vlaussData4);
		let Jing = window.localStorage;
		//把獲取到的數據存儲到本地轉換為json對象
		Jing["Jing"] = JSON.stringify(vlaussData4);
//		console.log('湘菜', vlaussData5);
		let Xiang = window.localStorage;
		//把獲取到的數據存儲到本地轉換為json對象
		Xiang["Xiang"] = JSON.stringify(vlaussData5);
//		console.log('法国菜', vlaussData6);
		let French = window.localStorage;
		//把獲取到的數據存儲到本地轉換為json對象
		French["French"] = JSON.stringify(vlaussData6);
//		console.log('日本菜', vlaussData7);
		let Japan = window.localStorage;
		//把獲取到的數據存儲到本地轉換為json對象
		Japan["Japan"] = JSON.stringify(vlaussData7);
//		console.log('韩国菜', vlaussData8);
		let Korea = window.localStorage;
		//把獲取到的數據存儲到本地轉換為json對象
		Korea["Korea"] = JSON.stringify(vlaussData8);
//		console.log('小吃特色', vlaussData9);
		let special = window.localStorage;
		//把獲取到的數據存儲到本地轉換為json對象
		special["special"] = JSON.stringify(vlaussData9);
	}
}