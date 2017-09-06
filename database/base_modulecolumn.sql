/*
Navicat MySQL Data Transfer

Source Server         : ABP
Source Server Version : 50619
Source Host           : 192.168.100.147:3306
Source Database       : abpbusiness

Target Server Type    : MYSQL
Target Server Version : 50619
File Encoding         : 65001

Date: 2017-08-30 16:22:20
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for base_modulecolumn
-- ----------------------------
DROP TABLE IF EXISTS `base_modulecolumn`;
CREATE TABLE `base_modulecolumn` (
  `F_ModuleColumnId` varchar(50) NOT NULL COMMENT '列主键',
  `F_ModuleId` varchar(50) DEFAULT NULL COMMENT '功能主键',
  `F_ParentId` varchar(50) DEFAULT NULL COMMENT '父级主键',
  `F_EnCode` varchar(50) DEFAULT NULL COMMENT '编码',
  `F_FullName` varchar(50) DEFAULT NULL COMMENT '名称',
  `F_SortCode` int(11) DEFAULT NULL COMMENT '排序码',
  `F_Description` varchar(200) DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`F_ModuleColumnId`),
  KEY `FK_Relationship_7` (`F_ModuleId`),
  CONSTRAINT `FK_Relationship_7` FOREIGN KEY (`F_ModuleId`) REFERENCES `base_module` (`F_ModuleId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='系统功能表格列表';

-- ----------------------------
-- Records of base_modulecolumn
-- ----------------------------
SET FOREIGN_KEY_CHECKS=1;
