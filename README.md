## 安装依赖

```
yarn
```

## 运行 TS 代码

```
node -r ts-node/register xxx.ts
```

## 运行 JS 代码

```
node xxx.js
```

## 知识点
### AST 相关
```
parse: 把代码 code 变成 AST
traverse: 遍历 AST 进行修改
generate: 把 AST 变成代码 code2
```
### 工具
```
babel 可以把高级代码翻译为 ES5
@babel/parser
@babel/traverse
@babel/generator
@babel/core 包含前三者
@babel/preset-env 内置很多规则
```
### 代码技巧
```
使用哈希表来存储数据
通过检测 key 来避免重复
循环依赖
有的循环依赖可以正常执行
有的循环依赖不可以
但都可以做静态分析(静态分析不需要执行)
```