import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import serve from "rollup-plugin-serve";
import ts from "rollup-plugin-typescript2";
import { uglify } from "rollup-plugin-uglify";
import path from "path";

export default {
  input: "src/index.ts",
  output: {
    file: path.resolve(__dirname, "dist/bundle.js"), // global: 弄个全局变量来接收 // cjs: module.exports // esm: export default // iife: ()() // umd: 兼容 amd + commonjs 不支持es6导入
    format: "umd",
    sourcemap: process.env.NODE_ENV !== "production", // ts中的sourcemap也得变为true
    name: "M4M",
  },
  plugins: [
    // 这个插件是有执行顺序的
    babel({
      babelHelpers: "runtime",

      exclude: "node_modules/**",

      presets: ["@babel/preset-env"],
    }),
    nodeResolve({
      extensions: [".js", ".ts"],
      browser: true,
    }),

    commonjs({
      // non-CommonJS modules will be ignored, but you can also
      // specifically include/exclude files
      include: "node_modules/**", // Default: undefined
      //   exclude: ["node_modules/foo/**", "node_modules/bar/**"], // Default: undefined
      // these values can also be regular expressions
      // include: /node_modules/

      // search for files other than .js files (must already
      // be transpiled by a previous plugin!)
      extensions: [".js", ".coffee"], // Default: [ '.js' ]

      // if true then uses of `global` won't be dealt with by this plugin
      ignoreGlobal: false, // Default: false

      // if false then skip sourceMap generation for CommonJS modules
      sourceMap: false, // Default: true

      // // explicitly specify unresolvable named exports
      // // (see below for more details)
      // namedExports: { react: ["createElement", "Component"] }, // Default: undefined

      // sometimes you have to leave require statements
      // unconverted. Pass an array containing the IDs
      // or a `id => boolean` function. Only use this
      // option if you know what you're doing!
      ignore: ["conditional-runtime-dependency"],
    }),
    json(),
    ts({
      tsconfig: path.resolve(__dirname, "tsconfig.json"),
    }),
    process.env.NODE_ENV === "production" && uglify(),
    serve({
      port: 3000,
      contentBase: "", // 表示起的服务是在根目录下
      openPage: "/example/index.html", // 打开的是哪个文件
      open: true, // 默认打开浏览器
    }),
  ],
};
