// データベースにアクセスするためのクライアントライブラリ
import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const createLink = await prisma.link.create({
    data: {
      descriotion: "テスト投稿",
      url: "test.com",
    },
  });

  const allLinks = await prisma.link.findMany();
  console.log(allLinks);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    // データベースの接続を閉じる
    prisma.$disconnect;
  });
