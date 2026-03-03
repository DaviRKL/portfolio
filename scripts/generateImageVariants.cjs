const fs = require('fs').promises
const path = require('path')
const sharp = require('sharp')

async function ensureDir(dir) {
  try {
    await fs.mkdir(dir, { recursive: true })
  } catch (e) {}
}

async function main() {
  const cwd = process.cwd()
  const inputDir = path.join(cwd, 'public', 'originals')
  const outDir = path.join(cwd, 'public', 'images')
  const manifestDir = path.join(cwd, 'public', 'data')
  const manifestPath = path.join(manifestDir, 'image-manifest.json')

  await ensureDir(outDir)
  await ensureDir(manifestDir)

  const files = await fs.readdir(inputDir).catch(() => [])
  const images = files.filter((f) => /\.(jpe?g|png|webp|avif)$/i.test(f))

  const sizes = [400, 800, 1200]
  const manifest = {}

  for (const file of images) {
    const name = path.parse(file).name
    const inputPath = path.join(inputDir, file)

    const srcsetEntries = []

    for (const w of sizes) {
      const outName = `${name}-${w}.webp`
      const outPath = path.join(outDir, outName)
      await sharp(inputPath).resize(w).webp({ quality: 80 }).toFile(outPath)
      srcsetEntries.push(`/images/${outName} ${w}w`)
    }

    const small = await sharp(inputPath).resize(20).webp({ quality: 40 }).toBuffer()
    const blurDataURL = `data:image/webp;base64,${small.toString('base64')}`

    manifest[file] = {
      src: `/images/${name}-${Math.max(...sizes)}.webp`,
      srcset: srcsetEntries.join(', '),
      sizes: '(max-width: 640px) 100vw, 50vw',
      blurDataURL,
    }
    console.log(`Generated variants for ${file}`)
  }

  await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2), 'utf-8')
  console.log(`Wrote image manifest to ${manifestPath}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
