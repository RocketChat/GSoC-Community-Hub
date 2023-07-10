import GithubDiscussionsComponent, { fetchGithubDiscussionCategories, getGithubDiscussions } from '@rc4-githubdiscussions/GithubDiscussionsComponent';


export default async function Home() {
  const discussions = await getGithubDiscussions("RocketChat", "fuselage");
  const discussions1 = await getGithubDiscussions("postmanlabs", "postman-flows");

  return (
    <>
      <GithubDiscussionsComponent discussions={discussions} />
      <GithubDiscussionsComponent discussions={discussions1} />
    </>
  );
}