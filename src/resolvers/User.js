//誰によって投稿されたのかのリゾルバ
function Links(parent, args, context) {
  return context.prisma.link
    .findUnique({
      where: { id: parent.id },
    })
    .Links();
}

module.exports = {
  Links,
};
