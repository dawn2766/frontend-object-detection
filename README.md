# Object Detection App

这是一个基于TensorFlow.js的前端目标检测应用程序，使用COCO-SSD模型实时检测摄像头画面中的物体，并在画面上绘制矩形框和类别标签。

## 项目结构

```
frontend-object-detection
├── index.html        # 应用程序的主HTML文件
├── app.js            # 主要JavaScript文件，负责目标检测逻辑
├── styles.css        # 应用程序的样式文件
├── utils
│   └── camera.js     # 与摄像头相关的功能
├── package.json          # npm配置文件
└── README.md             # 项目文档
```

## 安装和运行

1. 克隆该项目到本地：
   ```
   git clone https://github.com/dawn2766/frontend-object-detection.git
   ```

2. 进入项目目录：
   ```
   cd ofrontend-object-detection
   ```

3. 安装依赖：
   ```
   npm install
   ```

4. 启动应用程序：
   ```
   npm start
   ```

5. 在浏览器中打开 `http://localhost:8080` 查看应用程序。

## 使用说明

- 允许浏览器访问摄像头。
- 应用程序将自动加载摄像头视频流，并进行实时目标检测。
- 检测到的物体将以矩形框的形式标记，并显示相应的类别标签。

## 依赖项

- TensorFlow.js
- COCO-SSD模型

## 贡献

欢迎任何形式的贡献！请提交问题或拉取请求。

## 许可证

该项目采用MIT许可证，详细信息请查看LICENSE文件。