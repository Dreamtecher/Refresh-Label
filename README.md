# Refresh-Label

  <p>项目中实现自动刷新web页面标签，服务端文件夹为Server。
  由于真正的服务还没能开启，所以自己根据html页面中SVG标签的ID生成JSON文件作为模拟数据源
  生成JSON文件的方式如下：</p>
  
  生成可执行文件: <br />
  gcc data2Json.c -o data2Json   
  
  index.html为要为其模拟数据源的HTML页面，data.json文件为生成的json格式数据源。<br />此过程可多次重复，生成多个json数据源文件:</br>
  sh select.sh index.html | ./data2Json > data.json         
