// Task Type Icons
import ICON_S3 from "../images/icon-s3.png";
// import ICON_ECR from "../images/icon-ecr.png";
// import ICON_DYDB from "../images/icon-dydb.png";
// import ICON_MONGO from "../images/icon-mongo.png";
// import ICON_MYSQL from "../images/icon-mysql.png";



import STATUS_PENDING from "../images/icon-status-pending.svg";
import STATUS_PROGRESS from "../images/icon-status-progress.svg";
import STATUS_ERROR from "../images/icon-status-error.svg";
import STATUS_DONE from "../images/icon-status-done.svg";

// Task Tyep Enum
export enum EnumTaskType {
  S3 = "S3",
  DynamoDB = "DynamoDB",
  ECR = "ECR",
  MongoDB = "MongoDB",
  MySQL = "MySQL",
}

// Task List
export const TYPE_LIST = [
  {
    id: 1,
    name: "Amazon S3",
    value: EnumTaskType.S3,
    imageSrc: ICON_S3,
    disabled: false,
  },
  // {
  //   id: 2,
  //   name: "Amazon Dynamo DB",
  //   value: EnumTaskType.DynamoDB,
  //   imageSrc: ICON_DYDB,
  //   disabled: true,
  // },
  // {
  //   id: 3,
  //   name: "ECR Images",
  //   value: EnumTaskType.ECR,
  //   imageSrc: ICON_ECR,
  //   disabled: true,
  // },
  // {
  //   id: 4,
  //   name: "Mongo DB",
  //   value: EnumTaskType.MongoDB,
  //   imageSrc: ICON_MONGO,
  //   disabled: true,
  // },
  // {
  //   id: 5,
  //   name: "MySQL",
  //   value: EnumTaskType.MySQL,
  //   imageSrc: ICON_MYSQL,
  //   disabled: true,
  // },
];

// Task Tyep Enum
export enum EnumSourceType {
  S3 = "S3",
  Qiniu = "Qiniu",
  AliOSS = "AliOSS",
  TencentCOS = "TencentCOS",
}

export enum EnumTaskStatus {
  STARTING = "STARTING",
  STOPPING = "STOPPING",
  ERROR = "ERROR",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE",
  STOPPED = "STOPPED",
}

export const TASK_STATUS_MAP:any =  {
  STARTING: { name: "Starting", src: STATUS_PENDING, class: "gray" },
  STOPPING: { name: "Stopping", src: STATUS_PENDING, class: "gray" },
  ERROR: { name: "Error", src: STATUS_ERROR, class: "error" },
  IN_PROGRESS: { name: "In Progress", src: STATUS_PROGRESS, class: "gray" },
  DONE: { name: "Done", src: STATUS_DONE, class: "success" },
  STOPPED: { name: "Starting", src: STATUS_PENDING, class: "gray" },
};


// Task List
export const SOURCE_TYPE = [
  {
    id: 1,
    name: "Amazon S3",
    value: EnumSourceType.S3,
    desc: "Amazon S3 replication between AWS partitions.",
  },
  {
    id: 2,
    name: "Aliyun OSS",
    value: EnumSourceType.AliOSS,
    desc: "Migration Aliyun OSS objects into Amazon S3.",
  },
  {
    id: 3,
    name: "Qiniu Kodo",
    value: EnumSourceType.Qiniu,
    desc: "Migration Qiniu Kodo objects into Amazon S3.",
  },
  {
    id: 4,
    name: "Tencent COS",
    value: EnumSourceType.TencentCOS,
    desc: "Migration Tencent COS objects into Amazon S3.",
  },
];