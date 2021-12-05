import fs from 'fs'
import { join } from 'path'
import shell from 'shelljs'
import { URL } from 'url'

const boilerplatesFiles = {
  'empty-webpack': [
    'src', 'package.json', 'webpack.config.js', '.babelrc',
  ]
}

export const getPackageJSON = () => {
  let rawData = fs.readFileSync(join(projectDir, 'package.json'))

  return JSON.parse(rawData)
}

export const cpBoilerplate = (boilerplate, cwd, projectName) => {
  const files = boilerplatesFiles[boilerplate]

  shell.mkdir(join(cwd, projectName))

  for (let i = 0; i < files.length; i++) {
    shell.cp(
      '-R',
      join(projectDir, 'boilerplates', boilerplate, files[i]),
      join(cwd, projectName, files[i])
    )
  }
  
}

export const projectDir = join(new URL('.', import.meta.url).pathname, '../')

export default {
  getPackageJSON,
  projectDir,
  cpBoilerplate,
}
