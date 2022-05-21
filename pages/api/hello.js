// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  let response = Math.random()
  res.status(200).json({ msg: response })
}
