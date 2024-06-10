import React, { useEffect, useState } from 'react';
import { GithubDiscussionCard } from './GithubDiscussionCard';

function GithubDiscussionsComponent({ discussions }) {
    return (
        <main className="w-auto">
            <div className="container p-8 max-w-[200px]">
                <div className="grid grid-cols-2 gap-6">
                    {discussions.map((discussion) => (
                        <GithubDiscussionCard key={discussion.id} discussion={discussion} />
                    ))}
                </div>
            </div>
        </main>
    );
}

export default GithubDiscussionsComponent;

export const fetchGithubDiscussionCategories = async (owner: string, repo: string) => {
    let res;
    const response = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer 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`,
        },
        body: JSON.stringify({
            query: `
          query {
            repository(owner: "${owner}", name: "${repo}") {
              discussionCategories(first: 8) {
                nodes {
                  id
                  name
                }
              }
            }
          }
        `,
        }),
    });

    const data = await response.json();
    console.log(data)
    res = data.data.repository.discussionCategories.nodes;
    return res;
};

export const getGithubDiscussions = async (owner, repo) => {
    const token = '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';
    const query = `
      query {
        repository(owner: "${owner}", name: "${repo}") {
          discussions(first: 8, orderBy: {field: CREATED_AT, direction: DESC}) {
            nodes {
              id
              title
              url
              author {
                login
              }
              createdAt
              answerChosenAt
              comments {
                totalCount
              }
              reactions {
                totalCount
              }
            }
          }
        }
      }
    `;

    const response = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ query }),
    });

    const data = await response.json();
    return data.data.repository.discussions.nodes;
};

export const getGithubDiscussionsNew = async (owner: string, repo: string) => {
    const categories = await fetchGithubDiscussionCategoriesNew(owner, repo);
    const allDiscussions = await fetchGithubDiscussions(owner, repo);
    const discussionsByCategory = categories.map((category) =>
        allDiscussions.filter((discussion) => discussion.category.id === category.id)
    );

    return { categories, discussionsByCategory };
};

const fetchGithubDiscussionCategoriesNew = async (owner: string, repo: string) => {
    let res;
    const response = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer YOUR_GITHUB_PERSONAL_ACCESS_TOKEN`,
        },
        body: JSON.stringify({
            query: `
          query {
            repository(owner: "${owner}", name: "${repo}") {
              discussionCategories(first: 10) {
                nodes {
                  id
                  name
                  slug
                }
              }
            }
          }
        `,
        }),
    });

    const data = await response.json();
    res = data.data.repository.discussionCategories.nodes;
    return res;
};

const fetchGithubDiscussions = async (owner: string, repo: string) => {
    let res;
    const response = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer YOUR_GITHUB_PERSONAL_ACCESS_TOKEN`,
        },
        body: JSON.stringify({
            query: `
          query {
            repository(owner: "${owner}", name: "${repo}") {
              discussions(first: 100, orderBy: {field: CREATED_AT, direction: DESC}) {
                nodes {
                  id
                  title
                  url
                  author {
                    login
                  }
                  createdAt
                  answerChosenAt
                  comments {
                    totalCount
                  }
                  reactions {
                    totalCount
                  }
                  category {
                    id
                  }
                }
              }
            }
          }
        `,
        }),
    });

    const data = await response.json();
    res = data.data.repository.discussions.nodes;
    return res;
};