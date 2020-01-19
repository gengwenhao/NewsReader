/*
Navicat MySQL Data Transfer

Source Server         : news
Source Server Version : 50721
Source Host           : localhost:3306
Source Database       : news

Target Server Type    : MYSQL
Target Server Version : 50721
File Encoding         : 65001

Date: 2020-01-19 16:55:02
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'gengwenhao', '13945657337xX');
INSERT INTO `user` VALUES ('2', 'admin', 'admin');
INSERT INTO `user` VALUES ('3', 'gengwenhao1', 'gengwenhao1');

-- ----------------------------
-- Table structure for user_fav
-- ----------------------------
DROP TABLE IF EXISTS `user_fav`;
CREATE TABLE `user_fav` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `url` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_fav
-- ----------------------------
INSERT INTO `user_fav` VALUES ('24', '2', 'https://sports.sina.cn/others/volleyball/2020-01-08/detail-iihnzahk2885107.d.html?vt=4&pos=108', '中国男排胜中国台北 球迷赛后高唱《红旗飘飘》');
INSERT INTO `user_fav` VALUES ('25', '2', 'https://baby.sina.cn/baike/2020-01-08/detail-iihnzhha0699243.d.html?vt=4&pos=108', '别让“心情式育儿”毁了你的孩子');
INSERT INTO `user_fav` VALUES ('26', '2', 'https://sports.sina.cn/others/volleyball/2020-01-08/detail-iihnzahk2885107.d.html?vt=4&pos=108', '中国男排胜中国台北 球迷赛后高唱《红旗飘飘》');
INSERT INTO `user_fav` VALUES ('27', '2', 'https://mil.sina.cn/zgjq/2020-01-06/detail-iihnzhha0582925.d.html?cre=tianyi&mod=wmil&loc=-1&r=-1&rfunc=38&tj=cxvertical_wap_wmil&tr=73', '金灿荣：美定点暗杀伊朗将军 实际上是无能的表现');
INSERT INTO `user_fav` VALUES ('28', '2', 'https://news.sina.cn/gn/2020-01-08/detail-iihnzahk2886281.d.html?vt=4&amp;pos=8&amp;cid=56261', '科学家首次证实：冰在二维极限下可稳定存在');
INSERT INTO `user_fav` VALUES ('29', '2', 'http://3g.163.com/news/20/0109/01/F2DN6K380001899O.html', '女子买防癌险 5个月后确诊乳腺癌却遭保险公司拒赔');
INSERT INTO `user_fav` VALUES ('30', '2', 'https://news.sina.cn/gn/2020-01-09/detail-iihnzahk2898650.d.html?vt=4&amp;pos=8&amp;cid=56261', '贪了2600万 市委原书记逃跑路线曝光');
