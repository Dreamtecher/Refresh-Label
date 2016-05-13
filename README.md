# Refresh-Label

  <p>项目中要求实现自动刷新chrome浏览器中SVG图形中的标签，
  由于真正的服务还没能开启，所以自己根据html页面中SVG标签的ID生成JSON文件作为模拟数据源
  生成JSON文件的方式如下：</p>
  
  生成可执行文件: <br />
  <b>gcc data2Json.c -o data2Json   </b>
  
  index.html页面是要为其模拟数据源的HTML页面，data.json文件为生成的json格式数据源。<br />此过程可多次重复，生成多个json数据源文件:</br>
  <b>sh select.sh index.html | ./data2Json > data.json         </b>
  
  接着启动node.js服务：<br />
  <b>node server.js</b>
  此时node服务器开始提供刷新标签服务<br />
  
  任何含有SVG图形的HTML页面均可采用此方法模拟动态刷新标签。
  另外，在HTML页面的</body>元素前面需要添加：<br />
  <b>\<script src="https://cdn.socket.io/socket.io-1.2.0.js"></script></b><br />
  <b>\<script src="main.js"></script></b>
  
  
  
