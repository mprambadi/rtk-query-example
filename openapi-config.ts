import type { ConfigFile } from '@rtk-query/codegen-openapi'

const config: ConfigFile = {
  schemaFile: 'https://raw.githubusercontent.com/typicode/jsonplaceholder/31e6581ba012d27fd480b052b44001d09e21fdfa/public/swagger.json',
  apiFile: './src/store/emptyApi.ts',
  apiImport: 'emptySplitApi',
  outputFile: './src/store/jsonPlaceholderApi.ts',
  exportName: 'jsonPlaceholderApi',
  hooks: true,
  
}

export default config