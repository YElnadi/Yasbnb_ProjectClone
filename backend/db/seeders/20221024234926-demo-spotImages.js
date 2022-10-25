'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     return queryInterface.bulkInsert('SpotImages', [
       {
         url:"image url",
         preview:true
       },
       {
        url:"image url",
        preview:true
       },
       {
        url:"image url",
        preview:true
       },
       {
        url:"image url",
        preview:true
       },
       {
        url:"image url",
        preview:true
       }
     ])

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('SpotImages',{
       url:['image url'],
       preview:[true]
     },{})
  }
};
