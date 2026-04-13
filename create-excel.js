const XLSX = require('xlsx');

// 创建工作簿
const wb = XLSX.utils.book_new();

// 创建工作表数据
const data = [
  ["姓名", "年龄", "性别"],
  ["张三", 25, "男"],
  ["李四", 30, "女"]
];

// 创建工作表
const ws = XLSX.utils.aoa_to_sheet(data);

// 将工作表添加到工作簿
XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

// 写入文件
XLSX.writeFile(wb, "test-excel.xlsx");

console.log("Excel文件创建成功！");