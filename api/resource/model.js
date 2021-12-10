// build your `Resource` model here
const db =require('../../data/dbConfig')

async function getAllResources(){
    const rows = await db('resources')
    
    return rows

}

async function postResource(resource) {
    const [row] = await db('resources').insert(resource);
    const [newRow] = await db('resources')
    
    return newRow
  }

module.exports={ 
    getAllResources,
    postResource
 }