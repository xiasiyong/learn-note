# 云数据库

> 云开发提供了一个 JSON 数据库，顾名思义，数据库中的每条记录都是一个 JSON 格式的对象。一个数据库可以有多个集合（相当于关系型数据中的表），集合可看做一个 JSON 数组，数组中的每个对象就是一条记录，记录的格式是 JSON 对象。

​		每条记录都有一个 `_id` 字段用以唯一标志一条记录、一个 `_openid` 字段用以标志记录的创建者，即小程序的用户。需要特别注意的是，在管理端（控制台和云函数）中创建的不会有 `_openid` 字段，因为这是属于管理员创建的记录。开发者可以自定义 `_id`，但不可自定义和修改 `_openid` 。`_openid` 是在文档创建时由系统根据小程序用户默认创建的，开发者可使用其来标识和定位文档。



## 基本使用

```json
{
  // 描述，String 类型
  "description": "learn mini-program cloud service",
  // 截止时间，Date 类型
  "due": Date("2018-09-01"),
  // 标签，Array 类型
  "tags": [
    "tech",
    "mini-program",
    "cloud"
  ],
  // 个性化样式，Object 类型
  "style": {
    "color": "red"
  },
  // 是否已完成，Boolean 类型
  "done": false
}
```

1. 数据类型

   云开发数据库提供以下几种数据类型：

   - String：字符串
   - Number：数字
   - Object：对象
   - Array：数组
   - Bool：布尔值
   - Date：时间
   - Geo：多种地理位置类型，[详见下](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/guide/database/data-type.html#地理位置)
   - Null
   - Date

2. 权限控制

   > 数据库的权限分为小程序端和管理端，管理端包括云函数端和控制台。小程序端运行在小程序中，读写数据库受权限控制限制，管理端运行在云函数上，拥有所有读写数据库的权限。云控制台的权限同管理端，拥有所有权限。小程序端操作数据库应有严格的安全规则限制

3. 增删改查（SDK）

   - 初始化
   - 插入
   - 查询
   - 查询指令
   - 更新
   - 删除
   - 查询，更新数组/对象
   - 联表查询

4. 增删改查（管理端）

   - 控制台数据库高级操作
   - 数据库脚本 

   

   

   ### 
