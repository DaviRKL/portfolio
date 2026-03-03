#!/usr/bin/env node
// Simple script to download badge images from Credly embed pages.
// Usage: node scripts/fetchCredlyBadges.js

const https = require('https')
const fs = require('fs')
const path = require('path')

const BADGE_IDS = [
  'cddb1fe4-b19c-431f-bfeb-6f174d477d37',
  'c7051ddb-432b-4600-953b-eccd74fdcde3',
  'f0a14d48-243e-49ae-b607-d1835af289e0',
  '156ff5a0-74ef-4b67-890f-e05d980f34dd',
  '2530c36d-8ebb-4016-9159-9d8120d900a0',
  '78b22a43-12d0-4abf-b0cd-2492677e2762',
  '6578a5bb-b5fb-4b64-b898-55811cbfc45d',
]

const outDir = path.join(process.cwd(), 'public', 'images', 'badges')
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })

function fetch(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let data = ''
        res.on('data', (chunk) => (data += chunk))
        res.on('end', () => resolve({ status: res.statusCode, body: data }))
      })
      .on('error', reject)
  })
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest)
    https
      .get(url, (res) => {
        if (res.statusCode >= 400) return reject(new Error('Image request failed: ' + res.statusCode))
        res.pipe(file)
        file.on('finish', () => file.close(resolve))
      })
      .on('error', (err) => {
        fs.unlink(dest, () => reject(err))
      })
  })
}

(async () => {
  for (const id of BADGE_IDS) {
    try {
      console.log('Fetching embed page for', id)
      const url = `https://www.credly.com/embedded_badge/${id}`
      const res = await fetch(url)
      if (res.status !== 200) {
        console.error('Failed to fetch embed page for', id, 'status', res.status)
        continue
      }

      // Try to extract an image URL from the embed HTML
      const body = res.body
      const imgMatch = body.match(/https:\/\/images\.credly\.com\/[^\"']+/i)
      if (!imgMatch) {
        console.error('No image URL found for', id)
        continue
      }

      const imgUrl = imgMatch[0]
      const outPath = path.join(outDir, `${id}.png`)
      console.log('Downloading image:', imgUrl)
      await download(imgUrl, outPath)
      console.log('Saved', outPath)
    } catch (err) {
      console.error('Error processing', id, err && err.message ? err.message : err)
    }
  }
  console.log('Done')
})()
