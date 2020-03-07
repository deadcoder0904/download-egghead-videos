const shell = require('shelljs')
const fs = require('fs')

// Uncomment to download
const egghead = []

const folderName = 'Immutable JavaScript Data Structures with Immer'

fs.mkdir(folderName, () => {
  for (let i = 0; i < egghead.length; i++) {
    const video = egghead[i]
    console.log(
      `Downloading ${i + 1} of ${egghead.length} - "${video.title}.mp4"`
    )
    shell.exec(
      `ffmpeg -i ${video.url} -c copy -bsf:a aac_adtstoasc "${folderName}/${i +
        1 +
        18}. ${video.title}.mp4"`,
      {
        silent: true
      }
    )
  }
})
