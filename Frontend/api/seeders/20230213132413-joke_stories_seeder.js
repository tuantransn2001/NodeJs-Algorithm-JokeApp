"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "JokeStories",
      [
        {
          id: 1,
          story: `A child asked his father, "How were people born?" So his father said,"Adam and Eva make babies, then their babies became adults and made babies,and so on." The child then went to his mother, asked her the same question and she told him , "We were monkeys then we evolved to become like we are now." The child run back to his father and said,"You lied to me!" His father replied, "No,your mom was talking about her side of family`,
          vote: null,
          createdAt: "2022-12-20 04:47:33",
          updatedAt: "2022-12-20 04:47:33",
        },
        {
          id: 2,
          story: `I failed the first quarter of a class in middle school, so I made a fake report card. I did this every quarter that year. I forgot that they mail home the end-of-year cards, and my mom got it before I could intercept with my fake. She was PISSED—at the school for their error. The teacher also retired that year and had already thrown out his records, so they had to take my mother’s “proof” (the fake ones I made throughout the year) and “correct” the “mistake.” I’ve never told her the truth.`,
          vote: null,
          createdAt: "2022-12-20 04:47:33",
          updatedAt: "2022-12-20 04:47:33",
        },
        {
          id: 3,
          story: `My whole class once got detention because I drew a penis with a glue stick on the whiteboard and when the teacher went to wipe off the board all the fluff came off and stuck to the glue. I never got in trouble for it because my whole class found it too funny to tell the teacher it was me.`,
          vote: null,
          createdAt: "2022-12-20 04:47:33",
          updatedAt: "2022-12-20 04:47:33",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
