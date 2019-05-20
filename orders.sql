/*
Navicat MySQL Data Transfer

Source Server         : one
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : h51902

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2019-05-17 17:30:44
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for orders
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `Usid` varchar(225) NOT NULL,
  `Gid` int(225) DEFAULT NULL,
  `Gnum` int(225) NOT NULL,
  `Gcolor` varchar(255) NOT NULL,
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `Gimg` varchar(255) NOT NULL,
  `Gtitle` varchar(255) NOT NULL,
  `Gprice` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of orders
-- ----------------------------
INSERT INTO `orders` VALUES ('15814891104', '8', '444', '绿色', '9', '../css/img/goods8.jpg', '米兰圣 2019新款时尚半身裙春季拉链牛仔裙 O20', '48.5');
INSERT INTO `orders` VALUES ('15814891104', '5', '444', '绿色', '8', '../css/img/goods5.jpg', '时尚新款上衣(MY1919)', '45.5');
INSERT INTO `orders` VALUES ('15814891104', '4', '24', '黑色', '6', '../css/img/goods4.jpg', '时尚新款上衣(MY1918)', '44.5');
INSERT INTO `orders` VALUES ('15814891104', '4', '38', '蓝色', '7', '../css/img/goods4.jpg', '时尚新款上衣(MY1918)', '44.5');
INSERT INTO `orders` VALUES ('13762111372', '1', '3', '白色', '10', '../css/img/goods6.jpg', '时尚新款上衣(MY1915)', '41.5');
INSERT INTO `orders` VALUES ('13570563935', '24', '14', '白色', '11', '../css/img/goods4.jpg', '尚华南鹤 破洞宽松九分裤 1681', '64.5');
SET FOREIGN_KEY_CHECKS=1;
