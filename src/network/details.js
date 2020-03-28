import {request} from './request.js'

export function detailsData (iid){
  return request({
      url:'/detail',
      params:{
        iid
      }
    })
}

export class ShopBaceIfm {
  constructor(columns,itemInfo,shopInfo){
    columns.pop();//删除coumns的最后一个数据
    columns.push(shopInfo.pop().name);//删除shopInfo最后一个数据并把它添加给columns 

    this.columns = columns;
    this.itemInfo = itemInfo;
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.nowprice = itemInfo.lowNowPrice;
    this.price = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discountDesc = itemInfo.discountDesc;
    this.discountBgColor = itemInfo.discountBgColor;

    this.shopInfo = shopInfo;
  }
}

export function recommendData(){
  return request({
    url:'/recommend'
  })
}