//誰によって投稿されたのかのリゾルバ
function Link(parent, args, context) {
  return context.prisma.link
    .findUnique({
      where: { id: parent.id },
    })
    .Link();
}

module.exports = {
  Link,
};
