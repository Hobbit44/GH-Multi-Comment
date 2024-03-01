import github from '@actions/github';
import core from '@actions/core';

async function main() {
    const token = core.getInput('token');
    const context = github.context;

    const octokit = github.getOctokit(token)

    const prComments = octokit.rest.pulls.listReviewComments({
      ...context.repo,
      pull_number: context.payload.pull_request.number,
    });

    console.log(prComments);
}

main();
