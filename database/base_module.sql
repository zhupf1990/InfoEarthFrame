/*
Navicat MySQL Data Transfer

Source Server         : ABP
Source Server Version : 50619
Source Host           : 192.168.100.147:3306
Source Database       : abpbusiness

Target Server Type    : MYSQL
Target Server Version : 50619
File Encoding         : 65001

Date: 2017-08-30 16:21:49
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for base_module
-- ----------------------------
DROP TABLE IF EXISTS `base_module`;
CREATE TABLE `base_module` (
  `F_ModuleId` varchar(50) NOT NULL COMMENT '功能主键',
  `F_ParentId` varchar(50) DEFAULT NULL COMMENT '父级主键',
  `F_EnCode` varchar(50) DEFAULT NULL COMMENT '编码',
  `F_FullName` varchar(50) DEFAULT NULL COMMENT '名称',
  `F_Icon` varchar(50) DEFAULT NULL COMMENT '图标',
  `F_UrlAddress` varchar(200) DEFAULT NULL COMMENT '导航地址',
  `F_Target` varchar(20) DEFAULT NULL COMMENT '导航目标',
  `F_IsMenu` int(11) DEFAULT NULL COMMENT '菜单选项',
  `F_AllowExpand` int(11) DEFAULT NULL COMMENT '允许展开',
  `F_IsPublic` int(11) DEFAULT NULL COMMENT '是否公开',
  `F_AllowEdit` int(11) DEFAULT NULL COMMENT '允许编辑',
  `F_AllowDelete` int(11) DEFAULT NULL COMMENT '允许删除',
  `F_SortCode` int(11) DEFAULT NULL COMMENT '排序码',
  `F_DeleteMark` int(11) DEFAULT NULL COMMENT '删除标记',
  `F_EnabledMark` int(11) DEFAULT NULL COMMENT '有效标志',
  `F_Description` varchar(200) DEFAULT NULL COMMENT '备注',
  `F_CreateDate` datetime DEFAULT NULL COMMENT '创建日期',
  `F_CreateUserId` varchar(50) DEFAULT NULL COMMENT '创建用户主键',
  `F_CreateUserName` varchar(50) DEFAULT NULL COMMENT '创建用户',
  `F_ModifyDate` datetime DEFAULT NULL COMMENT '修改日期',
  `F_ModifyUserId` varchar(50) DEFAULT NULL COMMENT '修改用户主键',
  `F_ModifyUserName` varchar(50) DEFAULT NULL COMMENT '修改用户',
  PRIMARY KEY (`F_ModuleId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='系统功能表';

-- ----------------------------
-- Records of base_module
-- ----------------------------
INSERT INTO `base_module` VALUES ('100', '0', 'SysManage', '系统管理', 'fa fa-desktop', 'app.SysManage', 'expand', '0', '0', '0', null, null, '10', '0', '1', '', null, '', '', '2017-07-12 15:32:42', '632cab6e-a691-495a-acf4-ebe37ba901af', '陈小二');
INSERT INTO `base_module` VALUES ('210', '100', 'SystemModule', '系统功能', 'fa fa-navicon', 'app.SysManage.SystemModule', 'iframe', '1', '0', '0', null, null, '15', '0', '1', '系统导航功能', null, '', '', '2017-07-12 15:32:42', 'System', '超级管理员');
SET FOREIGN_KEY_CHECKS=1;
