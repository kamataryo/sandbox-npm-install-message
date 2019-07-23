const chalk = require('chalk')
const LABEL = chalk.blue('INFO')

const messages = {
  pre: `[${LABEL}] The pre insatall script is running.`,
  post: `[${LABEL}] The post insatall script is running.`,
  default: `[${LABEL}] The insatall script is running.`
}

process.stdout.write(messages[process.argv[2]] || messages.default)
