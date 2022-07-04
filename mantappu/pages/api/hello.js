// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "fs"
import path from "path"

export default function handler(req, res) {
  const lokasi = path.join(__dirname+"../../../../data");
  const datajson = fs.readFileSync(`${lokasi}/database.json`,{encoding:"utf-8"});
  res.status(200).json({ datajson: JSON.parse(datajson) })
}
