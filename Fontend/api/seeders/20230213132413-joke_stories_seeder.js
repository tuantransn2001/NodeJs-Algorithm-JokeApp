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
          title: "Mất trộm bò",
          subTitle:
            "Một người vừa mới tậu được con bò. Tối đi ngủ, anh ta chốt chuồng bò cẩn thận rồi lại đặt cái chỏng ngay lối ra vào mà nằm ngủ. Ấy thế mà ban đêm, kẻ trộm vẫn dắt mất bò của anh ta.",
          story: `Xót ruột, anh ta trình quan.Bẩm quan, chắc là chúng nó dắt bò chui qua chõng con nằm mà đi ra.Quan nghe nói vô lý quá bật cười : Con bò chứ có phải con chó, con mèo đâu mà chui qua gầm chõng! Dạ, bẩm quan, thế thì chúng nó dắt bò của con chui qua lối nào ạ? Sáng dậy cái chõng con nằm vẫn để y nguyên ở chỗ cũ chắn lối ra vào kia mà ! Đồ ngốc! Mày ngủ say, chúng nó khiêng chõng mày nằm ra một bên, dắt bò ra rồi lại khiêng về chỗ cũ...Người kia vỡ lẽ nói: À, thế ra quan thông đồng với bọn trộm, nên mới tỏ tường được như thế chứ !`,
          vote: null,
          createdAt: "2022-12-20 04:47:33",
          updatedAt: "2022-12-20 04:47:33",
        },
        {
          id: 2,
          title: "Nghệ thuật để được tặng quà",
          subTitle:
            "Một người vừa mới tậu được con bò. Tối đi ngủ, anh ta chốt chuồng bò cẩn thận rồi lại đặt cái chỏng ngay lối ra vào mà nằm ngủ. Ấy thế mà ban đêm, kẻ trộm vẫn dắt mất bò của anh ta.",
          story:
            "Hai cô nàng tóc vàng hoe buôn chuyện thích được tặng quà..Lần trước mình nói với bạn trai rằng con gái rất thích giữ gìn các món đồ được tặng. Kết quả là hôm sau mình được tặng một chiếc nhẫn kim cương. Cậu thử học cách này xem sao?  Cách này tớ dùng rồi. Kết quả là hôm sau tớ được tặng chất bảo quản.",
          vote: null,
          createdAt: "2022-12-20 04:47:33",
          updatedAt: "2022-12-20 04:47:33",
        },
        {
          id: 3,
          title: "Hạt dẻ có chân",
          subTitle:
            "Một người vừa mới tậu được con bò. Tối đi ngủ, anh ta chốt chuồng bò cẩn thận rồi lại đặt cái chỏng ngay lối ra vào mà nằm ngủ. Ấy thế mà ban đêm, kẻ trộm vẫn dắt mất bò của anh ta.",
          story:
            "- Con: Mẹ ơi, hạt dẻ có chân không ạ? Mẹ: ??? Con: Thế mà con vừa ăn một hạt dẻ có chân đó mẹ. Mẹ: Trời,mày chưa thấy con gián bao giờ hả????",
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
