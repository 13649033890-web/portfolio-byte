# 八秒土豆丝个人网站 - Assets 目录

## 目录说明

此目录用于存放网站所需的图片、音频等资源文件。

## 推荐文件结构

```
assets/
├── avatar.jpg              # 首页头像（建议尺寸 400x400 像素以上）
├── album-placeholder.jpg    # 音乐播放器默认封面（建议尺寸 400x400 像素）
├── qr-wechat.png           # 微信二维码图片
├── qr-qq.png               # QQ 二维码图片
├── resume.pdf              # 个人简历 PDF 文件
└── music/                  # 音乐文件目录
    ├── song1.mp3
    ├── song2.mp3
    └── ...
```

## 文件用途说明

### 头像图片 (avatar.jpg)
- 用于首页右侧头像展示区
- 建议使用清晰的个人照片
- 推荐尺寸：400x400 像素或更高
- 支持格式：JPG、PNG、WebP

### 专辑封面 (album-placeholder.jpg)
- 音乐播放器默认封面图
- 推荐尺寸：400x400 像素（正方形）
- 支持格式：JPG、PNG、WebP

### 二维码图片
- qr-wechat.png：微信个人二维码
- qr-qq.png：QQ 二维码
- 推荐尺寸：200x200 像素以上，确保清晰可扫描
- 支持格式：PNG（推荐透明背景）

### 简历文件 (resume.pdf)
- 供访客下载的个人简历
- 建议使用 PDF 格式以确保兼容性

### 音乐文件 (music/)
- 存放网站背景音乐或展示用音频
- 支持格式：MP3、WAV、OGG
- 建议在 main.js 的 playlistData 中配置对应的歌曲信息

## 使用提示

1. **头像加载**：将头像图片放入此目录并命名为 avatar.jpg，网站会自动加载显示
2. **二维码**：配置好二维码图片后，点击 Contact 页面的微信/QQ 卡片即可展示
3. **音乐**：如需启用真实音乐播放，需将音频文件放入 music 目录并在 playlistData 中配置 audioSrc 路径
4. **背景图**：网站使用 Unsplash 在线图片作为背景，如需替换为本地图片，请修改 css/style.css 中的 background-image 属性

## 图片压缩建议

为提升网站加载速度，建议对图片进行适当压缩：
- 头像：压缩至 100KB 以内
- 专辑封面：压缩至 50KB 以内
- 二维码：压缩至 30KB 以内

可以使用 TinyPNG、ImageOptim 等工具进行压缩。
