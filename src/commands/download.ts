import {Args, Command, ux} from '@oclif/core'
import * as fs from 'node:fs'
import * as os from 'node:os'
import * as path from 'node:path'
import * as http from 'node:http'
import * as unzipper from 'unzipper'

export default class Download extends Command {
  static description = 'Downloads problem .in and .out files from usaco.org'

  static examples = [
    '<%= config.bin %> <%= command.id %> 2015-2016 December Bronze 1',
  ]

  static args = {
    season: Args.string({name: 'season', required: true, description: 'The season of the problem (e.g., 2015-2016)'}),
    month: Args.string({name: 'month', required: true, description: 'The month of the problem (e.g., dec)'}),
    division: Args.string({name: 'division', required: true, description: 'The division of the problem (e.g., bronze)'}),
    problem: Args.integer({name: 'problem', required: true, description: 'The number of the problem (e.g., problem 1)'}),
  }

  public async run(): Promise<void> {
    const {args} = await this.parse(Download)

    const jsonString = fs.readFileSync('usaco.json', 'utf-8')
    const jsonData = JSON.parse(jsonString)
    const url = 'http://usaco.org/' + jsonData[args.season][args.month][args.division][args.problem - 1]

    const tempDir = os.tmpdir()
    const tempFilePath = path.join(tempDir, 'testData.zip')

    http.get(url, res => {
      ux.action.start('Downloading test data from online...')
      res.pipe(fs.createWriteStream(tempFilePath))
      res.on('close', () => {
        ux.action.stop()

        ux.action.start('Extracting test data...')
        fs.createReadStream(tempFilePath)
        // eslint-disable-next-line new-cap
        .pipe(unzipper.Parse())
        .on('entry', entry => {
          const fileName = entry.path
          entry.pipe(fs.createWriteStream(path.join('.data', fileName)))
        })
        .on('close', () => {
          fs.unlinkSync(tempFilePath)
          ux.action.stop()
        })
        .on('error', err => {
          console.error('Error occurred during unzip:', err)
        })
      })
    })
  }
}
