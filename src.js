PrototypeApp({
  name:'协作方舟 OA',en:'COLLABORATIVE OFFICE',color:'#2563eb',color2:'#06b6d4',user:'陈予安',role:'部门负责人',badge:14,
  greeting:'上午好，陈予安',subtitle:'你有 8 项待办，其中 2 项将在今天超时。',entity:'审批',metricLabel:'流程时效',
  nav:['企业门户','统一待办','流程中心','公文管理','会议日程','行政服务','组织通讯录','数据看板','系统管理'],
  kpis:[{label:'待我处理',value:'8',trend:'2 项紧急'},{label:'今日会议',value:'4',trend:'下场 10:30'},{label:'本月办结',value:'126',trend:'↑ 15.4%'},{label:'审批及时率',value:'92.6%',trend:'↑ 3.2%'}],
  chartTitle:'流程发起与办结趋势',donutTitle:'待办类型分布',focusTitle:'待我处理',categories:['费用报销','采购申请','人事流程'],
  rows:[{name:'华东区客户拜访费用报销',code:'BX-20260707-0031',status:'待部门审批',value:'剩余 2 小时',progress:76,owner:'林知夏'},{name:'研发中心测试设备采购',code:'CG-20260707-0018',status:'待负责人审批',value:'剩余 5 小时',progress:64,owner:'宋嘉禾'},{name:'市场部 7 月活动用印',code:'YZ-20260706-0012',status:'即将超时',value:'剩余 45 分',progress:92,owner:'周景行'},{name:'设计中心年假申请',code:'QJ-20260706-0026',status:'待部门审批',value:'剩余 8 小时',progress:48,owner:'许清和'},{name:'季度经营会会议室申请',code:'HY-20260705-0009',status:'待行政确认',value:'剩余 1 天',progress:34,owner:'沈听澜'}],
  activities:['林知夏发起华东区费用报销','总经办发布「第三季度经营会议通知」','宋嘉禾提交测试设备采购申请','会议室「云海」预订时间发生冲突','公文 GW-2026-0046 已完成并行会签'],
  roles:[{name:'部门负责人',user:'陈予安',scope:'本部门数据',nav:[0,1,2,3,4,5,6,7],permissions:['create','edit','export','advance']},{name:'普通员工',user:'林知夏',scope:'个人数据',nav:[0,1,2,4,5,6],permissions:['create','edit']},{name:'行政专员',user:'许清和',scope:'全部数据',nav:[0,1,2,3,4,5,6,7],permissions:['create','edit','export','advance']},{name:'系统管理员',user:'唐知微',scope:'全部数据',nav:[0,1,2,3,4,5,6,7,8],permissions:['export']}]
});
