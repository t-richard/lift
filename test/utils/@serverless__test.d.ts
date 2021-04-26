declare module "@serverless/test/run-serverless" {
    import type { AWS } from "@serverless/typescript";

    type RunServerlessBaseOptions = Partial<{
        cliArgs: string[];
        configExt: Partial<AWS> | Record<string, unknown>;
        env: Record<string, string>;
        awsRequestStubMap: unknwon;
    }>;

    type RunServerlessFixtureOption = {
        fixture: string;
    };
    type RunServerlessCWDOption = {
        cwd: string;
    };
    type RunServerlessConfigOption = {
        config: AWS;
    };
    type RunServerlessNoServiceOption = {
        noService: boolean;
    };

    type RunServerlessOptions = RunServerlessBaseOptions &
        (
            | RunServerlessFixtureOption
            | RunServerlessCWDOption
            | RunServerlessConfigOption
            | RunServerlessNoServiceOption
        );

    type RunServerlessReturn = {
        serverless: Record<string, unknown>;
        stdoutData: string;
        cfTemplate: {
            Resources: Record<string, unknown>;
            Outputs: Record<string, unknown>;
        };
        awsNaming: unknown;
    };

    function runServerless(options: RunServerlessOptions): Promise<RunServerlessReturn>;

    export = runServerless;
}

declare module "@serverless/test/setup-run-serverless-fixtures-engine" {
    import runServerless from "@serverless/test/run-serverless";

    type SetupRunServerlessFixturesEngineOptions = {
        fixturesDir: string;
        serverlessDir: string;
    };

    function setupRunServerlessFixturesEngine(options: SetupRunServerlessFixturesEngineOptions): typeof runServerless;

    export = setupRunServerlessFixturesEngine;
}
