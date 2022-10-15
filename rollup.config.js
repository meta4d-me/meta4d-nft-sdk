import path from "path";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
// import nodePolyfills from "rollup-plugin-polyfill-node";
import typescript from "rollup-plugin-typescript2";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { uglify } from "rollup-plugin-uglify";
import serve from "rollup-plugin-serve";
import builtins from "rollup-plugin-node-builtins";
import globals from "rollup-plugin-node-globals";

export default [
  {
    input: "src/index.ts",
    output: {
      file: path.resolve(__dirname, "dist/m4m-web3-bundle.umd.js"),
      format: "umd",
      sourcemap: process.env.NODE_ENV !== "production",
      name: "M4M",
    },
    onwarn: function (warning) {
      if (warning.code === "THIS_IS_UNDEFINED") {
        return;
      }
      console.error(warning.message);
    },
    plugins: [
      babel({
        babelHelpers: "runtime",
        exclude: "node_modules/**",
        presets: ["@babel/preset-env"],
      }),

      // nodePolyfills(/* options */),

      commonjs({
        include: "node_modules/**",
        extensions: [".js", ".coffee"],
        ignoreGlobal: false,
        ignore: ["conditional-runtime-dependency"],
        sourceMap: process.env.NODE_ENV !== "production",
        transformMixedEsModules: true,
      }),

      nodeResolve({
        extensions: [".js", ".ts"],
        browser: true,
        preferBuiltins: false,
      }),

      globals(),
      builtins(),

      json(),

      typescript({
        tsconfig: path.resolve(__dirname, "tsconfig.json"),
      }),

      process.env.NODE_ENV === "production" && uglify(),

      process.env.NODE_ENV !== "production" &&
        serve({
          port: 3000,
          contentBase: "",
          openPage: "/example/index.html",
          open: false,
        }),
    ],
  },
  {
    input: "src/server.ts",
    output: {
      file: path.resolve(__dirname, "dist/m4m-web3-server.cjs.js"),
      format: "cjs",
    },
    plugins: [
      babel({
        babelHelpers: "runtime",
        exclude: "node_modules/**",
        presets: ["@babel/preset-env"],
      }),
      commonjs({
        include: "node_modules/**",
        extensions: [".js", ".coffee"],
        ignoreGlobal: false,
        ignore: ["conditional-runtime-dependency"],
        sourceMap: process.env.NODE_ENV !== "production",
        transformMixedEsModules: true,
      }),

      typescript({
        tsconfig: path.resolve(__dirname, "tsconfig.json"),
      }),
    ],
  },
];
