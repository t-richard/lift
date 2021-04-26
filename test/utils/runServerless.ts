import path from "path";
import setupRunServerlessFixturesEngine from "@serverless/test/setup-run-serverless-fixtures-engine";
import type { AWS } from "@serverless/typescript";

export const runServerless = setupRunServerlessFixturesEngine({
    fixturesDir: path.resolve(__dirname, "../fixtures"),
    serverlessDir: path.resolve(__dirname, "../../node_modules/serverless"),
});

export const pluginConfigExt = {
    plugins: [path.join(process.cwd(), "src/plugin.ts")],
};

export const baseConfig: AWS = {
    service: "app",
    provider: {
        name: "aws",
    },
    plugins: [path.join(process.cwd(), "src/plugin.ts")],
};
