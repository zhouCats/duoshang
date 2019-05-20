/*
Navicat MySQL Data Transfer

Source Server         : one
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : h51902

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2019-05-17 17:30:54
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for dsuserinf
-- ----------------------------
DROP TABLE IF EXISTS `dsuserinf`;
CREATE TABLE `dsuserinf` (
  `Uid` int(225) NOT NULL AUTO_INCREMENT,
  `Uphone` varchar(225) NOT NULL,
  `Upwd` int(225) NOT NULL,
  PRIMARY KEY (`Uid`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dsuserinf
-- ----------------------------
INSERT INTO `dsuserinf` VALUES ('1', '15814891106', '123456789');
INSERT INTO `dsuserinf` VALUES ('7', '15814949494', '12121212');
INSERT INTO `dsuserinf` VALUES ('6', '15814891110', '123456798');
INSERT INTO `dsuserinf` VALUES ('5', '15914991105', '12345679');
INSERT INTO `dsuserinf` VALUES ('9', '15814891104', '19960817');
INSERT INTO `dsuserinf` VALUES ('10', '13762111372', '123456789');
INSERT INTO `dsuserinf` VALUES ('11', '13570563935', '123456789');
SET FOREIGN_KEY_CHECKS=1;
