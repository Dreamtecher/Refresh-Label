# Refresh-Label

  项目中要求实现自动刷新chrome浏览器中SVG图形中的标签，
  由于真正的服务还没能开启，所以自己根据html页面中SVG标签的ID生成JSON文件作为模拟数据源
  生成JSON文件的方式如下：
  
  生成可执行文件: <br />
  <b>gcc data2Json.c -o data2Json   </b><br />
  
  生成json数据源文件:</br>
  <b>sh select.sh index.html | ./data2Json > jsonData/data.json         </b><br />
  其中index.html页面是要为其模拟数据源的HTML页面，jsonData为存放json文件的文件夹。<br />
  data.json文件为生成的json格式数据源。select.sh中grep的选择规则可以根据实际情况更改。<br />
  此过程可多次重复，以便生成多个json格式的文件。<br />
  
  接着启动node.js服务：<br />
  <b>node server.js</b><br />
  此时node服务器开始提供刷新标签服务，服务端口3000<br />
  
  任何含有SVG图形的HTML页面均可采用此方法模拟动态刷新标签。
  另外，在HTML页面的</body>元素前面需要添加：<br />
  <b>\<script src="https://cdn.socket.io/socket.io-1.2.0.js"></script></b><br />
  <b>\<script src="main.js"></script></b><br />
  
  最后，使用命令：<br />
  <b>python -m SimpleHTTPServer 8888</b><br />
  来开启本机的http服务，端口号为8888。<br />
  
  访问<b>localhost:8888</b>即可看到页面刷新。
  
  
