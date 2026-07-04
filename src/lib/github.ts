// Live GitHub showcase. Instead of "recently pushed" (which surfaces throwaway
// repos), this fetches a hand-picked allow-list — see src/lib/featured.ts — so
// only the repos you choose appear. Cached for an hour; any failure degrades to
// a plain "find me on GitHub" link, never a broken box.

import { featuredRepos } from './featured'

const USER = 'D4rknezSl1me'

export type Repo = {
  name: string
  description: string | null
  language: string | null
  url: string
  stars: number
  updatedAt: string
}

export type GitHubActivity = {
  publicRepos: number
  followers: number
  repos: Repo[]
} | null

type GhUser = { public_repos: number; followers: number }
type GhRepo = {
  name: string
  description: string | null
  language: string | null
  html_url: string
  stargazers_count: number
  pushed_at: string
}

const headers = { Accept: 'application/vnd.github+json', 'User-Agent': 'chri-portfolio' }
const opts = { headers, next: { revalidate: 3600 } } as const

export async function getGitHubActivity(): Promise<GitHubActivity> {
  try {
    const userRes = await fetch(`https://api.github.com/users/${USER}`, opts)
    if (!userRes.ok) return null
    const user = (await userRes.json()) as GhUser

    // Fetch each featured repo's live metadata; drop any that no longer exist.
    const settled = await Promise.all(
      featuredRepos.map(async (name) => {
        const res = await fetch(`https://api.github.com/repos/${USER}/${name}`, opts)
        if (!res.ok) return null
        const r = (await res.json()) as GhRepo
        return {
          name: r.name,
          description: r.description,
          language: r.language,
          url: r.html_url,
          stars: r.stargazers_count,
          updatedAt: r.pushed_at,
        } satisfies Repo
      }),
    )
    const repos = settled.filter((r): r is Repo => r !== null)

    return { publicRepos: user.public_repos, followers: user.followers, repos }
  } catch {
    return null
  }
}
