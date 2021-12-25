// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function helloAPI(req, res) {
  res.setHeader('Cache-Control','must-revalidate');
  res.status(200).json({ items:[{
    name : 'book2',
    id:456,
  },{
    name:'book1',
    id:567,
  }
] 
})
}
