/*
Navicat MySQL Data Transfer

Source Server         : ABP
Source Server Version : 50619
Source Host           : 192.168.100.147:3306
Source Database       : abpbusiness

Target Server Type    : MYSQL
Target Server Version : 50619
File Encoding         : 65001

Date: 2017-08-30 16:22:03
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for base_modulebutton
-- ----------------------------
DROP TABLE IF EXISTS `base_modulebutton`;
CREATE TABLE `base_modulebutton` (
  `F_ModuleButtonId` varchar(50) NOT NULL COMMENT '按钮主键',
  `F_ModuleId` varchar(50) DEFAULT NULL COMMENT '功能主键',
  `F_ParentId` varchar(50) DEFAULT NULL COMMENT '父级主键',
  `F_Icon` varchar(50) DEFAULT NULL COMMENT '图标',
  `F_EnCode` varchar(50) DEFAULT NULL COMMENT '编码',
  `F_FullName` varchar(50) DEFAULT NULL COMMENT '名称',
  `F_ActionAddress` varchar(200) DEFAULT NULL COMMENT 'Action地址',
  `F_SortCode` int(11) DEFAULT NULL COMMENT '排序码',
  PRIMARY KEY (`F_ModuleButtonId`),
  KEY `FK_Relationship_2` (`F_ModuleId`),
  CONSTRAINT `FK_Relationship_2` FOREIGN KEY (`F_ModuleId`) REFERENCES `base_module` (`F_ModuleId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='系统功能按钮表';

-- ----------------------------
-- Records of base_modulebutton
-- ----------------------------
INSERT INTO `base_modulebutton` VALUES ('10bcf9d7-afc8-4203-8b4c-e35816c997b1', '210', '0', '', 'lr-replace', '刷新', '', '1');
INSERT INTO `base_modulebutton` VALUES ('2c0cfb2e-0506-4f4c-8ca6-351f2f94d123', '210', '0', '', 'lr-edit', '编辑', '/AuthorizeManage/Module/Form', '3');
INSERT INTO `base_modulebutton` VALUES ('6b9c4d7c-ed00-420b-815f-5ee17b7d4905', '210', '0', '', 'lr-add', '新增', '/AuthorizeManage/Module/Form', '2');
INSERT INTO `base_modulebutton` VALUES ('e610e1c7-c242-44dc-8440-c85f824f7681', '210', '0', '', 'lr-delete', '删除', '/AuthorizeManage/Module/RemoveForm', '4');
SET FOREIGN_KEY_CHECKS=1;
