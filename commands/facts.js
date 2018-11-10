const Discord = require("disocrd.js")
var includes = require('./includes.js');

  module.exports.run = async (bot, message, args, helpers) => {
    const facts = [
    'There are warehouses so big they have their own WEATHER.',
    'In 1903 the Wright brothers flew for 59 seconds. 38 years later the Japanese bombed Pearl Harbor. 28 years after that, we landed on the moon.',
    'There are more fake flamingos in the world than real flamingos.',
    'The adult human has two to nine pounds of bacteria in his or her body.',
    'Blue whales heart is the size of a VW Beetle and that you could swim through some of its arteries.',
    'All of the gold mined in the history of the world would more or less fit into a 20x20x20 meter cube.',
    'There are more atoms in a single glass of water, than glasses of water in all the oceans of the Earth.',
    'Half of all humans who have ever lived, died from malaria.',
    'Alcohol is considered a performance-enhancing drug in competitive shooting competitions.',
    'Once Charlie Chaplin entered a contest for "Charlie Chaplin look-alikes" and he came in third.',
    'If you shuffle a deck of cards, chances are that the new order of playing cards has never existed before.',
    'Of all the people in history that have reached 65 years of age, half of them are living right now.',
    'Pirates wear eye patches so that they can see in the dark.',
    '54 million people alive right now will be dead within 12 months.',
    'You replace every particle in your body every seven years. You are literally not the same person you were 7 years ago.',
    'All the humans on the planet could fit into 1 cubic mile.',
    'Goats have rectangular pupils.',
    'If there was no space between any of its atoms, Earth would be the size of a baseball.',
    'If you put all the earths ants in one pile, and all the earths humans in another pile, the pile made of ants would be bigger (have more mass).',
    'Sloths mistakenly grab their arms instead of the branches of a tree, and they fall to their deaths.',
    'Penguins will give their mate a pebble as a way of proposing.',
    'A pencil has the potential to draw a line 38 miles long.',
    'The largest air force in the world is the US Air Force. The second largest air force in the world is the US Navy.',
    'A Nintendo had over twice the computing power of the first lunar lander.',
    'Lighters were invented before matches.'
    ];
    var itemsss = facts[Math.floor(Math.random()*facts.length)];
    helpers.sendEmbed(message.channel, "Fact", [
      {
        name: "Ready for a cool fact?",
        value: itemsss
      }
    ]);
  }

module.exports.help = {
  name:"facts"
}
