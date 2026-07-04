import { getGitHubActivity } from '@/lib/github'
import { GitHubActivityView } from './GitHubActivityView'

// Server component: pulls live public repos (cached) so visitors see I actually
// ship, then hands the data to a client view for translation + rendering.
export async function GitHubActivity() {
  const data = await getGitHubActivity()
  return <GitHubActivityView data={data} />
}
