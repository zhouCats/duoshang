/*
Navicat MySQL Data Transfer

Source Server         : one
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : h51902

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2019-05-17 17:31:04
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for dsgoodlist
-- ----------------------------
DROP TABLE IF EXISTS `dsgoodlist`;
CREATE TABLE `dsgoodlist` (
  `gid` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `sales` int(11) DEFAULT NULL,
  `shopname` varchar(255) DEFAULT NULL,
  `style` varchar(255) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `imgurl` varchar(255) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `size` varchar(255) DEFAULT NULL,
  `itemnum` varchar(255) DEFAULT NULL,
  `allimg` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`gid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dsgoodlist
-- ----------------------------
INSERT INTO `dsgoodlist` VALUES ('1', '时尚新款上衣(MY1915)', '41.5', '441', '敏莹爷爷', '2019夏季上新', '55', 'goods1.jpg', '黑色&白色&蓝色&绿色', 's&m&x', ' ', 'goods1.jpg&goods2.jpg&goods3.jpg&goods4.jpg&goods5.jpg&goods6.jpg');
INSERT INTO `dsgoodlist` VALUES ('2', '时尚新款上衣(MY1916)', '42.5', '442', '敏莹爷爷', '新品首发', '56', 'goods2.jpg', '黑色&白色&蓝色', 's&m&x', ' ', 'goods1.jpg&goods2.jpg&goods3.jpg&goods4.jpg&goods5.jpg&goods6.jpg');
INSERT INTO `dsgoodlist` VALUES ('3', '时尚新款上衣(MY1917)', '43.5', '443', '敏莹爷爷', '新品首发', '57', 'goods3.jpg', '黑色&白色&蓝色&绿色', 's&m&x', ' ', 'goods1.jpg&goods2.jpg&goods3.jpg&goods4.jpg&goods5.jpg&goods6.jpg');
INSERT INTO `dsgoodlist` VALUES ('4', '时尚新款上衣(MY1918)', '44.5', '444', '敏莹爷爷', '2019夏季上新', '58', 'goods4.jpg', '黑色&白色&蓝色&绿色', 's&m&x', ' ', 'goods1.jpg&goods2.jpg&goods3.jpg&goods4.jpg&goods5.jpg&goods6.jpg');
INSERT INTO `dsgoodlist` VALUES ('5', '时尚新款上衣(MY1919)', '45.5', '445', '敏莹爷爷', '2019夏季上新', '59', 'goods5.jpg', '黑色&白色&绿色', 's&m&x', ' ', 'goods1.jpg&goods2.jpg&goods3.jpg&goods4.jpg&goods5.jpg&goods6.jpg');
INSERT INTO `dsgoodlist` VALUES ('6', '米兰圣 2019新款时尚半身裙春季拉链牛仔裙 O18', '46.5', '446', '米圣兰', '裙装专区', '60', 'goods6.jpg', '黑色&蓝色&绿色', 's&m&x', ' ', 'goods1.jpg&goods2.jpg&goods3.jpg&goods4.jpg&goods5.jpg&goods6.jpg');
INSERT INTO `dsgoodlist` VALUES ('7', '米兰圣 2019新款时尚半身裙春季拉链牛仔裙 O19', '47.5', '447', '米圣兰', '新品首发', '61', 'goods7.jpg', '黑色&白色&蓝色', 's&m&x', ' ', 'goods1.jpg&goods2.jpg&goods3.jpg&goods4.jpg&goods5.jpg&goods6.jpg');
INSERT INTO `dsgoodlist` VALUES ('8', '米兰圣 2019新款时尚半身裙春季拉链牛仔裙 O20', '48.5', '448', '米圣兰', '2019夏季上新', '62', 'goods8.jpg', '黑色&蓝色&绿色', 's&m&x', ' ', 'goods1.jpg&goods2.jpg&goods3.jpg&goods4.jpg&goods5.jpg&goods6.jpg');
INSERT INTO `dsgoodlist` VALUES ('9', '米兰圣 2019新款时尚半身裙春季拉链牛仔裙 O21', '49.5', '449', '米圣兰', '裙装专区', '63', 'goods9.jpg', '黑色&白色&蓝色&', 's&m&x', ' ', 'goods1.jpg&goods2.jpg&goods3.jpg&goods4.jpg&goods5.jpg&goods6.jpg');
INSERT INTO `dsgoodlist` VALUES ('10', '米兰圣 2019新款时尚半身裙春季拉链牛仔裙 O22', '50.5', '450', '米圣兰', '2019夏季上新', '64', 'goods10.jpg', '黑色&白色&蓝色&绿色', 's&m&x', ' ', 'goods1.jpg&goods2.jpg&goods3.jpg&goods4.jpg&goods5.jpg&goods6.jpg');
INSERT INTO `dsgoodlist` VALUES ('11', '米兰圣 2019新款时尚半身裙春季拉链牛仔裙 O23', '51.5', '451', '米圣兰', '新品首发', '65', 'goods11.jpg', '黑色&白色&绿色', 's&m&x', ' ', 'goods1.jpg&goods2.jpg&goods3.jpg&goods4.jpg&goods5.jpg&goods6.jpg');
INSERT INTO `dsgoodlist` VALUES ('12', '米兰圣 2019新款时尚半身裙春季拉链牛仔裙 O24', '52.5', '452', '米圣兰', '2019夏季上新', '66', 'goods12.jpg', '黑色&白色&绿色', 's&m&x', ' ', 'goods1.jpg&goods2.jpg&goods3.jpg&goods4.jpg&goods5.jpg&goods6.jpg');
INSERT INTO `dsgoodlist` VALUES ('13', '米兰圣 2019新款时尚半身裙春季拉链牛仔裙 O25', '53.5', '453', '米圣兰', '新品首发', '67', 'goods13.jpg', '黑色&白色&蓝色&绿色', 's&m&x', ' ', 'goods1.jpg&goods2.jpg&goods3.jpg&goods4.jpg&goods5.jpg&goods6.jpg');
INSERT INTO `dsgoodlist` VALUES ('14', '布桂坊 拼接豹纹领子长A字连衣裙 3510', '54.5', '454', '布闺房', '裙装专区', '68', 'goods14.jpg', '黑色&&蓝色&绿色', 's&m&x', ' ', 'goods1.jpg&goods2.jpg&goods3.jpg&goods4.jpg&goods5.jpg&goods6.jpg');
INSERT INTO `dsgoodlist` VALUES ('15', '布桂坊 拼接豹纹领子长A字连衣裙 3511', '55.5', '455', '布闺房', '裙装专区', '69', 'goods15.jpg', '黑色&白色&蓝色&绿色', 's&m&x', ' ', 'goods1.jpg&goods2.jpg&goods3.jpg&goods4.jpg&goods5.jpg&goods6.jpg');
INSERT INTO `dsgoodlist` VALUES ('16', '布桂坊 拼接豹纹领子长A字连衣裙 3512', '56.5', '456', '布闺房', '2019夏季上新', '70', 'goods16.jpg', '黑色&白色&蓝色&绿色', 's&m&x', ' ', 'goods1.jpg&goods2.jpg&goods3.jpg&goods4.jpg&goods5.jpg&goods6.jpg');
INSERT INTO `dsgoodlist` VALUES ('17', '布桂坊 拼接豹纹领子长A字连衣裙 3513', '57.5', '457', '布闺房', '新品首发', '71', 'goods17.jpg', '黑色&白色&蓝色&绿色', 's&m&x', ' ', 'goods1.jpg&goods2.jpg&goods3.jpg&goods4.jpg&goods5.jpg&goods6.jpg');
INSERT INTO `dsgoodlist` VALUES ('18', '布桂坊 拼接豹纹领子长A字连衣裙 3514', '58.5', '458', '布闺房', '2019夏季上新', '72', 'goods18.jpg', '黑色&白色&蓝色&绿色', 's&m&x', ' ', 'goods1.jpg&goods2.jpg&goods3.jpg&goods4.jpg&goods5.jpg&goods6.jpg');
INSERT INTO `dsgoodlist` VALUES ('19', '布桂坊 拼接豹纹领子长A字连衣裙 3515', '59.5', '459', '布闺房', '套装专区', '73', 'goods19.jpg', '黑色&白色&蓝色&绿色', 's&m&x', ' ', 'goods1.jpg&goods2.jpg&goods3.jpg&goods4.jpg&goods5.jpg&goods6.jpg');
INSERT INTO `dsgoodlist` VALUES ('20', '布桂坊 拼接豹纹领子长A字连衣裙 3516', '60.5', '460', '布闺房', '2019夏季上新', '74', 'goods20.jpg', '黑色&白色&蓝色&绿色', 's&m&x', ' ', 'goods1.jpg&goods2.jpg&goods3.jpg&goods4.jpg&goods5.jpg&goods6.jpg');
INSERT INTO `dsgoodlist` VALUES ('21', '布桂坊 拼接豹纹领子长A字连衣裙 3517', '61.5', '461', '布闺房', '裤装专区', '75', 'goods21.jpg', '黑色&白色&蓝色&绿色', 's&m&x', ' ', 'goods1.jpg&goods2.jpg&goods3.jpg&goods4.jpg&goods5.jpg&goods6.jpg');
INSERT INTO `dsgoodlist` VALUES ('22', '布桂坊 拼接豹纹领子长A字连衣裙 3518', '62.5', '462', '布闺房', '新品首发', '75', 'goods22.jpg', '黑色&白色&蓝色&绿色', 's&m&x', ' ', 'goods1.jpg&goods2.jpg&goods3.jpg&goods4.jpg&goods5.jpg&goods6.jpg');
INSERT INTO `dsgoodlist` VALUES ('23', '尚华南鹤 破洞宽松九分裤 1680', '63.5', '463', '布闺房', '新品首发', '75', 'goods23.jpg', '黑色&白色&蓝色&绿色', 's&m&x', ' ', 'goods1.jpg&goods2.jpg&goods3.jpg&goods4.jpg&goods5.jpg&goods6.jpg');
INSERT INTO `dsgoodlist` VALUES ('24', '尚华南鹤 破洞宽松九分裤 1681', '64.5', '464', '春天物语', '2019夏季上新', '75', 'goods24.jpg', '黑色&白色&蓝色&绿色', 's&m&x', ' ', 'goods1.jpg&goods2.jpg&goods3.jpg&goods4.jpg&goods5.jpg&goods6.jpg');
INSERT INTO `dsgoodlist` VALUES ('25', '尚华南鹤 破洞宽松九分裤 1682', '65.5', '465', '春天物语', '套装专区', '75', 'goods26.jpg', '黑色&白色&蓝色&绿色', 's&m&x', ' ', 'goods1.jpg&goods2.jpg&goods3.jpg&goods4.jpg&goods5.jpg&goods6.jpg');
INSERT INTO `dsgoodlist` VALUES ('26', '尚华南鹤 破洞宽松九分裤 1683', '66.5', '466', '春天物语', '2019夏季上新', '75', 'goods26.jpg', '黑色&白色&蓝色&绿色', 's&m&x', ' ', 'goods1.jpg&goods2.jpg&goods3.jpg&goods4.jpg&goods5.jpg&goods6.jpg');
INSERT INTO `dsgoodlist` VALUES ('27', '尚华南鹤 破洞宽松九分裤 1684', '67.5', '467', '春天物语', '裤装专区', '75', 'goods27.jpg', '黑色&白色&蓝色&绿色', 's&m&x', ' ', 'goods1.jpg&goods2.jpg&goods3.jpg&goods4.jpg&goods5.jpg&goods6.jpg');
INSERT INTO `dsgoodlist` VALUES ('28', '尚华南鹤 破洞宽松九分裤 1685', '68.5', '468', '春天物语', '裤装专区', '75', 'goods28.jpg', '黑色&白色&蓝色&绿色', 's&m&x', ' ', 'goods1.jpg&goods2.jpg&goods3.jpg&goods4.jpg&goods5.jpg&goods6.jpg');
INSERT INTO `dsgoodlist` VALUES ('29', '尚华南鹤 破洞宽松九分裤 1686', '69.5', '469', '春天物语', '套装专区', '75', 'goods29.jpg', '黑色&白色&蓝色&绿色', 's&m&x', ' ', 'goods1.jpg&goods2.jpg&goods3.jpg&goods4.jpg&goods5.jpg&goods6.jpg');
INSERT INTO `dsgoodlist` VALUES ('30', '尚华南鹤 破洞宽松九分裤 1687', '70.5', '470', '春天物语', '秋冬爆款上衣', '75', 'goods30.jpg', '黑色&白色&蓝色&绿色', 's&m&x', ' ', 'goods1.jpg&goods2.jpg&goods3.jpg&goods4.jpg&goods5.jpg&goods6.jpg');
INSERT INTO `dsgoodlist` VALUES ('31', '尚华南鹤 破洞宽松九分裤 1688', '71.5', '471', '春天物语', '秋冬爆款上衣', '75', 'goods31.jpg', '黑色&白色&蓝色&绿色', 's&m&x', ' ', 'goods1.jpg&goods2.jpg&goods3.jpg&goods4.jpg&goods5.jpg&goods6.jpg');
SET FOREIGN_KEY_CHECKS=1;
