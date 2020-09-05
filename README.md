# ToDo List
A Todo list app built with Node.js, Express and MySQL 

![image](https://github.com/ShinTingTsai/todo-sequelize/blob/master/images/Snapshot_login.png)

![image]https://github.com/ShinTingTsai/todo-sequelize/blob/master/images/Snapshot_list.png

![image]https://github.com/ShinTingTsai/todo-sequelize/blob/master/images/Snapshot_detail.png

![image]https://github.com/ShinTingTsai/todo-sequelize/blob/master/images/Snapshot_logout.png

## Features (功能)
- CURD of a Todo 
- Login with email or Facebook account

## Setup steps (安裝與執行步驟)
- Clone repository (下載專案到本機)
```
git clone https://github.com/ShinTingTsai/todo-sequelize.git
cd todo-sequelize
```
- Installation (安裝套件)
```
npm install
```
- Modify your .env file
```
修改.env.example檔案內容：FACEBOOK_ID、FACEBOOK_SECRET等欄位需輸入自己的資訊
修改.env.example檔案名稱為.env
```
- Build seed data (建立種子資料)
```
npx sequelize db:seed:all
```
- Execute (開啟程式)
```
npm run dev
```
- Browse the service on http://localhost:3000

##  Test Account (測試帳號)
- email: root@example.com
- password: 12345678

## Requirement (環境建置與需求)
- bcryptjs: 2.4.3
- body-parser: 1.19.0
- connect-flash: 0.1.1
- dotenv: 8.2.0
- express v4.17.1
- express-handlebars: 5.1.0
- express-session: 1.17.1
- method-override: 3.0.0
- mysql2: 2.1.0
- Node.js v10.15.0
- passport: 0.4.1
- passport-facebook: 3.0.0
- passport-local: 1.0.0
- sequelize: 6.3.5
- sequelize-cli: 6.2.0

## Developer (開發人員)
Shin-Ting Tsai

  