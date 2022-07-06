import type { ConfigFile } from '@rtk-query/codegen-openapi'

const config: ConfigFile = {
  schemaFile: 'https://dn9qobbfc75i5.cloudfront.net/file/data/i2hgz7fy4xbvbg55oob2/PHID-FILE-luqk77ehi32yqi4cjv5z/swagger.yml',
  apiFile: './src/store/emptyApi.ts',
  apiImport: 'emptySplitApi',
  outputFile: './src/store/userApi.ts',
  exportName: 'petApi',
  hooks: true,
  
}

export default config