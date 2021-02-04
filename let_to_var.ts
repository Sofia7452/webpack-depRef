import { parse } from "@babel/parser"
import traverse from "@babel/traverse"
import generate from "@babel/generator"

const code = `let a = 'let'; let b = 2`
const ast = parse(code, { sourceType: 'module' })
traverse(ast, {
  enter: item => {
    if (item.node.type === 'VariableDeclaration') {
      if (item.node.kind === 'let') {
        item.node.kind = 'var'
      }
    }
  }
})
const result = generate(ast, {}, code)
console.log(result.code)
// babel 的原理
// parse: 把代码 code 变成 AST
// traverse: 遍历 AST 进行修改
// generate: 把 AST 变成代码 code2

// node -r ts-node/register let_to_var.ts
// 如果你想用 Chrome 查看 AST，可以添加 --inspect-brk 选项，
// 即 node -r ts-node/register --inspect-brk let_to_var.ts