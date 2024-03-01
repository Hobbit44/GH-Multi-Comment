var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define("index", ["require", "exports", "@actions/github", "@actions/core"], function (require, exports, github_1, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    github_1 = __importDefault(github_1);
    core_1 = __importDefault(core_1);
    async function main() {
        const token = core_1.default.getInput('token');
        const context = github_1.default.context;
        const octokit = github_1.default.getOctokit(token);
        const prComments = octokit.rest.pulls.listReviewComments({
            ...context.repo,
            pull_number: context.payload.pull_request.number,
        });
        console.log(prComments);
    }
    main();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7SUFHQSxLQUFLLFVBQVUsSUFBSTtRQUNmLE1BQU0sS0FBSyxHQUFHLGNBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckMsTUFBTSxPQUFPLEdBQUcsZ0JBQU0sQ0FBQyxPQUFPLENBQUM7UUFFL0IsTUFBTSxPQUFPLEdBQUcsZ0JBQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUE7UUFFeEMsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUM7WUFDdkQsR0FBRyxPQUFPLENBQUMsSUFBSTtZQUNmLFdBQVcsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxNQUFNO1NBQ2pELENBQUMsQ0FBQztRQUVILE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELElBQUksRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdpdGh1YiBmcm9tICdAYWN0aW9ucy9naXRodWInO1xuaW1wb3J0IGNvcmUgZnJvbSAnQGFjdGlvbnMvY29yZSc7XG5cbmFzeW5jIGZ1bmN0aW9uIG1haW4oKSB7XG4gICAgY29uc3QgdG9rZW4gPSBjb3JlLmdldElucHV0KCd0b2tlbicpO1xuICAgIGNvbnN0IGNvbnRleHQgPSBnaXRodWIuY29udGV4dDtcblxuICAgIGNvbnN0IG9jdG9raXQgPSBnaXRodWIuZ2V0T2N0b2tpdCh0b2tlbilcblxuICAgIGNvbnN0IHByQ29tbWVudHMgPSBvY3Rva2l0LnJlc3QucHVsbHMubGlzdFJldmlld0NvbW1lbnRzKHtcbiAgICAgIC4uLmNvbnRleHQucmVwbyxcbiAgICAgIHB1bGxfbnVtYmVyOiBjb250ZXh0LnBheWxvYWQucHVsbF9yZXF1ZXN0Lm51bWJlcixcbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKHByQ29tbWVudHMpO1xufVxuXG5tYWluKCk7XG4iXX0=
