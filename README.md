- npm run dev运行
- 主要依靠diff算法进行重渲染
- rem和媒体查询共同使用，自适应h5和pc(但是我做出来的效果不太好..大概是我对高度不太有概念...字体fontsize在部分屏幕下会超过高度,我只能把一部分height去掉了...)
- 移动端300ms延迟，用Meta标签上禁止缩放解决的...(比较Low的做法)
- 所以主要是思考v-dom和diff去了...
