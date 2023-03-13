import alias from "@rollup/plugin-alias";
import resolve from "@rollup/plugin-node-resolve";

const projectRootDir = path.resolve(__dirname);

const customResolver = resolve({
  extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx", ".json", ".sass", ".scss"],
});

module.exports = {
  input: "src/index.js",
  output: {
    dir: "output",
    format: "cjs",
  },
  plugins: [
    alias({
      entries: [
        { find: "src", replacement: path.resolve(projectRootDir, "src") },
        {
          find: "components",
          replacement: path.resolve(projectRootDir, "src/components"),
        },
        {
          find: "styles",
          replacement: path.resolve(projectRootDir, "src/styles"),
        },
        {
          find: "api",
          replacement: path.resolve(projectRootDir, "src/api"),
        },
        {
          find: "store",
          replacement: path.resolve(projectRootDir, "src/store"),
        },
      ],
      customResolver,
    }),
    resolve(),
  ],
};
