import { defineLoader } from 'vitepress'

export interface Contributor {
  login: string
  avatar_url: string
  html_url: string
  contributions: number
  type: string
}

declare const data: Contributor[]
export { data }

export default defineLoader({
  async load(): Promise<Contributor[]> {
    try {
      console.log('🚀 Fetching contributors from GitHub API...')
      
      let allContributors: Contributor[] = []
      let page = 1
      const perPage = 100
      
      // Fetch all pages of contributors
      while (true) {
        const headers: Record<string, string> = {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'SukiSU-Ultra-Contributors-Website'
        }
        
        // Add GitHub token from environment if available for higher rate limits
        if (process.env.GITHUB_TOKEN) {
          headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`
        }
        
        const response = await fetch(
          `https://api.github.com/repos/sukisu-ultra/sukisu-ultra/contributors?per_page=${perPage}&page=${page}&anon=false`,
          { headers }
        )

        if (!response.ok) {
          console.error(`❌ GitHub API error: ${response.status} ${response.statusText}`)
          
          if (response.status === 403) {
            console.warn('⚠️  Rate limit exceeded. Using cached data or reduced dataset.')
          } else if (response.status === 404) {
            console.warn('⚠️  Repository not found. Check repository name.')
          }
          
          // Return what we have so far instead of empty array
          break
        }

        const contributors = await response.json()
        
        if (!Array.isArray(contributors) || contributors.length === 0) {
          // No more contributors, break the loop
          break
        }

        allContributors.push(...contributors)
        
        // If we got less than perPage, we've reached the end
        if (contributors.length < perPage) {
          break
        }
        
        page++
        console.log(`📄 Fetched page ${page - 1}, total so far: ${allContributors.length}`)
      }

      console.log(`📥 Fetched ${allContributors.length} total contributors from ${page} pages`)

      // Filter out bots and excluded users, then sort by contributions
      const excludedUsers = [
        'dependabot[bot]', 
        'github-actions[bot]',
        'renovate[bot]',
        'greenkeeper[bot]',
        'codecov[bot]',
        'snyk-bot'
      ]
      
      const filteredContributors = allContributors
        .filter(contributor => {
          // More robust filtering
          const isBot = contributor.type === 'Bot' || 
                       contributor.login.includes('[bot]') ||
                       contributor.login.includes('bot]') ||
                       excludedUsers.includes(contributor.login)
          
          return !isBot && contributor.type === 'User' && contributor.contributions > 0
        })
        .sort((a, b) => b.contributions - a.contributions)

      const totalContributions = filteredContributors.reduce((sum, c) => sum + c.contributions, 0)
      
      console.log(`✅ Successfully loaded ${filteredContributors.length} contributors`)
      console.log(`📊 Total contributions: ${totalContributions}`)
      console.log(`🏆 Top contributor: ${filteredContributors[0]?.login} (${filteredContributors[0]?.contributions} contributions)`)
      
      return filteredContributors

    } catch (error) {
      console.error('❌ Error fetching contributors:', error)
      
      // Return empty array to prevent build failure
      return []
    }
  }
})
