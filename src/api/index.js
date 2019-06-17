// 接口请求函数
// 接口返回值: promise对象

import ajax from './ajax'
//根据经纬度获取地址详情
export const reqAdress = (geohash)=>ajax(`/position/${geohash}`);
//获取食物分类列表
export const reqFoodtype = ()=>ajax('/position/index_category');
//获取经纬度商铺列表
export const reqShops = (longtitude, latitude)=>ajax('/shop',{longtitude, latitude});