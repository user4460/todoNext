//defineConfigとは、cypressの設定ファイルを定義するための関数
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'uvba4u',
  
  e2e: {
    baseUrl: 'http://localhost:3000'

  }
})
