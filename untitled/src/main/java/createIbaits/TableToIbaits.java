package createIbaits;

import com.alibaba.fastjson.JSON;

import java.util.*;

/**
 * 通过数据库创建语句到ibaits描述文件
 * 1.字段名称
 * 2.字段类型
 *
 * PO类命名规则  tableName转成驼峰加PO
 * resultID   tableName转成驼峰+Result
 */
public class TableToIbaits {
    public static void main(String args[]){
        TableToIbaits tableToIbaits = new TableToIbaits();
        String sql ="CREATE TABLE `YY_BookingConfig` (\n" +
                "  `id` int(11) NOT NULL AUTO_INCREMENT,\n" +
                "  `shop_id` int(11) NOT NULL COMMENT '商户id',\n" +
                "  `setting` text NOT NULL COMMENT '商户预订设置信息',\n" +
                "  `status` tinyint(4) NOT NULL COMMENT '商户预订状态，10开启20关闭',\n" +
                "  `create_by` varchar(50) NOT NULL COMMENT '创建者',\n" +
                "  `created_time` datetime NOT NULL COMMENT '创建时间',\n" +
                "  `update_by` varchar(50) NOT NULL COMMENT '更新者',\n" +
                "  `updated_time` datetime NOT NULL COMMENT '更新时间',\n" +
                "  `inform_way` tinyint(4) NOT NULL DEFAULT '20' COMMENT '当有新订单时通知商户的方式，10声讯电话，20人工电话',\n" +
                "  `main_phone_area_code` varchar(12) DEFAULT NULL COMMENT '主要联系方式，固定电话区号',\n" +
                "  `main_phone_number` varchar(12) DEFAULT NULL COMMENT '主要联系方式，手机或者固定电话号码',\n" +
                "  `main_phone_extension_number` varchar(12) DEFAULT NULL COMMENT '主要联系方式，固定电话分机号',\n" +
                "  `main_phone_number_type` tinyint(4) DEFAULT NULL COMMENT '主要联系方式，固定电话为10，手机为20',\n" +
                "  `backup_phone_area_code` varchar(12) DEFAULT NULL COMMENT '备用联系方式，固定电话区号',\n" +
                "  `backup_phone_number` varchar(12) DEFAULT NULL COMMENT '备用联系方式，手机或者固定电话号码',\n" +
                "  `backup_phone_extension_number` varchar(12) DEFAULT NULL COMMENT '备用联系方式，固定电话分机号',\n" +
                "  `backup_phone_number_type` tinyint(4) DEFAULT NULL COMMENT '备用联系方式，固定电话为10，手机为20',\n" +
                "  `balance` decimal(9,1) NOT NULL DEFAULT '0.0' COMMENT '帐户余额',\n" +
                "  `subStatus` tinyint(4) NOT NULL DEFAULT '0' COMMENT '商户 子状态类型:默认为正常状态。正常(0),强制开启(11),欠费下线(21)',\n" +
                "  `same_number` tinyint(4) NOT NULL DEFAULT '0' COMMENT '商户 主号码重复标志位:默认为无重复。无重复(0),有重复(1)。',\n" +
                "  `is_thunder` int(4) NOT NULL DEFAULT '0' COMMENT '商户是否可实时预订，非实时预订（0），实时预订（1）',\n" +
                "  `is_groupon` tinyint(4) NOT NULL DEFAULT '0' COMMENT '该商户是否开通团购预订',\n" +
                "  `groupon_date` datetime DEFAULT NULL COMMENT '团购预订有效期',\n" +
                "  `deal_id` int(11) DEFAULT '0' COMMENT '团购dealid',\n" +
                "  `shop_name` varchar(500) NOT NULL COMMENT '从Dianping库同步的店名',\n" +
                "  `shop_branchname` varchar(500) DEFAULT NULL COMMENT '同步的分店名',\n" +
                "  `dial_pre_wait` tinyint(4) NOT NULL DEFAULT '-1' COMMENT '总机转分机延迟',\n" +
                "  `dial_post_wait` tinyint(4) NOT NULL DEFAULT '-1' COMMENT '分机接通到播报延迟',\n" +
                "  `free_start_date` datetime DEFAULT NULL COMMENT '合同优惠开始时间',\n" +
                "  `free_end_date` datetime DEFAULT NULL COMMENT '合同优惠结束时间',\n" +
                "  `city_id` smallint(6) DEFAULT '0' COMMENT 'cityid from dp_shop',\n" +
                "  `sub_informway` int(11) NOT NULL DEFAULT '201' COMMENT '声讯按键有反馈(101),声讯按键无反馈(102),人工(201)',\n" +
                "  `pay_mode` int(11) NOT NULL DEFAULT '0' COMMENT '收费模式0:按订单收费(defaut值),10:按年费',\n" +
                "  `mt_is_bookingon` int(11) DEFAULT '20',\n" +
                "  PRIMARY KEY (`id`),\n" +
                "  UNIQUE KEY `IX_shop_id` (`shop_id`),\n" +
                "  KEY `IX_Status` (`status`),\n" +
                "  KEY `IX_STATUS_SHOPID` (`status`,`shop_id`),\n" +
                "  KEY `IX_cityid_status` (`city_id`,`status`),\n" +
                "  KEY `IX_updated_time` (`updated_time`)\n" +
                ") ENGINE=InnoDB AUTO_INCREMENT=86981 DEFAULT CHARSET=utf8 COMMENT='预约预订-商户设置';";
        SqlResolve sqlResolve = new SqlResolve();
        TableEntity tableEntity = sqlResolve.solve(sql);
        ClassCreator classCreator = new ClassCreator();
        ClassEntity classEntity = classCreator.createClassEntityFromTable(tableEntity);
        for(ColumnEntry entry: classEntity.getAttributeMap()){
            System.out.println(entry.getName()+" : "+entry.getType());
        }

    }





}
