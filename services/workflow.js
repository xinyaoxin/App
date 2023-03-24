const API_WORKFLOW = "http://114.98.178.142:8080/api";
// const API_WORKFLOW = "https://demo.jsspisoft.com/api";
const API_OAUTH = "http://114.98.178.142:8080/oauth";
// const API_OAUTH = "https://demo.jsspisoft.com/oauth";



export const authuser = `${API_OAUTH}/user`;
export const toDoTasks = `${API_WORKFLOW}/workflow/process/todoList`;
export const customDetail = `${API_WORKFLOW}/workflow/process/customDetail`;
// export const officeProcessComplete = `${API_WORKFLOW}/workflow/task/complete`;
export const officeGetInfo = `${API_WORKFLOW}/workflow/checkFrom/getInfo`;   // 查看是否有过保存
export const checkFromAdd = `${API_WORKFLOW}/workflow/checkFrom/add`;   // 保存
export const checkFromAEdit = `${API_WORKFLOW}/workflow/checkFrom/edit`;   // 编辑
export const uploadFilePhoto = `${API_WORKFLOW}/filesvr/upload`;  
export const getFilePhoto = `${API_WORKFLOW}/filesvr/read`;   

export const getAlarmList = `${API_WORKFLOW}/eventsvr/alarm/query`;
export const getChildOrg = `${API_WORKFLOW}/devicemgr/SysOrg/getChildOrg`;


export const confirmAlarm = `${API_WORKFLOW}/eventsvr/alarm/confirm`;
export const workorder = `${API_WORKFLOW}/eventsvr/alarm/workorder`;

export const officeProcessComplete = `${API_WORKFLOW}/workflow/task/complete`;   //通过
export const officeProcessReturn = `${API_WORKFLOW}/workflow/task/return`;   //退回
export const officeProcessReturnList = `${API_WORKFLOW}/workflow/task/returnList`;   //退回
export const officeProcessReject = `${API_WORKFLOW}/workflow/task/reject`;   //驳回
export const getUserList = `${API_WORKFLOW}/auth/account/getList`;   

export const officeProcessOwnlist = `${API_WORKFLOW}/workflow/process/ownList`;   
export const officeProcessCopyList = `${API_WORKFLOW}/workflow/process/copyList`;   
export const queryAlarmNotifyByOrgIrn = `${API_WORKFLOW}/eventsvr/config/alarm/notify/queryAlarmNotifyByOrgIrn`;  // 根据机构获取告警配置人员
export const transfer = `${API_WORKFLOW}/workflow/task/transfer`;  // 转办
export const queryKnowledge = `${API_WORKFLOW}/psmsvrex/knowledge/queryKnowledge`;  // 查询知识库接口