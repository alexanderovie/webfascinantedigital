/**
 * Formats category tags for display with proper capitalization
 * Handles acronyms like SEO, PPC, API, etc.
 */
export const formatCategory = (tag: string): string => {
  const acronyms = [
    'seo', 'ppc', 'api', 'ui', 'ux', 'crm', 'cms', 'sdk', 'sso', 
    'cdn', 'ssl', 'tls', 'http', 'https', 'url', 'uri', 'json', 
    'xml', 'html', 'css', 'js', 'ts', 'jsx', 'tsx', 'dom', 'bom',
    'rss', 'atom', 'pdf', 'csv', 'xml', 'yaml', 'yml', 'sql',
    'nosql', 'rest', 'graphql', 'jwt', 'oauth', 'saml', 'ldap',
    'ftp', 'sftp', 'ssh', 'tcp', 'udp', 'ip', 'dns', 'dhcp',
    'vpn', 'lan', 'wan', 'wifi', 'bluetooth', 'nfc', 'rfid',
    'gps', 'gis', 'crm', 'erp', 'scm', 'hrms', 'lms', 'cms',
    'dms', 'bpm', 'bi', 'etl', 'elt', 'olap', 'oltp', 'nosql',
    'sql', 'mysql', 'postgresql', 'mongodb', 'redis', 'elasticsearch',
    'kibana', 'logstash', 'beats', 'docker', 'kubernetes', 'jenkins',
    'git', 'svn', 'mercurial', 'github', 'gitlab', 'bitbucket',
    'jira', 'confluence', 'slack', 'teams', 'zoom', 'skype',
    'aws', 'azure', 'gcp', 'heroku', 'vercel', 'netlify',
    'cloudflare', 'fastly', 'akamai', 'maxcdn', 'keycdn'
  ];

  return tag
    .split('-')
    .map(word => {
      const lowerWord = word.toLowerCase();
      if (acronyms.includes(lowerWord)) {
        return word.toUpperCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
};

export default formatCategory;
