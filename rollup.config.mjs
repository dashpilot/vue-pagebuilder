import serve from "rollup-plugin-serve";

export default {
  input: "main.mjs",
  output: {
    file: "build/bundle.mjs",
    format: "es",
  },
  plugins: [
    serve({
      open: true, // opens browser
      verbose: true, // logs server activity to console
      contentBase: ["", "build"], // serve from root and build directories
      host: "localhost",
      port: 8000,
    }),
  ],
};
