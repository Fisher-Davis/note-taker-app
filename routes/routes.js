const router = require('express').Router()
const store = require('../db/store')




router.post('/notes', (req, res) => {
    store
    .getNotes()
    .then((notes)=>{
        return res.json(notes);
    })
    .catch((err)=>{
        res.status(500).json(err)
    })
})

router.post('/notes', (req, res)=>{
    store
    .addNote(req.body)
    .then((note)=>{
        res.json(note)
    })
    .catch((err) => {res.status(500).json(err)})
    });

router.delete('/notes/:id', (res, req)=>{
    store
    .removeNote(req.params.id)
    .then(() =>{res.json({
        ok: true,
        })
    .catch((err) =>{res.status(500).json(err)})    
    })
})

module.exports = router;