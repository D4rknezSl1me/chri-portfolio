// Live public GitHub activity. Fetched server-side and cached for an hour so
// the section stays fresh without hammering the API. Any failure returns null
// and the UI degrades to a plain "find me on GitHub" link — never a broken box.

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
  fork: boolean
  archived: boolean
}

const headers = { Accept: 'application/vnd.github+json', 'User-Agent': 'chri-portfolio' }

export async function getGitHubActivity(): Promise<GitHubActivity> {
  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${USER}`, { headers, next: { revalidate: 3600 } }),
      fetch(`https://api.github.com/users/${USER}/repos?sort=pushed&per_page=100`, {
        headers,
        next: { revalidate: 3600 },
      }),
    ])
    if (!userRes.ok || !reposRes.ok) return null

    const user = (await userRes.json()) as GhUser
    const raw = (await reposRes.json()) as GhRepo[]

    const repos: Repo[] = raw
      .filter((r) => !r.fork && !r.archived)
      .slice(0, 4)
      .map((r) => ({
        name: r.name,
        description: r.description,
        language: r.language,
        url: r.html_url,
        stars: r.stargazers_count,
        updatedAt: r.pushed_at,
      }))

    return { publicRepos: user.public_repos, followers: user.followers, repos }
  } catch {
    return null
  }
}
