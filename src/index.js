import github from '@actions/github';
import core from '@actions/core';

async function main() {
    const token = core.getInput('token');
    const context = github.context;

    const octokit = github.getOctokit(token)

    const { data: pullRequest } = await octokit.rest.pulls.get({
      ...context.repo,
    });
    octokit.rest.pulls.listReviewComments({
      owner,
      repo,
      pull_number,
    });

    console.log(pullRequest);
}

main();
