import request from './network.js'

export function getDetail(iid) {
  return request({
    url: '/detail',
    data: {
      iid
    }
  })
}

export function getRecommends() {
  return request({
    url: '/recommend'
  })
}

//获取商品信息
export class baseInfo{
  constructor(itemInfo, columns, services){
    this.title = itemInfo.title
    this.price = itemInfo.price
    this.cprice = itemInfo.lowNowPrice
    this.oldPrice = itemInfo.oldPrice
    this.desc = itemInfo.desc
    this.discountDesc = itemInfo.discountDesc
    this.columns = columns
    this.services = services
  }
}

//获取店铺信息
export class shopInfo{
  constructor(info){
    this.shopLogo = info.shopLogo
    this.cSells = info.cSells
    this.cGoods = info.cGoods
    this.score = info.score
    this.name = info.name
  }
}
