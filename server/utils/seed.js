// TODO: import connection
const db = require('../config/connection');
const fs = require('fs')
// TODO: import models
//const { Card } = require('../models');

// TODO: import tarot-card-data
// TODO: JSON.stringify(cardData)
//TODO: Deck.collection.insertMany(Cards)


//import cards from "./tarot-data.json"
//const cards = require('./tarot-data.json')
const cards = JSON.parse(fs.readFileSync(`${__dirname}/tarot-data.json`, 'utf-8'))



db.once('open', async () => {
    try {
        await resetCollection("card", cards)
        //await resetCollection("deck", dek) ?
        //TODO: User.collection.insertMany(users)
        console.log('database seeded successfully');
        process.exit(0);
    } catch (error) {
        console.error(error)
        process.exit(0);
    }
})

async function resetCollection(collectionName, data){
    try {
        //Dropping collection(card) if they exist
        console.log(`Deleting collection ${collectionName}...`)
        try {
            await db.collection(collectionName).drop();
        } catch (error) {
            //console.log(error)
            // ignore mongoose error message
            if(error.message !== 'ns not found'){
                throw error;
            }
        }

        console.log(`Inserting docs into collection ${collectionName}`)
        await db.collection(collectionName).insertMany(data)

    } catch (error) {
        throw error;
    } 
}

// connection.once('open', async () => {
    // Delete the entries in the collection
  
    // Empty arrays for randomly generated posts and tags
    // const tags = [];
    // const posts = [];
  
    // Function to make a post object and push it into the posts array
    // const makePost = (text) => {
    //   posts.push({
    //     published: Math.random() < 0.5,
    //     text,
    //     tags: [tags[genRandomIndex(tags)]._id],
    //   });
    // };
  
    // Create 20 random tags and push them into the tags array
    // for (let i = 0; i < 20; i++) {
    //   const tagname = getRandomColor();
  
    //   tags.push({
    //     tagname,
    //     color: tagname,
    //   });
    // }
  
    // Wait for the tags to be inserted into the database
    // await Tags.collection.insertMany(tags);
  
    // For each of the tags that exist, make a random post of length 50
    // tags.forEach(() => makePost(getRandomPost(50)));
  
    // Wait for the posts array to be inserted into the database
    // await Post.collection.insertMany(posts);
  
    // Log out a pretty table for tags and posts, excluding the excessively long text property
    // console.table(tags);
    // console.table(posts, ['published', 'tags', '_id']);
//     console.timeEnd('seeding');
//     process.exit(0);
//   });
  

